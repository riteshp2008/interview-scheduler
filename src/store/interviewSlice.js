import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interviews: [],
  filters: {
    date: null,
    interviewer: '',
    candidate: ''
  }
};

const interviewSlice = createSlice({
  name: 'interviews',
  initialState,
  reducers: {
    addInterview: (state, action) => {
      state.interviews.push(action.payload);
    },
    updateInterview: (state, action) => {
      const index = state.interviews.findIndex(interview => interview.id === action.payload.id);
      if (index !== -1) {
        state.interviews[index] = action.payload;
      }
    },
    deleteInterview: (state, action) => {
      state.interviews = state.interviews.filter(interview => interview.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  }
});

export const { addInterview, updateInterview, deleteInterview, setFilter } = interviewSlice.actions;
export default interviewSlice.reducer;