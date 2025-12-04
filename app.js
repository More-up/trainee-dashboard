// 選択肢データ
const optionsData = [
  { emoji: "😋", label: "とても満足", score: 6 },
  { emoji: "😊", label: "やや満足", score: 5 },
  { emoji: "😐", label: "どちらでもない", score: 4 },
  { emoji: "😟", label: "やや不満", score: 3 },
  { emoji: "😨", label: "不満", score: 2 },
  { emoji: "🎁", label: "とても不満", score: 1 }
];

// 全質問を初期化
document.querySelectorAll(".question").forEach(q => {
  const optionsDiv = q.querySelector(".options");
  optionsData.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.emoji;
    btn.title = `${opt.label} (${opt.score}点)`;
    btn.addEventListener("click", () => {
      // 選択状態をリセット
      optionsDiv.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      q.dataset.score = opt.score;
      q.querySelector(".result").textContent = `選択: ${opt.label} (${opt.score}点)`;
      updateProgress();
    });
    optionsDiv.appendChild(btn);
  });
});

// 進捗バー追加
const progressBar = document.createElement("div");
progressBar.id = "progress";
progressBar.style.height = "10px";
progressBar.style.background = "#eee";
progressBar.style.margin = "1rem 0";
const progressFill = document.createElement("div");
progressFill.style.height = "100%";
progressFill.style.width = "0%";
progressFill.style.background = "#3498db";
progressFill.style.transition = "width 0.3s ease";
progressBar.appendChild(progressFill);
document.body.insertBefore(progressBar, document.getElementById("calculate"));

function updateProgress() {
  const answered = document.querySelectorAll(".question[data-score]").length;
  const total = document.querySelectorAll(".question").length;
  const percent = Math.round((answered / total) * 100);
  progressFill.style.width = percent + "%";
}

// 集計処理
document.getElementById("calculate").addEventListener("click", () => {
  const questions = document.querySelectorAll(".question");
  let totalScore = 0;
  let answered = 0;

  questions.forEach(q => {
    if (q.dataset.score) {
      let score = parseInt(q.dataset.score);
      // negative質問は逆スコア化
      if (q.dataset.type === "negative") {
        score = 7 - score; // 6→1, 5→2, ...
      }
      totalScore += score;
      answered++;
    }
  });

  const avg = (totalScore / answered).toFixed(2);
  document.getElementById("summary").textContent =
    `回答済み ${answered}問 / 平均スコア: ${avg}点`;
});
