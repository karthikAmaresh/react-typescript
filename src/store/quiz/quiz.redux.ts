import {
  FetchQuizFailure,
  FetchQuizFailurePayload,
  FetchQuizRequest,
  FetchQuizSuccess,
  FetchQuizSuccessPayload,
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  QuizActions,
  quizState,
} from "./quiz";

export const fetchQuizRequest = (): FetchQuizRequest => ({
  type: FETCH_QUIZ_REQUEST,
});

export const fetchQuizSuccess = (
  payload: FetchQuizSuccessPayload
): FetchQuizSuccess => ({
  type: FETCH_QUIZ_SUCCESS,
  payload,
});

export const fetchQuizFailure = (
  payload: FetchQuizFailurePayload
): FetchQuizFailure => ({
  type: FETCH_QUIZ_FAILURE,
  payload,
});
  
  const initialState: quizState = {
    pending: false,
    quiz: [],
    error: null,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action: QuizActions) => {
    switch (action.type) {
      case FETCH_QUIZ_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_QUIZ_SUCCESS:
        return {
          ...state,
          pending: false,
          quiz: action.payload.quiz,
          error: null,
        };
      case FETCH_QUIZ_FAILURE:
        return {
          ...state,
          pending: false,
          quiz: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
