import axios from 'axios';
import API_SCORES_URL from './consts';

const submitScore = async (score) => {
  try {
    const response = await axios.post(API_SCORES_URL, score);
    const feedback = response.data;

    return feedback;
  } catch (error) {
    return null;
  }
};

export default submitScore;