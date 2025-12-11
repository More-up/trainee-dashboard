// グローバル変数
let allData = [];
let filteredData = [];
let currentUser = null;

// API エンドポイント
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義
const categories = {
    work: '業務・職場環境',
    salary: '給与・待遇',
    living: '生活環境',
    relationship: '人間関係',
    communication: 'コミュニケーション',
    support: '会社のサポート',
    career: 'キャリア・将来',
    overall: '全体評価'
};

// カテゴリーと質問のマッピング
const categoryQuestionMap = {
    work: [1, 2, 3, 4],
    salary: [5, 6, 7, 8, 9],
    living: [10, 11, 12, 13, 14],
    relationship: [15, 16, 17, 18, 19],
    communication: [20, 21, 22, 23, 24],
    support: [25, 26, 27, 28, 29],
    career: [30, 31, 32, 33],
    overall: [34, 35]
};

// 国籍の表示名マッピング (17カ国)
const nationalityDisplayNames = {
    'jp': '日本',
    'cn': '中国',
    'vn': 'ベトナム',
    'kh': 'カンボジア',
    'hi': 'インド',
    'ph': 'フィリピン',
    'la': 'ラオス',
    'mn': 'モンゴル',
    'bn': 'バングラデシュ',
    'si': 'スリランカ',
    'mm': 'ミャンマー',
    'dz': 'ブータン',
    'uz': 'ウズベキスタン',
    'pk': 'パキスタン',
    'th': 'タイ',
    'id': 'インドネシア',
    'np': 'ネパール'
};

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM読み込み完了');
    checkLoginStatus();
    setupEventListeners();
});

// ログイン状態確認
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    
    console.log('ログイン状態確認:', isLoggedIn);
    
    if (isLoggedIn === 'true') {
        currentUser = sessionStorage.getItem('adminUsername') || 'Admin';
        console.log('ログイン済み - ユーザー:', currentUser);
        
        // ユーザー名表示
        const adminUsernameEl = document.getElementById('adminUsername');
        if (adminUsernameEl) {
            adminUsernameEl.textContent = currentUser;
        }
        
        // データ読み込み
        loadData();
    } else {
        console.log('未ログイン - ログインページへリダイレクト');
        window.location.href = 'admin-login.html';
    }
}

// ログアウト
function logout() {
    console.log('ログアウト処理');
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminUsername');
    window.location.href = 'admin-login.html';
}

// イベントリスナー設定
function setupEventListeners() {
    console.log('イベントリスナー設定開始');
    
    // フィルター要素の取得と確認
    const filterCompany = document.getElementById('filterCompany');
    const filterMonth = document.getElementById('filterMonth');
    const filterEmployee = document.getElementById('filterEmployee');
    const filterNationality = document.getElementById('filterNationality');
    
    console.log('フィルター要素:', {
        company: !!filterCompany,
        month: !!filterMonth,
        employee: !!filterEmployee,
        nationality: !!filterNationality
    });
    
    if (filterCompany) filterCompany.addEventListener('change', applyFilters);
    if (filterMonth) filterMonth.addEventListener('change', applyFilters);
    if (filterEmployee) filterEmployee.addEventListener('input', applyFilters);
    if (filterNationality) filterNationality.addEventListener('change', applyFilters);
}

// データ読み込み
async function loadData() {
    console.log('データ読み込み開始');
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/results`);
        console.log('APIレスポンスステータス:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('取得したデータ:', data);
        console.log('データ件数:', data.results?.length);
        
        // データ処理
        allData = data.results.map(item => {
            // category_scoresの安全な解析
            let categoryScores = {};
            if (item.category_scores && item.category_scores !== 'null' && item.category_scores !== null) {
                try {
                    categoryScores = typeof item.category_scores === 'string' 
                        ? JSON.parse(item.category_scores) 
                        : item.category_scores;
                } catch (e) {
                    console.warn('category_scores解析エラー:', e, item.category_scores);
                }
            }

            // answersの安全な解析
            let answers = {};
            if (item.answers && item.answers !== 'null' && item.answers !== null) {
                try {
                    answers = typeof item.answers === 'string' 
                        ? JSON.parse(item.answers) 
                        : item.answers;
                } catch (e) {
                    console.warn('answers解析エラー:', e);
                }
            }

            return {
                ...item,
                categoryScores: categoryScores,
                answers: answers,
                totalScore: parseFloat(item.total_score) || 0
            };
        });

        console.log('処理後のデータ件数:', allData.length);
        console.log('最初のデータサンプル:', allData[0]);

        filteredData = [...allData];
        updateFilters();
        updateDisplay();
        
    } catch (error) {
        console.error('データ読み込みエラー:', error);
        alert('データの読み込みに失敗しました: ' + error.message);
    }
}

// フィルター更新
function updateFilters() {
    console.log('フィルター更新開始');
    
    // 企業フィルター
    const companies = [...new Set(allData.map(d => d.company_code).filter(Boolean))];
    console.log('企業一覧:', companies);
    
    const companyFilter = document.getElementById('filterCompany');
    if (companyFilter) {
        companyFilter.innerHTML = '<option value="">すべて</option>' +
            companies.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    // 年月フィルター
    const months = [...new Set(allData.map(d => d.year_month).filter(Boolean))].sort().reverse();
    console.log('年月一覧:', months);
    
    const monthFilter = document.getElementById('filterMonth');
    if (monthFilter) {
        monthFilter.innerHTML = '<option value="">すべて</option>' +
            months.map(m => `<option value="${m}">${m}</option>`).join('');
    }

    // 従業員フィルター（自動生成）
    const employees = [...new Set(allData.map(d => d.employee_code).filter(Boolean))].sort();
    const employeeFilter = document.getElementById('filterEmployee');
    if (employeeFilter) {
        // inputタイプなのでdatalist使用
        let datalist = document.getElementById('employeeList');
        if (!datalist) {
            datalist = document.createElement('datalist');
            datalist.id = 'employeeList';
            employeeFilter.after(datalist);
            employeeFilter.setAttribute('list', 'employeeList');
        }
        datalist.innerHTML = employees.map(e => `<option value="${e}">`).join('');
    }
}

// フィルター適用
function applyFilters() {
    console.log('フィルター適用開始');
    
    const company = document.getElementById('filterCompany')?.value;
    const month = document.getElementById('filterMonth')?.value;
    const employee = document.getElementById('filterEmployee')?.value.toLowerCase();
    const nationality = document.getElementById('filterNationality')?.value;

    console.log('フィルター条件:', { company, month, employee, nationality });

    filteredData = allData.filter(item => {
        if (company && item.company_code !== company) return false;
        if (month && item.year_month !== month) return false;
        if (employee && !item.employee_code.toLowerCase().includes(employee)) return false;
        if (nationality && item.nationality !== nationality) return false;
        return true;
    });

    console.log('フィルター後のデータ件数:', filteredData.length);
    updateDisplay();
}

// 表示更新
function updateDisplay() {
    console.log('表示更新開始');
    updateStatistics();
    updateDataTable();
    updateRadarChart();
    updateTrendChart();
    updateAIAnalysis();
    updateRiskAlerts();
}

// 統計情報更新
function updateStatistics() {
    const totalCount = filteredData.length;
    const avgScore = totalCount > 0 
        ? (filteredData.reduce((sum, d) => sum + d.totalScore, 0) / totalCount).toFixed(1)
        : 0;
    const maxScore = totalCount > 0 
        ? Math.max(...filteredData.map(d => d.totalScore)).toFixed(1)
        : 0;
    const minScore = totalCount > 0 
        ? Math.min(...filteredData.map(d => d.totalScore)).toFixed(1)
        : 0;

    console.log('統計情報:', { totalCount, avgScore, maxScore, minScore });

    const totalResponsesEl = document.getElementById('totalResponses');
    const averageScoreEl = document.getElementById('averageScore');
    const maxScoreEl = document.getElementById('maxScore');
    const minScoreEl = document.getElementById('minScore');

    if (totalResponsesEl) totalResponsesEl.textContent = totalCount;
    if (averageScoreEl) averageScoreEl.textContent = avgScore;
    if (maxScoreEl) maxScoreEl.textContent = maxScore;
    if (minScoreEl) minScoreEl.textContent = minScore;
}

// データテーブル更新
function updateDataTable() {
    const tbody = document.getElementById('dataTableBody');
    if (!tbody) {
        console.warn('dataTableBody要素が見つかりません');
        return;
    }

    console.log('テーブル更新 - データ件数:', filteredData.length);

    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px;">データがありません</td></tr>';
        return;
    }

    tbody.innerHTML = filteredData.map(item => {
        const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';

        return `
            <tr>
                <td>${formatDate(item.survey_date)}</td>
                <td>${item.company_code || '-'}</td>
                <td>${item.employee_code || '-'}</td>
                <td>${nationalityDisplay}</td>
                <td><strong>${item.totalScore.toFixed(1)}</strong></td>
                <td>${item.year_month || '-'}</td>
            </tr>
        `;
    }).join('');
}

// リスクレベル計算
function calculateRiskLevel(item) {
    const totalScore = item.totalScore;
    const categoryScores = item.categoryScores || {};

    // カテゴリースコアが存在しない場合は総合点のみで判定
    if (Object.keys(categoryScores).length === 0) {
        if (totalScore <= 40) return 'high';
        if (totalScore <= 50) return 'medium';
        return 'low';
    }

    // 高リスク判定: 総合40点以下 OR 給与30点以下 OR 人間関係30点以下
    if (totalScore <= 40) return 'high';
    if (categoryScores.salary && categoryScores.salary <= 30) return 'high';
    if (categoryScores.relationship && categoryScores.relationship <= 30) return 'high';

    // 中リスク判定: 総合50点以下
    if (totalScore <= 50) return 'medium';

    // 安定: 60点以上
    return 'low';
}

// レーダーチャート更新
function updateRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) {
        console.warn('radarChart要素が見つかりません');
        return;
    }

    console.log('レーダーチャート更新');

    // カテゴリー別平均スコア計算
    const categoryAverages = {};
    const categoryCounts = {};

    Object.keys(categories).forEach(key => {
        categoryAverages[key] = 0;
        categoryCounts[key] = 0;
    });

    filteredData.forEach(item => {
        const categoryScores = item.categoryScores || {};
        Object.keys(categories).forEach(key => {
            if (categoryScores[key] !== undefined && categoryScores[key] !== null) {
                categoryAverages[key] += parseFloat(categoryScores[key]) || 0;
                categoryCounts[key]++;
            }
        });
    });

    // 平均計算
    Object.keys(categories).forEach(key => {
        if (categoryCounts[key] > 0) {
            categoryAverages[key] = categoryAverages[key] / categoryCounts[key];
        }
    });

    console.log('カテゴリー別平均:', categoryAverages);

    const labels = Object.values(categories);
    const data = Object.keys(categories).map(key => categoryAverages[key]);

    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }

    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '平均スコア',
                data: data,
                backgroundColor: 'rgba(26, 115, 232, 0.2)',
                borderColor: 'rgba(26, 115, 232, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(26, 115, 232, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// トレンドチャート更新
function updateTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) {
        console.warn('trendChart要素が見つかりません');
        return;
    }

    console.log('トレンドチャート更新');

    // 年月別平均スコア計算
    const monthlyData = {};
    
    filteredData.forEach(item => {
        const month = item.year_month;
        if (!month) return;
        
        if (!monthlyData[month]) {
            monthlyData[month] = { total: 0, count: 0 };
        }
        monthlyData[month].total += item.totalScore;
        monthlyData[month].count++;
    });

    // ソートして平均計算
    const sortedMonths = Object.keys(monthlyData).sort();
    const labels = sortedMonths;
    const data = sortedMonths.map(month => 
        (monthlyData[month].total / monthlyData[month].count).toFixed(1)
    );

    console.log('月別データ:', { labels, data });

    if (window.trendChartInstance) {
        window.trendChartInstance.destroy();
    }

    window.trendChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '平均スコア推移',
                data: data,
                borderColor: 'rgba(26, 115, 232, 1)',
                backgroundColor: 'rgba(26, 115, 232, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

// AI分析更新
function updateAIAnalysis() {
    const aiInsights = document.getElementById('aiInsights');
    if (!aiInsights) {
        console.warn('aiInsights要素が見つかりません');
        return;
    }

    console.log('AI分析更新');
    
    if (filteredData.length === 0) {
        aiInsights.innerHTML = '<div class="ai-insight-card"><p>データがありません</p></div>';
        return;
    }

    const avgScore = filteredData.reduce((sum, d) => sum + d.totalScore, 0) / filteredData.length;
    
    // 国籍別分析
    const nationalityGroups = {};
    filteredData.forEach(item => {
        const nat = item.nationality || 'unknown';
        if (!nationalityGroups[nat]) {
            nationalityGroups[nat] = [];
        }
        nationalityGroups[nat].push(item);
    });

    let html = `
        <div class="ai-insight-card">
            <h3>📊 総合分析</h3>
            <p>平均スコア: <strong>${avgScore.toFixed(1)}点</strong></p>
            <p>総回答数: <strong>${filteredData.length}件</strong></p>
        </div>
    `;

    Object.keys(nationalityGroups).forEach(nat => {
        const group = nationalityGroups[nat];
        const groupAvg = group.reduce((sum, d) => sum + d.totalScore, 0) / group.length;
        const displayName = nationalityDisplayNames[nat] || nat;
        
        html += `
            <div class="ai-insight-card">
                <h3>${displayName}（${group.length}名）</h3>
                <p>平均スコア: <strong>${groupAvg.toFixed(1)}点</strong></p>
        `;

        // カテゴリー別分析
        const categoryAverages = {};
        group.forEach(item => {
            const categoryScores = item.categoryScores || {};
            Object.keys(categories).forEach(key => {
                if (categoryScores[key] !== undefined && categoryScores[key] !== null) {
                    if (!categoryAverages[key]) {
                        categoryAverages[key] = { total: 0, count: 0 };
                    }
                    categoryAverages[key].total += parseFloat(categoryScores[key]);
                    categoryAverages[key].count++;
                }
            });
        });

        if (Object.keys(categoryAverages).length > 0) {
            const lowCategories = Object.keys(categoryAverages)
                .filter(key => categoryAverages[key].count > 0)
                .map(key => ({
                    key,
                    avg: categoryAverages[key].total / categoryAverages[key].count
                }))
                .filter(c => c.avg < 50)
                .sort((a, b) => a.avg - b.avg);

            if (lowCategories.length > 0) {
                html += `<p style="opacity: 0.9;">⚠️ 注意が必要なカテゴリー:</p><ul style="opacity: 0.9;">`;
                lowCategories.forEach(cat => {
                    html += `<li>${categories[cat.key]}: ${cat.avg.toFixed(1)}点</li>`;
                });
                html += `</ul>`;
            }
        }

        html += `</div>`;
    });

    aiInsights.innerHTML = html;
}

// リスクアラート更新
function updateRiskAlerts() {
    const container = document.getElementById('riskAlertContainer');
    if (!container) {
        console.warn('riskAlertContainer要素が見つかりません');
        return;
    }

    console.log('リスクアラート更新');

    const highRisk = filteredData.filter(d => calculateRiskLevel(d) === 'high');
    const mediumRisk = filteredData.filter(d => calculateRiskLevel(d) === 'medium');
    const lowRisk = filteredData.filter(d => calculateRiskLevel(d) === 'low');

    console.log('リスク分布:', {
        high: highRisk.length,
        medium: mediumRisk.length,
        low: lowRisk.length
    });

    if (highRisk.length === 0 && mediumRisk.length === 0) {
        container.innerHTML = `
            <div class="no-risk">
                <span class="material-icons">check_circle</span>
                <p>リスクアラートはありません</p>
            </div>
        `;
        return;
    }

    let html = '';

    if (highRisk.length > 0) {
        html += '<h3 style="color: #d93025; margin-bottom: 16px;">🔴 高リスク対象者</h3>';
        highRisk.forEach(item => {
            html += createRiskCard(item, 'high');
        });
    }

    if (mediumRisk.length > 0) {
        html += '<h3 style="color: #f9ab00; margin-bottom: 16px; margin-top: 24px;">🟡 中リスク対象者</h3>';
        mediumRisk.forEach(item => {
            html += createRiskCard(item, 'medium');
        });
    }

    container.innerHTML = html;
}

// リスクカード作成
function createRiskCard(item, level) {
    const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';
    const categoryScores = item.categoryScores || {};
    
    let reasons = [];
    if (item.totalScore <= 40) reasons.push(`総合スコア${item.totalScore.toFixed(1)}点`);
    if (categoryScores.salary && categoryScores.salary <= 30) reasons.push(`給与満足度${categoryScores.salary.toFixed(1)}点`);
    if (categoryScores.relationship && categoryScores.relationship <= 30) reasons.push(`人間関係${categoryScores.relationship.toFixed(1)}点`);
    if (reasons.length === 0 && item.totalScore <= 50) reasons.push(`総合スコア${item.totalScore.toFixed(1)}点`);
    if (reasons.length === 0) reasons.push('総合的な判定');

    const action = getRecommendedAction(item, level);

    return `
        <div class="risk-employee">
            <div class="risk-employee-header">
                <span class="risk-employee-info">${item.employee_code} (${nationalityDisplay})</span>
                <span><strong>${item.totalScore.toFixed(1)}点</strong></span>
            </div>
            <div class="risk-employee-details">
                ${item.company_code || '-'} | ${item.year_month || '-'}
            </div>
            <div class="risk-employee-details">
                <strong>リスク要因:</strong> ${reasons.join('、')}
            </div>
            <div class="risk-employee-action">
                <strong>推奨アクション:</strong>
                ${action}
            </div>
        </div>
    `;
}

// 推奨アクション取得
function getRecommendedAction(item, level) {
    const categoryScores = item.categoryScores || {};
    
    if (level === 'high') {
        if (categoryScores.salary && categoryScores.salary <= 30) {
            return '給与・待遇に関する面談を早急に実施してください';
        }
        if (categoryScores.relationship && categoryScores.relationship <= 30) {
            return '職場の人間関係について個別ヒアリングを実施してください';
        }
        return '早急な個別面談と状況改善が必要です';
    }
    
    if (level === 'medium') {
        return '定期的なフォローアップと状況確認を行ってください';
    }
    
    return '現状維持で問題ありません';
}

// CSVエクスポート
function exportCSV() {
    console.log('CSV出力開始');
    
    if (filteredData.length === 0) {
        alert('エクスポートするデータがありません');
        return;
    }

    const headers = [
        '日時',
        '会社コード',
        '従業員コード',
        '国籍',
        '総合スコア',
        '月',
        'リスクレベル'
    ];

    const rows = filteredData.map(item => {
        const riskLevel = calculateRiskLevel(item);
        const riskLabels = {
            high: '高リスク',
            medium: '中リスク',
            low: '安定'
        };
        const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';

        return [
            formatDate(item.survey_date),
            item.company_code || '',
            item.employee_code || '',
            nationalityDisplay,
            item.totalScore.toFixed(1),
            item.year_month || '',
            riskLabels[riskLevel]
        ];
    });

    let csv = headers.join(',') + '\n';
    csv += rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `trainee_survey_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    console.log('CSV出力完了');
}

// 日付フォーマット
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}
