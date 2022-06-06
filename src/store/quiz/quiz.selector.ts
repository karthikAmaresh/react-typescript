import { createSelector } from "reselect";


import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.quiz.pending;

const getQuizzes = (state: AppState) => state.quiz.quiz;

const getError = (state: AppState) => state.quiz.error;

export const getQuizSelector = createSelector(getQuizzes, (quiz) => quiz);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
