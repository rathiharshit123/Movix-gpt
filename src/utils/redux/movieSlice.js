import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
    },
});

export default movieSlice.reducer;

export const {
    addNowPlayingMovies,
    addTrailer,
    addUpcomingMovies,
    addTopRatedMovies,
    addPopularMovies,
} = movieSlice.actions;
