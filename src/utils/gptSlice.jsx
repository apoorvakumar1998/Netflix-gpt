import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: [],
    movieNames: null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      state.movieNames = action.payload.movies;
      state.movieResults = action.payload.movieList;
    }
  }
});

export const { toggleGptSearch, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;