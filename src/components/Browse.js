import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContrainer from "./SecondaryContrainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const gptSearch = useSelector((store) => store.gpt);

    const { gptSearchToggle } = gptSearch;

    return (
        <div>
            <Header />
            {gptSearchToggle ? (
                <GptSearch />
            ) : (
                <>
                    <PrimaryContainer />
                    <SecondaryContrainer />
                </>
            )}
        </div>
    );
};

export default Browse;
