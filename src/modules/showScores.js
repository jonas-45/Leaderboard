
const content = document.getElementById('content');

const displayScores = `
<div class="scores">
<div class="scores-heading">
  <h2>Recent Scores</h2>
  <button type="button" id="refresh-btn">Refresh</button>
</div>
<table class="scores-table">
  <tr>
    <td>Name: 100</td>
  </tr>
  <tr>
    <td>Name: 20</td>
  </tr>
  <tr>
    <td>Name: 50</td>
  </tr>
  <tr>
    <td>Name: 78</td>
  </tr>
  <tr>
    <td>Name: 125</td>
  </tr>
  <tr>
    <td>Name: 77</td>
  </tr>
  <tr>
    <td>Name: 42</td>
  </tr>
</table>
</div>`;

const showScoresTable = () => {
  content.innerHTML = displayScores;
}

export default showScoresTable;