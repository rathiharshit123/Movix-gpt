import React from "react";
import { useSelector } from "react-redux";
import GptMovieSuggestionCard from "./GptMovieSuggestionCard";

const GptMovieSuggestions = () => {
    const gptMovies = useSelector((state) => state.gpt?.gptMovies);

    if (gptMovies.length == 0) return;

    return (
        <div className="flex-col">
            <h1 className="text-3xl p-4 my-4 font-bold text-white text-center">
                Handpicked Movies for your Search Result
            </h1>

            <div className="flex justify-center px-4 mx-5">
                {gptMovies.map((movie) => (
                    <GptMovieSuggestionCard
                        key={movie.id}
                        movieDetails={movie}
                    />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;
