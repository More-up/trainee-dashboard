// ===========================
// グローバル変数
// ===========================
let allData = [];
let filteredData = [];
let radarChart = null;
let trendChart = null;

// API エンドポイント
const API_ENDPOINT = 'https://engagement-api.more-up.workers.dev';

// カテゴリー定義
const categories = {
  work: "業務・職場環境",
  salary: "給与・待遇",
  family: "家族・プライベート事情",
  relationship: "人間関係",
  communication: "日本語・コミュニケーション",
  culture: "文化・価値観",
  living: "生活環境",
  career: "キャリア・将来の見通し"
};

// カテゴリー別質問マッピング
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

// 国籍表示名
const nationalityNames = {
  mm: "ミャンマー",
  myanmar: "ミャンマー",
  vn: "ベトナム",
  vietnam: "ベトナム",
  ph: "フィリピン",
  philippines: "フィリピン",
  id: "インドネシア",
  indonesia: "インドネシア",
  th: "タイ",
  thailand: "タイ",
  np: "ネパール",
  nepal: "ネパール",
  in: "インド",
  india: "インド",
  kh: "カンボジア",
  cambodia: "カンボジア",
  cn: "中国",
  china: "中国",
  jp: "日本",
  japan: "日本",
  la: "ラオス",
  laos: "ラオス",
  mn: "モンゴル",
  mongolia: "モンゴル",
  bd: "バングラデシュ",
  bangladesh: "バングラデシュ",
  lk: "スリランカ",
  srilanka: "スリランカ",
  bt: "ブータン",
  bhutan: "ブータン",
  uz: "ウズベキスタン",
  uzbekistan: "ウズベキスタン",
  pk: "パキスタン",
  pakistan: "パキスタン"
};

// ===========================
// 初期化
// ===========================
window.addEventListener('DOMContentLoaded', () => {
  // ログイン状態チェック
  checkLoginStatus();
  
  // データ読み込み
  loadData();
  
  // ユーザー名表示
  displayUsername();
});

// ===========================
// ログイン状態チェック
// ===========================
function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
  
  if (isLoggedIn !== 'true') {
    // ログインしていない場合はログイン画面へリダイレクト
    window.location.href = 'admin-login.html';
  }
}

// ===========================
// ユーザー名表示
// ===========================
function displayUsername() {
  const username = sessionStorage.getItem('adminUsername') || '管理者';
  document.getElementById('adminUsername').textContent = username;
}

// ===========================
// ログアウト
// ===========================
function logout() {
  if (confirm('ログアウトしますか？')) {
    sessionStorage.clear();
    window.location.href = 'admin-login.html';
  }
}

// ===========================
// データ読み込み（API版）
// ===========================
async function loadData() {
  try {
    // ローディング表示
    showLoading();

    // APIからデータ取得
    const response = await fetch(`${API_ENDPOINT}/api/results`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to load data');
    }

    allData = result.data || [];
    
    // データをローカル形式に変換
    allData = allData.map(item => ({
      timestamp: item.created_at,
      companyCode: item.company_code,
      employeeCode: item.employee_code,
      nationality: item.nationality,
      totalScore: item.total_score,
      yearMonth: item.year_month,
      surveyDate: item.survey_date,
      answers: convertAnswersToArray(item.answers),
      categoryScores: item.categoryScores || {}
    }));

    filteredData = [...allData];
    
    // フィルター選択肢を生成
    populateFilters();
    
    // データ表示
    displayData();
    
    hideLoading();

  } catch (error) {
    console.error('データ読み込みエラー:', error);
    hideLoading();
    showError('データの読み込みに失敗しました。');
    showNoData();
  }
}

// 回答データを配列に変換
function convertAnswersToArray(answersObj) {
  const arr = [];
  for (let i = 1; i <= 35; i++) {
    arr[i - 1] = answersObj[i] || 0;
  }
  return arr;
}

// ローディング表示
function showLoading() {
  const container = document.querySelector('.container');
  if (!document.getElementById('loadingOverlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'loadingOverlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `;
    overlay.innerHTML = '<div style="text-align: center;"><div style="font-size: 48px;">⏳</div><p>データ読み込み中...</p></div>';
    document.body.appendChild(overlay);
  }
}

// ローディング非表示
function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.remove();
  }
}

// エラー表示
function showError(message) {
  alert(message);
}

// ===========================
// フィルター選択肢生成
// ===========================
function populateFilters() {
  // 会社コード
  const companies = [...new Set(allData.map(d => d.companyCode))].filter(Boolean).sort();
  const companySelect = document.getElementById('filterCompany');
  companies.forEach(company => {
    const option = document.createElement('option');
    option.value = company;
    option.textContent = company;
    companySelect.appendChild(option);
  });
  
  // 月
  const months = [...new Set(allData.map(d => d.yearMonth))].filter(Boolean).sort().reverse();
  const monthSelect = document.getElementById('filterMonth');
  months.forEach(month => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });
  
  // 従業員コード
  const employees = [...new Set(allData.map(d => d.employeeCode))].filter(Boolean).sort((a, b) => a - b);
  const employeeSelect = document.getElementById('filterEmployee');
  employees.forEach(emp => {
    const option = document.createElement('option');
    option.value = emp;
    option.textContent = emp;
    employeeSelect.appendChild(option);
  });
}

// ===========================
// フィルター適用
// ===========================
function applyFilters() {
  const company = document.getElementById('filterCompany').value;
  const month = document.getElementById('filterMonth').value;
  const employee = document.getElementById('filterEmployee').value;
  const nationality = document.getElementById('filterNationality').value;
  
  filteredData = allData.filter(item => {
    if (company && item.companyCode !== company) return false;
    if (month && item.yearMonth !== month) return false;
    if (employee && item.employeeCode !== employee) return false;
    if (nationality && item.nationality !== nationality) return false;
    return true;
  });
  
  displayData();
}

// ===========================
// データ表示
// ===========================
function displayData() {
  if (filteredData.length === 0) {
    showNoData();
    return;
  }
  
  // 統計カード更新
  updateStatCards();
  
  // テーブル更新
  updateTable();
  
  // チャート更新
  updateCharts();
  
  // AI分析更新
  updateAIAnalysis();
  
  // リスクアラート更新
  updateRiskAlerts();
}

// ===========================
// 統計カード更新
// ===========================
function updateStatCards() {
  const totalResponses = filteredData.length;
  const scores = filteredData.map(d => d.totalScore);
  const averageScore = totalResponses > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / totalResponses) : 0;
  const maxScore = totalResponses > 0 ? Math.max(...scores) : 0;
  const minScore = totalResponses > 0 ? Math.min(...scores) : 0;
  
  document.getElementById('totalResponses').textContent = totalResponses;
  document.getElementById('averageScore').textContent = averageScore;
  document.getElementById('maxScore').textContent = maxScore;
  document.getElementById('minScore').textContent = minScore;
}

// ===========================
// テーブル更新
// ===========================
function updateTable() {
  const tbody = document.getElementById('dataTableBody');
  tbody.innerHTML = '';
  
  filteredData.forEach(item => {
    const row = document.createElement('tr');
    
    const scoreClass = item.totalScore >= 70 ? 'score-high' : 
                       item.totalScore >= 50 ? 'score-medium' : 'score-low';
    
    row.innerHTML = `
      <td>${formatDate(item.timestamp)}</td>
      <td>${item.companyCode || '-'}</td>
      <td>${item.employeeCode}</td>
      <td>${nationalityNames[item.nationality] || item.nationality}</td>
      <td><span class="score-badge ${scoreClass}">${item.totalScore} / 100</span></td>
      <td>${item.yearMonth || '-'}</td>
    `;
    
    tbody.appendChild(row);
  });
}

// ===========================
// チャート更新
// ===========================
function updateCharts() {
  updateRadarChart();
  updateTrendChart();
}

// ===========================
// レーダーチャート更新
// ===========================
function updateRadarChart() {
  const ctx = document.getElementById('radarChart');
  
  // カテゴリー別平均スコア計算
  const categoryScores = {};
  Object.keys(categories).forEach(cat => {
    const scores = [];
    filteredData.forEach(item => {
      if (item.categoryScores && item.categoryScores[cat] !== undefined) {
        scores.push(item.categoryScores[cat]);
      } else {
        // カテゴリースコアがない場合は計算
        const catQuestions = categoryQuestions[cat];
        const catAnswers = catQuestions.map(q => item.answers[q - 1] || 0);
        const catTotal = catAnswers.reduce((a, b) => a + b, 0);
        const catMax = catQuestions.length * 6;
        const catScore = Math.round((catTotal / catMax) * 100);
        scores.push(catScore);
      }
    });
    categoryScores[cat] = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  });
  
  // チャート破棄（既存）
  if (radarChart) {
    radarChart.destroy();
  }
  
  // チャート作成
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: Object.values(categories),
      datasets: [{
        label: 'カテゴリー別スコア',
        data: Object.values(categoryScores),
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
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'カテゴリー別平均スコア',
          font: {
            size: 16
          }
        },
        legend: {
          display: false
        }
      }
    }
  });
}

// ===========================
// 月別推移チャート更新（3年分）
// ===========================
function updateTrendChart() {
  const ctx = document.getElementById('trendChart');
  
  // 月別データ集計
  const monthlyData = {};
  filteredData.forEach(item => {
    if (!item.yearMonth) return;
    if (!monthlyData[item.yearMonth]) {
      monthlyData[item.yearMonth] = [];
    }
    monthlyData[item.yearMonth].push(item.totalScore);
  });
  
  // 月別平均スコア計算（最大36ヶ月）
  const months = Object.keys(monthlyData).sort();
  const recentMonths = months.slice(-36); // 最新36ヶ月
  const averages = recentMonths.map(month => {
    const scores = monthlyData[month];
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  });
  
  // チャート破棄（既存）
  if (trendChart) {
    trendChart.destroy();
  }
  
  // チャート作成
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: recentMonths,
      datasets: [{
        label: '平均スコア',
        data: averages,
        backgroundColor: 'rgba(26, 115, 232, 0.2)',
        borderColor: 'rgba(26, 115, 232, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(26, 115, 232, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: '月別スコア推移（最大3年分）',
          font: {
            size: 16
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const month = context.label;
              const score = context.parsed.y;
              const count = monthlyData[month].length;
              return `平均: ${score}点 (回答数: ${count}件)`;
            }
          }
        }
      }
    }
  });
}

// ===========================
// AI分析更新
// ===========================
function updateAIAnalysis() {
  const container = document.getElementById('aiInsights');
  container.innerHTML = '';
  
  // 国籍別データ集計
  const nationalityData = {};
  filteredData.forEach(item => {
    if (!item.nationality) return;
    if (!nationalityData[item.nationality]) {
      nationalityData[item.nationality] = [];
    }
    nationalityData[item.nationality].push(item);
  });
  
  // 国籍別分析生成
  Object.keys(nationalityData).sort().forEach(nat => {
    const data = nationalityData[nat];
    const avgScore = Math.round(data.reduce((sum, d) => sum + d.totalScore, 0) / data.length);
    
    // カテゴリー別スコア
    const categoryScores = {};
    Object.keys(categories).forEach(cat => {
      const scores = [];
      data.forEach(item => {
        if (item.categoryScores && item.categoryScores[cat] !== undefined) {
          scores.push(item.categoryScores[cat]);
        } else {
          const catQuestions = categoryQuestions[cat];
          const catAnswers = catQuestions.map(q => item.answers[q - 1] || 0);
          const catTotal = catAnswers.reduce((a, b) => a + b, 0);
          const catMax = catQuestions.length * 6;
          const catScore = Math.round((catTotal / catMax) * 100);
          scores.push(catScore);
        }
      });
      categoryScores[cat] = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    });
    
    // 最高・最低カテゴリー
    const sortedCats = Object.entries(categoryScores).sort((a, b) => b[1] - a[1]);
    const highestCat = sortedCats[0];
    const lowestCat = sortedCats[sortedCats.length - 1];
    
    // 文化的インサイト生成
    const insight = generateCulturalInsight(nat, avgScore, highestCat, lowestCat);
    
    // カード作成
    const card = document.createElement('div');
    card.className = 'ai-insight-card';
    card.innerHTML = `
      <h3>🌏 ${nationalityNames[nat] || nat} （回答者: ${data.length}名）</h3>
      <p><strong>平均スコア:</strong> ${avgScore} / 100</p>
      <p><strong>最高評価:</strong> ${categories[highestCat[0]]} (${highestCat[1]}点)</p>
      <p><strong>最低評価:</strong> ${categories[lowestCat[0]]} (${lowestCat[1]}点)</p>
      <p><strong>文化的インサイト:</strong> ${insight}</p>
    `;
    
    container.appendChild(card);
  });
}

// ===========================
// 文化的インサイト生成
// ===========================
function generateCulturalInsight(nationality, avgScore, highestCat, lowestCat) {
  const insights = {
    myanmar: {
      high: "ミャンマー出身者は仏教文化の影響で協調性が高く、職場の人間関係を重視します。",
      medium: "家族への送金意識が強く、給与・待遇面での満足度が重要です。",
      low: "言語の壁を感じやすい傾向があるため、通訳サポートが効果的です。"
    },
    vietnam: {
      high: "ベトナム出身者は勤勉で向上心が高く、キャリア成長を重視します。",
      medium: "家族とのつながりが深く、定期的な連絡時間の確保が満足度向上につながります。",
      low: "日本の細かいルールに戸惑うことがあり、丁寧な説明が必要です。"
    },
    philippines: {
      high: "フィリピン出身者は英語が堪能で、コミュニケーション能力が高い傾向があります。",
      medium: "家族への経済的支援を重視し、給与・待遇面での透明性が重要です。",
      low: "文化的な違いによるストレスを感じやすいため、文化交流の機会が有効です。"
    },
    indonesia: {
      high: "インドネシア出身者はイスラム文化を背景に、礼儀正しく協調性があります。",
      medium: "宗教的配慮（礼拝時間、食事など）が満足度に大きく影響します。",
      low: "日本語習得に時間がかかる場合があり、継続的な言語サポートが重要です。"
    },
    thailand: {
      high: "タイ出身者は「マイペンライ」精神で柔軟性が高く、適応力があります。",
      medium: "上下関係を重視する文化のため、明確な指示と評価が効果的です。",
      low: "直接的な批判を避ける傾向があるため、フィードバック方法に配慮が必要です。"
    },
    nepal: {
      high: "ネパール出身者は真面目で責任感が強く、長期的な雇用を望む傾向があります。",
      medium: "家族との絆が強く、送金やビデオ通話の環境整備が満足度向上につながります。",
      low: "冬の寒さや食文化の違いに適応が必要なため、生活面でのサポートが重要です。"
    },
    india: {
      high: "インド出身者は教育水準が高く、技術習得への意欲が強い傾向があります。",
      medium: "多様な宗教・文化背景を持つため、個別のニーズへの配慮が必要です。",
      low: "ベジタリアンなど食事面での配慮が満足度に影響します。"
    },
    cambodia: {
      high: "カンボジア出身者は穏やかで協調性が高く、チームワークを大切にします。",
      medium: "経済的な目標（家族支援、貯蓄）を明確に持っているため、給与面での透明性が重要です。",
      low: "教育機会が限られていた場合があり、丁寧な技術指導が効果的です。"
    },
    china: {
      high: "中国出身者は向学心が高く、効率性とキャリアアップを重視します。",
      medium: "成果主義的な評価を好む傾向があり、明確な目標設定が有効です。",
      low: "個人主義的な側面があるため、日本的な集団主義との調整が必要な場合があります。"
    }
  };
  
  const natInsights = insights[nationality] || {
    high: "文化的背景を理解したサポートが重要です。",
    medium: "継続的なコミュニケーションが満足度向上につながります。",
    low: "個別のニーズに応じた柔軟な対応が必要です。"
  };
  
  if (avgScore >= 70) {
    return natInsights.high;
  } else if (avgScore >= 50) {
    return natInsights.medium;
  } else {
    return natInsights.low;
  }
}

// ===========================
// CSV出力
// ===========================
function exportCSV() {
  if (filteredData.length === 0) {
    alert('出力するデータがありません。');
    return;
  }
  
  // CSVヘッダー
  let csv = '日時,会社コード,従業員コード,国籍,総合スコア,月\n';
  
  // データ行
  filteredData.forEach(item => {
    csv += `${formatDate(item.timestamp)},`;
    csv += `${item.companyCode || ''},`;
    csv += `${item.employeeCode},`;
    csv += `${nationalityNames[item.nationality] || item.nationality},`;
    csv += `${item.totalScore},`;
    csv += `${item.yearMonth || ''}\n`;
  });
  
  // BOM追加（Excel対応）
  const bom = '\uFEFF';
  const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
  
  // ダウンロード
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `trainee_survey_data_${formatDateForFile(new Date())}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ===========================
// データなし表示
// ===========================
function showNoData() {
  document.getElementById('totalResponses').textContent = '0';
  document.getElementById('averageScore').textContent = '0';
  document.getElementById('maxScore').textContent = '0';
  document.getElementById('minScore').textContent = '0';
  
  document.getElementById('dataTableBody').innerHTML = `
    <tr>
      <td colspan="6" class="no-data">
        <div class="material-icons">inbox</div>
        <p>表示するデータがありません</p>
      </td>
    </tr>
  `;
  
  document.getElementById('aiInsights').innerHTML = `
    <div class="ai-insight-card">
      <p>分析するデータがありません</p>
    </div>
  `;
  
  // チャートをクリア
  if (radarChart) {
    radarChart.destroy();
    radarChart = null;
  }
  if (trendChart) {
    trendChart.destroy();
    trendChart = null;
  }
}

// ===========================
// 日時フォーマット
// ===========================
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

function formatDateForFile(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

// ===========================
// リスクアラート更新
// ===========================
function updateRiskAlerts() {
  const riskContainer = document.getElementById('riskAlertContainer');
  const dropContainer = document.getElementById('scoreDropContainer');
  
  if (filteredData.length === 0) {
    riskContainer.innerHTML = '<div class="no-risk"><span class="material-icons">check_circle</span><p>データがありません</p></div>';
    dropContainer.innerHTML = '';
    return;
  }

  // リスク分類
  const highRisk = [];
  const mediumRisk = [];
  const lowRisk = [];

  filteredData.forEach(item => {
    const risk = calculateRiskLevel(item);
    if (risk === 'high') {
      highRisk.push(item);
    } else if (risk === 'medium') {
      mediumRisk.push(item);
    } else {
      lowRisk.push(item);
    }
  });

  // リスクアラート表示
  riskContainer.innerHTML = '';

  // 高リスク
  if (highRisk.length > 0) {
    const highCard = createRiskCard('high', highRisk);
    riskContainer.appendChild(highCard);
  }

  // 中リスク
  if (mediumRisk.length > 0) {
    const mediumCard = createRiskCard('medium', mediumRisk);
    riskContainer.appendChild(mediumCard);
  }

  // 安定
  if (lowRisk.length > 0) {
    const lowCard = createRiskCard('low', lowRisk);
    riskContainer.appendChild(lowCard);
  }

  // スコア急降下アラート
  updateScoreDropAlerts(dropContainer);
}

// ===========================
// リスクレベル計算
// ===========================
function calculateRiskLevel(item) {
  const totalScore = item.totalScore;
  const categoryScores = item.categoryScores || {};

  // 高リスク: 総合40点以下 OR 給与・人間関係が30点以下
  if (totalScore <= 40) {
    return 'high';
  }

  const salaryScore = categoryScores.salary || 0;
  const relationshipScore = categoryScores.relationship || 0;

  if (salaryScore <= 30 || relationshipScore <= 30) {
    return 'high';
  }

  // 中リスク: 総合50点以下
  if (totalScore <= 50) {
    return 'medium';
  }

  // 安定: 60点以上
  return 'low';
}

// ===========================
// リスクカード作成
// ===========================
function createRiskCard(level, employees) {
  const card = document.createElement('div');
  card.className = `risk-card ${level}`;

  const labels = {
    high: { icon: '🔴', text: '高リスク', desc: '要緊急対応！' },
    medium: { icon: '🟡', text: '中リスク', desc: '注意が必要' },
    low: { icon: '🟢', text: '安定', desc: '良好な状態' }
  };

  const label = labels[level];

  let html = `
    <div class="risk-card-header">
      <div class="risk-card-title">
        <span>${label.icon}</span>
        <span>${label.text} (${employees.length}名)</span>
      </div>
      <span style="font-size: 13px; color: var(--text-secondary);">${label.desc}</span>
    </div>
    <div class="risk-card-content">
  `;

  employees.forEach(emp => {
    const action = getRecommendedAction(emp, level);
    const categoryScores = emp.categoryScores || {};

    let details = '';
    if (level === 'high' || level === 'medium') {
      const lowCategories = Object.entries(categoryScores)
        .filter(([cat, score]) => score <= 40)
        .map(([cat, score]) => `${categories[cat]}:${score}点`)
        .slice(0, 3);
      
      if (lowCategories.length > 0) {
        details = `低評価: ${lowCategories.join(', ')}`;
      }
    }

    html += `
      <div class="risk-employee">
        <div class="risk-employee-header">
          <span class="risk-employee-info">従業員コード ${emp.employeeCode} (${nationalityNames[emp.nationality] || emp.nationality})</span>
          <span class="score-badge ${emp.totalScore >= 60 ? 'score-medium' : 'score-low'}">${emp.totalScore}点</span>
        </div>
        ${details ? `<div class="risk-employee-details">${details}</div>` : ''}
        ${action ? `<div class="risk-employee-action"><strong>→ 推奨アクション:</strong> ${action}</div>` : ''}
      </div>
    `;
  });

  html += `</div>`;
  card.innerHTML = html;
  return card;
}

// ===========================
// 推奨アクション取得
// ===========================
function getRecommendedAction(item, riskLevel) {
  const categoryScores = item.categoryScores || {};
  const actions = [];

  if (riskLevel === 'high') {
    actions.push('個別面談を今週中に実施');

    if (categoryScores.salary <= 30) {
      actions.push('給与・手当の説明を再度行う');
    }
    if (categoryScores.relationship <= 30) {
      actions.push('同国籍の先輩とペアリング');
    }
    if (categoryScores.communication <= 30) {
      actions.push('母国語通訳を手配してヒアリング');
    }
  } else if (riskLevel === 'medium') {
    if (categoryScores.communication <= 40) {
      actions.push('通訳サポートを強化');
    }
    if (categoryScores.living <= 40) {
      actions.push('生活環境の改善を検討');
    }
    if (categoryScores.work <= 40) {
      actions.push('業務内容の見直しを実施');
    }
  }

  return actions.length > 0 ? actions[0] : '';
}

// ===========================
// スコア急降下アラート
// ===========================
function updateScoreDropAlerts(container) {
  container.innerHTML = '';

  // 月別データを取得
  const monthlyData = {};
  allData.forEach(item => {
    if (!item.yearMonth) return;
    if (!monthlyData[item.yearMonth]) {
      monthlyData[item.yearMonth] = {};
    }
    if (!monthlyData[item.yearMonth][item.employeeCode]) {
      monthlyData[item.yearMonth][item.employeeCode] = [];
    }
    monthlyData[item.yearMonth][item.employeeCode].push(item);
  });

  // 最新2ヶ月のデータを比較
  const months = Object.keys(monthlyData).sort();
  if (months.length < 2) {
    return; // 比較できない
  }

  const currentMonth = months[months.length - 1];
  const previousMonth = months[months.length - 2];

  const currentData = monthlyData[currentMonth];
  const previousData = monthlyData[previousMonth];

  const scoreDrops = [];

  Object.keys(currentData).forEach(empCode => {
    if (!previousData[empCode]) return;

    const currentScores = currentData[empCode].map(d => d.totalScore);
    const previousScores = previousData[empCode].map(d => d.totalScore);

    const currentAvg = Math.round(currentScores.reduce((a, b) => a + b, 0) / currentScores.length);
    const previousAvg = Math.round(previousScores.reduce((a, b) => a + b, 0) / previousScores.length);

    const diff = currentAvg - previousAvg;

    if (diff <= -15) {
      const currentItem = currentData[empCode][0];
      scoreDrops.push({
        employee: currentItem,
        previousScore: previousAvg,
        currentScore: currentAvg,
        diff: diff
      });
    }
  });

  if (scoreDrops.length === 0) {
    return;
  }

  // スコア急降下カード表示
  scoreDrops.forEach(drop => {
    const card = document.createElement('div');
    card.className = 'score-drop-card';

    // 低下したカテゴリーを特定
    const categoryScores = drop.employee.categoryScores || {};
    const droppedCategories = Object.entries(categoryScores)
      .filter(([cat, score]) => score <= 40)
      .map(([cat, score]) => `${categories[cat]}:${score}点`)
      .slice(0, 2);

    card.innerHTML = `
      <div class="score-drop-header">
        <span class="material-icons">trending_down</span>
        <span>⚠️ スコア急降下</span>
      </div>
      <div style="margin-bottom: 8px;">
        <strong>従業員コード ${drop.employee.employeeCode} (${nationalityNames[drop.employee.nationality] || drop.employee.nationality})</strong>
      </div>
      <div class="score-comparison">
        <span class="score-old">前月: ${drop.previousScore}点</span>
        <span class="material-icons" style="font-size: 20px;">arrow_forward</span>
        <span class="score-new">今月: ${drop.currentScore}点</span>
        <span class="score-diff">(${drop.diff}点)</span>
      </div>
      ${droppedCategories.length > 0 ? `<div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">低下したカテゴリー: ${droppedCategories.join(', ')}</div>` : ''}
      <div class="risk-employee-action">
        <strong>→ 推奨アクション:</strong> 個別面談を実施し、急激な変化の原因をヒアリング
      </div>
    `;

    container.appendChild(card);
  });
}
