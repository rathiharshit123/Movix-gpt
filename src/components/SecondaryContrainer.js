import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContrainer = () => {
    const movies = useSelector((state) => state.movies);
    const activeFilters = useSelector((state) => state.movies.activeFilters);

    const { trendingMovies,nowPlayingMovies,upcomingMovies,popularMovies,topRatedMovies } = activeFilters;


    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black">
                <div className="-mt-52 relative z-10 pl-10">
                    <MovieList
                        title="Trending"
                        movies={movies?.trendingMovies[trendingMovies]}
                    />
                    <MovieList
                        title="Now Playing"
                        movies={movies?.nowPlayingMovies[nowPlayingMovies]}
                    />
                    <MovieList title="Popular" movies={movies?.popularMovies} />
                    <MovieList
                        title="Upcoming"
                        movies={movies?.upcomingMovies}
                    />
                    <MovieList
                        title="Top Rated"
                        movies={movies?.topRatedMovies}
                    />
                </div>
            </div>
        )
    );
};

export default SecondaryContrainer;
