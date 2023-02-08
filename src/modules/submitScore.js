import axios from 'axios';
import GameUrl from "./consts";

const submitScore = async (score) => {
  try {
    const response = await axios.post(GameUrl, score);
    const feedback = response.data;
    console.log("After adding a score results: ",feedback);

    return feedback;

  }catch(error) {
    console.log(error);
  }
  
}

export default submitScore;