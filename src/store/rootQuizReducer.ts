import { combineReducers } from "redux";

import quizReducer from "./quiz/quiz.redux"

const rootQuizReducer = combineReducers({
  quiz: quizReducer,
});

export type AppQuizState = ReturnType<typeof rootQuizReducer>;

export default rootQuizReducer;