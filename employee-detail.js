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

// 全35問の質問データ（ユーザー提供の質問文をそのまま使用）
const QUESTIONS = {
    1: {
        text: 'Q1. 仕事の内容は、自分に合っていますか？',
        choices: ['とても不満', 'やや不満', 'どちらでもない', 'やや満足', 'とても満足']
    },
    2: {
        text: 'Q2. 怪我や事故の心配なく、働けていますか？',
        choices: ['とても心配', 'やや心配', '少し心配', 'どちらでもない', 'あまり心配ない', '全く心配ない']
    },
    3: {
        text: 'Q3. 休みの日や働く時間について、納得していますか？',
        choices: ['とても不満', 'やや不満', 'どちらでもない', 'やや満足', 'とても満足']
    },
    4: {
        text: 'Q4. 職場の雰囲気は、良いと思いますか？',
        choices: ['とても悪い', 'やや悪い', 'どちらでもない', 'やや良い', 'とても良い']
    },
    5: {
        text: 'Q5. 給料の額に、満足していますか？',
        choices: ['とても不満', 'やや不満', 'どちらでもない', 'やや満足', 'とても満足']
    },
    6: {
        text: 'Q6. 残業や休日出勤をしたとき、ちゃんとお金がもらえますか？',
        choices: ['全くもらえない', 'あまりもらえない', '時々もらえる', 'だいたいもらえる', '必ずもらえる']
    },
    7: {
        text: 'Q7. 保険や休暇などの制度は、十分だと思いますか？',
        choices: ['とても不十分', 'やや不十分', 'どちらでもない', 'やや十分', 'とても十分']
    },
    8: {
        text: 'Q8. 生活に必要なお金を、稼げていますか？',
        choices: ['全く稼げない', 'あまり稼げない', 'どちらでもない', 'だいたい稼げる', '十分稼げる']
    },
    9: {
        text: 'Q9. 家族との連絡は、取れていますか？',
        choices: ['全く取れない', 'あまり取れない', 'どちらでもない', 'だいたい取れる', '十分取れる']
    },
    10: {
        text: 'Q10. 家族に送金する余裕はありますか？',
        choices: ['全くない', 'あまりない', '少しある', 'だいたいある', '十分ある']
    },
    11: {
        text: 'Q11. 自分の時間は、十分にありますか？',
        choices: ['全くない', 'あまりない', 'どちらでもない', 'だいたいある', '十分ある']
    },
    12: {
        text: 'Q12. 家族を日本に呼びたいと思いますか？',
        choices: ['全く思わない', 'あまり思わない', 'どちらでもない', 'やや思う', 'とても思う']
    },
    13: {
        text: 'Q13. 職場に、仲間がいますか？',
        choices: ['全くいない', 'あまりいない', 'どちらでもない', 'だいたいいる', 'たくさんいる']
    },
    14: {
        text: 'Q14. 上司や同僚は、あなたの話を聞いてくれますか？',
        choices: ['全く聞かない', 'あまり聞かない', 'どちらでもない', 'だいたい聞く', 'よく聞く']
    },
    15: {
        text: 'Q15. 困ったとき、仲間が助けてくれますか？',
        choices: ['全く助けない', 'あまり助けない', 'どちらでもない', 'だいたい助ける', 'よく助ける']
    },
    16: {
        text: 'Q16. 職場で、嫌なことや辛いことがありますか？',
        choices: ['いつもある', 'よくある', 'ときどきある', 'あまりない', 'ほとんどない', '全くない']
    },
    17: {
        text: 'Q17. 日本語を話したり聞いたりするのは、難しいですか？',
        choices: ['とても難しい', 'やや難しい', '少し難しい', 'どちらでもない', 'あまり難しくない', '全く難しくない']
    },
    18: {
        text: 'Q18. 仕事の説明は、わかりやすいですか？',
        choices: ['全くわからない', 'あまりわからない', 'どちらでもない', 'だいたいわかる', 'よくわかる']
    },
    19: {
        text: 'Q19. わからないことを質問しやすいですか？',
        choices: ['全く質問できない', 'あまり質問できない', 'どちらでもない', 'だいたい質問できる', 'いつでも質問できる']
    },
    20: {
        text: 'Q20. 会社は、日本語の勉強をサポートしてくれますか？',
        choices: ['全くしない', 'あまりしない', 'どちらでもない', 'だいたいする', 'とてもサポートする']
    },
    21: {
        text: 'Q21. 母国語で相談できる人がいますか？',
        choices: ['全くいない', 'あまりいない', 'どちらでもない', 'だいたいいる', 'たくさんいる']
    },
    22: {
        text: 'Q22. 日本の文化や習慣は、好きですか？',
        choices: ['とても嫌い', 'やや嫌い', 'どちらでもない', 'やや好き', 'とても好き']
    },
    23: {
        text: 'Q23. 文化の違いで困ることがありますか？',
        choices: ['いつもある', 'よくある', 'ときどきある', 'あまりない', 'ほとんどない', '全くない']
    },
    24: {
        text: 'Q24. 買い物や交通など、生活は便利ですか？',
        choices: ['とても不便', 'やや不便', 'どちらでもない', 'やや便利', 'とても便利']
    },
    25: {
        text: 'Q25. 日本の食事は、口に合いますか？',
        choices: ['全く合わない', 'あまり合わない', 'どちらでもない', 'だいたい合う', 'とても合う']
    },
    26: {
        text: 'Q26. 生活していて、困ることがありますか？',
        choices: ['いつもある', 'よくある', 'ときどきある', 'あまりない', 'ほとんどない', '全くない']
    },
    27: {
        text: 'Q27. 会社は、生活のサポートをしてくれますか？',
        choices: ['全くしない', 'あまりしない', 'どちらでもない', 'だいたいする', 'とてもサポートする']
    },
    28: {
        text: 'Q28. 寮や住む場所の設備に満足していますか？',
        choices: ['とても不満', 'やや不満', 'どちらでもない', 'やや満足', 'とても満足']
    },
    29: {
        text: 'Q29. 今の生活は、安全で快適だと思いますか？',
        choices: ['全く思わない', 'あまり思わない', 'どちらでもない', 'やや思う', 'とても思う']
    },
    30: {
        text: 'Q30. 今の仕事で、新しい技術や知識を学べていますか？',
        choices: ['全く学べない', 'あまり学べない', 'どちらでもない', 'だいたい学べる', 'とても学べる']
    },
    31: {
        text: 'Q31. 仕事の成果は、ちゃんと評価されていますか？',
        choices: ['全く評価されない', 'あまり評価されない', 'どちらでもない', 'だいたい評価される', 'とても評価される']
    },
    32: {
        text: 'Q32. この会社で、ずっと働きたいと思いますか？',
        choices: ['全く思わない', 'あまり思わない', 'どちらでもない', 'やや思う', 'とても思う']
    },
    33: {
        text: 'Q33. ビザの更新などは、会社がサポートしてくれますか？',
        choices: ['全くしない', 'あまりしない', 'どちらでもない', 'だいたいする', 'とてもサポートする']
    },
    34: {
        text: 'Q34. 学んだことは、母国に帰っても役立つと思いますか？',
        choices: ['全く思わない', 'あまり思わない', 'どちらでもない', 'やや思う', 'とても思う']
    },
    35: {
        text: 'Q35. 母国の友達にも「この会社で働いたほうがいいよ」と思えますか？',
        choices: ['全く思わない', 'あまり思わない', 'どちらでもない', 'やや思う', 'とても思う']
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
        
        const response = await fetch(`${API_BASE_URL}/api/survey-results`);
        if (!response.ok) throw new Error('データ取得失敗');
        
        const data = await response.json();
        
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
