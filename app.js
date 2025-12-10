// グローバル変数
let currentLanguage = 'ja';
let currentQuestionIndex = 0;
let answers = {};
let companyCode = null;

// 言語マッピング（国籍コード → 言語コード）
const languageMap = {
    'jp': 'ja', 'vn': 'vn', 'cn': 'cn', 'ph': 'tl', 'id': 'id', 'th': 'th',
    'np': 'ne', 'in': 'hi', 'mm': 'my', 'kh': 'km', 'la': 'lo', 'mn': 'mn',
    'bd': 'bn', 'lk': 'si', 'bt': 'dz', 'uz': 'uz', 'pk': 'ur'
};

// API エンドポイント
const API_ENDPOINT = 'https://engagement-api.more-up.workers.dev';

// URL パラメータから会社コードを取得
function getCompanyCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('company') || null;
}

// 年月を取得 (YYYY-MM 形式)
function getCurrentYearMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

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

// 初期化時に会社コードを取得
companyCode = getCompanyCodeFromURL();
console.log('Company Code:', companyCode);

// 言語変更ハンドラー
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    document.body.setAttribute('data-lang', currentLanguage);
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
    document.getElementById('submitButton').textContent = t.submitButton || '✓ 送信';
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

    // 国籍に基づいて言語を自動設定
    if (languageMap[nationality]) {
        currentLanguage = languageMap[nationality];
        languageSelect.value = currentLanguage;
        document.body.setAttribute('data-lang', currentLanguage);
        updateLanguage();
    }

    // データ保存
answers = {
    employeeCode,
    nationality,
    companyCode: companyCode,
    yearMonth: getCurrentYearMonth(),
    language: currentLanguage,
    timestamp: new Date().toISOString()
};

// LocalStorageにも保存（管理画面で参照するため）
localStorage.setItem(`nationality_${employeeCode}`, nationality);
localStorage.setItem(`company_${employeeCode}`, companyCode);


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
                
                // 修正: 大きい丸(⭕)と大きいバツ(❌)、中間の◯と×を検出
                const emojiText = label.emoji.trim();
                
                // 大きい丸(⭕)と中間の丸(◯)を検出
                if (emojiText === '⭕' || emojiText === '◯' ||
                    emojiText.includes('⭕') || emojiText.includes('◯')) {
                    labelEl.classList.add('emoji-circle-special');
                }
                
                // 大きいバツ(❌)と中間のバツ(×)を検出
                if (emojiText === '❌' || emojiText === '×' ||
                    emojiText.includes('❌') || emojiText.includes('×') ||
                    emojiText.charCodeAt(0) === 0x274C || emojiText.charCodeAt(0) === 0x00D7) {
                    labelEl.classList.add('emoji-cross-special');
                }

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
        case 'safety_concern':
            return choices.safety_concern;
        default:
            return choices.satisfaction;
    }
}

// カテゴリーを取得
function getCategoryForQuestion(qNum) {
    if (qNum >= 1 && qNum <= 4) return 'work';
    if (qNum >= 5 && qNum <= 8) return 'salary';
    if (qNum >= 9 && qNum <= 12) return 'family';
    if (qNum >= 13 && qNum <= 16) return 'relationship';
    if (qNum >= 17 && qNum <= 21) return 'communication';
    if (qNum >= 22 && qNum <= 23) return 'culture';
    if (qNum >= 24 && qNum <= 29) return 'living';
    if (qNum >= 30 && qNum <= 35) return 'career';
    return 'work';
}

// カテゴリー別スコアを計算
function calculateCategoryScores() {
    const categoryScores = {};
    
    const categoryQuestions = {
        work: [1, 2, 3, 4],
        salary: [5, 6, 7, 8],
        family: [9, 10, 11, 12],
        relationship: [13, 14, 15, 16],
        communication: [17, 18, 19, 20, 21],
        culture: [22, 23],
        living: [24, 25, 26, 27, 28, 29],
        career: [30, 31, 32, 33, 34, 35]
    };

    Object.entries(categoryQuestions).forEach(([category, questions]) => {
        let total = 0;
        let count = 0;
        
        questions.forEach(qNum => {
            const answer = answers[`q${qNum}`];
            if (typeof answer === 'number') {
                total += answer;
                count++;
            }
        });
        
        // 100点満点に変換
        const maxScore = count * 6;
        categoryScores[category] = Math.round((total / maxScore) * 100);
    });

    return categoryScores;
}

// 総合スコアを計算
function calculateTotalScore() {
    let total = 0;
    let count = 0;

    for (let i = 1; i <= 35; i++) {
        const answer = answers[`q${i}`];
        if (typeof answer === 'number') {
            total += answer;
            count++;
        }
    }

    // 100点満点に変換
    const maxScore = count * 6;
    return Math.round((total / maxScore) * 100);
}

// APIへデータ送信
async function submitToAPI() {
    const t = translations[currentLanguage];
    
    try {
        // 質問の回答のみを抽出
        const questionAnswers = {};
        for (let i = 1; i <= 35; i++) {
            const key = `q${i}`;
            if (answers[key] !== undefined) {
                questionAnswers[i] = answers[key];
            }
        }

        // カテゴリー別スコアを計算
        const categoryScores = calculateCategoryScores();

        // 総合スコアを計算
        const totalScore = calculateTotalScore();

        // 送信データ
        const submitData = {
            resultId: `TRAINEE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            employeeCode: answers.employeeCode,
            department: 'trainee',
            nationality: answers.nationality,
            companyCode: answers.companyCode,
            yearMonth: answers.yearMonth,
            totalScore: totalScore,
            surveyDate: new Date().toISOString().split('T')[0],
            categoryScores: categoryScores,
            answers: questionAnswers
        };

        console.log('Submitting data:', submitData);

        const response = await fetch(`${API_ENDPOINT}/api/save-result`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.error || 'Failed to save data');
        }

        console.log('Data saved successfully:', result);
        return true;

    } catch (error) {
        console.error('Submit error:', error);
        alert(t.errorSubmit || 'データの送信に失敗しました。もう一度お試しください。');
        return false;
    }
}

// フォーム送信
document.getElementById('surveyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const t = translations[currentLanguage];
    
    // 全質問に回答されているか確認
    const answeredCount = Object.keys(answers).filter(k => k.startsWith('q')).length;
    if (answeredCount < 35) {
        alert(t.errorIncomplete || 'すべての質問に回答してください。');
        return;
    }

    // 送信ボタンを無効化
    submitButton.disabled = true;
    submitButton.textContent = t.submitting || '送信中...';

    // APIへ送信
    const success = await submitToAPI();

    if (success) {
        // 完了画面へ
        surveyScreen.classList.remove('active');
        completionScreen.classList.add('active');

        // 5秒後にリセット
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        // エラー時は送信ボタンを再有効化
        submitButton.disabled = false;
        submitButton.textContent = t.submitButton || '送信';
    }
});

// 初期化
document.body.setAttribute('data-lang', currentLanguage);
updateLanguage();
