import axios from 'axios';
import GameUrl from './consts';
import displayScores from './displayScores';

const getAllScores = async () => {
  try {
    const response = await axios.get(GameUrl);
    const respObj = response.data;
    console.log(respObj.result);
    if (respObj.result.length > 0) {
      displayScores(respObj.result);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllScores;