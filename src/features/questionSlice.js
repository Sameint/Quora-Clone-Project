import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = questionSlice.actions;

export const selectQuestionName = (state) => state.question.questionName;
export const selectQuestionId = (state) => state.question.questionId;
export default questionSlice.reducer;
