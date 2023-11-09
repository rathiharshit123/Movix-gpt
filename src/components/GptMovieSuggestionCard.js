import React from "react";
import { TMDB_URLS } from "../utils/constants";

const GptMovieSuggestionCard = ({ movieDetails }) => {
    return (
            <div className="rounded-lg p-4 text-white">
                <img
                    src={TMDB_URLS.TMDB_IMAGE_URL + movieDetails?.poster_path}
                    alt="Movie Poster"
                    className="w-48"
                />
                <div className="p-4 w-48">
                    <div className="font-bold text-xl mb-2">{movieDetails?.title}</div>
                </div>
            </div>
    );
};

export default GptMovieSuggestionCard;
