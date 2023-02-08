import BaseUrl from "./consts";
import axios from 'axios';

const gamesUrlb = 'games/Zl4d7IVkemOTTVg2fUdz/scores/';
const submitScore = async (score) => {
  try {
    const response = await axios.post(BaseUrl + gamesUrlb, score);
    const feedback = response.data;
    console.log("After adding a score results: ",feedback);

    return feedback;

  }catch(error) {
    console.log(error);
  }
  
}

export default submitScore;