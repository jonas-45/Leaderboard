const displayScores = (scoresArr) => {
  const tbody = document.querySelector('.table-body');
  scoresArr.forEach((userScore) => {
    tbody.innerHTML += `<tr><td>${userScore.user}</td><td>${userScore.score}</td></tr>`;
  });
};

export default displayScores;