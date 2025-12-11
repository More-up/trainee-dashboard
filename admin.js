// グローバル変数
let allData = [];
let filteredData = [];
let currentUser = null;

// API エンドポイント
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義
const categories = {
    work: '仕事内容',
    salary: '給与',
    family: '家族',
    relationship: '人間関係',
    communication: 'コミュニケーション',
    culture: '文化適応',
    living: '生活環境',
    career: 'キャリア'
};

// カテゴリーと質問のマッピング
const categoryQuestionMap = {
    work: [1, 2, 3, 4, 5],
    salary: [6, 7, 8, 9],
    family: [10, 11, 12, 13],
    relationship: [14, 15, 16, 17, 18],
    communication: [19, 20, 21, 22],
    culture: [23, 24, 25, 26, 27],
    living: [28, 29, 30, 31],
    career: [32, 33, 34, 35]
};

// 国籍の表示名マッピング
const nationalityDisplayNames = {
    'myanmar': 'ミャンマー',
    'vietnam': 'ベトナム',
    'philippines': 'フィリピン',
    'indonesia': 'インドネシア',
    'thailand': 'タイ',
    'china': '中国',
    'other': 'その他'
};

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    setupEventListeners();
});

// ログイン状態確認
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');

    if (!loginSection || !dashboardSection) {
        console.error('loginSection または dashboardSection が見つかりません');
        return;
    }

    if (isLoggedIn === 'true') {
        currentUser = localStorage.getItem('adminUsername') || 'Admin';
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        updateUserDisplay();
        loadData();
    } else {
        loginSection.style.display = 'block';
        dashboardSection.style.display = 'none';
    }
}

// ユーザー名表示更新
function updateUserDisplay() {
    const userNameElement = document.getElementById('userName');
    if (userNameElement && currentUser) {
        userNameElement.textContent = currentUser;
    }
}

// ログアウト
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    location.reload();
}

// イベントリスナー設定
function setupEventListeners() {
    // ログインフォーム
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // ログアウトボタン
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    // フィルター
    const companyFilter = document.getElementById('companyFilter');
    const monthFilter = document.getElementById('monthFilter');
    const employeeFilter = document.getElementById('employeeFilter');
    const nationalityFilter = document.getElementById('nationalityFilter');

    if (companyFilter) companyFilter.addEventListener('change', applyFilters);
    if (monthFilter) monthFilter.addEventListener('change', applyFilters);
    if (employeeFilter) employeeFilter.addEventListener('input', applyFilters);
    if (nationalityFilter) nationalityFilter.addEventListener('change', applyFilters);

    // CSVエクスポート
    const exportBtn = document.getElementById('exportCsvBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportToCSV);
    }
}

// ログイン処理
async function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');

    if (password === 'moreup-trainee') {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', 'Admin');
        checkLoginStatus();
    } else {
        if (errorDiv) {
            errorDiv.textContent = 'パスワードが正しくありません';
            errorDiv.style.display = 'block';
        }
    }
}

// データ読み込み
async function loadData() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/results`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log('取得したデータ:', data);
        
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
                    console.warn('category_scores解析エラー:', e);
                    categoryScores = {};
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
                    answers = {};
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
    // 企業フィルター
    const companies = [...new Set(allData.map(d => d.company_code).filter(Boolean))];
    const companyFilter = document.getElementById('companyFilter');
    if (companyFilter) {
        companyFilter.innerHTML = '<option value="">全企業</option>' +
            companies.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    // 年月フィルター
    const months = [...new Set(allData.map(d => d.year_month).filter(Boolean))].sort().reverse();
    const monthFilter = document.getElementById('monthFilter');
    if (monthFilter) {
        monthFilter.innerHTML = '<option value="">全期間</option>' +
            months.map(m => `<option value="${m}">${m}</option>`).join('');
    }

    // 国籍フィルター
    const nationalities = [...new Set(allData.map(d => d.nationality).filter(Boolean))];
    const nationalityFilter = document.getElementById('nationalityFilter');
    if (nationalityFilter) {
        nationalityFilter.innerHTML = '<option value="">全国籍</option>' +
            nationalities.map(n => {
                const displayName = nationalityDisplayNames[n] || n;
                return `<option value="${n}">${displayName}</option>`;
            }).join('');
    }
}

// フィルター適用
function applyFilters() {
    const company = document.getElementById('companyFilter')?.value;
    const month = document.getElementById('monthFilter')?.value;
    const employee = document.getElementById('employeeFilter')?.value.toLowerCase();
    const nationality = document.getElementById('nationalityFilter')?.value;

    filteredData = allData.filter(item => {
        if (company && item.company_code !== company) return false;
        if (month && item.year_month !== month) return false;
        if (employee && !item.employee_code.toLowerCase().includes(employee)) return false;
        if (nationality && item.nationality !== nationality) return false;
        return true;
    });

    updateDisplay();
}

// 表示更新
function updateDisplay() {
    updateStatistics();
    updateDataTable();
    updateRadarChart();
    updateTrendChart();
    updateAIAnalysis();
    updateRiskAlerts();
    updateScoreDropAlerts();
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

    const totalCountEl = document.getElementById('totalCount');
    const avgScoreEl = document.getElementById('avgScore');
    const maxScoreEl = document.getElementById('maxScore');
    const minScoreEl = document.getElementById('minScore');

    if (totalCountEl) totalCountEl.textContent = totalCount;
    if (avgScoreEl) avgScoreEl.textContent = avgScore;
    if (maxScoreEl) maxScoreEl.textContent = maxScore;
    if (minScoreEl) minScoreEl.textContent = minScore;
}

// データテーブル更新
function updateDataTable() {
    const tbody = document.getElementById('dataTableBody');
    if (!tbody) return;

    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center">データがありません</td></tr>';
        return;
    }

    tbody.innerHTML = filteredData.map(item => {
        const riskLevel = calculateRiskLevel(item);
        const riskBadge = {
            high: '<span class="badge badge-danger">🔴 高リスク</span>',
            medium: '<span class="badge badge-warning">🟡 中リスク</span>',
            low: '<span class="badge badge-success">🟢 安定</span>'
        }[riskLevel];

        const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';

        return `
            <tr>
                <td>${item.employee_code || '-'}</td>
                <td>${item.department || '-'}</td>
                <td>${nationalityDisplay}</td>
                <td>${item.company_code || '-'}</td>
                <td>${item.year_month || '-'}</td>
                <td><strong>${item.totalScore.toFixed(1)}</strong></td>
                <td>${riskBadge}</td>
                <td>${formatDate(item.survey_date)}</td>
            </tr>
        `;
    }).join('');
}

// リスクレベル計算（修正版）
function calculateRiskLevel(item) {
    const totalScore = item.totalScore;
    const categoryScores = item.categoryScores || {};

    // カテゴリースコアが存在しない場合は総合点のみで判定
    if (Object.keys(categoryScores).length === 0) {
        if (totalScore <= 40) return 'high';
        if (totalScore <= 50) return 'medium';
        return 'low';
    }

    // 高リスク判定
    if (totalScore <= 40) return 'high';
    if (categoryScores.salary && categoryScores.salary <= 30) return 'high';
    if (categoryScores.relationship && categoryScores.relationship <= 30) return 'high';

    // 中リスク判定
    if (totalScore <= 50) return 'medium';

    // 安定
    return 'low';
}

// レーダーチャート更新（修正版）
function updateRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

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
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
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
    if (!ctx) return;

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
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
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
    const analysisDiv = document.getElementById('aiAnalysisContent');
    if (!analysisDiv) return;
    
    if (filteredData.length === 0) {
        analysisDiv.innerHTML = '<p>データがありません</p>';
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

    let analysis = `<h5>📊 総合分析</h5>`;
    analysis += `<p>平均スコア: <strong>${avgScore.toFixed(1)}点</strong></p>`;

    Object.keys(nationalityGroups).forEach(nat => {
        const group = nationalityGroups[nat];
        const groupAvg = group.reduce((sum, d) => sum + d.totalScore, 0) / group.length;
        const displayName = nationalityDisplayNames[nat] || nat;
        
        analysis += `<h6>${displayName}（${group.length}名）</h6>`;
        analysis += `<p>平均スコア: ${groupAvg.toFixed(1)}点</p>`;

        // カテゴリー別分析（データがある場合のみ）
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
                analysis += `<p class="text-warning">⚠️ 注意が必要なカテゴリー:</p><ul>`;
                lowCategories.forEach(cat => {
                    analysis += `<li>${categories[cat.key]}: ${cat.avg.toFixed(1)}点</li>`;
                });
                analysis += `</ul>`;
            }
        }
    });

    analysisDiv.innerHTML = analysis;
}

// リスクアラート更新
function updateRiskAlerts() {
    const alertsDiv = document.getElementById('riskAlertsContent');
    if (!alertsDiv) return;

    const highRisk = filteredData.filter(d => calculateRiskLevel(d) === 'high');
    const mediumRisk = filteredData.filter(d => calculateRiskLevel(d) === 'medium');
    const lowRisk = filteredData.filter(d => calculateRiskLevel(d) === 'low');

    let html = `
        <div class="risk-summary">
            <div class="risk-item risk-high">
                <strong>🔴 高リスク:</strong> ${highRisk.length}名
            </div>
            <div class="risk-item risk-medium">
                <strong>🟡 中リスク:</strong> ${mediumRisk.length}名
            </div>
            <div class="risk-item risk-low">
                <strong>🟢 安定:</strong> ${lowRisk.length}名
            </div>
        </div>
    `;

    if (highRisk.length > 0) {
        html += '<h6 class="mt-3">高リスク対象者</h6>';
        highRisk.forEach(item => {
            html += createRiskCard(item, 'high');
        });
    }

    if (mediumRisk.length > 0) {
        html += '<h6 class="mt-3">中リスク対象者</h6>';
        mediumRisk.forEach(item => {
            html += createRiskCard(item, 'medium');
        });
    }

    alertsDiv.innerHTML = html;
}

// リスクカード作成
function createRiskCard(item, riskLevel) {
    const riskColors = {
        high: 'danger',
        medium: 'warning',
        low: 'success'
    };

    const riskLabels = {
        high: '🔴 高リスク',
        medium: '🟡 中リスク',
        low: '🟢 安定'
    };

    const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';
    const categoryScores = item.categoryScores || {};
    
    let reasons = [];
    if (item.totalScore <= 40) reasons.push(`総合スコア${item.totalScore.toFixed(1)}点`);
    if (categoryScores.salary && categoryScores.salary <= 30) reasons.push(`給与満足度${categoryScores.salary.toFixed(1)}点`);
    if (categoryScores.relationship && categoryScores.relationship <= 30) reasons.push(`人間関係${categoryScores.relationship.toFixed(1)}点`);
    if (reasons.length === 0 && item.totalScore <= 50) reasons.push(`総合スコア${item.totalScore.toFixed(1)}点`);
    if (reasons.length === 0) reasons.push('総合的な判定');

    return `
        <div class="alert alert-${riskColors[riskLevel]} risk-card">
            <div class="risk-card-header">
                <strong>${item.employee_code}</strong>
                <span class="badge badge-${riskColors[riskLevel]}">${riskLabels[riskLevel]}</span>
            </div>
            <div class="risk-card-body">
                <p><strong>総合スコア:</strong> ${item.totalScore.toFixed(1)}点</p>
                <p><strong>国籍:</strong> ${nationalityDisplay}</p>
                <p><strong>リスク要因:</strong> ${reasons.join('、')}</p>
                <p><strong>推奨アクション:</strong> ${getRecommendedAction(item, riskLevel)}</p>
            </div>
        </div>
    `;
}

// 推奨アクション取得
function getRecommendedAction(item, riskLevel) {
    const categoryScores = item.categoryScores || {};
    
    if (riskLevel === 'high') {
        if (categoryScores.salary && categoryScores.salary <= 30) {
            return '給与・待遇に関する面談を早急に実施してください';
        }
        if (categoryScores.relationship && categoryScores.relationship <= 30) {
            return '職場の人間関係について個別ヒアリングを実施してください';
        }
        return '早急な個別面談と状況改善が必要です';
    }
    
    if (riskLevel === 'medium') {
        return '定期的なフォローアップと状況確認を行ってください';
    }
    
    return '現状維持で問題ありません';
}

// スコア急降下アラート更新
function updateScoreDropAlerts() {
    const alertsDiv = document.getElementById('scoreDropAlerts');
    if (!alertsDiv) return;
    
    if (filteredData.length === 0) {
        alertsDiv.innerHTML = '<p>データがありません</p>';
        return;
    }

    // 年月でソート
    const sortedData = [...allData].sort((a, b) => 
        (b.year_month || '').localeCompare(a.year_month || '')
    );

    const latestMonth = sortedData[0]?.year_month;
    const previousMonth = sortedData.find(d => d.year_month && d.year_month < latestMonth)?.year_month;

    if (!latestMonth || !previousMonth) {
        alertsDiv.innerHTML = '<p>比較データがありません</p>';
        return;
    }

    const latestData = sortedData.filter(d => d.year_month === latestMonth);
    const previousData = sortedData.filter(d => d.year_month === previousMonth);

    const drops = [];
    latestData.forEach(latest => {
        const previous = previousData.find(p => p.employee_code === latest.employee_code);
        if (previous) {
            const drop = previous.totalScore - latest.totalScore;
            if (drop >= 15) {
                drops.push({
                    ...latest,
                    previousScore: previous.totalScore,
                    drop: drop
                });
            }
        }
    });

    if (drops.length === 0) {
        alertsDiv.innerHTML = '<p class="text-success">✅ 急激なスコア低下はありません</p>';
        return;
    }

    let html = '<h6>⚠️ スコア急降下アラート</h6>';
    drops.forEach(item => {
        const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';
        html += `
            <div class="alert alert-warning">
                <strong>${item.employee_code}</strong> (${nationalityDisplay})
                <p>${item.previousScore.toFixed(1)}点 → ${item.totalScore.toFixed(1)}点 
                   (${item.drop.toFixed(1)}点低下)</p>
                <p><small>早急な状況確認が必要です</small></p>
            </div>
        `;
    });

    alertsDiv.innerHTML = html;
}

// CSVエクスポート
function exportToCSV() {
    if (filteredData.length === 0) {
        alert('エクスポートするデータがありません');
        return;
    }

    const headers = [
        '従業員コード',
        '部署',
        '国籍',
        '企業コード',
        '年月',
        '総合スコア',
        'リスクレベル',
        '診断日時'
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
            item.employee_code || '',
            item.department || '',
            nationalityDisplay,
            item.company_code || '',
            item.year_month || '',
            item.totalScore.toFixed(1),
            riskLabels[riskLevel],
            formatDate(item.survey_date)
        ];
    });

    let csv = headers.join(',') + '\n';
    csv += rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `trainee_survey_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// 日付フォーマット
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
