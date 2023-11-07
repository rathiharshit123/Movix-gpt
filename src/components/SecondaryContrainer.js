import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContrainer = () => {
    const movies = useSelector((state) => state.movies);

    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black">
                <div className="-mt-52 relative z-10 pl-10">
                    <MovieList
                        title="Now Playing"
                        movies={movies?.nowPlayingMovies}
                    />
                    <MovieList
                        title="Popular"
                        movies={movies?.popularMovies}
                    />
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
