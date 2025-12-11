// API設定
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義（既存のまま）
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

// 全35問の質問データ（ユーザー提供の正しい質問文と選択肢をそのまま使用）
const QUESTIONS = {
    1: {
        text: 'Q1. 仕事の内容は、自分に合っていますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    2: {
        text: 'Q2. 働く場所で、怪我や事故の心配はありませんか?',
        choices: ['⭕ 全くない', '◯ ほとんどない', '△ あまりない', '▽ 少しある', '× よくある', '❌ いつもある']
    },
    3: {
        text: 'Q3. 休みの日や働く時間は、ちょうどよいですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    4: {
        text: 'Q4. 職場の雰囲気は、働きやすいですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    5: {
        text: 'Q5. 給料の金額に、満足していますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    6: {
        text: 'Q6. 残業代や手当は、きちんと受け取れていますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    7: {
        text: 'Q7. 保険や休暇などの制度は、十分だと思いますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    8: {
        text: 'Q8. この会社で働くことで、生活に必要なお金を得られていますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    9: {
        text: 'Q9. 家族と連絡をとる時間は、十分にありますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    10: {
        text: 'Q10. 家族に送金する余裕はありますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    11: {
        text: 'Q11. 自分の時間(休みやプライベート)は、十分にありますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    12: {
        text: 'Q12. 将来、家族を日本に呼びたいと思いますか?',
        choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う']
    },
    13: {
        text: 'Q13. 同じ技能実習生の仲間との関係は良いですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    14: {
        text: 'Q14. 日本人の上司や同僚は、あなたの話を聞いてくれますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    15: {
        text: 'Q15. 困ったときに、同じ技能実習生の仲間は助けてくれますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    16: {
        text: 'Q16. 職場で、いじめや差別を受けることはありますか?',
        choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある']
    },
    17: {
        text: 'Q17. 日本語での会話に困ることはありますか?',
        choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある']
    },
    18: {
        text: 'Q18. 仕事の説明や指示は分かりやすいですか?',
        choices: ['❌ 全く分からない', '😕 あまり分からない', '😐 普通', '🙂 だいたい分かる', '⭕ よく分かる']
    },
    19: {
        text: 'Q19. 分からないことを質問しやすいですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    20: {
        text: 'Q20. 会社は、日本語の勉強を助けてくれますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    21: {
        text: 'Q21. 母国語で相談できる人(通訳や先輩など)はいますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    22: {
        text: 'Q22. 日本の文化や習慣に、慣れていますか?',
        choices: ['😰 全く慣れていない', '😕 あまり慣れていない', '😐 普通', '😊 やや慣れている', '🌟 とても慣れている']
    },
    23: {
        text: 'Q23. 仕事中に文化の違いで困ることはありますか?',
        choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある']
    },
    24: {
        text: 'Q24. 住んでいる場所(寮・アパートなど)は快適ですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    25: {
        text: 'Q25. 生活費は、給料に対してちょうどよいですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    26: {
        text: 'Q26. 日本での生活で困ることはありますか?',
        choices: ['⭕ 全くない', '🙂 ほとんどない', '😐 時々ある', '😕 よくある', '😟 かなりある', '❌ いつもある']
    },
    27: {
        text: 'Q27. 会社は生活のサポートをしてくれますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    28: {
        text: 'Q28. 寮や家での生活環境(部屋の広さ・設備など)に満足していますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    29: {
        text: 'Q29. 日本での生活は、安全で快適ですか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    },
    30: {
        text: 'Q30. 今の仕事で、技術や知識が身についていますか?',
        choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う']
    },
    31: {
        text: 'Q31. 頑張った分だけ、評価や待遇が良くなると感じますか?',
        choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う']
    },
    32: {
        text: 'Q32. この会社で、長く働きたいと思いますか?',
        choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う']
    },
    33: {
        text: 'Q33. ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?',
        choices: ['❌ 全くない', '😕 あまりない', '😐 普通', '🙂 ある程度ある', '⭕ 十分ある']
    },
    34: {
        text: 'Q34. この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?',
        choices: ['😔 全くそう思わない', '😕 あまり思わない', '😐 普通', '😊 ややそう思う', '⭕ とてもそう思う']
    },
    35: {
        text: 'Q35. 母国の友達にも「この会社で働いたほうがいいよ」と思えますか?',
        choices: ['😢 とても不満', '🙁 やや不満', '😐 普通', '🙂 やや満足', '😄 とても満足']
    }
};

// URLパラメータから従業員情報を取得
function getEmployeeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        company: params.get('company') || '辻麺業株式会社',
        employee: params.get('employee') || '1',
        month: params.get('month') || '2025-12'
    };
}

// データ読み込み
async function loadEmployeeData() {
    try {
        const params = getEmployeeFromURL();
        
        const response = await fetch(`${API_BASE_URL}/api/results`);
        if (!response.ok) throw new Error('データ取得失敗');
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.error || 'データ取得失敗');
        }
        
        const data = result.data || [];
        
        // 該当従業員のデータを検索
        const employeeData = data.find(item => 
            item.company_code === params.company &&
            item.employee_code === params.employee &&
            item.year_month === params.month
        );
        
        if (!employeeData) {
            throw new Error('該当する従業員データが見つかりません');
        }
        
        return employeeData;
        
    } catch (error) {
        console.error('データ読み込みエラー:', error);
        throw error;
    }
}

// 基本情報を表示
function displayBasicInfo(data) {
    document.getElementById('employeeCode').textContent = data.employee_code;
    document.getElementById('companyName').textContent = data.company_code;
    
    // 国籍コードを日本語に変換
    const nationalityMap = {
        'mm': 'ミャンマー',
        'vn': 'ベトナム',
        'id': 'インドネシア',
        'ph': 'フィリピン',
        'th': 'タイ'
    };
    document.getElementById('nationality').textContent = nationalityMap[data.nationality] || data.nationality;
    
    // 日付フォーマット
    const date = new Date(data.survey_date);
    document.getElementById('surveyDate').textContent = 
        `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

// 総合スコアを表示
function displayTotalScore(data) {
    document.getElementById('totalScore').textContent = data.total_score.toFixed(1);
}

// カテゴリー別スコアを表示
function displayCategoryScores(data) {
    const container = document.getElementById('categoryScores');
    container.innerHTML = '';
    
    const categoryScores = typeof data.category_scores === 'string' 
        ? JSON.parse(data.category_scores) 
        : data.category_scores;
    
    Object.entries(CATEGORIES).forEach(([key, category]) => {
        const score = categoryScores[key] || 0;
        const isAlert = score < 45; // 45点以下は警告
        
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-name">
                ${category.icon} ${category.name}
                ${isAlert ? '<span class="alert-badge">⚠️ 注意</span>' : ''}
            </div>
            <div class="category-score">${score.toFixed(0)}点</div>
        `;
        container.appendChild(card);
    });
}

// レーダーチャートを描画
function drawRadarChart(data) {
    const categoryScores = typeof data.category_scores === 'string' 
        ? JSON.parse(data.category_scores) 
        : data.category_scores;
    
    const labels = Object.values(CATEGORIES).map(cat => cat.name);
    const scores = Object.keys(CATEGORIES).map(key => categoryScores[key] || 0);
    
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: `従業員 ${data.employee_code}`,
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
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 詳細回答を表示
function displayQuestions(data) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    const answers = typeof data.answers === 'string' 
        ? JSON.parse(data.answers) 
        : data.answers;
    
    Object.entries(CATEGORIES).forEach(([key, category]) => {
        const block = document.createElement('div');
        block.className = 'category-block';
        
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = `${category.icon} ${category.name}`;
        block.appendChild(header);
        
        category.questions.forEach(qNum => {
            const question = QUESTIONS[qNum];
            const answerValue = answers[`q${qNum}`];
            
            const item = document.createElement('div');
            item.className = 'question-item';
            
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = question.text;
            item.appendChild(questionText);
            
            const choicesDiv = document.createElement('div');
            choicesDiv.className = 'choices';
            
            question.choices.forEach((choice, index) => {
                const choiceEl = document.createElement('div');
                choiceEl.className = 'choice';
                choiceEl.textContent = choice;
                
                // 選択された回答をハイライト
                if (index === answerValue) {
                    choiceEl.classList.add('selected');
                }
                
                choicesDiv.appendChild(choiceEl);
            });
            
            item.appendChild(choicesDiv);
            block.appendChild(item);
        });
        
        container.appendChild(block);
    });
}

// メイン処理
async function init() {
    try {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        document.getElementById('content').style.display = 'none';
        
        const data = await loadEmployeeData();
        
        displayBasicInfo(data);
        displayTotalScore(data);
        displayCategoryScores(data);
        drawRadarChart(data);
        displayQuestions(data);
        
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        
    } catch (error) {
        console.error('初期化エラー:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').textContent = error.message;
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', init);
