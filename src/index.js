import './styles/styles.css';
import showScoresTable from './showScores';
import addScoresForm from './addScores';
import submitScore from './modules/submitScore';

showScoresTable();
addScoresForm();

const form = document.getElementById('form');
const userNameInput = document.getElementById('user-name');
const scoreInput = document.getElementById('user-score');
const successTxt = document.querySelector('.success');
const spinner = document.getElementById('spinner');

//form.addEventListener('submit',submitScore(userNameInput.value, scoreInput.value));
form.addEventListener('submit', async event => {
  event.preventDefault();
  spinner.style.display = 'block';
  const score = {
    user: userNameInput.value,
    score: scoreInput.value
  }

  await submitScore(score);
  spinner.style.display = 'none';
  successTxt.style.display = 'block';
  setTimeout(() => {
    successTxt.style.display = 'none';
  },3000);
  
});