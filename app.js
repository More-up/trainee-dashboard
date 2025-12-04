const positiveOptions = [
  {emoji:"😄", label:"とても満足", score:6},
  {emoji:"🙂", label:"やや満足", score:5},
  {emoji:"😐", label:"どちらでもない", score:4},
  {emoji:"🙁", label:"やや不満", score:3},
  {emoji:"😢", label:"不満", score:2},
  {emoji:"😭", label:"とても不満", score:1},
];

const negativeOptions = [
  {emoji:"😄", label:"全くない", score:6},
  {emoji:"🙂", label:"ほとんどない", score:5},
  {emoji:"😐", label:"時々ある", score:4},
  {emoji:"🙁", label:"よくある", score:3},
  {emoji:"😢", label:"かなりある", score:2},
  {emoji:"😭", label:"いつもある", score:1},
];

// 質問ごとの選択肢生成
document.querySelectorAll('.question').forEach(q => {
  const type = q.dataset.type;
  const options = type === "positive" ? positiveOptions : negativeOptions;
  const container = q.querySelector('.options');
  const resultEl = q.querySelector('.result');

  options.forEach(opt => {
    const div = document.createElement('div');
    div.className = "option";
    div.textContent = `${opt.emoji} ${opt.label}（${opt.score}点）`;
    div.addEventListener('click', () => {
      [...container.children].forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      resultEl.textContent = `選択: ${opt.label}（${opt.score}点）`;
      resultEl.style.display = 'block';
    });
    container.appendChild(div);
  });
});

// 集計処理
document.getElementById('calculate').addEventListener('click', () => {
  let total = 0;
  let answered = 0;
  document.querySelectorAll('.question').forEach(q => {
    const selected = q.querySelector('.selected');
    if (selected) {
      const scoreMatch = selected.textContent.match(/（(\d+)点）/);
      if (scoreMatch) {
        total += parseInt(scoreMatch[1]);
        answered++;
      }
    }
  });
  const max = document.querySelectorAll('.question').length * 6;
  document.getElementById('summary').textContent =
    `回答数: ${answered} / ${document.querySelectorAll('.question').length}　合計: ${total}点 / 最大: ${max}点`;
});
