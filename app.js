let currentLanguage = 'ja';
let currentAnswers = {};

const languageMap = {
    'jp': 'ja', 'vn': 'vn', 'cn': 'cn', 'ph': 'tl', 'id': 'id', 'th': 'th',
    'np': 'ne', 'in': 'hi', 'mm': 'my', 'kh': 'kh', 'la': 'lo', 'mn': 'mn',
    'bd': 'bd', 'lk': 'lk', 'bt': 'dz', 'uz': 'uz'
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - Initializing...');
    
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded');
        return;
    }
    
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect) {
        nationalitySelect.value = '';
        nationalitySelect.addEventListener('change', handleNationalityChange);
    }
    
    const startButton = document.getElementById('startSurvey');
    if (startButton) {
        startButton.addEventListener('click', startSurvey);
    }
    
    detectLanguage();
});

function detectLanguage() {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('vi')) {
        currentLanguage = 'vn';
    } else {
        currentLanguage = 'ja';
    }
    updateLanguage();
}

function handleNationalityChange(event) {
    const nationalityCode = event.target.value;
    if (nationalityCode && languageMap[nationalityCode]) {
        currentLanguage = languageMap[nationalityCode];
        updateLanguage();
    }
}

function updateLanguage() {
    if (!translations[currentLanguage]) {
        console.error(`Language ${currentLanguage} not found`);
        return;
    }
    
    const t = translations[currentLanguage];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        for (let k of keys) {
            value = value[k];
            if (!value) break;
        }
        if (value) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    const nationalitySelect = document.getElementById('nationality');
    if (nationalitySelect && t.nationalities) {
        const currentValue = nationalitySelect.value;
        nationalitySelect.innerHTML = '<option value="" data-i18n="nationality">' + t.nationality + '</option>';
        Object.entries(t.nationalities).forEach(([code, name]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = name;
            nationalitySelect.appendChild(option);
        });
        if (currentValue) {
            nationalitySelect.value = currentValue;
        }
    }
}

function startSurvey() {
    const employeeCode = document.getElementById('employeeCode').value.trim();
    const nationality = document.getElementById('nationality').value;
    
    if (!employeeCode) {
        alert(translations[currentLanguage].errors.employeeCode);
        return;
    }
    
    if (!nationality) {
        alert(translations[currentLanguage].errors.nationality);
        return;
    }
    
    document.getElementById('setupForm').style.display = 'none';
    document.getElementById('surveyContainer').style.display = 'block';
    
    generateQuestions();
}

function generateQuestions() {
    if (!translations[currentLanguage]) {
        console.error('Translations not loaded');
        return;
    }
    
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    const t = translations[currentLanguage];
    
    Object.entries(t.questions).forEach(([qKey, qText]) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.question = qKey;
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = qText;
        questionDiv.appendChild(questionTitle);
        
        const choiceType = questionTypes[qKey];
        
        if (choiceType === 'text') {
            const textarea = document.createElement('textarea');
            textarea.className = 'free-text';
            textarea.rows = 4;
            textarea.addEventListener('input', function() {
                currentAnswers[qKey] = this.value;
                checkCompletion();
            });
            questionDiv.appendChild(textarea);
        } else {
            const choicesDiv = document.createElement('div');
            choicesDiv.className = 'choices';
            
            const choices = t.choices[choiceType];
            choices.forEach((choiceText, index) => {
                const label = document.createElement('label');
                label.className = 'choice';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = qKey;
                radio.value = index + 1;
                radio.addEventListener('change', function() {
                    currentAnswers[qKey] = this.value;
                    checkCompletion();
                    scrollToNextQuestion(questionDiv);
                });
                
                label.appendChild(radio);
                label.appendChild(document.createTextNode(choiceText));
                choicesDiv.appendChild(label);
            });
            
            questionDiv.appendChild(choicesDiv);
        }
        
        container.appendChild(questionDiv);
    });
}

function scrollToNextQuestion(currentQuestion) {
    const allQuestions = document.querySelectorAll('.question');
    const currentIndex = Array.from(allQuestions).indexOf(currentQuestion);
    
    if (currentIndex < allQuestions.length - 1) {
        setTimeout(() => {
            allQuestions[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}

function checkCompletion() {
    const requiredQuestions = Object.keys(translations[currentLanguage].questions).filter(q => q !== 'q35');
    const answered = requiredQuestions.every(q => currentAnswers[q]);
    
    let submitButton = document.getElementById('submitSurvey');
    if (answered && !submitButton) {
        submitButton = document.createElement('button');
        submitButton.id = 'submitSurvey';
        submitButton.className = 'btn btn-primary';
        submitButton.textContent = '送信 / Submit';
        submitButton.addEventListener('click', submitSurvey);
        document.getElementById('questionsContainer').appendChild(submitButton);
        submitButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function submitSurvey() {
    const employeeCode = document.getElementById('employeeCode').value;
    const nationality = document.getElementById('nationality').value;
    
    const surveyData = {
        timestamp: new Date().toISOString(),
        employeeCode: employeeCode,
        nationality: nationality,
        language: currentLanguage,
        answers: currentAnswers
    };
    
    console.log('Survey submitted:', surveyData);
    
    document.getElementById('surveyContainer').style.display = 'none';
    showCompletionScreen();
}

function showCompletionScreen() {
    const t = translations[currentLanguage].completion;
    
    const completionDiv = document.createElement('div');
    completionDiv.id = 'completionScreen';
    completionDiv.style.textAlign = 'center';
    completionDiv.style.padding = '2rem';
    
    const title = document.createElement('h2');
    title.textContent = t.title;
    title.style.color = '#2ecc71';
    completionDiv.appendChild(title);
    
    const message = document.createElement('p');
    message.textContent = t.message;
    message.style.fontSize = '1.2rem';
    message.style.marginTop = '1rem';
    completionDiv.appendChild(message);
    
    const countdown = document.createElement('p');
    countdown.style.marginTop = '2rem';
    countdown.style.color = '#7f8c8d';
    completionDiv.appendChild(countdown);
    
    document.body.appendChild(completionDiv);
    
    let timeLeft = 5;
    const countdownInterval = setInterval(() => {
        countdown.textContent = `${t.autoClose} ${t.remaining} ${timeLeft} ${t.seconds}`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            window.location.reload();
        }
    }, 1000);
}
