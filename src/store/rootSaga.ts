import { all, fork } from "redux-saga/effects";

import quizSaga from "./quiz/quiz.saga";

export function* rootSaga() {
  yield all([fork(quizSaga)]);
}