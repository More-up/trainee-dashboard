// グローバル変数
let currentLanguage = 'ja';
let currentQuestionIndex = 0;
let answers = {};

// DOM要素
const languageSelect = document.getElementById('languageSelect');
const surveySetup = document.getElementById('surveySetup');
const initialScreen = document.getElementById('initialScreen');
const surveyScreen = document.getElementById('surveyScreen');
const completionScreen = document.getElementById('completionScreen');
const questionsContainer = document.getElementById('questionsContainer');
const submitButton = document.getElementById('submitButton');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// 言語変更ハンドラー
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateLanguage();
});

// 言語に応じてUIを更新
function updateLanguage() {
    const t = translations[currentLanguage];
    
    if (!t) {
        console.error(`Language ${currentLanguage} not found`);
        currentLanguage = 'ja';
        return;
    }

    // タイトルとラベルを更新
    document.title = t.title;
    document.getElementById('surveyTitle').textContent = t.title;
    document.getElementById('privacyNotice').textContent = t.privacyNotice;
    document.getElementById('employeeCodeLabel').textContent = t.employeeCode;
    document.getElementById('nationalityLabel').textContent = t.nationality;
    document.getElementById('startButton').textContent = t.startButton;
    document.getElementById('completionTime').textContent = t.completionTime;
    document.getElementById('completionTitle').textContent = t.completionTitle;
    document.getElementById('completionMessage').textContent = t.completionMessage;

    // 国籍選択肢を更新
    const nationalitySelect = document.getElementById('nationality');
    const currentValue = nationalitySelect.value;
    nationalitySelect.innerHTML = `<option value="">${t.selectNationality || '選択してください'}</option>`;
    
    Object.entries(t.nationalities).forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        nationalitySelect.appendChild(option);
    });
    
    if (currentValue) nationalitySelect.value = currentValue;

    // 社員番号のプレースホルダー更新
    const employeeSelect = document.getElementById('employeeCode');
    employeeSelect.options[0].textContent = t.selectNationality || '選択してください';
}

// アンケート開始
surveySetup.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const employeeCode = document.getElementById('employeeCode').value;
    const nationality = document.getElementById('nationality').value;
    
    if (!employeeCode || !nationality) {
        const t = translations[currentLanguage];
        alert(t.errorEmployeeCode || 'すべての項目を入力してください');
        return;
    }

    // データ保存
    answers = {
        employeeCode,
        nationality,
        language: currentLanguage,
        timestamp: new Date().toISOString()
    };

    // 画面切り替え
    initialScreen.classList.remove('active');
    surveyScreen.classList.add('active');
    
    // 質問を生成
    generateQuestions();
});

// 質問を生成
function generateQuestions() {
    const t = translations[currentLanguage];
    questionsContainer.innerHTML = '';

    if (!t.categories) {
        console.error('Categories not found in translations');
        return;
    }

    let questionNumber = 1;

    Object.entries(t.categories).forEach(([categoryKey, category]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'question-category';
        categoryDiv.innerHTML = `<h3>${category.title}</h3>`;

        category.questions.forEach((question, qIndex) => {
            const questionId = `q${questionNumber}`;
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            questionDiv.dataset.questionNumber = questionNumber;

            const questionTitle = document.createElement('h4');
            questionTitle.textContent = `${questionNumber}. ${question.text}`;
            questionDiv.appendChild(questionTitle);

            // 質問35は自由記述
            if (questionNumber === 35) {
                const textarea = document.createElement('textarea');
                textarea.id = questionId;
                textarea.rows = 4;
                textarea.placeholder = t.openEndedPlaceholder || 'ご自由にお書きください';
                questionDiv.appendChild(textarea);
            } else {
                // 6段階評価の顔文字を表示
                const choicesDiv = document.createElement('div');
                choicesDiv.className = 'emoji-options';

                // 質問タイプに応じた選択肢を取得
                const choiceType = question.type || 'satisfaction';
                const choices = t.choices[choiceType] || t.choices.satisfaction;

                choices.forEach((choice, index) => {
                    const value = index + 1;
                    const choiceLabel = document.createElement('label');
                    choiceLabel.className = 'emoji-btn';
                    choiceLabel.innerHTML = `
                        <input type="radio" name="${questionId}" value="${value}" required>
                        <span class="emoji">${choice.emoji}</span>
                        <span class="choice-text">${choice.text}</span>
                    `;
                    
                    // ラジオボタン選択時のイベント
                    const radio = choiceLabel.querySelector('input');
                    radio.addEventListener('change', () => {
                        answers[questionId] = value;
                        
                        // 次の質問にスクロール (質問35以外)
                        if (questionNumber < 35) {
                            const nextQuestion = document.querySelector(`[data-question-number="${questionNumber + 1}"]`);
                            if (nextQuestion) {
                                setTimeout(() => {
                                    nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }, 300);
                            }
                        }
                        
                        updateProgress();
                        checkAllAnswered();
                    });

                    choicesDiv.appendChild(choiceLabel);
                });

                questionDiv.appendChild(choicesDiv);
            }

            categoryDiv.appendChild(questionDiv);
            questionNumber++;
        });

        questionsContainer.appendChild(categoryDiv);
    });
}

// 進捗状況を更新
function updateProgress() {
    const totalQuestions = 35;
    const answeredQuestions = Object.keys(answers).filter(key => key.startsWith('q')).length;
    const progress = (answeredQuestions / totalQuestions) * 100;
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `質問 ${answeredQuestions} / ${totalQuestions}`;
}

// すべての質問に回答したかチェック
function checkAllAnswered() {
    const totalRequired = 34; // 質問35は任意
    const answeredCount = Object.keys(answers).filter(key => key.startsWith('q') && key !== 'q35').length;
    
    if (answeredCount >= totalRequired) {
        submitButton.style.display = 'block';
        submitButton.scrollIntoView({ behavior: 'smooth' });
    }
}

// フォーム送信
document.getElementById('surveyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 質問35の自由記述を保存
    const q35 = document.getElementById('q35');
    if (q35) {
        answers.q35 = q35.value || '';
    }

    // データを保存 (実際の実装では、ここでサーバーに送信)
    console.log('Survey answers:', answers);
    localStorage.setItem('surveyAnswers', JSON.stringify(answers));

    // 完了画面を表示
    surveyScreen.classList.remove('active');
    completionScreen.classList.add('active');

    // 5秒後にリロード
    setTimeout(() => {
        location.reload();
    }, 5000);
});

// 初期化
updateLanguage();
