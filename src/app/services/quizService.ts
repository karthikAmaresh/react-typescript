import axios from "axios";
import { IQuiz } from "../../store/quiz/quiz";

export const getQuizList = () =>
  axios.get<IQuiz[]>("https://localhost:44346/api/Quiz");

