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

    // 質問が表示されている場合は再生成
    if (!initialScreen.classList.contains('active')) {
        generateQuestions();
    }
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
    
    // 全質問を生成
    generateQuestions();
});

// 全質問を一度に生成
function generateQuestions() {
    const t = translations[currentLanguage];
    questionsContainer.innerHTML = '';

    if (!t.categories || !t.questions) {
        console.error('Translation data missing');
        alert('翻訳データの読み込みに失敗しました。');
        return;
    }

    let currentCategory = '';

    // 35問全て生成
    for (let i = 0; i < 35; i++) {
        const questionKey = `q${i + 1}`;
        const questionText = t.questions[questionKey];
        const questionType = questionTypes[questionKey];
        const categoryKey = getCategoryForQuestion(i + 1);
        const categoryName = t.categories[categoryKey];

        // カテゴリーが変わったらヘッダーを追加
        if (categoryKey !== currentCategory) {
            currentCategory = categoryKey;
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = categoryName;
            questionsContainer.appendChild(categoryHeader);
        }

        // 質問要素を作成
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-${i + 1}`;

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Q${i + 1}. ${questionText}`;
        questionDiv.appendChild(questionTitle);

        // 回答方式を判定
        if (questionType === 'text') {
            // 自由記述
            const textarea = document.createElement('textarea');
            textarea.className = 'free-text';
            textarea.placeholder = t.freeTextPlaceholder || '自由に記入してください';
            textarea.rows = 5;
            textarea.onchange = () => {
                answers[questionKey] = textarea.value;
                updateProgress();
            };
            questionDiv.appendChild(textarea);
        } else {
            // 6段階評価 - 横並び大きめ丸ボタン
            const choicesDiv = document.createElement('div');
            choicesDiv.className = 'choices-horizontal';

            const choiceLabels = getChoiceLabels(questionType, t);

            choiceLabels.forEach((label, choiceIndex) => {
                const choiceItem = document.createElement('div');
                choiceItem.className = 'choice-item';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = questionKey;
                radio.value = choiceIndex + 1;
                radio.id = `${questionKey}_${choiceIndex}`;
                
                radio.onchange = () => {
                    answers[questionKey] = choiceIndex + 1;
                    updateProgress();
                    
                    // 次の質問にスクロール
                    if (i < 34) {
                        setTimeout(() => {
                            const nextQuestion = document.getElementById(`question-${i + 2}`);
                            if (nextQuestion) {
                                nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }, 300);
                    } else {
                        // 最後の質問なら送信ボタンにスクロール
                        setTimeout(() => {
                            submitButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 300);
                    }
                };

                const labelEl = document.createElement('label');
                labelEl.htmlFor = `${questionKey}_${choiceIndex}`;
                labelEl.textContent = label.emoji;

                const labelText = document.createElement('div');
                labelText.className = 'choice-label-text';
                labelText.textContent = label.text;

                choiceItem.appendChild(radio);
                choiceItem.appendChild(labelEl);
                choiceItem.appendChild(labelText);
                choicesDiv.appendChild(choiceItem);
            });

            questionDiv.appendChild(choicesDiv);
        }

        questionsContainer.appendChild(questionDiv);
    }

    // 送信ボタンを表示
    submitButton.style.display = 'block';
    updateProgress();
}

// プログレスバー更新
function updateProgress() {
    const answeredCount = Object.keys(answers).filter(k => k.startsWith('q')).length;
    const progress = (answeredCount / 35) * 100;
    progressFill.style.width = `${progress}%`;
    
    const t = translations[currentLanguage];
    progressText.textContent = `${t.progressText || '質問'} ${answeredCount} / 35`;
}

// 質問タイプに応じた選択肢ラベルを取得
function getChoiceLabels(type, t) {
    const choices = t.choices;
    
    switch(type) {
        case 'satisfaction':
            return choices.satisfaction;
        case 'availability':
            return choices.availability;
        case 'understanding':
            return choices.understanding;
        case 'desire':
            return choices.desire;
        case 'familiarity':
            return choices.familiarity;
        case 'negative':
            return choices.negative;
        default:
            return choices.satisfaction;
    }
}

// カテゴリーを取得
function getCategoryForQuestion(qNum) {
    if (qNum === 1) return 'workplace';
    if (qNum >= 2 && qNum <= 7) return 'communication';
    if (qNum >= 8 && qNum <= 14) return 'workContent';
    if (qNum >= 15 && qNum <= 19) return 'evaluation';
    if (qNum >= 20 && qNum <= 24) return 'growth';
    if (qNum >= 25 && qNum <= 30) return 'balance';
    if (qNum >= 31 && qNum <= 34) return 'future';
    if (qNum === 35) return 'free';
    return 'workplace';
}

// フォーム送信
document.getElementById('surveyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const t = translations[currentLanguage];
    
    // 全質問に回答されているか確認
    const answeredCount = Object.keys(answers).filter(k => k.startsWith('q')).length;
    if (answeredCount < 35) {
        alert(t.errorIncomplete || 'すべての質問に回答してください。');
        return;
    }

    console.log('Survey submitted:', answers);
    
    // 完了画面へ
    surveyScreen.classList.remove('active');
    completionScreen.classList.add('active');

    // 5秒後にリセット
    setTimeout(() => {
        location.reload();
    }, 5000);
});

// 初期化
updateLanguage();
