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

// カテゴリー名のキー
const categoryKeys = ['work', 'salary', 'family', 'relationship', 'communication', 'culture', 'living', 'career'];

// ネガティブ設問番号(スコア反転対象)
const negativeQuestions = [16, 17, 23, 26];

// 質問タイプのマッピング
const questionTypes = {
    1: 'satisfaction', 2: 'satisfaction', 3: 'satisfaction', 4: 'satisfaction',
    5: 'satisfaction', 6: 'satisfaction', 7: 'satisfaction', 8: 'satisfaction',
    9: 'satisfaction', 10: 'availability', 11: 'satisfaction', 12: 'desire',
    13: 'satisfaction', 14: 'satisfaction', 15: 'availability', 16: 'negative',
    17: 'negative', 18: 'understanding', 19: 'satisfaction', 20: 'availability',
    21: 'availability', 22: 'familiarity', 23: 'negative', 24: 'satisfaction',
    25: 'satisfaction', 26: 'negative', 27: 'availability', 28: 'satisfaction',
    29: 'satisfaction', 30: 'desire', 31: 'desire', 32: 'desire',
    33: 'availability', 34: 'desire', 35: 'satisfaction'
};

// 質問のキー
const questionKeys = [
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
    'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20',
    'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30',
    'q31', 'q32', 'q33', 'q34', 'q35'
];

// ========== 初期化 ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded - Initializing...');
    
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect) {
        nationalitySelect.selectedIndex = 0;
    }
    
    const employeeCodeSelect = document.getElementById('employeeCode');
    if (employeeCodeSelect) {
        employeeCodeSelect.selectedIndex = 0;
    }
    
    setupEventListeners();
    detectLanguage();
});

// ========== イベントリスナー設定 ==========
function setupEventListeners() {
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect) {
        nationalitySelect.addEventListener('change', detectLanguage);
    }
    
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', startSurvey);
    }
    
    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', submitSurvey);
    }
}

// ========== 言語検出 ==========
function detectLanguage() {
    const nationalitySelect = document.getElementById('nationality');
    const lang = nationalitySelect.value;
    
    const languageMap = {
        'vietnam': 'vi', 'cambodia': 'km', 'india': 'hi', 'philippines': 'tl',
        'laos': 'lo', 'mongolia': 'mn', 'bangladesh': 'bn', 'srilanka': 'si',
        'myanmar': 'my', 'bhutan': 'dz', 'uzbekistan': 'uz', 'pakistan': 'ur',
        'thailand': 'th', 'indonesia': 'id', 'nepal': 'ne', 'china': 'zh'
    };
    
    currentLanguage = languageMap[lang] || 'ja';
    updateLanguage();
}

// ========== 言語更新 ==========
function updateLanguage() {
    if (!translations || !translations[currentLanguage]) {
        console.error('Translations not loaded');
        return;
    }
    
    const t = translations[currentLanguage];
    
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) headerTitle.textContent = t.title;
    
    const employeeCodeLabel = document.getElementById('employeeCodeLabel');
    if (employeeCodeLabel) employeeCodeLabel.textContent = t.employeeCodeLabel;
    
    const nationalityLabel = document.getElementById('nationalityLabel');
    if (nationalityLabel) nationalityLabel.textContent = t.nationalityLabel;
    
    const employeeCodePlaceholder = document.getElementById('employeeCodePlaceholder');
    if (employeeCodePlaceholder) employeeCodePlaceholder.textContent = t.employeeCodePlaceholder;
    
    const startButtonText = document.getElementById('startButtonText');
    if (startButtonText) startButtonText.textContent = t.startButton;
    
    const submitButtonText = document.getElementById('submitButtonText');
    if (submitButtonText) submitButtonText.textContent = t.submitButton;
    
    const anonymousMessage = document.getElementById('anonymousMessage');
    if (anonymousMessage) anonymousMessage.textContent = t.anonymousMessage;
    
    const anonymousSubMessage = document.getElementById('anonymousSubMessage');
    if (anonymousSubMessage) anonymousSubMessage.textContent = t.anonymousSubMessage;
}

// ========== アンケート開始 ==========
function startSurvey() {
    const employeeCode = document.getElementById('employeeCode').value;
    const nationality = document.getElementById('nationality').value;
    const t = translations[currentLanguage];
    
    if (!employeeCode || employeeCode === '') {
        alert(t.errorEmployeeCode);
        return;
    }
    
    if (!nationality || nationality === '') {
        alert(t.errorNationality);
        return;
    }
    
    if (checkDuplicate(employeeCode)) {
        alert(t.errorDuplicate);
        return;
    }
    
    surveyData.employeeCode = employeeCode;
    surveyData.nationality = nationality;
    surveyData.answers = new Array(35).fill(null);
    
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('surveySection').style.display = 'block';
    
    generateQuestions();
    window.scrollTo(0, 0);
}

// ========== 質問生成 ==========
function generateQuestions() {
    const t = translations[currentLanguage];
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 35; i++) {
        const questionNumber = i + 1;
        const questionKey = questionKeys[i];
        const questionType = questionTypes[questionNumber];
        const categoryIndex = categories.findIndex(cat => 
            questionNumber >= cat.start && questionNumber <= cat.end
        );
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.question = questionNumber;
        
        const categoryLabel = document.createElement('div');
        categoryLabel.className = 'category-label';
        categoryLabel.textContent = t.categories[categoryKeys[categoryIndex]];
        
        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.textContent = `Q${questionNumber}. ${t.questions[questionKey]}`;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'emoji-options';
        
        const options = t[questionType];
        const optionKeys = Object.keys(options);
        
        const emojis = {
            'satisfaction': ['😄', '🙂', '😐', '🙁', '😢'],
            'desire': ['💯', '😊', '😐', '😕', '😔'],
            'understanding': ['✅', '👍', '😐', '👎', '❌'],
            'familiarity': ['🌟', '😊', '😐', '😕', '😰'],
            'availability': ['✅', '👍', '😐', '👎', '❌'],
            'negative': ['❌', '👎', '😐', '👍', '✅', '💯']
        };
        
        optionKeys.forEach((optionKey, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'emoji-option';
            
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'emoji-btn';
            button.dataset.question = questionNumber;
            button.dataset.value = optionIndex + 1;
            
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[questionType][optionIndex];
            
            const label = document.createElement('div');
            label.className = 'emoji-label';
            label.textContent = options[optionKey];
            
            button.appendChild(emoji);
            button.appendChild(label);
            optionDiv.appendChild(button);
            optionsContainer.appendChild(optionDiv);
            
            button.addEventListener('click', () => selectAnswer(questionNumber, optionIndex + 1, button));
        });
        
        questionDiv.appendChild(categoryLabel);
        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsContainer);
        container.appendChild(questionDiv);
    }
}

// ========== 回答選択 ==========
function selectAnswer(questionNumber, value, button) {
    surveyData.answers[questionNumber - 1] = value;
    
    const allButtons = document.querySelectorAll(`button[data-question="${questionNumber}"]`);
    allButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    
    updateProgress();
    
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
    
    if (surveyData.answers.includes(null)) {
        alert(t.errorAllQuestions);
        return;
    }
    
    let totalScore = 0;
    surveyData.answers.forEach((answer, index) => {
        const questionNumber = index + 1;
        if (negativeQuestions.includes(questionNumber)) {
            totalScore += (7 - answer);
        } else {
            totalScore += answer;
        }
    });
    
    surveyData.totalScore = Math.round((totalScore / 210) * 100);
    surveyData.submittedAt = new Date().toISOString();
    
    saveData(surveyData);
    showCompletion();
}

// ========== データ保存 ==========
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
    document.getElementById('completionTitle').textContent = t.completionTitle;
    
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

// ========== 重複チェック ==========
function checkDuplicate(employeeCode) {
    const allData = JSON.parse(localStorage.getItem('surveyData') || '[]');
    const currentMonth = new Date().toISOString().slice(0, 7);
    
    return allData.some(entry => 
        entry.employeeCode === employeeCode && 
        entry.submittedAt.slice(0, 7) === currentMonth
    );
}
