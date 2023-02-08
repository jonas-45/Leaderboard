const displayScores = (scoresArr) => {
  const table = document.querySelector('.scores-table');
  table.innerHTML = '';
  scoresArr.forEach((userScore) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerHTML = userScore.user;
    td2.innerHTML = userScore.score;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });
}

export default displayScores;