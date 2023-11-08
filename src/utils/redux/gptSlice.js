import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        gptSearchToggle: false,
        gptMovies: null,
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptSearchToggle = !state.gptSearchToggle;
        },
        addGptSearchMovieResults: (state, action) => {
            state.gptMovies = action.payload;
        },
    },
});

export const { toggleGptSearch, addGptSearchMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
