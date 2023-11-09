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
        addTrendingMovies: (state, action) => {
            const { filter, data } = action.payload;
            state.trendingMovies[filter] = data;
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
