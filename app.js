// ===========================
// グローバル変数
// ===========================
let answers = {}; // 回答データを保存
let totalQuestions = 0; // 総質問数

// ===========================
// 絵文字オプションデータ
// ===========================
const positiveOptionsData = [
  { emoji: '😄', label: 'とても満足', score: 6 },
  { emoji: '🙂', label: 'やや満足', score: 5 },
  { emoji: '😐', label: 'どちらでもない', score: 4 },
  { emoji: '🙁', label: 'やや不満', score: 3 },
  { emoji: '😢', label: '不満', score: 2 },
  { emoji: '😭', label: 'とても不満', score: 1 }
];

const negativeOptionsData = [
  { emoji: '😄', label: '全くない', score: 6 },
  { emoji: '🙂', label: 'ほとんどない', score: 5 },
  { emoji: '😐', label: '時々ある', score: 4 },
  { emoji: '🙁', label: 'よくある', score: 3 },
  { emoji: '😢', label: 'かなりある', score: 2 },
  { emoji: '😭', label: 'いつもある', score: 1 }
];

// ===========================
// 初期化
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initializeQuestions();
  updateProgress();
  
  // 送信ボタンのイベント
  document.getElementById('submitBtn').addEventListener('click', handleSubmit);
});

// ===========================
// 質問の初期化
// ===========================
function initializeQuestions() {
  const questions = document.querySelectorAll('.question');
  totalQuestions = questions.length;
  
  questions.forEach((question, index) => {
    const questionId = `q${index + 1}`;
    question.setAttribute('data-question-id', questionId);
    
    const optionsContainer = question.querySelector('.emoji-options');
    const isNegative = question.getAttribute('data-type') === 'negative';
    const optionsData = isNegative ? negativeOptionsData : positiveOptionsData;
    
    optionsContainer.innerHTML = '';
    
    optionsData.forEach(option => {
      const button = document.createElement('button');
      button.className = 'emoji-btn';
      button.setAttribute('data-score', option.score);
      button.innerHTML = `
        <span class="emoji-icon">${option.emoji}</span>
        <span class="emoji-label">${option.label}</span>
      `;
      
      button.addEventListener('click', (e) => {
        e.preventDefault();
        handleEmojiSelection(questionId, option.score, button, optionsContainer);
      });
      
      optionsContainer.appendChild(button);
    });
  });
}

// ===========================
// 絵文字選択処理
// ===========================
function handleEmojiSelection(questionId, score, selectedButton, container) {
  // 同じ質問内の他のボタンの選択を解除
  container.querySelectorAll('.emoji-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // 選択されたボタンをハイライト
  selectedButton.classList.add('selected');
  
  // 回答を保存
  answers[questionId] = score;
  
  // 進捗を更新
  updateProgress();
}

// ===========================
// 進捗更新
// ===========================
function updateProgress() {
  const answeredCount = Object.keys(answers).length;
  const percentage = Math.round((answeredCount / totalQuestions) * 100);
  
  // 進捗バーの更新
  document.querySelector('.progress-bar-fill').style.width = `${percentage}%`;
  document.getElementById('answeredCount').textContent = answeredCount;
  document.getElementById('totalCount').textContent = totalQuestions;
  document.getElementById('progressPercentage').textContent = `${percentage}%`;
  
  // 送信ボタンの有効/無効
  const submitBtn = document.getElementById('submitBtn');
  if (answeredCount > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// ===========================
// 送信処理
// ===========================
function handleSubmit() {
  const answeredCount = Object.keys(answers).length;
  
  if (answeredCount === 0) {
    alert('少なくとも1つの質問に回答してください。');
    return;
  }
  
  // データを保存
  saveToLocalStorage();
  
  // アンケートセクションを非表示
  document.getElementById('surveySection').style.display = 'none';
  document.querySelector('.progress-sidebar').style.display = 'none';
  
  // 完了画面を表示
  showCompletion(answeredCount);
}

// ===========================
// LocalStorageに保存
// ===========================
function saveToLocalStorage() {
  const timestamp = new Date().toISOString();
  const responseData = {
    timestamp: timestamp,
    answers: answers,
    answeredCount: Object.keys(answers).length,
    totalQuestions: totalQuestions
  };
  
  // 既存の履歴を取得
  let history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
  
  // 新しい回答を追加
  history.unshift(responseData);
  
  // 最大50件まで保存
  if (history.length > 50) {
    history = history.slice(0, 50);
  }
  
  // 保存
  localStorage.setItem('surveyHistory', JSON.stringify(history));
}

// ===========================
// 完了画面表示
// ===========================
function showCompletion(answeredCount) {
  const completionSection = document.getElementById('completionSection');
  const now = new Date();
  const dateStr = now.toLocaleDateString('ja-JP', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  completionSection.innerHTML = `
    <div class="completion-content">
      <div class="completion-icon">✅</div>
      <h2>ご回答ありがとうございました！</h2>
      <p>あなたの貴重なご意見を受け取りました。</p>
      <p><strong>回答日時:</strong> ${dateStr}</p>
      <p><strong>回答数:</strong> ${answeredCount} / ${totalQuestions} 問</p>
    </div>
  `;
  
  completionSection.style.display = 'block';
  
  // ページトップにスクロール
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// 管理者用: LocalStorageから履歴取得（デバッグ用）
// ===========================
function getStoredData() {
  const history = localStorage.getItem('surveyHistory');
  if (history) {
    console.log('保存されたデータ:');
    console.log(JSON.parse(history));
    return JSON.parse(history);
  } else {
    console.log('保存されたデータはありません。');
    return [];
  }
}

// デバッグ用: ブラウザのコンソールで getStoredData() を実行すると履歴が表示されます
