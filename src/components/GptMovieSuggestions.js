import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const gptMovies = useSelector((state) => state.gpt?.gptMovies);

    return (
        <div>
            <MovieList
                title="Handpicked Movies for your Search Result"
                movies={gptMovies}
            />
        </div>
    );
};

export default GptMovieSuggestions;
