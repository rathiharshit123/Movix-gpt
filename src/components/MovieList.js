import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setFilter } from "../utils/redux/movieSlice";
import MovieListSkeleton from "./MovieListSkeleton";

const MovieList = ({ title, movies }) => {
    const [btnToggle, setBtnToggle] = useState(true);

    const dispatch = useDispatch();

    // Function to handle button clicks and update active state
    const handleButtonClick = (button) => {
        switch (title) {
            case "Trending":
                dispatch(
                    setFilter({
                        category: "trendingMovies",
                        filter: button == "left" ? "day" : "week",
                    })
                );
                break;
            case "Now Playing":
                dispatch(
                    setFilter({
                        category: "nowPlayingMovies",
                        filter: button == "left" ? "movies" : "tvShows",
                    })
                );
                break;
            case "Popular":
                dispatch(
                    setFilter({
                        category: "popularMovies",
                        filter: button == "left" ? "movies" : "tvShows",
                    })
                );
                break;
            case "Upcoming":
                dispatch(
                    setFilter({
                        category: "upcomingMovies",
                        filter: button == "left" ? "movies" : "tvShows",
                    })
                );
                break;
            case "Top Rated":
                dispatch(
                    setFilter({
                        category: "topRatedMovies",
                        filter: button == "left" ? "movies" : "tvShows",
                    })
                );
                break;

            default:
                break;
        }
        if (button === "left") {
            setBtnToggle(true);
        } else if (button === "right") {
            setBtnToggle(false);
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold py-2 text-white">{title}</h1>
                <div className="rounded-2xl px-4 py-2 my-4 flex">
                    <button
                        className={`px-4 py-2 mx-2 rounded-full ${
                            btnToggle
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                        }`}
                        onClick={() => handleButtonClick("left")}
                    >
                        {title == "Trending" ? "Day" : "Movies"}
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            btnToggle
                                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                                : "bg-red-500 text-white"
                        }`}
                        onClick={() => handleButtonClick("right")}
                    >
                        {title == "Trending" ? "Week" : "TV Shows"}
                    </button>
                </div>
            </div>
            {!movies ? (
                <MovieListSkeleton />
            ) : (
                <div className="px-6">
                    <div className="flex overflow-x-scroll scrollbar-hidden">
                        <div className="flex">
                            {movies?.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    posterPath={movie?.poster_path}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieList;
