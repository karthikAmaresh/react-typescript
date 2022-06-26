import { createSelector } from "reselect";


import { AppQuizState } from "../rootQuizReducer";

const getPending = (state: AppQuizState) => state.quiz.pending;

const getQuizzes = (state: AppQuizState) => state.quiz.quiz;

const getError = (state: AppQuizState) => state.quiz.error;

export const getQuizSelector = createSelector(getQuizzes, (quiz) => quiz);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
