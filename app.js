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
const negativeQuestions = [16, 17, 23, 26];

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
    console.log('Page loaded - Initializing...');
    
    // 国籍選択を最初の項目にリセット
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect) {
        nationalitySelect.selectedIndex = 0;
        console.log('Nationality reset to:', nationalitySelect.value);
    }
    
    // 従業員コードをリセット
    const employeeCodeSelect = document.getElementById('employeeCode');
    if (employeeCodeSelect) {
        employeeCodeSelect.selectedIndex = 0;
    }
    
    // イベントリスナー設定
    setupEventListeners();
    
    // 初期言語検出
    detectLanguage();
});

// ========== イベントリスナー設定 ==========
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // 国籍変更で言語切り替え
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect) {
        nationalitySelect.addEventListener('change', detectLanguage);
        console.log('Nationality change listener attached');
    }
    
    // アンケート開始ボタン
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', startSurvey);
        console.log('Start button listener attached');
    } else {
        console.error('Start button not found!');
    }
    
    // 送信ボタン
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', submitSurvey);
        console.log('Submit button listener attached');
    }
}

// ========== 言語検出 (16カ国対応) ==========
function detectLanguage() {
    const nationalitySelect = document.getElementById('nationality');
    const lang = nationalitySelect.value;
    
    console.log('Detecting language for:', lang);
    
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
    console.log('Current language set to:', currentLanguage);
    
    updateLanguage();
}

// ========== 言語更新 ==========
function updateLanguage() {
    if (!translations || !translations[currentLanguage]) {
        console.error('Translations not loaded for language:', currentLanguage);
        return;
    }
    
    const t = translations[currentLanguage];
    
    // タイトル
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) headerTitle.textContent = t.title;
    
    // ラベル
    const employeeCodeLabel = document.getElementById('employeeCodeLabel');
    if (employeeCodeLabel) employeeCodeLabel.textContent = t.employeeCodeLabel;
    
    const nationalityLabel = document.getElementById('nationalityLabel');
    if (nationalityLabel) nationalityLabel.textContent = t.nationalityLabel;
    
    // プレースホルダー
    const employeeCodePlaceholder = document.getElementById('employeeCodePlaceholder');
    if (employeeCodePlaceholder) employeeCodePlaceholder.textContent = t.employeeCodePlaceholder;
    
    // ボタン
    const startButtonText = document.getElementById('startButtonText');
    if (startButtonText) startButtonText.textContent = t.startButton;
    
    const submitButtonText = document.getElementById('submitButtonText');
    if (submitButtonText) submitButtonText.textContent = t.submitButton;
    
    // 匿名メッセージ
    const anonymousMessage = document.getElementById('anonymousMessage');
    if (anonymousMessage) anonymousMessage.textContent = t.anonymousTitle;
    
    const anonymousSubMessage = document.getElementById('anonymousSubMessage');
    if (anonymousSubMessage) anonymousSubMessage.textContent = t.anonymousSubtitle;
    
    console.log('Language updated successfully');
}

// ========== アンケート開始 ==========
function startSurvey() {
    console.log('Start survey button clicked');
    
    const employeeCode = document.getElementById('employeeCode').value;
    const nationality = document.getElementById('nationality').value;
    
    console.log('Employee Code:', employeeCode);
    console.log('Nationality:', nationality);
    
    const t = translations[currentLanguage];
    
    // 入力チェック
    if (!employeeCode || employeeCode === '') {
        alert(t.errorEmployeeCode || '従業員コードを選択してください');
        return;
    }
    
    if (!nationality || nationality === '') {
        alert(t.errorNationality || '国籍を選択してください');
        return;
    }
    
    // 月次重複チェック
    if (checkDuplicate(employeeCode)) {
        alert(t.errorDuplicate || '今月はすでに回答済みです');
        return;
    }
    
    // データ初期化
    surveyData.employeeCode = employeeCode;
    surveyData.nationality = nationality;
    surveyData.answers = new Array(35).fill(null);
    
    console.log('Survey data initialized:', surveyData);
    
    // 画面切り替え
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('surveySection').style.display = 'block';
    
    // 質問生成
    generateQuestions();
    
    // ページトップにスクロール
    window.scrollTo(0, 0);
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
            button.dataset.value = optionIndex + 1;
            
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            
            // 質問タイプに応じた絵文字
            const emojis = {
                'satisfaction': ['😄', '🙂', '😐', '🙁', '😢'],
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
    
    console.log('Questions generated successfully');
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
        const offset = 80;
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
    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('progressPercentage').textContent = `${progress}%`;
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
            totalScore += (7 - answer);
        } else {
            totalScore += answer;
        }
    });
    
    // 100点満点に正規化
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
    document.getElementById('completionTitle').textContent = t.completionMessage;
    
    // カウントダウン
    let countdown = 5;
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(interval);
            resetSurvey();
        }
    }, 1000);
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
    
    document.getElementById('employeeCode').selectedIndex = 0;
    document.getElementById('nationality').selectedIndex = 0;
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('answeredCount').textContent = '0';
    document.getElementById('progressPercentage').textContent = '0%';
    document.getElementById('completionSection').style.display = 'none';
    document.getElementById('initialScreen').style.display = 'block';
    
    window.scrollTo(0, 0);
}

// ========== 重複チェック (月次) ==========
function checkDuplicate(employeeCode) {
    const allData = JSON.parse(localStorage.getItem('surveyData') || '[]');
    const currentMonth = new Date().toISOString().slice(0, 7);
    
    return allData.some(entry => 
        entry.employeeCode === employeeCode && 
        entry.submittedAt.slice(0, 7) === currentMonth
    );
}
