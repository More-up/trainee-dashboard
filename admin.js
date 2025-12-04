// ===========================
// グローバル変数
// ===========================
let allData = [];
let filteredData = [];
let radarChart = null;
let trendChart = null;

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
  myanmar: "ミャンマー",
  vietnam: "ベトナム",
  philippines: "フィリピン",
  indonesia: "インドネシア",
  thailand: "タイ",
  nepal: "ネパール",
  india: "インド",
  cambodia: "カンボジア",
  china: "中国"
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
// データ読み込み
// ===========================
function loadData() {
  try {
    // LocalStorageからデータ取得
    const surveyData = localStorage.getItem('trainee_survey_data');
    
    if (surveyData) {
      allData = JSON.parse(surveyData);
      filteredData = [...allData];
      
      // フィルター選択肢を生成
      populateFilters();
      
      // データ表示
      displayData();
    } else {
      // データがない場合
      showNoData();
    }
  } catch (error) {
    console.error('データ読み込みエラー:', error);
    showNoData();
  }
}

// ===========================
// フィルター選択肢生成
// ===========================
function populateFilters() {
  // 会社コード
  const companies = [...new Set(allData.map(d => d.companyCode))].filter(Boolean);
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
}

// ===========================
// 統計カード更新
// ===========================
function updateStatCards() {
  const totalResponses = filteredData.length;
  const scores = filteredData.map(d => d.totalScore);
  const averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / totalResponses);
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  
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
      <td>${item.yearMonth}</td>
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
      const catQuestions = categoryQuestions[cat];
      const catAnswers = catQuestions.map(q => item.answers[q - 1]);
      const catTotal = catAnswers.reduce((a, b) => a + b, 0);
      const catMax = catQuestions.length * 6;
      const catScore = Math.round((catTotal / catMax) * 100);
      scores.push(catScore);
    });
    categoryScores[cat] = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
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
// 月別推移チャート更新
// ===========================
function updateTrendChart() {
  const ctx = document.getElementById('trendChart');
  
  // 月別データ集計
  const monthlyData = {};
  filteredData.forEach(item => {
    if (!monthlyData[item.yearMonth]) {
      monthlyData[item.yearMonth] = [];
    }
    monthlyData[item.yearMonth].push(item.totalScore);
  });
  
  // 月別平均スコア計算
  const months = Object.keys(monthlyData).sort();
  const averages = months.map(month => {
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
      labels: months,
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
          text: '月別スコア推移',
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
// AI分析更新
// ===========================
function updateAIAnalysis() {
  const container = document.getElementById('aiInsights');
  container.innerHTML = '';
  
  // 国籍別データ集計
  const nationalityData = {};
  filteredData.forEach(item => {
    if (!nationalityData[item.nationality]) {
      nationalityData[item.nationality] = [];
    }
    nationalityData[item.nationality].push(item);
  });
  
  // 国籍別分析生成
  Object.keys(nationalityData).forEach(nat => {
    const data = nationalityData[nat];
    const avgScore = Math.round(data.reduce((sum, d) => sum + d.totalScore, 0) / data.length);
    
    // カテゴリー別スコア
    const categoryScores = {};
    Object.keys(categories).forEach(cat => {
      const scores = [];
      data.forEach(item => {
        const catQuestions = categoryQuestions[cat];
        const catAnswers = catQuestions.map(q => item.answers[q - 1]);
        const catTotal = catAnswers.reduce((a, b) => a + b, 0);
        const catMax = catQuestions.length * 6;
        const catScore = Math.round((catTotal / catMax) * 100);
        scores.push(catScore);
      });
      categoryScores[cat] = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
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
      <h3>🌏 ${nationalityNames[nat]} （回答者: ${data.length}名）</h3>
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
    csv += `${item.yearMonth}\n`;
  });
  
  // BOM追加（Excel対応）
  const bom = '\uFEFF';
  const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
  
  // ダウンロード
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `survey_data_${formatDateForFile(new Date())}.csv`);
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
