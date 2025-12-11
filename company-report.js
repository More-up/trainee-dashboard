// API設定
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義
const CATEGORIES = {
    work: { name: '業務・職場環境', icon: '🏢', questions: [1, 2, 3, 4] },
    salary: { name: '給与・待遇', icon: '💰', questions: [5, 6, 7, 8] },
    family: { name: '家族・プライベート事情', icon: '👨‍👩‍👧', questions: [9, 10, 11, 12] },
    relationship: { name: '人間関係', icon: '🤝', questions: [13, 14, 15, 16] },
    communication: { name: '日本語・コミュニケーション', icon: '🗣️', questions: [17, 18, 19, 20, 21] },
    culture: { name: '文化・価値観', icon: '🌏', questions: [22, 23] },
    living: { name: '生活環境', icon: '🏠', questions: [24, 25, 26, 27, 28, 29] },
    career: { name: 'キャリア・将来の見通し', icon: '🚀', questions: [30, 31, 32, 33, 34, 35] }
};

// 全35問の質問データ（正しい質問文と絵文字付き選択肢）
const QUESTIONS = {
    1: { text: 'Q1. 仕事の内容は、自分に合っていますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    2: { text: 'Q2. 働く場所で、怪我や事故の心配はありませんか?', choices: ['⭕ 全くない', '◯ ほとんどない', '△ あまりない', '▽ 少しある', '× よくある', '❌ いつもある'] },
    3: { text: 'Q3. 休みの日や働く時間は、ちょうどよいですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    4: { text: 'Q4. 職場の雰囲気は、働きやすいですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    5: { text: 'Q5. 給料の金額に、満足していますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    6: { text: 'Q6. 残業代や手当は、きちんと受け取れていますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    7: { text: 'Q7. 保険や休暇などの制度は、十分だと思いますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    8: { text: 'Q8. この会社で働くことで、生活に必要なお金を得られていますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    9: { text: 'Q9. 家族と連絡をとる時間は、十分にありますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    10: { text: 'Q10. 家族に送金する余裕はありますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    11: { text: 'Q11. 自分の時間(休みやプライベート)は、十分にありますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    12: { text: 'Q12. 将来、家族を日本に呼びたいと思いますか?', choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う'] },
    13: { text: 'Q13. 同じ技能実習生の仲間との関係は良いですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    14: { text: 'Q14. 日本人の上司や同僚は、あなたの話を聞いてくれますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    15: { text: 'Q15. 困ったときに、同じ技能実習生の仲間は助けてくれますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    16: { text: 'Q16. 職場で、いじめや差別を受けることはありますか?', choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある'] },
    17: { text: 'Q17. 日本語での会話に困ることはありますか?', choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある'] },
    18: { text: 'Q18. 仕事の説明や指示は分かりやすいですか?', choices: ['❌ 全く分からない', '😕 あまり分からない', '😐 普通', '🙂 だいたい分かる', '⭕ よく分かる'] },
    19: { text: 'Q19. 分からないことを質問しやすいですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    20: { text: 'Q20. 会社は、日本語の勉強を助けてくれますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    21: { text: 'Q21. 母国語で相談できる人(通訳や先輩など)はいますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    22: { text: 'Q22. 日本の文化や習慣に、慣れていますか?', choices: ['😰 全く慣れていない', '😕 あまり慣れていない', '😐 普通', '😊 やや慣れている', '🌟 とても慣れている'] },
    23: { text: 'Q23. 仕事中に文化の違いで困ることはありますか?', choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある'] },
    24: { text: 'Q24. 住んでいる場所(寮・アパートなど)は快適ですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    25: { text: 'Q25. 生活費は、給料に対してちょうどよいですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    26: { text: 'Q26. 日本での生活で困ることはありますか?', choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある'] },
    27: { text: 'Q27. 会社は生活のサポートをしてくれますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    28: { text: 'Q28. 寮や家での生活環境(部屋の広さ・設備など)に満足していますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    29: { text: 'Q29. 日本での生活は、安全で快適ですか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] },
    30: { text: 'Q30. 今の仕事で、技術や知識が身についていますか?', choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う'] },
    31: { text: 'Q31. 頑張った分だけ、評価や待遇が良くなると感じますか?', choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う'] },
    32: { text: 'Q32. この会社で、長く働きたいと思いますか?', choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う'] },
    33: { text: 'Q33. ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?', choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある'] },
    34: { text: 'Q34. この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?', choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う'] },
    35: { text: 'Q35. 母国の友達にも「この会社で働いたほうがいいよ」と思えますか?', choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足'] }
};

// グローバル変数
let allEmployees = [];
let chartInstances = {};

// URLパラメータ取得
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        company: params.get('company') || '辻麺業株式会社',
        month: params.get('month') || '2025-12'
    };
}

// データ読み込み
async function loadData() {
    try {
        const params = getURLParams();
        
        const response = await fetch(`${API_BASE_URL}/api/results`);
        if (!response.ok) throw new Error('データ取得失敗');
        
        const result = await response.json();
        if (!result.success) throw new Error(result.error || 'データ取得失敗');
        
        const data = result.data || [];
        
        // 該当企業・月のデータをフィルタ
        allEmployees = data.filter(item => 
            item.company_code === params.company &&
            item.year_month === params.month
        );
        
        if (allEmployees.length === 0) {
            throw new Error('該当するデータが見つかりません');
        }
        
        return allEmployees;
        
    } catch (error) {
        console.error('データ読み込みエラー:', error);
        throw error;
    }
}

// ヘッダー情報表示と月選択ドロップダウン
async function displayHeader() {
    const params = getURLParams();
    document.getElementById('companyName').textContent = params.company;
    
    // 月選択ドロップダウンを構築
    await populateMonthSelector();
}

// 月選択ドロップダウンを構築（データ連動）
async function populateMonthSelector() {
    const monthSelector = document.getElementById('monthSelector');
    const currentMonth = getURLParams().month;
    const currentCompany = getURLParams().company;
    
    try {
        // APIから全データを取得
        const response = await fetch(`${API_BASE_URL}/api/results`);
        if (!response.ok) throw new Error('データ取得失敗');
        
        const result = await response.json();
        if (!result.success) throw new Error(result.error || 'データ取得失敗');
        
        const data = result.data || [];
        
        // 該当企業のデータから月を抽出（重複除去&ソート）
        const months = [...new Set(
            data
                .filter(item => item.company_code === currentCompany)
                .map(item => item.year_month)
                .filter(Boolean)
        )].sort().reverse(); // 降順ソート（最新が上）
        
        if (months.length === 0) {
            monthSelector.innerHTML = '<option value="">データなし</option>';
            return;
        }
        
        monthSelector.innerHTML = months.map(m => 
            `<option value="${m}" ${m === currentMonth ? 'selected' : ''}>${m}</option>`
        ).join('');
        
    } catch (error) {
        console.error('月選択ドロップダウンの構築エラー:', error);
        monthSelector.innerHTML = '<option value="">読み込みエラー</option>';
    }
}

// 月選択変更時
function changeMonth() {
    const monthSelector = document.getElementById('monthSelector');
    const newMonth = monthSelector.value;
    const params = getURLParams();
    
    // URLパラメータを更新してページをリロード
    window.location.href = `?company=${encodeURIComponent(params.company)}&month=${newMonth}`;
}

// 月別比較表示
function showComparison() {
    alert('月別比較機能は実装中です');
}

// 月別比較モーダルを閉じる
function closeComparison() {
    document.getElementById('comparisonModal').style.display = 'none';
}

// サマリーカード更新
function updateSummaryCards() {
    const totalScore = allEmployees.reduce((sum, emp) => sum + emp.total_score, 0);
    const avgScore = (totalScore / allEmployees.length).toFixed(1);
    
    // リスク分類
    let highRisk = 0, mediumRisk = 0, lowRisk = 0;
    allEmployees.forEach(emp => {
        const risk = calculateRiskLevel(emp);
        if (risk === 'high') highRisk++;
        else if (risk === 'medium') mediumRisk++;
        else lowRisk++;
    });
    
    document.getElementById('totalEmployees').textContent = allEmployees.length + '名';
    document.getElementById('averageScore').textContent = avgScore + '点';
    document.getElementById('highRiskCount').textContent = highRisk + '名';
    document.getElementById('mediumRiskCount').textContent = mediumRisk + '名';
    document.getElementById('lowRiskCount').textContent = lowRisk + '名';
}

// リスクレベル計算
function calculateRiskLevel(employee) {
    const score = employee.total_score;
    const categoryScores = typeof employee.category_scores === 'string' 
        ? JSON.parse(employee.category_scores) 
        : employee.category_scores;
    
    // 高リスク判定
    if (score <= 40) return 'high';
    if (categoryScores.salary <= 30 || categoryScores.relationship <= 30) return 'high';
    
    // 中リスク判定
    if (score <= 50) return 'medium';
    
    const lowCategories = Object.values(categoryScores).filter(s => s <= 40);
    if (lowCategories.length > 0) return 'medium';
    
    // 安定
    return 'low';
}

// AI総合分析生成
function generateAISummary() {
    const container = document.getElementById('aiSummary');
    
    // 全体傾向分析
    const totalScore = allEmployees.reduce((sum, emp) => sum + emp.total_score, 0);
    const avgScore = (totalScore / allEmployees.length).toFixed(1);
    
    // カテゴリー別平均
    const categoryAvg = {};
    Object.keys(CATEGORIES).forEach(key => {
        const scores = allEmployees.map(emp => {
            const cs = typeof emp.category_scores === 'string' ? JSON.parse(emp.category_scores) : emp.category_scores;
            return cs[key] || 0;
        });
        categoryAvg[key] = (scores.reduce((a,b) => a+b, 0) / scores.length).toFixed(1);
    });
    
    // 最高・最低カテゴリー
    const sortedCats = Object.entries(categoryAvg).sort((a,b) => b[1] - a[1]);
    const highestCat = sortedCats[0];
    const lowestCat = sortedCats[sortedCats.length - 1];
    
    // リスク従業員
    const highRiskEmps = allEmployees.filter(emp => calculateRiskLevel(emp) === 'high');
    
    let html = `
        <div class="ai-section">
            <h3>📊 全体傾向</h3>
            <p><strong>平均スコア: ${avgScore}点</strong></p>
            <p>全${allEmployees.length}名の技能実習生のうち、平均的な満足度は<strong>${avgScore}点</strong>です。</p>
            ${avgScore >= 60 ? '<p style="color: #27ae60;">✓ 全体的に良好な状態が維持されています。</p>' : ''}
            ${avgScore < 50 ? '<p style="color: #e74c3c;">⚠️ 全体的に不満が蓄積しており、早急な対応が必要です。</p>' : ''}
        </div>
        
        <div class="ai-section">
            <h3>🎯 カテゴリー別分析</h3>
            <p><strong>最も評価が高い:</strong> ${CATEGORIES[highestCat[0]].icon} ${CATEGORIES[highestCat[0]].name} (${highestCat[1]}点)</p>
            <p><strong>最も評価が低い:</strong> ${CATEGORIES[lowestCat[0]].icon} ${CATEGORIES[lowestCat[0]].name} (${lowestCat[1]}点)</p>
            ${lowestCat[1] < 45 ? `<p style="color: #e74c3c;">⚠️ ${CATEGORIES[lowestCat[0]].name}は要注意レベルです。重点的な改善が必要です。</p>` : ''}
        </div>
        
        ${highRiskEmps.length > 0 ? `
        <div class="ai-section" style="border-left-color: #e74c3c;">
            <h3>🔴 高リスク従業員への対応</h3>
            <p><strong>${highRiskEmps.length}名</strong>が高リスクと判定されました。</p>
            <p><strong>推奨アクション:</strong></p>
            <ul style="margin-left: 20px;">
                <li>今週中に個別面談を実施し、不満の原因を特定</li>
                <li>母国語通訳を用意し、本音を引き出す</li>
                <li>具体的な改善策を提示し、実行スケジュールを共有</li>
            </ul>
        </div>
        ` : ''}
        
        <div class="ai-section">
            <h3>💡 総合的な推奨アクション</h3>
            <ul style="margin-left: 20px;">
                <li><strong>短期(1週間以内):</strong> 高リスク従業員との個別面談</li>
                <li><strong>中期(1ヶ月以内):</strong> ${CATEGORIES[lowestCat[0]].name}の改善施策実施</li>
                <li><strong>長期(3ヶ月):</strong> 定期的なフォローアップと再調査</li>
            </ul>
        </div>
    `;
    
    container.innerHTML = html;
}

// 従業員一覧表示
function displayEmployeeList() {
    const container = document.getElementById('employeeList');
    container.innerHTML = '';
    
    // リスク順にソート
    const sorted = [...allEmployees].sort((a, b) => {
        const riskOrder = { high: 0, medium: 1, low: 2 };
        const riskA = calculateRiskLevel(a);
        const riskB = calculateRiskLevel(b);
        return riskOrder[riskA] - riskOrder[riskB];
    });
    
    sorted.forEach(emp => {
        const card = createEmployeeCard(emp);
        container.appendChild(card);
    });
}

// 従業員カード作成
function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.id = `employee-${employee.employee_code}`;
    
    const risk = calculateRiskLevel(employee);
    const riskIcon = { high: '🔴', medium: '🟡', low: '🟢' }[risk];
    const scoreClass = employee.total_score >= 60 ? 'high' : employee.total_score >= 50 ? 'medium' : 'low';
    
    const nationalityMap = {
        'mm': 'ミャンマー',
        'vn': 'ベトナム',
        'id': 'インドネシア',
        'ph': 'フィリピン',
        'th': 'タイ'
    };
    
    card.innerHTML = `
        <div class="employee-header" onclick="toggleEmployee('${employee.employee_code}')">
            <div class="employee-info">
                <div class="employee-id">従業員 ${employee.employee_code}</div>
                <div class="employee-meta">
                    <span>🌍 ${nationalityMap[employee.nationality] || employee.nationality}</span>
                    <span>📅 ${new Date(employee.survey_date).toLocaleDateString('ja-JP')}</span>
                </div>
            </div>
            <div class="employee-actions">
                <span class="risk-badge">${riskIcon}</span>
                <span class="score-badge ${scoreClass}">${employee.total_score.toFixed(1)}点</span>
                <button class="expand-btn" id="btn-${employee.employee_code}">詳細を見る</button>
            </div>
        </div>
        <div class="employee-detail" id="detail-${employee.employee_code}">
            <div class="detail-grid">
                <div class="detail-section">
                    <h3>📈 レーダーチャート</h3>
                    <div class="chart-container">
                        <canvas id="chart-${employee.employee_code}"></canvas>
                    </div>
                </div>
                <div class="detail-section">
                    <h3>📊 カテゴリー別スコア</h3>
                    <div class="category-scores-grid" id="categories-${employee.employee_code}"></div>
                </div>
            </div>
            
            <div class="ai-feedback">
                <h3>🤖 AIフィードバック</h3>
                <div id="feedback-${employee.employee_code}"></div>
            </div>
            
            <div class="next-actions">
                <h3>💡 推奨ネクストアクション</h3>
                <ul class="action-list" id="actions-${employee.employee_code}"></ul>
            </div>
            
            <div class="questions-section">
                <button class="questions-toggle" onclick="toggleQuestions('${employee.employee_code}')">
                    <span>📝 全35問の回答を見る</span>
                    <span id="q-icon-${employee.employee_code}">▼</span>
                </button>
                <div class="questions-content" id="questions-${employee.employee_code}"></div>
            </div>
        </div>
    `;
    
    return card;
}

// 従業員詳細展開/折りたたみ
function toggleEmployee(employeeCode) {
    const detail = document.getElementById(`detail-${employeeCode}`);
    const btn = document.getElementById(`btn-${employeeCode}`);
    
    if (detail.classList.contains('expanded')) {
        detail.classList.remove('expanded');
        btn.textContent = '詳細を見る';
    } else {
        detail.classList.add('expanded');
        btn.textContent = '閉じる';
        
        // 初回展開時のみデータを描画
        if (!detail.dataset.loaded) {
            const employee = allEmployees.find(e => e.employee_code === employeeCode);
            renderEmployeeDetail(employee);
            detail.dataset.loaded = 'true';
        }
    }
}

// 従業員詳細描画
function renderEmployeeDetail(employee) {
    const code = employee.employee_code;
    
    // レーダーチャート
    drawRadarChart(employee);
    
    // カテゴリー別スコア
    displayCategoryScores(employee);
    
    // AIフィードバック
    generateAIFeedback(employee);
    
    // ネクストアクション
    generateNextActions(employee);
    
    // 35問回答は初回展開時に生成
}

// レーダーチャート描画
function drawRadarChart(employee) {
    const code = employee.employee_code;
    const categoryScores = typeof employee.category_scores === 'string' 
        ? JSON.parse(employee.category_scores) 
        : employee.category_scores;
    
    const labels = Object.values(CATEGORIES).map(cat => cat.name);
    const scores = Object.keys(CATEGORIES).map(key => categoryScores[key] || 0);
    
    const ctx = document.getElementById(`chart-${code}`).getContext('2d');
    
    // 既存チャートを破棄
    if (chartInstances[code]) {
        chartInstances[code].destroy();
    }
    
    chartInstances[code] = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: `従業員 ${code}`,
                data: scores,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20 }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// カテゴリー別スコア表示
function displayCategoryScores(employee) {
    const code = employee.employee_code;
    const container = document.getElementById(`categories-${code}`);
    const categoryScores = typeof employee.category_scores === 'string' 
        ? JSON.parse(employee.category_scores) 
        : employee.category_scores;
    
    let html = '';
    Object.entries(CATEGORIES).forEach(([key, category]) => {
        const score = categoryScores[key] || 0;
        const isAlert = score < 45;
        html += `
            <div class="category-score-item ${isAlert ? 'alert' : ''}">
                <span class="category-name">${category.icon} ${category.name}</span>
                <span class="category-score">${score.toFixed(0)}点</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

// AIフィードバック生成
function generateAIFeedback(employee) {
    const code = employee.employee_code;
    const container = document.getElementById(`feedback-${code}`);
    const categoryScores = typeof employee.category_scores === 'string' 
        ? JSON.parse(employee.category_scores) 
        : employee.category_scores;
    const answers = typeof employee.answers === 'string' 
        ? JSON.parse(employee.answers) 
        : employee.answers;
    
    const sortedCats = Object.entries(categoryScores).sort((a,b) => b[1] - a[1]);
    const strengths = sortedCats.slice(0, 2);
    const weaknesses = sortedCats.slice(-2);
    
    // 低スコアの質問を抽出（回答が1またづ2以下）
    const lowAnswers = [];
    for (let i = 1; i <= 35; i++) {
        const answer = answers[`q${i}`];
        if (answer && answer <= 2) {
            lowAnswers.push({ num: i, answer: answer, text: QUESTIONS[i].text });
        }
    }
    
    let html = `
        <div class="feedback-section">
            <h4>💪 強み</h4>
            <ul>
                ${strengths.map(([key, score]) => `
                    <li>${CATEGORIES[key].icon} ${CATEGORIES[key].name}が${score.toFixed(0)}点と高評価</li>
                `).join('')}
            </ul>
        </div>
        <div class="feedback-section">
            <h4>⚠️ 改善が必要な領域</h4>
            <ul>
                ${weaknesses.map(([key, score]) => `
                    <li>${CATEGORIES[key].icon} ${CATEGORIES[key].name}が${score.toFixed(0)}点${score < 45 ? '（要注意）' : ''}</li>
                `).join('')}
            </ul>
            ${lowAnswers.length > 0 ? `
                <p style="margin-top: 10px;"><strong>特に不満が強い項目:</strong></p>
                <ul>
                    ${lowAnswers.slice(0, 3).map(item => `
                        <li>${item.text.replace(/^Q\d+\.\s*/, '')} <span style="color: #e74c3c;">→ 回答: ${item.answer}点</span></li>
                    `).join('')}
                </ul>
            ` : ''}
        </div>
    `;
    
    container.innerHTML = html;
}

// ネクストアクション生成（短期・中期・長期）
function generateNextActions(employee) {
    const code = employee.employee_code;
    const container = document.getElementById(`actions-${code}`);
    const risk = calculateRiskLevel(employee);
    const categoryScores = typeof employee.category_scores === 'string' 
        ? JSON.parse(employee.category_scores) 
        : employee.category_scores;
    
    const shortTerm = [];
    const midTerm = [];
    const longTerm = [];
    
    // 短期（1週間以内）
    if (risk === 'high') {
        shortTerm.push('今週中に個別面談を実施し、不満の原因を詳しくヒアリング');
        shortTerm.push('母国語通訳を手配し、本音を引き出す環境を整備');
    } else if (risk === 'medium') {
        shortTerm.push('2週間以内に個別面談を実施し、不満の原因を特定');
    }
    
    if (categoryScores.salary <= 40) {
        shortTerm.push('給与明細の詳細説明を実施し、手当・控除の内訳を明確化');
    }
    
    // 中期（1ヶ月以内）
    if (categoryScores.relationship <= 40) {
        midTerm.push('同国籍の先輩実習生とペアリングし、組合からの人的サポートを要請');
    }
    
    if (categoryScores.communication <= 40) {
        midTerm.push('日本語学習サポートを強化（週1回の日本語教室、eラーニング教材の提供など）');
    }
    
    if (categoryScores.living <= 40) {
        midTerm.push('生活環境の改善（寮の設備点検・買い物サポートなど）');
    }
    
    if (categoryScores.culture <= 40) {
        midTerm.push('文化適応プログラムの提供（日本文化理解セミナー、生活マナーワークショップなど）');
    }
    
    if (categoryScores.career <= 50) {
        midTerm.push('キャリアパス面談を実施し、技能習得計画を共有');
    }
    
    // 長期（3ヶ月）
    longTerm.push('定期的なフォローアップ面談（月次調査の継続）');
    longTerm.push('母国帰国後のキャリア支援（技能証明書発行・就職支援など）');
    
    if (risk === 'low') {
        longTerm.push('より高いエンゲージメントを目指し、リーダー育成プログラムを検討');
    }
    
    let html = '';
    
    if (shortTerm.length > 0) {
        html += '<div class="action-category"><h4>💨 短期（1週間以内）</h4><ul>';
        html += shortTerm.map(action => `<li>${action}</li>`).join('');
        html += '</ul></div>';
    }
    
    if (midTerm.length > 0) {
        html += '<div class="action-category"><h4>💼 中期（1ヶ月以内）</h4><ul>';
        html += midTerm.map(action => `<li>${action}</li>`).join('');
        html += '</ul></div>';
    }
    
    if (longTerm.length > 0) {
        html += '<div class="action-category"><h4>🎯 長期（3ヶ月）</h4><ul>';
        html += longTerm.map(action => `<li>${action}</li>`).join('');
        html += '</ul></div>';
    }
    
    container.innerHTML = html;
}

// 質問回答展開/折りたたみ
function toggleQuestions(employeeCode) {
    const content = document.getElementById(`questions-${employeeCode}`);
    const icon = document.getElementById(`q-icon-${employeeCode}`);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.textContent = '▼';
    } else {
        content.classList.add('expanded');
        icon.textContent = '▲';
        
        // 初回展開時のみ描画
        if (!content.dataset.loaded) {
            const employee = allEmployees.find(e => e.employee_code === employeeCode);
            renderQuestions(employee);
            content.dataset.loaded = 'true';
        }
    }
}

// 質問回答描画
function renderQuestions(employee) {
    const code = employee.employee_code;
    const container = document.getElementById(`questions-${code}`);
    const answers = typeof employee.answers === 'string' 
        ? JSON.parse(employee.answers) 
        : employee.answers;
    
    let html = '';
    Object.entries(CATEGORIES).forEach(([key, category]) => {
        html += `
            <div class="category-block">
                <div class="category-header">${category.icon} ${category.name}</div>
        `;
        
        category.questions.forEach(qNum => {
            const question = QUESTIONS[qNum];
            const answerValue = answers[`q${qNum}`];
            
            html += `
                <div class="question-item">
                    <div class="question-text">${question.text}</div>
                    <div class="choices">
                        ${question.choices.map((choice, index) => `
                            <div class="choice ${index === answerValue ? 'selected' : ''}">${choice}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
}

// セクション展開/折りたたみ
function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}Content`);
    const icon = document.getElementById(`${sectionId}Icon`);
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        icon.classList.remove('rotated');
    } else {
        content.classList.add('collapsed');
        icon.classList.add('rotated');
    }
}

// 全従業員の詳細を強制展開
async function expandAllEmployees() {
    const employeeCodes = allEmployees.map(emp => emp.employee_code);
    
    for (const code of employeeCodes) {
        const detailDiv = document.getElementById(`detail-${code}`);
        if (detailDiv && !detailDiv.classList.contains('expanded')) {
            // 従業員詳細を展開
            toggleEmployee(code);
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        // 35問の回答も展開
        const questionsDiv = document.getElementById(`questions-${code}`);
        if (questionsDiv) {
            const currentHeight = questionsDiv.style.maxHeight;
            if (!currentHeight || currentHeight === '0px' || currentHeight === '0') {
                toggleQuestions(code);
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
}

// PDF出力
async function exportPDF() {
    try {
        // ローディング表示
        const loadingMsg = document.createElement('div');
        loadingMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 40px 60px;
            border-radius: 15px;
            z-index: 10000;
            font-size: 20px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        `;
        loadingMsg.innerHTML = '📄 PDF生成中...<br><small style="font-size: 14px; opacity: 0.8;">全従業員の詳細を展開しています<br>10～20秒お待ちください</small>';
        document.body.appendChild(loadingMsg);
        
        // html2pdf.jsが読み込まれていない場合は動的に読み込む
        if (typeof html2pdf === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
            script.onload = () => generatePDF(loadingMsg);
            document.head.appendChild(script);
        } else {
            await generatePDF(loadingMsg);
        }
        
    } catch (error) {
        console.error('PDF生成エラー:', error);
        alert('PDF生成に失敗しました: ' + error.message);
        if (loadingMsg && loadingMsg.parentNode) {
            loadingMsg.parentNode.removeChild(loadingMsg);
        }
    }
}

// PDF生成処理
async function generatePDF(loadingMsg) {
    try {
        const params = getURLParams();
        const filename = `技能実習生エンゲージメント診断レポート_${params.company}_${params.month}.pdf`;
        
        // ステップ1: 全従業員の詳細を強制展開
        loadingMsg.innerHTML = '📄 PDF甞成中...<br><small style="font-size: 14px; opacity: 0.8;">ステップ1/3: 全従業員の詳細を展開中...</small>';
        await expandAllEmployees();
        
        // ステップ2: レーダーチャートの描画を待つ
        loadingMsg.innerHTML = '📄 PDF生成中...<br><small style="font-size: 14px; opacity: 0.8;">ステップ2/3: チャートを描画中...</small>';
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // ステップ3: PDF化する要素をクローン
        loadingMsg.innerHTML = '📄 PDF生成中...<br><small style="font-size: 14px; opacity: 0.8;">ステップ3/3: PDFを生成中...</small>';
        
        // ヘッダーとコンテンツを含むPDF用要素を作成
        const pdfContainer = document.createElement('div');
        pdfContainer.className = 'pdf-container';
        
        // ヘッダーをクローン
        const header = document.querySelector('.report-header').cloneNode(true);
        // 月選択ドロップダウンと比較ボタンを削除
        const monthSelector = header.querySelector('.month-selector-container');
        if (monthSelector) {
            const select = monthSelector.querySelector('select');
            const compareBtn = monthSelector.querySelector('.btn-compare');
            if (compareBtn) compareBtn.remove();
            if (select) {
                const selectedMonth = select.options[select.selectedIndex].text;
                monthSelector.innerHTML = `<span style="font-size: 18px; opacity: 0.9;">調査月: ${selectedMonth}</span>`;
            }
        }
        pdfContainer.appendChild(header);
        
        // コンテンツをクローン
        const element = document.getElementById('content').cloneNode(true);
        pdfContainer.appendChild(element);
        
        // アクションボタンを削除（PDFには不要）
        const actionButtons = pdfContainer.querySelector('.action-buttons');
        if (actionButtons) actionButtons.remove();
        
        // 折りたたみアイコンを削除
        pdfContainer.querySelectorAll('.toggle-icon').forEach(icon => icon.remove());
        pdfContainer.querySelectorAll('.expand-btn').forEach(btn => btn.remove());
        pdfContainer.querySelectorAll('.questions-toggle').forEach(btn => btn.remove());
        
        // PDF用スタイル追加
        const style = document.createElement('style');
        style.textContent = `
            @page {
                size: A4;
                margin: 15mm;
            }
            
            * {
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Yu Gothic', '游ゴシック', 'Hiragino Sans', 'Meiryo', sans-serif;
                font-size: 12px;
                line-height: 1.6;
            }
            
            /* サマリーカードを4列グリッド（横向き用） */
            .summary-cards {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 12px !important;
                page-break-after: avoid;
                margin-bottom: 20px;
            }
            
            .summary-card {
                page-break-inside: avoid;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 6px;
                text-align: center;
            }
            
            .summary-card .card-icon {
                font-size: 32px;
                margin-bottom: 8px;
            }
            
            .summary-card .card-value {
                font-size: 24px;
                font-weight: bold;
                margin: 8px 0;
            }
            
            .summary-card .card-label {
                font-size: 12px;
                color: #666;
            }
            
            /* リスク判定基準を3列グリッド */
            .criteria-grid {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 15px !important;
                page-break-inside: avoid;
            }
            
            .criteria-card {
                page-break-inside: avoid;
                padding: 15px;
                border: 2px solid;
                border-radius: 8px;
                font-size: 11px;
            }
            
            .criteria-card.high { border-color: #e74c3c; background: #ffebee; }
            .criteria-card.medium { border-color: #f39c12; background: #fff8e1; }
            .criteria-card.low { border-color: #27ae60; background: #e8f5e9; }
            
            .section {
                page-break-inside: avoid;
                margin-bottom: 30px;
            }
            
            .employee-card {
                page-break-inside: avoid;
                margin-bottom: 30px;
                border: 1px solid #ddd;
                padding: 15px;
                border-radius: 8px;
            }
            
            .employee-detail {
                display: block !important;
            }
            
            /* 詳細グリッドを2列 */
            .detail-grid {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 20px !important;
                page-break-inside: avoid;
            }
            
            .detail-section {
                page-break-inside: avoid;
            }
            
            /* レーダーチャート（横向き用） */
            .chart-container {
                page-break-inside: avoid;
                width: 100% !important;
                max-width: 280px !important;
                height: 280px !important;
                margin: 0 auto;
            }
            
            .chart-container canvas {
                width: 100% !important;
                height: 100% !important;
                max-width: 280px !important;
                max-height: 280px !important;
            }
            
            /* カテゴリー別スコアグリッド */
            .category-scores-grid {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 10px !important;
            }
            
            .category-score-item {
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 11px;
            }
            
            .questions-content {
                display: block !important;
                max-height: none !important;
            }
            
            .category-block {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .question-item {
                page-break-inside: avoid;
                margin-bottom: 10px;
                font-size: 11px;
            }
            
            /* AIフィードバック */
            .ai-feedback {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .feedback-section {
                margin-bottom: 15px;
            }
            
            /* ネクストアクション */
            .next-actions {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            
            .action-category {
                margin-bottom: 15px;
            }
            
            h1 { font-size: 22px; margin-bottom: 10px; page-break-after: avoid; }
            h2 { font-size: 18px; margin-bottom: 8px; page-break-after: avoid; }
            h3 { font-size: 16px; margin-bottom: 6px; page-break-after: avoid; }
            h4 { font-size: 14px; margin-bottom: 5px; page-break-after: avoid; }
            
            ul { margin-left: 20px; }
            li { margin-bottom: 5px; }
        `;
        pdfContainer.insertBefore(style, pdfContainer.firstChild);
        
        // レーダーチャートのレンダリングを待つ
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // PDF生成オプション
        const opt = {
            margin: [15, 15, 15, 15],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'landscape',
                compress: true
            },
            pagebreak: { 
                mode: ['avoid-all', 'css', 'legacy'],
                before: '.section',
                after: '.employee-card'
            }
        };
        
        // PDF生成
        await html2pdf().set(opt).from(pdfContainer).save();
        
        // ローディング削除
        if (loadingMsg && loadingMsg.parentNode) {
            loadingMsg.parentNode.removeChild(loadingMsg);
        }
        
        console.log('PDF生成完了:', filename);
        
    } catch (error) {
        if (loadingMsg && loadingMsg.parentNode) {
            loadingMsg.parentNode.removeChild(loadingMsg);
        }
        throw error;
    }
}

// CSV出力
function exportCSV() {
    // ヘッダー行: 基本情報 + 8カテゴリ + 全35問
    let csv = '従業員コード,国籍,調査日,総合スコア,リスクレベル,';
    csv += '業務スコア,給与スコア,家族スコア,人間関係スコア,日本語スコア,文化スコア,生活スコア,キャリアスコア,';
    for (let i = 1; i <= 35; i++) {
        csv += `Q${i},`;
    }
    csv = csv.slice(0, -1) + '\n'; // 最後のカンマを削除して改行
    
    // データ行
    allEmployees.forEach(emp => {
        const risk = calculateRiskLevel(emp);
        const riskText = { high: '高リスク', medium: '中リスク', low: '安定' }[risk];
        const categoryScores = typeof emp.category_scores === 'string' 
            ? JSON.parse(emp.category_scores) 
            : emp.category_scores;
        const answers = typeof emp.answers === 'string' 
            ? JSON.parse(emp.answers) 
            : emp.answers;
        
        // 基本情報
        csv += `${emp.employee_code},${emp.nationality},${emp.survey_date},${emp.total_score.toFixed(1)},${riskText},`;
        
        // 8カテゴリスコア
        csv += `${categoryScores.work || 0},${categoryScores.salary || 0},${categoryScores.family || 0},`;
        csv += `${categoryScores.relationship || 0},${categoryScores.communication || 0},${categoryScores.culture || 0},`;
        csv += `${categoryScores.living || 0},${categoryScores.career || 0},`;
        
        // 全35問の回答(キーは "q1", "q2", ... "q35")
        for (let i = 1; i <= 35; i++) {
            const answer = answers[`q${i}`] || '';
            csv += `${answer},`;
        }
        csv = csv.slice(0, -1) + '\n'; // 最後のカンマを削除して改行
    });
    
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `詳細レポート_${getURLParams().company}_${getURLParams().month}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// メイン初期化
async function init() {
    try {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        document.getElementById('content').style.display = 'none';
        
        await loadData();
        await displayHeader();
        updateSummaryCards();
        generateAISummary();
        displayEmployeeList();
        
        // 前月比較ボタンの表示制御（データが2ヶ月以上ある場合のみ表示）
        // 現在は非表示のまま
        
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        
    } catch (error) {
        console.error('初期化エラー:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorMessage').textContent = error.message;
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', init);
