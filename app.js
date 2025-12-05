// ========== グローバル変数 ==========
let currentLanguage = 'ja';
let surveyData = {
    employeeCode: '',
    nationality: '',
    answers: [],
    totalScore: 0,
    submittedAt: ''
};

// カテゴリー定義(8カテゴリー)
const categories = [
    { start: 1, end: 4 },   // 業務・職場環境
    { start: 5, end: 8 },   // 給与・待遇
    { start: 9, end: 12 },  // 家族・プライベート事情
    { start: 13, end: 16 }, // 人間関係
    { start: 17, end: 21 }, // 日本語・コミュニケーション
    { start: 22, end: 23 }, // 文化・価値観
    { start: 24, end: 29 }, // 生活環境
    { start: 30, end: 35 }  // キャリア・将来の見通し
];

// ネガティブ設問番号(スコア反転対象)
const negativeQuestions = [16, 17, 23, 26, 27];

// 質問タイプのマッピング (修正確定版)
const questionTypes = {
    1: 'satisfaction',   // 仕事の内容は、自分に合っていますか?
    2: 'satisfaction',   // 働く場所は、安全だと思いますか?
    3: 'satisfaction',   // 休みの日や働く時間は、ちょうどよいですか?
    4: 'satisfaction',   // 職場の雰囲気は、働きやすいですか?
    5: 'satisfaction',   // 給料の金額に、満足していますか?
    6: 'satisfaction',   // 残業代や手当は、きちんと受け取れていますか?
    7: 'satisfaction',   // 保険や休暇などの制度は、十分だと思いますか?
    8: 'satisfaction',   // この会社で働くことで、生活に必要なお金を得られていますか?
    9: 'satisfaction',   // 家族と連絡をとる時間は、十分にありますか?
    10: 'availability',  // 家族に送金する余裕はありますか?
    11: 'satisfaction',  // 自分の時間(休みやプライベート)は、十分にありますか?
    12: 'desire',        // 将来、家族を日本に呼びたいと思いますか?
    13: 'satisfaction',  // 同じ技能実習生の仲間との関係は良いですか?
    14: 'satisfaction',  // 日本人の上司や同僚は、あなたの話を聞いてくれますか?
    15: 'availability',  // 困ったときに、同じ技能実習生の仲間は助けてくれますか?
    16: 'negative',      // 職場で、いじめや差別を受けることはありますか?
    17: 'negative',      // 日本語での会話に困ることはありますか?
    18: 'understanding', // 仕事の説明や指示は分かりやすいですか?
    19: 'satisfaction',  // 分からないことを質問しやすいですか?
    20: 'availability',  // 会社は、日本語の勉強を助けてくれますか?
    21: 'availability',  // 母国語で相談できる人(通訳や先輩など)はいますか?
    22: 'familiarity',   // 日本の文化や習慣に、慣れていますか?
    23: 'negative',      // 仕事中に文化の違いで困ることはありますか?
    24: 'satisfaction',  // 住んでいる場所(寮・アパートなど)は快適ですか?
    25: 'satisfaction',  // 生活費は、給料に対してちょうどよいですか?
    26: 'negative',      // 日本での生活で困ることはありますか?
    27: 'availability',  // 会社は生活のサポートをしてくれますか?
    28: 'satisfaction',  // 寮や家での生活環境(部屋の広さ・設備など)に満足していますか?
    29: 'satisfaction',  // 日本での生活は、安全で快適ですか?
    30: 'desire',        // 今の仕事で、技術や知識が身についていますか?
    31: 'desire',        // 頑張った分だけ、評価や待遇が良くなると感じますか?
    32: 'desire',        // この会社で、長く働きたいと思いますか?
    33: 'availability',  // ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?
    34: 'desire',        // この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?
    35: 'satisfaction'   // 母国の友達にも「この会社で働いたほうがいいよ」と思えますか?
};

// ========== 初期化 ==========
document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    setupEventListeners();
});

// ========== 言語検出 (16カ国対応) ==========
function detectLanguage() {
    const nationalitySelect = document.getElementById('nationality');
    const lang = nationalitySelect.value;
    
    // 16カ国の言語マッピング
    const languageMap = {
        'vietnam': 'vi',
        'cambodia': 'km',
        'india': 'hi',
        'philippines': 'tl',
        'laos': 'lo',
        'mongolia': 'mn',
        'bangladesh': 'bn',
        'srilanka': 'si',
        'myanmar': 'my',
        'bhutan': 'dz',
        'uzbekistan': 'uz',
        'pakistan': 'ur',
        'thailand': 'th',
        'indonesia': 'id',
        'nepal': 'ne',
        'china': 'zh'
    };
    
    currentLanguage = languageMap[lang] || 'ja';
    updateLanguage();
}

// ========== 言語更新 ==========
function updateLanguage() {
    const t = translations[currentLanguage];
    
    // タイトル
    document.querySelector('h1').textContent = t.title;
    
    // ラベル
    document.querySelector('label[for="employeeCode"]').textContent = t.employeeCodeLabel;
    document.querySelector('label[for="nationality"]').textContent = t.nationalityLabel;
    
    // プレースホルダー
    document.getElementById('employeeCode').placeholder = t.employeeCodePlaceholder;
    
    // 国籍オプション (16カ国)
    const nationalityOptions = t.nationalities;
    const nationalitySelect = document.getElementById('nationality');
    nationalitySelect.innerHTML = nationalityOptions.map((n, i) => {
        const values = ['vietnam', 'cambodia', 'india', 'philippines', 'laos', 'mongolia', 
                       'bangladesh', 'srilanka', 'myanmar', 'bhutan', 'uzbekistan', 'pakistan',
                       'thailand', 'indonesia', 'nepal', 'china'];
        return `<option value="${values[i]}">${n}</option>`;
    }).join('');
    
    // ボタン
    document.getElementById('startBtn').textContent = t.startButton;
    document.getElementById('submitBtn').textContent = t.submitButton;
}

// ========== イベントリスナー設定 ==========
function setupEventListeners() {
    // 国籍変更で言語切り替え
    document.getElementById('nationality').addEventListener('change', detectLanguage);
    
    // アンケート開始
    document.getElementById('startBtn').addEventListener('click', startSurvey);
    
    // 送信
    document.getElementById('submitBtn').addEventListener('click', submitSurvey);
}

// ========== アンケート開始 ==========
function startSurvey() {
    const employeeCode = document.getElementById('employeeCode').value.trim();
    const nationality = document.getElementById('nationality').value;
    const t = translations[currentLanguage];
    
    // 入力チェック
    if (!employeeCode) {
        alert(t.errorEmployeeCode);
        return;
    }
    
    if (!nationality) {
        alert(t.errorNationality);
        return;
    }
    
    // 月次重複チェック
    if (checkDuplicate(employeeCode)) {
        alert(t.errorDuplicate);
        return;
    }
    
    // データ初期化
    surveyData.employeeCode = employeeCode;
    surveyData.nationality = nationality;
    surveyData.answers = new Array(35).fill(null);
    
    // 画面切り替え
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('surveySection').style.display = 'block';
    
    // 質問生成
    generateQuestions();
}

// ========== 質問生成 (35問・6種類の回答形式) ==========
function generateQuestions() {
    const t = translations[currentLanguage];
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    t.questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const questionType = questionTypes[questionNumber];
        const categoryIndex = categories.findIndex(cat => 
            questionNumber >= cat.start && questionNumber <= cat.end
        );
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.question = questionNumber;
        
        // カテゴリー番号表示
        const categoryLabel = document.createElement('div');
        categoryLabel.className = 'category-label';
        categoryLabel.textContent = `${categoryIndex + 1}. ${t.categories[categoryIndex]}`;
        
        // 質問タイトル
        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.textContent = `Q${questionNumber}. ${question}`;
        
        // 回答選択肢コンテナ
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'emoji-options';
        
        // 質問タイプに応じた選択肢を取得
        const options = t.choices[questionType];
        
        // 絵文字と選択肢を生成
        options.forEach((optionText, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'emoji-option';
            
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'emoji-btn';
            button.dataset.question = questionNumber;
            button.dataset.value = optionIndex + 1; // 1～5または1～6
            
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            
            // 質問タイプに応じた絵文字
            const emojis = {
                'satisfaction': ['😄', '🙂', '😐', '😟', '😢'],
                'desire': ['💯', '😊', '😐', '😕', '😔'],
                'understanding': ['✅', '👍', '😐', '👎', '❌'],
                'familiarity': ['🌟', '😊', '😐', '😕', '😰'],
                'availability': ['✅', '👍', '😐', '👎', '❌'],
                'negative': ['❌', '👎', '😐', '👍', '✅', '💯']
            };
            
            emoji.textContent = emojis[questionType][optionIndex];
            
            const label = document.createElement('div');
            label.className = 'emoji-label';
            label.textContent = optionText;
            
            button.appendChild(emoji);
            button.appendChild(label);
            optionDiv.appendChild(button);
            optionsContainer.appendChild(optionDiv);
            
            // クリックイベント
            button.addEventListener('click', () => selectAnswer(questionNumber, optionIndex + 1, button));
        });
        
        questionDiv.appendChild(categoryLabel);
        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsContainer);
        container.appendChild(questionDiv);
    });
}

// ========== 回答選択 (自動スクロール付き) ==========
function selectAnswer(questionNumber, value, button) {
    surveyData.answers[questionNumber - 1] = value;
    
    // 同じ質問の他のボタンの選択を解除
    const allButtons = document.querySelectorAll(`button[data-question="${questionNumber}"]`);
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // クリックされたボタンを選択状態に
    button.classList.add('selected');
    
    // 進捗バー更新
    updateProgress();
    
    // 次の質問へ自動スクロール (最終問以外)
    if (questionNumber < 35) {
        setTimeout(() => scrollToNextQuestion(questionNumber), 300);
    }
}

// ========== 次の質問へスクロール ==========
function scrollToNextQuestion(currentQuestion) {
    const nextQuestion = document.querySelector(`.question[data-question="${currentQuestion + 1}"]`);
    if (nextQuestion) {
        const offset = 80; // プログレスバーの高さ
        const elementPosition = nextQuestion.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ========== 進捗バー更新 ==========
function updateProgress() {
    const answered = surveyData.answers.filter(a => a !== null).length;
    const progress = Math.round((answered / 35) * 100);
    
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${answered} / 35`;
}

// ========== アンケート送信 ==========
function submitSurvey() {
    const t = translations[currentLanguage];
    
    // 全問回答チェック
    if (surveyData.answers.includes(null)) {
        alert(t.errorIncomplete);
        return;
    }
    
    // スコア計算 (ネガティブ設問は反転)
    let totalScore = 0;
    surveyData.answers.forEach((answer, index) => {
        const questionNumber = index + 1;
        if (negativeQuestions.includes(questionNumber)) {
            // ネガティブ設問: 6点から引く (例: 1→6, 2→5, 3→4...)
            totalScore += (7 - answer);
        } else {
            totalScore += answer;
        }
    });
    
    // 100点満点に正規化 (35問×6点満点=210点満点 → 100点満点)
    surveyData.totalScore = Math.round((totalScore / 210) * 100);
    surveyData.submittedAt = new Date().toISOString();
    
    // データ保存
    saveData(surveyData);
    
    // 完了画面表示
    showCompletion();
}

// ========== データ保存 (LocalStorage) ==========
function saveData(data) {
    let allData = JSON.parse(localStorage.getItem('surveyData') || '[]');
    allData.push(data);
    
    // 最大100件まで保存
    if (allData.length > 100) {
        allData = allData.slice(-100);
    }
    
    localStorage.setItem('surveyData', JSON.stringify(allData));
}

// ========== 完了画面表示 ==========
function showCompletion() {
    const t = translations[currentLanguage];
    
    document.getElementById('surveySection').style.display = 'none';
    document.getElementById('completionSection').style.display = 'flex';
    document.querySelector('#completionSection h2').textContent = t.completionMessage;
    
    // 5秒後に自動リセット
    setTimeout(() => {
        resetSurvey();
    }, 5000);
}

// ========== リセット ==========
function resetSurvey() {
    surveyData = {
        employeeCode: '',
        nationality: '',
        answers: [],
        totalScore: 0,
        submittedAt: ''
    };
    
    document.getElementById('employeeCode').value = '';
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressText').textContent = '0 / 35';
    document.getElementById('completionSection').style.display = 'none';
    document.getElementById('startSection').style.display = 'block';
}

// ========== 重複チェック (月次) ==========
function checkDuplicate(employeeCode) {
    const allData = JSON.parse(localStorage.getItem('surveyData') || '[]');
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM形式
    
    return allData.some(entry => 
        entry.employeeCode === employeeCode && 
        entry.submittedAt.slice(0, 7) === currentMonth
    );
}

// ========== 日付フォーマット ==========
function formatDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
