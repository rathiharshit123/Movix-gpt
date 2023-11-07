import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
    },
});

export default movieSlice.reducer;

export const { addNowPlayingMovies, addTrailer } = movieSlice.actions;
