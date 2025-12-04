// ========================================
// 絵文字選択肢データ
// ========================================
const optionsData = [
    { emoji: "😍", label: "とても満足", score: 6 },
    { emoji: "🙂", label: "やや満足", score: 5 },
    { emoji: "😐", label: "どちらでもない", score: 4 },
    { emoji: "😕", label: "やや不満", score: 3 },
    { emoji: "😠", label: "不満", score: 2 },
    { emoji: "🥺", label: "とても不満", score: 1 }
];

// カテゴリーマッピング
const categoryNames = {
    work: "業務・職場環境",
    salary: "給与・待遇",
    family: "家族・プライベート",
    relationship: "人間関係",
    communication: "日本語・コミュニケーション",
    culture: "文化・価値観",
    living: "生活環境",
    career: "キャリア・将来"
};

// ========================================
// 初期化
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeQuestions();
    initializeNavigation();
    initializeButtons();
    loadHistory();
    updateProgress();
});

// ========================================
// 質問の初期化
// ========================================
function initializeQuestions() {
    const questions = document.querySelectorAll('.question-card');
    
    questions.forEach((card, index) => {
        const optionsContainer = card.querySelector('.emoji-options');
        card.dataset.questionId = index;
        
        optionsData.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'emoji-btn';
            btn.innerHTML = `
                <span class="emoji">${option.emoji}</span>
                <span class="label">${option.label}</span>
            `;
            btn.dataset.score = option.score;
            btn.dataset.label = option.label;
            
            btn.addEventListener('click', () => selectOption(card, btn, option));
            optionsContainer.appendChild(btn);
        });
    });
}

// ========================================
// 選択肢の処理
// ========================================
function selectOption(card, btn, option) {
    // 既存の選択をクリア
    card.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    
    // 新しい選択をマーク
    btn.classList.add('selected');
    
    // データを保存
    let score = option.score;
    if (card.dataset.type === 'negative') {
        score = 7 - score; // ネガティブ質問は逆スコア
    }
    card.dataset.score = score;
    card.dataset.originalScore = option.score;
    
    // 結果を表示
    const resultDiv = card.querySelector('.selected-result');
    resultDiv.textContent = `${option.label} (${option.score}点)`;
    
    // 進捗を更新
    updateProgress();
    
    // カードをハイライト（アニメーション）
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 100);
}

// ========================================
// 進捗の更新
// ========================================
function updateProgress() {
    const questions = document.querySelectorAll('.question-card');
    const answered = document.querySelectorAll('.question-card[data-score]').length;
    const total = questions.length;
    const percent = Math.round((answered / total) * 100);
    
    // 円形プログレスバー
    const progressFill = document.getElementById('progressFill');
    const circumference = 2 * Math.PI * 45; // r=45
    const offset = circumference - (percent / 100) * circumference;
    progressFill.style.strokeDashoffset = offset;
    
    // テキスト更新
    document.getElementById('progressText').textContent = `${percent}%`;
    document.getElementById('progressInfo').textContent = `${answered} / ${total} 問完了`;
}

// ========================================
// ナビゲーション
// ========================================
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            
            // ナビゲーションの状態更新
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // セクションの表示切替
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
            });
            document.getElementById(`${section}Section`).classList.add('active');
            
            // 結果セクションの場合はデータを更新
            if (section === 'results') {
                calculateResults();
            }
        });
    });
}

// ========================================
// ボタンの初期化
// ========================================
function initializeButtons() {
    // 結果を見るボタン
    document.getElementById('submitBtn').addEventListener('click', () => {
        const answered = document.querySelectorAll('.question-card[data-score]').length;
        if (answered === 0) {
            alert('少なくとも1つの質問に回答してください。');
            return;
        }
        
        // 結果セクションに移動
        document.querySelector('[data-section="results"]').click();
    });
    
    // リセットボタン
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('すべての回答をリセットしますか?')) {
            resetSurvey();
        }
    });
    
    // エクスポートボタン
    document.getElementById('exportBtn').addEventListener('click', exportResults);
    
    // 印刷ボタン
    document.getElementById('printBtn').addEventListener('click', () => window.print());
    
    // 履歴クリアボタン
    document.getElementById('clearHistoryBtn').addEventListener('click', () => {
        if (confirm('すべての履歴を削除しますか?')) {
            localStorage.removeItem('surveyHistory');
            loadHistory();
        }
    });
    
    // テーマ切替ボタン
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    
    // 言語切替ボタン（将来の拡張用）
    document.getElementById('langBtn').addEventListener('click', () => {
        alert('多言語機能は開発中です。');
    });
}

// ========================================
// リセット
// ========================================
function resetSurvey() {
    document.querySelectorAll('.question-card').forEach(card => {
        card.removeAttribute('data-score');
        card.removeAttribute('data-original-score');
        card.querySelectorAll('.emoji-btn').forEach(btn => btn.classList.remove('selected'));
        card.querySelector('.selected-result').textContent = '';
    });
    updateProgress();
}

// ========================================
// 結果の計算
// ========================================
function calculateResults() {
    const questions = document.querySelectorAll('.question-card[data-score]');
    
    if (questions.length === 0) {
        document.getElementById('totalScore').textContent = '-';
        document.getElementById('answeredCount').textContent = '0 / 39';
        document.getElementById('satisfactionLevel').textContent = '-';
        return;
    }
    
    // 総合スコア計算
    let totalScore = 0;
    questions.forEach(q => {
        totalScore += parseInt(q.dataset.score);
    });
    
    const avgScore = (totalScore / questions.length).toFixed(2);
    const maxScore = questions.length * 6;
    const scorePercent = ((totalScore / maxScore) * 100).toFixed(0);
    
    // サマリー更新
    document.getElementById('totalScore').textContent = `${avgScore} / 6.0`;
    document.getElementById('answeredCount').textContent = `${questions.length} / 39`;
    
    // 満足度レベル
    let satisfactionLevel = '';
    if (avgScore >= 5) satisfactionLevel = '非常に良好';
    else if (avgScore >= 4) satisfactionLevel = '良好';
    else if (avgScore >= 3) satisfactionLevel = '普通';
    else if (avgScore >= 2) satisfactionLevel = '要改善';
    else satisfactionLevel = '早急な対応が必要';
    
    document.getElementById('satisfactionLevel').textContent = satisfactionLevel;
    
    // カテゴリー別スコア計算
    const categoryScores = calculateCategoryScores();
    
    // レーダーチャート描画
    drawRadarChart(categoryScores);
    
    // カテゴリー詳細表示
    displayCategoryDetails(categoryScores);
    
    // 履歴に保存
    saveToHistory({
        date: new Date().toISOString(),
        totalScore: avgScore,
        answered: questions.length,
        categoryScores: categoryScores
    });
}

// ========================================
// カテゴリー別スコア計算
// ========================================
function calculateCategoryScores() {
    const categories = {};
    
    Object.keys(categoryNames).forEach(key => {
        const categoryQuestions = document.querySelectorAll(`.question-card[data-category="${key}"][data-score]`);
        if (categoryQuestions.length > 0) {
            let sum = 0;
            categoryQuestions.forEach(q => {
                sum += parseInt(q.dataset.score);
            });
            categories[key] = {
                name: categoryNames[key],
                score: (sum / categoryQuestions.length).toFixed(2),
                answered: categoryQuestions.length
            };
        }
    });
    
    return categories;
}

// ========================================
// レーダーチャート描画
// ========================================
function drawRadarChart(categoryScores) {
    const ctx = document.getElementById('radarChart');
    
    // 既存のチャートを破棄
    if (window.radarChartInstance) {
        window.radarChartInstance.destroy();
    }
    
    const labels = Object.values(categoryScores).map(c => c.name);
    const data = Object.values(categoryScores).map(c => parseFloat(c.score));
    
    window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'スコア',
                data: data,
                backgroundColor: 'rgba(26, 115, 232, 0.2)',
                borderColor: 'rgba(26, 115, 232, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(26, 115, 232, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(26, 115, 232, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 6,
                    min: 0,
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 12
                        }
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            weight: '500'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return `スコア: ${context.parsed.r} / 6.0`;
                        }
                    }
                }
            }
        }
    });
}

// ========================================
// カテゴリー詳細表示
// ========================================
function displayCategoryDetails(categoryScores) {
    const container = document.getElementById('categoryDetails');
    container.innerHTML = '';
    
    Object.entries(categoryScores).forEach(([key, data]) => {
        const percent = ((data.score / 6) * 100).toFixed(0);
        
        const card = document.createElement('div');
        card.className = 'detail-card';
        card.innerHTML = `
            <div class="detail-header">
                <h4>${data.name}</h4>
                <span class="detail-score">${data.score} / 6.0</span>
            </div>
            <div class="detail-bar">
                <div class="detail-bar-fill" style="width: ${percent}%"></div>
            </div>
            <p style="font-size: 13px; color: var(--text-secondary); margin-top: 8px;">
                回答数: ${data.answered}問
            </p>
        `;
        
        container.appendChild(card);
    });
}

// ========================================
// 履歴管理
// ========================================
function saveToHistory(data) {
    let history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
    history.unshift(data);
    
    // 最大20件まで保存
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    localStorage.setItem('surveyHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
    const container = document.getElementById('historyList');
    
    if (history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons">history</span>
                <p>まだ回答履歴がありません</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    history.forEach((item, index) => {
        const date = new Date(item.date);
        const dateStr = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-info">
                <h4>回答 ${history.length - index}</h4>
                <p>${dateStr} - スコア: ${item.totalScore} / 6.0 - 回答数: ${item.answered}問</p>
            </div>
            <div class="history-actions">
                <button class="btn-icon" onclick="viewHistoryItem(${index})" title="詳細を見る">
                    <span class="material-icons">visibility</span>
                </button>
                <button class="btn-icon" onclick="deleteHistoryItem(${index})" title="削除">
                    <span class="material-icons">delete</span>
                </button>
            </div>
        `;
        
        container.appendChild(historyItem);
    });
}

// 履歴アイテムの表示
window.viewHistoryItem = function(index) {
    const history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
    const item = history[index];
    
    if (!item) return;
    
    alert(`
総合スコア: ${item.totalScore} / 6.0
回答数: ${item.answered}問
日時: ${new Date(item.date).toLocaleString('ja-JP')}

カテゴリー別スコア:
${Object.entries(item.categoryScores).map(([key, data]) => 
    `${data.name}: ${data.score} / 6.0`
).join('\n')}
    `);
}

// 履歴アイテムの削除
window.deleteHistoryItem = function(index) {
    if (confirm('この履歴を削除しますか?')) {
        let history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
        history.splice(index, 1);
        localStorage.setItem('surveyHistory', JSON.stringify(history));
        loadHistory();
    }
}

// ========================================
// エクスポート
// ========================================
function exportResults() {
    const questions = document.querySelectorAll('.question-card[data-score]');
    
    if (questions.length === 0) {
        alert('回答データがありません。');
        return;
    }
    
    // CSV形式でエクスポート
    let csv = 'カテゴリー,質問,スコア,選択肢\n';
    
    questions.forEach(q => {
        const category = categoryNames[q.dataset.category] || '不明';
        const question = q.querySelector('.question-text').textContent;
        const score = q.dataset.score;
        const result = q.querySelector('.selected-result').textContent;
        
        csv += `"${category}","${question}",${score},"${result}"\n`;
    });
    
    // ダウンロード
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `survey_results_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ========================================
// テーマ切替
// ========================================
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = document.querySelector('#themeBtn .material-icons');
    icon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

// テーマの初期化
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeIcon = document.querySelector('#themeBtn .material-icons');
if (themeIcon) {
    themeIcon.textContent = savedTheme === 'dark' ? 'light_mode' : 'dark_mode';
}
