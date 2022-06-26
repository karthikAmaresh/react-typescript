import { all, fork } from "redux-saga/effects";

import quizSaga from "./quiz/quiz.saga";

export function* rootQuizSaga() {
  yield all([fork(quizSaga)]);
}