import { combineReducers } from "redux";

import quizReducer from "./quiz/quiz.redux"

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;