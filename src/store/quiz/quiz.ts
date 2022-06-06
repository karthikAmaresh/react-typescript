export const FETCH_QUIZ_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_QUIZ_FAILURE = "FETCH_TODO_FAILURE";
  
  export interface IQuiz {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    createdBy?: string;
    createdOn?: string | Date | undefined;
    numberOfQuestions?: number;
    category?: string;
    timeLimitHour?: number;
    timeLimitMin?: number;
    passingGradeValue?: number;
    modifiedBy?: string;
    modifiedOn?: string;
    isprogressiveQuestion?: boolean;
    israndomiseQuestion?: boolean;
    file?: File | null;
  }
  
  export interface quizState {
    pending: boolean;
    quiz: IQuiz[];
    error: string | null;
  }
  
  export interface FetchQuizSuccessPayload {
    quiz: IQuiz[];
  }
  
  export interface FetchQuizFailurePayload {
    error: string;
  }
  
  export interface FetchQuizRequest {
    type: typeof FETCH_QUIZ_REQUEST;
  }
  
  export type FetchQuizSuccess = {
    type: typeof FETCH_QUIZ_SUCCESS;
    payload: FetchQuizSuccessPayload;
  };
  
  export type FetchQuizFailure = {
    type: typeof FETCH_QUIZ_FAILURE;
    payload: FetchQuizFailurePayload;
  };
  
  export type QuizActions =
    | FetchQuizRequest
    | FetchQuizSuccess
    | FetchQuizFailure;
  