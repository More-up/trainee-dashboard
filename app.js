// ===========================
// グローバル変数
// ===========================
let currentLanguage = 'ja';
let surveyData = {
  companyCode: '',
  employeeCode: '',
  nationality: '',
  yearMonth: '',
  timestamp: '',
  answers: [],
  totalScore: 0
};

// カテゴリー定義
const categories = {
  work: { questions: [1, 2, 3, 4] },
  salary: { questions: [5, 6, 7, 8] },
  family: { questions: [9, 10, 11, 12] },
  relationship: { questions: [13, 14, 15, 16] },
  communication: { questions: [17, 18, 19, 20, 21] },
  culture: { questions: [22, 23] },
  living: { questions: [24, 25, 26, 27, 28, 29] },
  career: { questions: [30, 31, 32, 33, 34, 35] }
};

// ネガティブ質問(逆スコアリング)
const negativeQuestions = [16, 17, 23, 26];

// ===========================
// 初期化
// ===========================
window.addEventListener('DOMContentLoaded', () => {
  // 言語自動検出
  detectLanguage();
  
  // 言語選択イベント
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateLanguage();
  });
  
  // URLパラメータから会社コード取得
  const urlParams = new URLSearchParams(window.location.search);
  surveyData.companyCode = urlParams.get('company') || '';
  
  // ボタンイベント設定
  const startButton = document.getElementById('startButton');
  if (startButton) {
    startButton.addEventListener('click', startSurvey);
  }
  
  const submitButton = document.getElementById('submitButton');
  if (submitButton) {
    submitButton.addEventListener('click', submitSurvey);
  }
  
  // 初期表示
  updateLanguage();
});

// ===========================
// 言語自動検出
// ===========================
function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  
  const langMap = {
    'ja': 'ja',
    'vi': 'vi',
    'zh': 'zh',
    'zh-CN': 'zh',
    'zh-TW': 'zh',
    'tl': 'tl',
    'fil': 'tl',
    'id': 'id',
    'th': 'th',
    'ne': 'ne',
    'hi': 'hi',
    'km': 'km',
    'my': 'my'
  };
  
  const detectedLang = langMap[browserLang] || langMap[browserLang.split('-')[0]] || 'ja';
  currentLanguage = detectedLang;
  document.getElementById('languageSelect').value = detectedLang;
}

// ===========================
// 言語更新
// ===========================
function updateLanguage() {
  const t = translations[currentLanguage];
  
  // ヘッダー
  document.getElementById('headerTitle').textContent = t.title;
  const languageLabelTextEl = document.getElementById('languageLabelText');
  if (languageLabelTextEl) {
    languageLabelTextEl.textContent = t.languageLabel;
  }
  
  // 初期画面
  document.getElementById('anonymousMessage').textContent = t.anonymousMessage;
  document.getElementById('anonymousSubMessage').textContent = t.anonymousSubMessage;
  document.getElementById('employeeCodeLabel').textContent = t.employeeCodeLabel;
  document.getElementById('employeeCodePlaceholder').textContent = t.employeeCodePlaceholder;
  document.getElementById('nationalityLabel').textContent = t.nationalityLabel;
  document.getElementById('nationalityPlaceholder').textContent = t.nationalityPlaceholder;
  document.getElementById('startButtonText').textContent = t.startButton;
  
  // 国籍オプション
  document.getElementById('nationalityMyanmar').textContent = '🇲🇲 ' + t.nationalities.myanmar;
  document.getElementById('nationalityVietnam').textContent = '🇻🇳 ' + t.nationalities.vietnam;
  document.getElementById('nationalityPhilippines').textContent = '🇵🇭 ' + t.nationalities.philippines;
  document.getElementById('nationalityIndonesia').textContent = '🇮🇩 ' + t.nationalities.indonesia;
  document.getElementById('nationalityThailand').textContent = '🇹🇭 ' + t.nationalities.thailand;
  document.getElementById('nationalityNepal').textContent = '🇳🇵 ' + t.nationalities.nepal;
  document.getElementById('nationalityIndia').textContent = '🇮🇳 ' + t.nationalities.india;
  document.getElementById('nationalityCambodia').textContent = '🇰🇭 ' + t.nationalities.cambodia;
  document.getElementById('nationalityChina').textContent = '🇨🇳 ' + t.nationalities.china;
  
  // フッター情報
  const footerInfoEl = document.getElementById('footerInfo');
  if (footerInfoEl) {
    footerInfoEl.textContent = t.footerInfo || '所要時間: 約5〜10分';
  }
}

// ===========================
// アンケート開始
// ===========================
function startSurvey() {
  const employeeCode = document.getElementById('employeeCode').value;
  const nationality = document.getElementById('nationality').value;
  const t = translations[currentLanguage];
  
  // バリデーション
  if (!employeeCode) {
    alert(t.errorEmployeeCode);
    return;
  }
  
  if (!nationality) {
    alert(t.errorNationality);
    return;
  }
  
  // 重複チェック
  const currentYearMonth = getCurrentYearMonth();
  if (checkDuplicate(employeeCode, currentYearMonth)) {
    const existingData = getExistingData(employeeCode, currentYearMonth);
    const errorMsg = t.errorDuplicate
      .replace('{code}', employeeCode)
      .replace('{date}', formatDate(existingData.timestamp));
    alert(errorMsg);
    return;
  }
  
  // データ保存
  surveyData.employeeCode = employeeCode;
  surveyData.nationality = nationality;
  surveyData.yearMonth = currentYearMonth;
  surveyData.timestamp = new Date().toISOString();
  surveyData.answers = new Array(35).fill(0);
  
  // 画面切り替え
  document.getElementById('initialScreen').style.display = 'none';
  document.getElementById('surveySection').style.display = 'block';
  
  // 質問生成
  generateQuestions();
  
  // プログレス更新
  updateProgress();
  
  // ページトップへスクロール
  window.scrollTo(0, 0);
}

// ===========================
// 質問生成
// ===========================
function generateQuestions() {
  const t = translations[currentLanguage];
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';
  
  Object.keys(categories).forEach(categoryKey => {
    const category = categories[categoryKey];
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    
    // カテゴリーヘッダー
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <span class="material-icons category-icon">folder</span>
      <h2 class="category-title">${t.categories[categoryKey]}</h2>
    `;
    categoryDiv.appendChild(header);
    
    // 質問
    category.questions.forEach(qNum => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.setAttribute('data-question', qNum);
      
      const questionText = document.createElement('p');
      questionText.className = 'question-text';
      questionText.textContent = `Q${qNum}. ${t.questions['q' + qNum]}`;
      questionDiv.appendChild(questionText);
      
      // 絵文字オプション
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'emoji-options';
      
      const isNegative = negativeQuestions.includes(qNum);
      const options = isNegative ? t.negative : t.positive;
      const emojis = isNegative 
        ? ['😄', '😊', '😐', '😕', '😟', '😭']
        : ['😄', '😊', '😐', '😕', '😟', '😭'];
      const scores = isNegative
        ? [6, 5, 4, 3, 2, 1]
        : [6, 5, 4, 3, 2, 1];
      
      for (let i = 1; i <= 6; i++) {
        const btn = document.createElement('button');
        btn.className = 'emoji-btn';
        btn.setAttribute('data-score', scores[i - 1]);
        btn.setAttribute('data-question', qNum);
        btn.onclick = () => selectAnswer(qNum, scores[i - 1]);
        
        btn.innerHTML = `
          <span class="emoji-icon">${emojis[i - 1]}</span>
          <span class="emoji-label">${options['option' + i]}</span>
        `;
        
        optionsDiv.appendChild(btn);
      }
      
      questionDiv.appendChild(optionsDiv);
      categoryDiv.appendChild(questionDiv);
    });
    
    container.appendChild(categoryDiv);
  });
}

// ===========================
// 回答選択
// ===========================
function selectAnswer(questionNum, score) {
  if (surveyData.answers[questionNum - 1] !== undefined && surveyData.answers[questionNum - 1] > 0) {
    return; // 既に回答済みの場合は何もしない
  }
  
  surveyData.answers[questionNum - 1] = score;
  
  // 選択されたオプションをハイライト
  const options = document.querySelectorAll(`.emoji-btn[data-question="${questionNum}"]`);
  options.forEach(option => {
    option.classList.remove('selected');
    if (parseInt(option.dataset.score) === score) {
      option.classList.add('selected');
    }
  });
  
  updateProgress();
  
  // 次の質問に自動スクロール(300msの遅延後)
  setTimeout(() => {
    scrollToNextQuestion(questionNum);
  }, 300);
}

// 次の質問に自動スクロールする関数
function scrollToNextQuestion(currentQuestionNum) {
  const nextQuestionNum = currentQuestionNum + 1;
  
  // 最後の質問の場合はスクロールしない
  if (nextQuestionNum > 35) {
    return;
  }
  
  // 次の質問要素を取得
  const nextQuestion = document.querySelector(`.question[data-question="${nextQuestionNum}"]`);
  
  if (nextQuestion) {
    // 進捗バーの高さを考慮してスクロール位置を調整
    const progressBarHeight = 80; // CSSの値と一致させる
    const yOffset = -progressBarHeight - 20; // 進捗バー + 余白20px
    const y = nextQuestion.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}

// ===========================
// プログレス更新
// ===========================
function updateProgress() {
  const answeredCount = surveyData.answers.filter(a => a > 0).length;
  const totalQuestions = 35;
  const percentage = Math.round((answeredCount / totalQuestions) * 100);
  
  // 要素が存在する場合のみ更新
  const answeredElement = document.getElementById('answeredCount');
  const progressBar = document.getElementById('progressBar');
  const progressPercentage = document.getElementById('progressPercentage');
  
  if (answeredElement) answeredElement.textContent = answeredCount;
  if (progressBar) progressBar.style.width = percentage + '%';
  if (progressPercentage) progressPercentage.textContent = percentage + '%';
}

// ===========================
// アンケート送信
// ===========================
function submitSurvey() {
  const t = translations[currentLanguage];
  
  // 全問回答チェック
  if (surveyData.answers.filter(a => a > 0).length < 35) {
    alert(t.errorAllQuestions);
    return;
  }
  
  // スコア計算(100点満点)
  const totalRawScore = surveyData.answers.reduce((sum, score) => sum + score, 0);
  surveyData.totalScore = Math.round((totalRawScore / 210) * 100);
  
  // データ保存
  saveData();
  
  // 完了画面表示
  showCompletion();
}

// ===========================
// データ保存
// ===========================
function saveData() {
  try {
    let allData = JSON.parse(localStorage.getItem('trainee_survey_data') || '[]');
    
    // 最大100件制限
    if (allData.length >= 100) {
      allData = allData.slice(-99);
    }
    
    allData.push(surveyData);
    localStorage.setItem('trainee_survey_data', JSON.stringify(allData));
  } catch (error) {
    console.error('データ保存エラー:', error);
  }
}

// ===========================
// 完了画面表示
// ===========================
function showCompletion() {
  const t = translations[currentLanguage];
  
  // 画面切り替え
  document.getElementById('surveySection').style.display = 'none';
  document.getElementById('completionSection').style.display = 'block';
  
  // テキスト更新
  document.getElementById('completionTitle').textContent = t.completionTitle;
  document.getElementById('completionMessage').textContent = t.completionMessage;
  document.getElementById('completionAutoClose').textContent = t.completionAutoClose;
  document.getElementById('completionRemaining').textContent = t.completionRemaining;
  document.getElementById('completionSeconds').textContent = t.completionSeconds;
  
  // ページトップへスクロール
  window.scrollTo(0, 0);
  
  // カウントダウン
  let countdown = 5;
  const countdownElement = document.getElementById('countdown');
  
  const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
      clearInterval(timer);
      resetSurvey();
    }
  }, 1000);
}

// ===========================
// アンケートリセット
// ===========================
function resetSurvey() {
  // データリセット
  surveyData = {
    companyCode: surveyData.companyCode,
    employeeCode: '',
    nationality: '',
    yearMonth: '',
    timestamp: '',
    answers: [],
    totalScore: 0
  };
  
  // フォームリセット
  document.getElementById('employeeCode').value = '';
  document.getElementById('nationality').value = '';
  
  // 画面リセット
  document.getElementById('completionSection').style.display = 'none';
  document.getElementById('surveySection').style.display = 'none';
  document.getElementById('initialScreen').style.display = 'block';
  
  // ページトップへスクロール
  window.scrollTo(0, 0);
}

// ===========================
// ユーティリティ関数
// ===========================
function getCurrentYearMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function checkDuplicate(employeeCode, yearMonth) {
  try {
    const allData = JSON.parse(localStorage.getItem('trainee_survey_data') || '[]');
    return allData.some(data => 
      data.companyCode === surveyData.companyCode &&
      data.employeeCode === employeeCode &&
      data.yearMonth === yearMonth
    );
  } catch (error) {
    return false;
  }
}

function getExistingData(employeeCode, yearMonth) {
  try {
    const allData = JSON.parse(localStorage.getItem('trainee_survey_data') || '[]');
    return allData.find(data => 
      data.companyCode === surveyData.companyCode &&
      data.employeeCode === employeeCode &&
      data.yearMonth === yearMonth
    );
  } catch (error) {
    return null;
  }
}

function formatDate(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}
