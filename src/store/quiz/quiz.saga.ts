import { all, call, put, takeLatest } from "redux-saga/effects";
import { getQuizList } from "../../app/services/quizService";
import { FETCH_QUIZ_REQUEST } from "./quiz";
import { fetchQuizFailure, fetchQuizSuccess } from "./quiz.redux";


function* fetchQuizSaga() :any{
  try {
    const response = yield call(getQuizList);
    yield put(
      fetchQuizSuccess({
        quiz: response.data,
      })
    );
  } catch (e:any) {
    yield put(
      fetchQuizFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_QUIZ_REQUEST` action.
  Allows concurrent increments.
*/
function* quizSaga() {
  yield all([takeLatest(FETCH_QUIZ_REQUEST, fetchQuizSaga)]);
}

export default quizSaga;