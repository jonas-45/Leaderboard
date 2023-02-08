const content = document.getElementById('content');

const addScores = `
<div class="add-score">
<h2>Add your score</h2>
<form id="form">
  <input type="text" class="input-txt" placeholder="Your name"><br>
  <input type="text" class="input-txt" placeholder="Your score"><br>
  <input type="submit" id="submit" value="Submit">
</form>
</div>
`;

const addScoresForm = () => {
  content.innerHTML += addScores;
};

export default addScoresForm;