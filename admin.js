// ===========================
// グローバル変数
// ===========================
const API_BASE_URL = 'https://engagement-api.more-up.workers.dev';

let allData = [];
let filteredData = [];
let radarChartInstance = null;
let trendChartInstance = null;
let employeeRadarChartInstance = null;

// ===========================
// カテゴリー定義
// ===========================
const categories = {
  work: '業務・職場環境',
  salary: '給与・待遇',
  family: '家族・プライベート事情',
  relationship: '人間関係',
  communication: '日本語・コミュニケーション',
  culture: '文化・価値観',
  living: '生活環境',
  career: 'キャリア・将来の見通し'
};

// カテゴリーと質問のマッピング
const categoryQuestionMap = {
  work: [1, 2, 3, 4],
  salary: [5, 6, 7, 8],
  family: [9, 10, 11, 12],
  relationship: [13, 14, 15, 16],
  communication: [17, 18, 19, 20, 21],
  culture: [22, 23],
  living: [24, 25, 26, 27, 28, 29],
  career: [30, 31, 32, 33, 34, 35]
};

// ===========================
// 全35問の質問データ定義（正しい質問文）
// ===========================
const surveyQuestions = {
  // カテゴリー1: 業務・職場環境 (Q1-Q4)
  1: {
    category: 'work',
    text: 'Q1. 仕事の内容は、自分に合っていますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  2: {
    category: 'work',
    text: 'Q2. 働く場所で、怪我や事故の心配はありませんか?',
    choices: ['全くない', 'ほとんどない', 'あまりない', '少しある', 'よくある', 'いつもある'],
    type: 'safety_reverse_6'
  },
  3: {
    category: 'work',
    text: 'Q3. 休みの日や働く時間は、ちょうどよいですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  4: {
    category: 'work',
    text: 'Q4. 職場の雰囲気は、働きやすいですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },

  // カテゴリー2: 給与・待遇 (Q5-Q8)
  5: {
    category: 'salary',
    text: 'Q5. 給料の金額に、満足していますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  6: {
    category: 'salary',
    text: 'Q6. 残業代や手当は、きちんと受け取れていますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  7: {
    category: 'salary',
    text: 'Q7. 保険や休暇などの制度は、十分だと思いますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  8: {
    category: 'salary',
    text: 'Q8. この会社で働くことで、生活に必要なお金を得られていますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },

  // カテゴリー3: 家族・プライベート事情 (Q9-Q12)
  9: {
    category: 'family',
    text: 'Q9. 家族と連絡をとる時間は、十分にありますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  10: {
    category: 'family',
    text: 'Q10. 家族に送金する余裕はありますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },
  11: {
    category: 'family',
    text: 'Q11. 自分の時間(休みやプライベート)は、十分にありますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  12: {
    category: 'family',
    text: 'Q12. 将来、家族を日本に呼びたいと思いますか?',
    choices: ['全くそう思わない', 'あまり思わない', '普通', 'ややそう思う', 'とてもそう思う'],
    type: 'motivation_5'
  },

  // カテゴリー4: 人間関係 (Q13-Q16)
  13: {
    category: 'relationship',
    text: 'Q13. 同じ技能実習生の仲間との関係は良いですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  14: {
    category: 'relationship',
    text: 'Q14. 日本人の上司や同僚は、あなたの話を聞いてくれますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  15: {
    category: 'relationship',
    text: 'Q15. 困ったときに、同じ技能実習生の仲間は助けてくれますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },
  16: {
    category: 'relationship',
    text: 'Q16. 職場で、いじめや差別を受けることはありますか?',
    choices: ['全くない', 'ほとんどない', '時々ある', 'よくある', 'かなりある', 'いつもある'],
    type: 'negative_reverse_6'
  },

  // カテゴリー5: 日本語・コミュニケーション (Q17-Q21)
  17: {
    category: 'communication',
    text: 'Q17. 日本語での会話に困ることはありますか?',
    choices: ['全くない', 'ほとんどない', '時々ある', 'よくある', 'かなりある', 'いつもある'],
    type: 'negative_reverse_6'
  },
  18: {
    category: 'communication',
    text: 'Q18. 仕事の説明や指示は分かりやすいですか?',
    choices: ['全く分からない', 'あまり分からない', '普通', 'だいたい分かる', 'よく分かる'],
    type: 'understanding_5'
  },
  19: {
    category: 'communication',
    text: 'Q19. 分からないことを質問しやすいですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  20: {
    category: 'communication',
    text: 'Q20. 会社は、日本語の勉強を助けてくれますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },
  21: {
    category: 'communication',
    text: 'Q21. 母国語で相談できる人(通訳や先輩など)はいますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },

  // カテゴリー6: 文化・価値観 (Q22-Q23)
  22: {
    category: 'culture',
    text: 'Q22. 日本の文化や習慣に、慣れていますか?',
    choices: ['全く慣れていない', 'あまり慣れていない', '普通', 'やや慣れている', 'とても慣れている'],
    type: 'familiarity_5'
  },
  23: {
    category: 'culture',
    text: 'Q23. 仕事中に文化の違いで困ることはありますか?',
    choices: ['全くない', 'ほとんどない', '時々ある', 'よくある', 'かなりある', 'いつもある'],
    type: 'negative_reverse_6'
  },

  // カテゴリー7: 生活環境 (Q24-Q29)
  24: {
    category: 'living',
    text: 'Q24. 住んでいる場所(寮・アパートなど)は快適ですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  25: {
    category: 'living',
    text: 'Q25. 生活費は、給料に対してちょうどよいですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  26: {
    category: 'living',
    text: 'Q26. 日本での生活で困ることはありますか?',
    choices: ['全くない', 'ほとんどない', '時々ある', 'よくある', 'かなりある', 'いつもある'],
    type: 'negative_reverse_6'
  },
  27: {
    category: 'living',
    text: 'Q27. 会社は生活のサポートをしてくれますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },
  28: {
    category: 'living',
    text: 'Q28. 寮や家での生活環境(部屋の広さ・設備など)に満足していますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },
  29: {
    category: 'living',
    text: 'Q29. 日本での生活は、安全で快適ですか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  },

  // カテゴリー8: キャリア・将来の見通し (Q30-Q35)
  30: {
    category: 'career',
    text: 'Q30. 今の仕事で、技術や知識が身についていますか?',
    choices: ['全くそう思わない', 'あまり思わない', '普通', 'ややそう思う', 'とてもそう思う'],
    type: 'motivation_5'
  },
  31: {
    category: 'career',
    text: 'Q31. 頑張った分だけ、評価や待遇が良くなると感じますか?',
    choices: ['全くそう思わない', 'あまり思わない', '普通', 'ややそう思う', 'とてもそう思う'],
    type: 'motivation_5'
  },
  32: {
    category: 'career',
    text: 'Q32. この会社で、長く働きたいと思いますか?',
    choices: ['全くそう思わない', 'あまり思わない', '普通', 'ややそう思う', 'とてもそう思う'],
    type: 'motivation_5'
  },
  33: {
    category: 'career',
    text: 'Q33. ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?',
    choices: ['全くない', 'あまりない', '普通', 'ある程度ある', '十分ある'],
    type: 'availability_5'
  },
  34: {
    category: 'career',
    text: 'Q34. この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?',
    choices: ['全くそう思わない', 'あまり思わない', '普通', 'ややそう思う', 'とてもそう思う'],
    type: 'motivation_5'
  },
  35: {
    category: 'career',
    text: 'Q35. 母国の友達にも「この会社で働いたほうがいいよ」と思えますか?',
    choices: ['とても不満', 'やや不満', '普通', 'やや満足', 'とても満足'],
    type: 'satisfaction_5'
  }
};

// 国籍の表示名
const nationalityNames = {
  'mm': 'ミャンマー',
  'vn': 'ベトナム',
  'kh': 'カンボジア',
  'in': 'インド',
  'ph': 'フィリピン',
  'la': 'ラオス',
  'mn': 'モンゴル',
  'bd': 'バングラデシュ',
  'lk': 'スリランカ',
  'bt': 'ブータン',
  'uz': 'ウズベキスタン',
  'pk': 'パキスタン',
  'th': 'タイ',
  'id': 'インドネシア',
  'np': 'ネパール',
  'cn': '中国',
  'jp': '日本'
};

// ===========================
// 初期化
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  checkLoginStatus();
  loadData();
  setupEventListeners();
});

// ===========================
// ログイン状態確認
// ===========================
function checkLoginStatus() {
  const token = localStorage.getItem('adminToken');
  const username = localStorage.getItem('adminUsername');

  if (!token) {
    window.location.href = 'admin-login.html';
    return;
  }

  if (username) {
    document.getElementById('adminUsername').textContent = username;
  }
}

// ===========================
// ログアウト
// ===========================
function logout() {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminUsername');
  window.location.href = 'admin-login.html';
}

// ===========================
// イベントリスナー設定
// ===========================
function setupEventListeners() {
  // フィルター変更イベントは HTML の onchange で設定済み
}

// ===========================
// データ読み込み
// ===========================
async function loadData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/results`);
    if (!response.ok) throw new Error('データの取得に失敗しました');

    const data = await response.json();
    
    // category_scores と answers を JSON パースして配列に変換
    allData = data.map(item => {
      let categoryScores = {};
      let answers = {};

      try {
        categoryScores = typeof item.category_scores === 'string' 
          ? JSON.parse(item.category_scores) 
          : item.category_scores || {};
      } catch (e) {
        console.error('category_scores parse error:', e);
      }

      try {
        answers = typeof item.answers === 'string' 
          ? JSON.parse(item.answers) 
          : item.answers || {};
      } catch (e) {
        console.error('answers parse error:', e);
      }

      return {
        ...item,
        category_scores: categoryScores,
        answers: answers
      };
    });

    filteredData = [...allData];
    updateFilters();
    applyFilters();
  } catch (error) {
    console.error('データ読み込みエラー:', error);
    alert('データの読み込みに失敗しました');
  }
}

// ===========================
// フィルター更新
// ===========================
function updateFilters() {
  const companies = [...new Set(allData.map(d => d.company_code))].sort();
  const months = [...new Set(allData.map(d => d.year_month))].sort().reverse();
  
  // 会社フィルター
  const companySelect = document.getElementById('filterCompany');
  companySelect.innerHTML = '<option value="">すべて</option>';
  companies.forEach(company => {
    const option = document.createElement('option');
    option.value = company;
    option.textContent = company;
    companySelect.appendChild(option);
  });

  // 月フィルター
  const monthSelect = document.getElementById('filterMonth');
  monthSelect.innerHTML = '<option value="">すべて</option>';
  months.forEach(month => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // 従業員コードフィルター (1～20固定)
  const employeeSelect = document.getElementById('filterEmployee');
  employeeSelect.innerHTML = '<option value="">すべて</option>';
  for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option');
    option.value = i.toString();
    option.textContent = i.toString();
    employeeSelect.appendChild(option);
  }
}

// ===========================
// フィルター適用
// ===========================
function applyFilters() {
  const companyFilter = document.getElementById('filterCompany').value;
  const monthFilter = document.getElementById('filterMonth').value;
  const employeeFilter = document.getElementById('filterEmployee').value;
  const nationalityFilter = document.getElementById('filterNationality').value;

  filteredData = allData.filter(item => {
    const matchCompany = !companyFilter || item.company_code === companyFilter;
    const matchMonth = !monthFilter || item.year_month === monthFilter;
    const matchEmployee = !employeeFilter || item.employee_code === employeeFilter;
    const matchNationality = !nationalityFilter || item.nationality === nationalityFilter;

    return matchCompany && matchMonth && matchEmployee && matchNationality;
  });

  updateStatistics();
  updateDataTable();
  updateRadarChart();
  updateTrendChart();
  updateAIAnalysis();
  updateRiskAlerts();

  // 個別従業員表示の切り替え
  if (employeeFilter && filteredData.length === 1) {
    showEmployeeDetail(filteredData[0]);
  } else {
    hideEmployeeDetail();
  }
}

// ===========================
// 統計情報更新
// ===========================
function updateStatistics() {
  const total = filteredData.length;
  const scores = filteredData.map(d => d.total_score || 0);
  const avg = total > 0 ? (scores.reduce((a, b) => a + b, 0) / total).toFixed(1) : 0;
  const max = total > 0 ? Math.max(...scores).toFixed(1) : 0;
  const min = total > 0 ? Math.min(...scores).toFixed(1) : 0;

  document.getElementById('totalResponses').textContent = total;
  document.getElementById('averageScore').textContent = avg;
  document.getElementById('maxScore').textContent = max;
  document.getElementById('minScore').textContent = min;
}

// ===========================
// データテーブル更新
// ===========================
function updateDataTable() {
  const tbody = document.getElementById('dataTableBody');
  tbody.innerHTML = '';

  if (filteredData.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="no-data"><span class="material-icons">inbox</span><br>データがありません</td></tr>';
    return;
  }

  filteredData.forEach(item => {
    const row = document.createElement('tr');
    const scoreClass = item.total_score >= 60 ? 'score-high' : item.total_score >= 50 ? 'score-medium' : 'score-low';
    
    row.innerHTML = `
      <td>${formatDate(item.survey_date)}</td>
      <td>${item.company_code || '-'}</td>
      <td>${item.employee_code || '-'}</td>
      <td>${nationalityNames[item.nationality] || item.nationality || '-'}</td>
      <td><span class="score-badge ${scoreClass}">${(item.total_score || 0).toFixed(1)}</span></td>
      <td>${item.year_month || '-'}</td>
    `;
    tbody.appendChild(row);
  });
}

// ===========================
// 日付フォーマット
// ===========================
function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP');
}

// ===========================
// レーダーチャート更新
// ===========================
function updateRadarChart() {
  const canvas = document.getElementById('radarChart');
  const ctx = canvas.getContext('2d');

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  if (filteredData.length === 0) {
    return;
  }

  // カテゴリー別平均スコア計算
  const categoryAverages = {};
  Object.keys(categories).forEach(key => {
    const scores = filteredData.map(d => d.category_scores[key] || 0);
    categoryAverages[key] = scores.length > 0 
      ? scores.reduce((a, b) => a + b, 0) / scores.length 
      : 0;
  });

  // ラベルを改行
  const labels = Object.values(categories).map(label => {
    if (label.includes('・')) {
      return label.split('・');
    }
    return label;
  });

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: '平均スコア',
        data: Object.values(categoryAverages),
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
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            font: { size: 10 }
          },
          pointLabels: {
            font: { size: 11 },
            padding: 15
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'カテゴリー別スコア（平均）',
          font: { size: 16 }
        }
      },
      layout: {
        padding: 20
      }
    }
  });
}

// ===========================
// トレンドチャート更新
// ===========================
function updateTrendChart() {
  const canvas = document.getElementById('trendChart');
  const ctx = canvas.getContext('2d');

  if (trendChartInstance) {
    trendChartInstance.destroy();
  }

  if (filteredData.length === 0) {
    return;
  }

  // 月別平均スコア計算
  const monthlyScores = {};
  filteredData.forEach(item => {
    const month = item.year_month;
    if (!monthlyScores[month]) {
      monthlyScores[month] = [];
    }
    monthlyScores[month].push(item.total_score || 0);
  });

  const months = Object.keys(monthlyScores).sort();
  const averages = months.map(month => {
    const scores = monthlyScores[month];
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  });

  trendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: '平均スコア',
        data: averages,
        backgroundColor: 'rgba(26, 115, 232, 0.1)',
        borderColor: 'rgba(26, 115, 232, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: '月別スコア推移',
          font: { size: 16 }
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

  if (filteredData.length === 0) {
    container.innerHTML = '<div class="no-data"><span class="material-icons">psychology</span><br>分析データがありません</div>';
    return;
  }

  // 国籍別分析
  const nationalityData = {};
  filteredData.forEach(item => {
    const nat = item.nationality;
    if (!nationalityData[nat]) {
      nationalityData[nat] = [];
    }
    nationalityData[nat].push(item.total_score || 0);
  });

  Object.entries(nationalityData).forEach(([nat, scores]) => {
    const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
    const count = scores.length;
    const natName = nationalityNames[nat] || nat;

    const card = document.createElement('div');
    card.className = 'ai-insight-card';
    card.innerHTML = `
      <h3>🌏 ${natName} (${count}名)</h3>
      <p>平均スコア: <strong>${avg}点</strong></p>
      <p>${getInsightMessage(parseFloat(avg), natName)}</p>
    `;
    container.appendChild(card);
  });
}

// ===========================
// インサイトメッセージ生成
// ===========================
function getInsightMessage(score, nationality) {
  if (score >= 70) {
    return `${nationality}の方々は、職場環境に非常に満足しており、安定した状態です。`;
  } else if (score >= 60) {
    return `${nationality}の方々は、概ね良好な状態ですが、改善の余地があります。`;
  } else if (score >= 50) {
    return `${nationality}の方々は、いくつかの課題を抱えている可能性があります。面談を推奨します。`;
  } else {
    return `${nationality}の方々は、深刻な課題を抱えている可能性が高いです。早急な対応が必要です。`;
  }
}

// ===========================
// リスクアラート更新
// ===========================
function updateRiskAlerts() {
  const container = document.getElementById('riskAlertContainer');
  container.innerHTML = '';

  const highRisk = filteredData.filter(d => {
    const totalScore = d.total_score || 0;
    const salaryScore = d.category_scores?.salary || 0;
    const relationshipScore = d.category_scores?.relationship || 0;
    return totalScore <= 40 || salaryScore <= 30 || relationshipScore <= 30;
  });

  const mediumRisk = filteredData.filter(d => {
    const totalScore = d.total_score || 0;
    return totalScore > 40 && totalScore <= 50;
  });

  if (highRisk.length === 0 && mediumRisk.length === 0) {
    container.innerHTML = '<div class="no-risk"><span class="material-icons">check_circle</span><br>現在、リスクアラートはありません</div>';
    return;
  }

  if (highRisk.length > 0) {
    const card = document.createElement('div');
    card.className = 'risk-card high';
    card.innerHTML = `
      <div class="risk-card-header">
        <div class="risk-card-title">🔴 高リスク (${highRisk.length}名)</div>
      </div>
      <div class="risk-card-content">
        ${highRisk.map(emp => `
          <div class="risk-employee">
            <div class="risk-employee-header">
              <span class="risk-employee-info">従業員 ${emp.employee_code} (${nationalityNames[emp.nationality] || emp.nationality})</span>
              <span class="score-badge score-low">${(emp.total_score || 0).toFixed(1)}点</span>
            </div>
            <div class="risk-employee-details">
              会社: ${emp.company_code} | 調査日: ${formatDate(emp.survey_date)}
            </div>
            <div class="risk-employee-action">
              <strong>推奨アクション:</strong> 早急な個別面談と改善施策の実施が必要です
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(card);
  }

  if (mediumRisk.length > 0) {
    const card = document.createElement('div');
    card.className = 'risk-card medium';
    card.innerHTML = `
      <div class="risk-card-header">
        <div class="risk-card-title">🟡 中リスク (${mediumRisk.length}名)</div>
      </div>
      <div class="risk-card-content">
        ${mediumRisk.map(emp => `
          <div class="risk-employee">
            <div class="risk-employee-header">
              <span class="risk-employee-info">従業員 ${emp.employee_code} (${nationalityNames[emp.nationality] || emp.nationality})</span>
              <span class="score-badge score-medium">${(emp.total_score || 0).toFixed(1)}点</span>
            </div>
            <div class="risk-employee-details">
              会社: ${emp.company_code} | 調査日: ${formatDate(emp.survey_date)}
            </div>
            <div class="risk-employee-action">
              <strong>推奨アクション:</strong> 定期的なフォローアップと状況確認を推奨します
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(card);
  }
}

// ===========================
// リスクレベル計算
// ===========================
function calculateRiskLevel(item) {
  const totalScore = item.total_score || 0;
  const categoryScores = item.category_scores || {};
  
  const salaryScore = categoryScores.salary || 0;
  const relationshipScore = categoryScores.relationship || 0;
  const cultureScore = categoryScores.culture || 0;

  if (totalScore <= 40 || salaryScore <= 30 || relationshipScore <= 30) {
    return 'high';
  } else if (totalScore <= 50 || cultureScore <= 35) {
    return 'medium';
  } else {
    return 'low';
  }
}

// ===========================
// CSV出力
// ===========================
function exportCSV() {
  if (filteredData.length === 0) {
    alert('出力するデータがありません');
    return;
  }

  const headers = ['日時', '会社コード', '従業員コード', '国籍', '総合スコア', '月'];
  const rows = filteredData.map(item => [
    formatDate(item.survey_date),
    item.company_code || '',
    item.employee_code || '',
    nationalityNames[item.nationality] || item.nationality || '',
    (item.total_score || 0).toFixed(1),
    item.year_month || ''
  ]);

  let csvContent = '\uFEFF'; // BOM for Excel
  csvContent += headers.join(',') + '\n';
  csvContent += rows.map(row => row.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `survey_data_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
}

// ===========================
// 個別従業員詳細表示
// ===========================
function showEmployeeDetail(employeeData) {
  const section = document.getElementById('employeeDetailSection');
  section.classList.add('visible');

  // ヘッダー情報
  document.getElementById('employeeBadge').textContent = `従業員 ${employeeData.employee_code}`;
  document.getElementById('employeeTotalScore').textContent = (employeeData.total_score || 0).toFixed(1);
  document.getElementById('employeeSurveyDate').textContent = formatDate(employeeData.survey_date);

  // 個別レーダーチャート
  updateEmployeeRadarChart(employeeData);

  // カテゴリースコア一覧
  updateEmployeeCategoryScores(employeeData);

  // 全35問回答詳細
  updateEmployeeAnswers(employeeData);
}

function hideEmployeeDetail() {
  const section = document.getElementById('employeeDetailSection');
  section.classList.remove('visible');
}

// ===========================
// 個別従業員レーダーチャート
// ===========================
function updateEmployeeRadarChart(employeeData) {
  const canvas = document.getElementById('employeeRadarChart');
  const ctx = canvas.getContext('2d');

  if (employeeRadarChartInstance) {
    employeeRadarChartInstance.destroy();
  }

  const categoryScores = employeeData.category_scores || {};
  
  // ラベルを改行
  const labels = Object.values(categories).map(label => {
    if (label.includes('・')) {
      return label.split('・');
    }
    return label;
  });

  const data = Object.keys(categories).map(key => categoryScores[key] || 0);

  employeeRadarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: `従業員 ${employeeData.employee_code}`,
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
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            font: { size: 10 }
          },
          pointLabels: {
            font: { size: 11 },
            padding: 15
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: `従業員 ${employeeData.employee_code} - カテゴリー別スコア`,
          font: { size: 16 }
        }
      },
      layout: {
        padding: 20
      }
    }
  });
}

// ===========================
// カテゴリースコア一覧表示
// ===========================
function updateEmployeeCategoryScores(employeeData) {
  const container = document.getElementById('employeeCategoryScores');
  container.innerHTML = '';

  const categoryScores = employeeData.category_scores || {};

  Object.entries(categories).forEach(([key, label]) => {
    const score = categoryScores[key] || 0;
    
    const item = document.createElement('div');
    item.className = 'category-score-item';
    item.innerHTML = `
      <span class="category-name">${label}</span>
      <span class="category-score">${score.toFixed(1)}点</span>
    `;
    container.appendChild(item);
  });
}

// ===========================
// 全35問回答詳細表示
// ===========================
function updateEmployeeAnswers(employeeData) {
  const container = document.getElementById('employeeAnswersContainer');
  container.innerHTML = '';

  const answers = employeeData.answers || {};

  for (let qNum = 1; qNum <= 35; qNum++) {
    const questionData = surveyQuestions[qNum];
    if (!questionData) continue;

    const userAnswer = answers[`q${qNum}`];
    if (userAnswer === undefined || userAnswer === null) continue;

    const questionItem = document.createElement('div');
    questionItem.className = 'question-item';

    const categoryLabel = categories[questionData.category];

    // 選択肢の表示
    const choicesHTML = questionData.choices.map((choice, index) => {
      const isSelected = userAnswer === index;
      return `<span class="choice-item ${isSelected ? 'selected' : ''}">${choice}</span>`;
    }).join('');

    questionItem.innerHTML = `
      <div class="question-header">
        <span class="question-number">Q${qNum}</span>
        <span class="question-category-tag">${categoryLabel}</span>
      </div>
      <div class="question-text">${questionData.text}</div>
      <div class="answer-choices">
        ${choicesHTML}
      </div>
    `;

    container.appendChild(questionItem);
  }
}
