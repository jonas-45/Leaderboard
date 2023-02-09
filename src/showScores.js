const content = document.getElementById('content');

const displayScores = `
<div class="scores">
<div class="scores-heading">
  <h2>Recent Scores</h2>
  <button type="button" id="refresh-btn">Refresh</button>
</div>
<table class="scores-table">
  <tbody class='table-body'></tbody>
</table>
</div>`;

const showScoresTable = () => {
  content.innerHTML = displayScores;
};

export default showScoresTable;