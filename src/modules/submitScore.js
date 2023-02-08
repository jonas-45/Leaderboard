import axios from 'axios';
import GameUrl from './consts';

const submitScore = async (score) => {
  try {
    const response = await axios.post(GameUrl, score);
    const feedback = response.data;

    return feedback;
  } catch (error) {
    return null;
  }
};

export default submitScore;