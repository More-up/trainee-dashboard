// グローバル変数
let allData = [];
let filteredData = [];
let currentUser = null;

// API エンドポイント
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義（技能実習生向け）
const categories = {
    work: '業務・職場環境',
    salary: '給与・待遇',
    family: '家族・プライベート事情',
    relationship: '人間関係',
    communication: '日本語・コミュニケーション',
    culture: '文化・価値観',
    living: '生活環境',
    career: 'キャリア・将来の見通し'
};

// カテゴリーと質問のマッピング（新しい設問構成に対応）
const categoryQuestionMap = {
    work: [1, 2, 3, 4],           // 4問
    salary: [5, 6, 7, 8],         // 4問
    family: [9, 10, 11, 12],      // 4問
    relationship: [13, 14, 15, 16], // 4問
    communication: [17, 18, 19, 20, 21], // 5問
    culture: [22, 23],            // 2問
    living: [24, 25, 26, 27, 28, 29], // 6問
    career: [30, 31, 32, 33, 34, 35]  // 6問
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
    console.log('🚀 DOM読み込み完了');
    checkLoginStatus();
    setupEventListeners();
});

// ログイン状態確認
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    
    console.log('🔐 ログイン状態確認:', isLoggedIn);
    
    if (isLoggedIn === 'true') {
        currentUser = sessionStorage.getItem('adminUsername') || 'moreup-trainee';
        console.log('✅ ログイン済み - ユーザー:', currentUser);
        
        const adminUsernameEl = document.getElementById('adminUsername');
        if (adminUsernameEl) {
            adminUsernameEl.textContent = currentUser;
            console.log('👤 ユーザー名表示完了');
        }
        
        loadData();
    } else {
        console.log('❌ 未ログイン - ログインページへリダイレクト');
        window.location.href = 'admin-login.html';
    }
}

// ログアウト
function logout() {
    console.log('🚪 ログアウト処理開始');
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminUsername');
    console.log('✅ セッション削除完了');
    window.location.href = 'admin-login.html';
}

// イベントリスナー設定
function setupEventListeners() {
    console.log('🎯 イベントリスナー設定開始');
    
    const filterCompany = document.getElementById('filterCompany');
    const filterMonth = document.getElementById('filterMonth');
    const filterEmployee = document.getElementById('filterEmployee');
    const filterNationality = document.getElementById('filterNationality');
    
    console.log('📋 フィルター要素:', {
        company: !!filterCompany,
        month: !!filterMonth,
        employee: !!filterEmployee,
        nationality: !!filterNationality
    });
    
    if (filterCompany) filterCompany.addEventListener('change', applyFilters);
    if (filterMonth) filterMonth.addEventListener('change', applyFilters);
    if (filterEmployee) filterEmployee.addEventListener('input', applyFilters);
    if (filterNationality) filterNationality.addEventListener('change', applyFilters);
    
    console.log('✅ イベントリスナー設定完了');
}

// データ読み込み
async function loadData() {
    console.log('📥 データ読み込み開始');
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/results`);
        console.log('🌐 APIレスポンスステータス:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📊 取得したデータ:', data);
        console.log('📊 データの型:', typeof data);
        console.log('📊 データは配列?:', Array.isArray(data));
        
        if (typeof data === 'object' && data !== null) {
            console.log('📊 データの構造(キー):', Object.keys(data));
        }

        // APIレスポンスの構造を判定
        let resultsArray = [];
        if (Array.isArray(data)) {
            resultsArray = data;
            console.log('✅ データは配列形式');
        } else if (data.results && Array.isArray(data.results)) {
            resultsArray = data.results;
            console.log('✅ データはresults形式');
        } else if (data.data && Array.isArray(data.data)) {
            resultsArray = data.data;
            console.log('✅ データはdata形式');
        } else {
            console.error('❌ 不明なデータ構造:', data);
            throw new Error('データの形式が不正です');
        }

        console.log('📈 データ件数:', resultsArray.length);

        // データ処理
        allData = resultsArray.map(item => {
            let categoryScores = {};
            if (item.category_scores && item.category_scores !== 'null' && item.category_scores !== null) {
                try {
                    categoryScores = typeof item.category_scores === 'string' 
                        ? JSON.parse(item.category_scores) 
                        : item.category_scores;
                } catch (e) {
                    console.warn('⚠️ category_scores解析エラー:', e);
                }
            }

            let answers = {};
            if (item.answers && item.answers !== 'null' && item.answers !== null) {
                try {
                    answers = typeof item.answers === 'string' 
                        ? JSON.parse(item.answers) 
                        : item.answers;
                } catch (e) {
                    console.warn('⚠️ answers解析エラー:', e);
                }
            }

            return {
                ...item,
                categoryScores: categoryScores,
                answers: answers,
                totalScore: parseFloat(item.total_score) || 0
            };
        });

        console.log('✅ 処理後のデータ件数:', allData.length);
        if (allData.length > 0) {
            console.log('📝 最初のデータサンプル:', allData[0]);
        }

        filteredData = [...allData];
        updateFilters();
        updateDisplay();
        
        console.log('🎉 データ読み込み完了');
        
    } catch (error) {
        console.error('❌ データ読み込みエラー:', error);
        alert('データの読み込みに失敗しました: ' + error.message);
    }
}

// フィルター更新
function updateFilters() {
    console.log('🔧 フィルター更新開始');
    
    const companies = [...new Set(allData.map(d => d.company_code).filter(Boolean))];
    console.log('🏢 企業一覧:', companies);
    
    const companyFilter = document.getElementById('filterCompany');
    if (companyFilter) {
        companyFilter.innerHTML = '<option value="">すべて</option>' +
            companies.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    const months = [...new Set(allData.map(d => d.year_month).filter(Boolean))].sort().reverse();
    console.log('📅 年月一覧:', months);
    
    const monthFilter = document.getElementById('filterMonth');
    if (monthFilter) {
        monthFilter.innerHTML = '<option value="">すべて</option>' +
            months.map(m => `<option value="${m}">${m}</option>`).join('');
    }

    console.log('✅ フィルター更新完了');
}

// フィルター適用
function applyFilters() {
    console.log('🔍 フィルター適用開始');
    
    const company = document.getElementById('filterCompany')?.value;
    const month = document.getElementById('filterMonth')?.value;
    const employee = document.getElementById('filterEmployee')?.value.toLowerCase();
    const nationality = document.getElementById('filterNationality')?.value;

    console.log('🎯 フィルター条件:', { company, month, employee, nationality });

    filteredData = allData.filter(item => {
        if (company && item.company_code !== company) return false;
        if (month && item.year_month !== month) return false;
        if (employee && !item.employee_code.toLowerCase().includes(employee)) return false;
        if (nationality && item.nationality !== nationality) return false;
        return true;
    });

    console.log('✅ フィルター後のデータ件数:', filteredData.length);
    updateDisplay();
}

// 表示更新
function updateDisplay() {
    console.log('🖼️ 表示更新開始');
    updateStatistics();
    updateDataTable();
    updateRadarChart();
    updateTrendChart();
    updateAIAnalysis();
    updateRiskAlerts();
    console.log('✅ 表示更新完了');
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

    console.log('📊 統計情報:', { totalCount, avgScore, maxScore, minScore });

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
        console.warn('⚠️ dataTableBody要素が見つかりません');
        return;
    }

    console.log('📋 テーブル更新 - データ件数:', filteredData.length);

    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: #5f6368;">データがありません</td></tr>';
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

    console.log('✅ テーブル更新完了');
}

// 日付フォーマット関数
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// リスクレベル計算
function calculateRiskLevel(item) {
    const totalScore = item.totalScore;
    const categoryScores = item.categoryScores || {};

    if (Object.keys(categoryScores).length === 0) {
        if (totalScore <= 40) return 'high';
        if (totalScore <= 50) return 'medium';
        return 'low';
    }

    if (totalScore <= 40) return 'high';
    if (categoryScores.salary && categoryScores.salary <= 30) return 'high';
    if (categoryScores.relationship && categoryScores.relationship <= 30) return 'high';
    if (categoryScores.culture && categoryScores.culture <= 30) return 'high';

    if (totalScore <= 50) return 'medium';

    return 'low';
}

// レーダーチャート更新
function updateRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) {
        console.warn('⚠️ radarChart要素が見つかりません');
        return;
    }

    console.log('📊 レーダーチャート更新');

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

    Object.keys(categories).forEach(key => {
        if (categoryCounts[key] > 0) {
            categoryAverages[key] = categoryAverages[key] / categoryCounts[key];
        }
    });

    console.log('📈 カテゴリー別平均:', categoryAverages);

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

    console.log('✅ レーダーチャート更新完了');
}

// トレンドチャート更新
function updateTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) {
        console.warn('⚠️ trendChart要素が見つかりません');
        return;
    }

    console.log('📈 トレンドチャート更新');

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

    const sortedMonths = Object.keys(monthlyData).sort();
    const labels = sortedMonths;
    const data = sortedMonths.map(month => 
        (monthlyData[month].total / monthlyData[month].count).toFixed(1)
    );

    console.log('📊 月別データ:', { labels, data });

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

    console.log('✅ トレンドチャート更新完了');
}

// AI分析更新
function updateAIAnalysis() {
    const aiInsights = document.getElementById('aiInsights');
    if (!aiInsights) {
        console.warn('⚠️ aiInsights要素が見つかりません');
        return;
    }

    console.log('🤖 AI分析更新');
    
    if (filteredData.length === 0) {
        aiInsights.innerHTML = '<div class="ai-insight-card"><p>データがありません</p></div>';
        return;
    }

    const avgScore = filteredData.reduce((sum, d) => sum + d.totalScore, 0) / filteredData.length;
    
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
    console.log('✅ AI分析更新完了');
}

// リスクアラート更新
function updateRiskAlerts() {
    const container = document.getElementById('riskAlertContainer');
    if (!container) {
        console.warn('⚠️ riskAlertContainer要素が見つかりません');
        return;
    }

    console.log('⚠️ リスクアラート更新');

    const highRisk = filteredData.filter(d => calculateRiskLevel(d) === 'high');
    const mediumRisk = filteredData.filter(d => calculateRiskLevel(d) === 'medium');
    const lowRisk = filteredData.filter(d => calculateRiskLevel(d) === 'low');

    console.log('📊 リスク分布:', {
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
            const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';
            html += `
                <div class="risk-card high">
                    <div class="risk-header">
                        <span class="risk-level">高リスク</span>
                        <span class="risk-score">${item.totalScore.toFixed(1)}点</span>
                    </div>
                    <p><strong>${item.employee_code}</strong> (${nationalityDisplay})</p>
                    <p class="risk-reason">総合スコアが低い、または重要カテゴリーのスコアが著しく低い</p>
                </div>
            `;
        });
    }

    if (mediumRisk.length > 0) {
        html += '<h3 style="color: #f9ab00; margin-bottom: 16px; margin-top: 24px;">🟡 中リスク対象者</h3>';
        mediumRisk.forEach(item => {
            const nationalityDisplay = nationalityDisplayNames[item.nationality] || item.nationality || '-';
            html += `
                <div class="risk-card medium">
                    <div class="risk-header">
                        <span class="risk-level">中リスク</span>
                        <span class="risk-score">${item.totalScore.toFixed(1)}点</span>
                    </div>
                    <p><strong>${item.employee_code}</strong> (${nationalityDisplay})</p>
                    <p class="risk-reason">改善の余地があるスコア</p>
                </div>
            `;
        });
    }

    container.innerHTML = html;
    console.log('✅ リスクアラート更新完了');
}
