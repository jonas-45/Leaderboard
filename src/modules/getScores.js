import axios from 'axios';
import API_SCORES_URL from './consts';
import displayScores from './displayScores';

const getAllScores = async () => {
  try {
    const response = await axios.get(API_SCORES_URL);
    const respObj = response.data;
    if (respObj.result.length > 0) {
      displayScores(respObj.result);
    }
    return true;
  } catch (error) {
    return null;
  }
};

export default getAllScores;