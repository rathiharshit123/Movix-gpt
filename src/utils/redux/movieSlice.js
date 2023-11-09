import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: {
            movies: null,
            tvShows: null,
        },
        trailer: null,
        popularMovies: {
            movies: null,
            tvShows: null,
        },
        upcomingMovies: {
            movies: null,
            tvShows: null,
        },
        topRatedMovies: {
            movies: null,
            tvShows: null,
        },
        trendingMovies: {
            day: null,
            week: null,
        },
        activeFilters: {
            popularMovies: "movies",
            upcomingMovies: "movies",
            topRatedMovies: "movies",
            trendingMovies: "day",
            nowPlayingMovies: "movies",
        },
    },
    reducers: {
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        setMovies: (state, action) => {
            const { category, data, filter } = action.payload;
            state[category][filter] = data;
        },
        setFilter: (state, action) => {
            const { category, filter } = action.payload;
            state.activeFilters[category] = filter;
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
    addTrendingMovies,
    setFilter,
    setMovies,
} = movieSlice.actions;
