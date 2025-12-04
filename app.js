// ===========================
// グローバル変数
// ===========================
let answers = {}; // 回答データを保存
let totalQuestions = 0; // 総質問数
let radarChart = null; // レーダーチャートのインスタンス

// ===========================
// カテゴリー名マッピング
// ===========================
const categoryNames = {
  '業務・職場環境': '業務・職場環境',
  '給与・待遇': '給与・待遇',
  '家族・プライベート事情': '家族・プライベート',
  '人間関係': '人間関係',
  '日本語・コミュニケーション': '日本語・コミュニケーション',
  '文化・価値観': '文化・価値観',
  '生活環境': '生活環境',
  'キャリア・将来の見通し': 'キャリア・将来'
};

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
  loadHistory();
  initializeTheme();
  
  // イベントリスナー
  document.getElementById('submitBtn').addEventListener('click', handleSubmit);
  document.getElementById('backBtn').addEventListener('click', showSurvey);
  document.getElementById('exportBtn').addEventListener('click', exportToCSV);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
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
  if (answeredCount === totalQuestions) {
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
  
  if (answeredCount !== totalQuestions) {
    alert('すべての質問に回答してください。');
    return;
  }
  
  // 結果を計算
  calculateResults();
  
  // データを保存
  saveToLocalStorage();
  
  // 結果画面を表示
  showResults();
}

// ===========================
// 結果計算
// ===========================
function calculateResults() {
  // 総合スコア
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = totalQuestions * 6;
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  document.getElementById('totalScore').textContent = `${percentage}点`;
  document.getElementById('answeredTotal').textContent = `${Object.keys(answers).length} / ${totalQuestions}`;
  
  // 満足度レベル
  let satisfactionLevel = '';
  if (percentage >= 80) satisfactionLevel = '😄 非常に良好';
  else if (percentage >= 60) satisfactionLevel = '🙂 良好';
  else if (percentage >= 40) satisfactionLevel = '😐 普通';
  else if (percentage >= 20) satisfactionLevel = '🙁 要改善';
  else satisfactionLevel = '😢 深刻';
  
  document.getElementById('satisfactionLevel').textContent = satisfactionLevel;
  
  // カテゴリー別スコア
  const categoryScores = calculateCategoryScores();
  
  // レーダーチャート描画
  drawRadarChart(categoryScores);
  
  // カテゴリー詳細表示
  displayCategoryDetails(categoryScores);
}

// ===========================
// カテゴリー別スコア計算
// ===========================
function calculateCategoryScores() {
  const questions = document.querySelectorAll('.question');
  const categoryScores = {};
  const categoryCounts = {};
  
  questions.forEach((question) => {
    const questionId = question.getAttribute('data-question-id');
    const category = question.getAttribute('data-category');
    const score = answers[questionId];
    
    if (score !== undefined) {
      if (!categoryScores[category]) {
        categoryScores[category] = 0;
        categoryCounts[category] = 0;
      }
      categoryScores[category] += score;
      categoryCounts[category]++;
    }
  });
  
  // 平均スコアに変換（6点満点）
  const avgScores = {};
  Object.keys(categoryScores).forEach(category => {
    avgScores[category] = (categoryScores[category] / categoryCounts[category]).toFixed(1);
  });
  
  return avgScores;
}

// ===========================
// レーダーチャート描画
// ===========================
function drawRadarChart(categoryScores) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  
  // 既存のチャートを破棄
  if (radarChart) {
    radarChart.destroy();
  }
  
  const labels = Object.keys(categoryScores).map(cat => categoryNames[cat] || cat);
  const data = Object.values(categoryScores);
  
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'スコア',
        data: data,
        backgroundColor: 'rgba(26, 115, 232, 0.2)',
        borderColor: 'rgba(26, 115, 232, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(26, 115, 232, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(26, 115, 232, 1)'
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 6,
          ticks: {
            stepSize: 1
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

// ===========================
// カテゴリー詳細表示
// ===========================
function displayCategoryDetails(categoryScores) {
  const container = document.getElementById('categoryDetails');
  container.innerHTML = '<h3>カテゴリー別詳細</h3>';
  
  Object.keys(categoryScores).forEach(category => {
    const score = categoryScores[category];
    const percentage = Math.round((score / 6) * 100);
    
    const item = document.createElement('div');
    item.className = 'detail-item';
    item.innerHTML = `
      <span class="detail-name">${categoryNames[category] || category}</span>
      <span class="detail-score">${score} / 6.0 (${percentage}%)</span>
    `;
    container.appendChild(item);
  });
}

// ===========================
// LocalStorageに保存
// ===========================
function saveToLocalStorage() {
  const timestamp = new Date().toISOString();
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = totalQuestions * 6;
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  const responseData = {
    timestamp: timestamp,
    answers: answers,
    totalScore: percentage,
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
  
  // 履歴を再読み込み
  loadHistory();
}

// ===========================
// 履歴読み込み
// ===========================
function loadHistory() {
  const history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
  const container = document.getElementById('historyList');
  
  if (history.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">履歴がありません</p>';
    return;
  }
  
  container.innerHTML = '';
  
  history.forEach((entry, index) => {
    const date = new Date(entry.timestamp);
    const dateStr = date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div class="history-info">
        <div class="history-date">${dateStr}</div>
        <div class="history-stats">スコア: ${entry.totalScore}点 | 回答数: ${entry.answeredCount} / ${entry.totalQuestions}</div>
      </div>
      <div class="history-actions">
        <button class="icon-btn-small" onclick="deleteHistoryItem(${index})" title="削除">
          <span class="material-icons">delete</span>
        </button>
      </div>
    `;
    
    // クリックで詳細表示（オプション）
    item.addEventListener('click', (e) => {
      if (!e.target.closest('.icon-btn-small')) {
        viewHistoryItem(entry);
      }
    });
    
    container.appendChild(item);
  });
}

// ===========================
// 履歴アイテム表示
// ===========================
function viewHistoryItem(entry) {
  answers = entry.answers;
  
  // 質問にチェックを復元
  const questions = document.querySelectorAll('.question');
  questions.forEach((question) => {
    const questionId = question.getAttribute('data-question-id');
    const score = answers[questionId];
    
    if (score !== undefined) {
      const buttons = question.querySelectorAll('.emoji-btn');
      buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.getAttribute('data-score')) === score) {
          btn.classList.add('selected');
        }
      });
    }
  });
  
  // 結果を計算して表示
  calculateResults();
  showResults();
}

// ===========================
// 履歴アイテム削除
// ===========================
function deleteHistoryItem(index) {
  if (!confirm('この履歴を削除しますか？')) return;
  
  let history = JSON.parse(localStorage.getItem('surveyHistory') || '[]');
  history.splice(index, 1);
  localStorage.setItem('surveyHistory', JSON.stringify(history));
  loadHistory();
}

// ===========================
// 履歴クリア
// ===========================
function clearHistory() {
  if (!confirm('すべての履歴を削除しますか？')) return;
  
  localStorage.removeItem('surveyHistory');
  loadHistory();
}

// ===========================
// CSV出力
// ===========================
function exportToCSV() {
  const categoryScores = calculateCategoryScores();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  let csv = 'カテゴリー,スコア\n';
  Object.keys(categoryScores).forEach(category => {
    csv += `${category},${categoryScores[category]}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `survey_results_${timestamp}.csv`;
  link.click();
}

// ===========================
// 画面切り替え
// ===========================
function showResults() {
  document.getElementById('surveySection').style.display = 'none';
  document.querySelector('.progress-card').style.display = 'none';
  document.getElementById('resultsSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSurvey() {
  document.getElementById('resultsSection').style.display = 'none';
  document.getElementById('surveySection').style.display = 'block';
  document.querySelector('.progress-card').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===========================
// テーマ切り替え
// ===========================
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const icon = document.querySelector('#themeToggle .material-icons');
  icon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  const icon = document.querySelector('#themeToggle .material-icons');
  icon.textContent = savedTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

// ===========================
// リセット機能（デバッグ用）
// ===========================
function resetSurvey() {
  if (!confirm('回答をリセットしますか？')) return;
  
  answers = {};
  
  // すべての選択を解除
  document.querySelectorAll('.emoji-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  updateProgress();
  showSurvey();
}
