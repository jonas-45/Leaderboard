import spinner from './images/spinner.jpg'
const content = document.getElementById('content');

const addScores = `
<div class="add-score">
<h2>Add your score</h2>
<form id="form">
  <input type="text" id="user-name" class="input-txt" placeholder="Your name" required>
  <input type="text" id="user-score" class="input-txt" placeholder="Your score" required>
  <p class="success">Score successfully added</p>
  <div class ="form-footer">
  <img src="${spinner}" alt="Loading image" id="spinner"></img>
  <input type="submit" id="submit" value="Submit">
  </div>
</form>
</div>
`;

const addScoresForm = () => {
  content.innerHTML += addScores;
};

export default addScoresForm;