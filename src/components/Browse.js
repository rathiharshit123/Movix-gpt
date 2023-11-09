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
import { useTrendingMovies } from "../hooks/useTrendingMovies";

const Browse = () => {
    const activeFilters = useSelector((state) => state.movies.activeFilters);
    const { trendingMovies,nowPlayingMovies,upcomingMovies,popularMovies,topRatedMovies } = activeFilters;

    useNowPlayingMovies(nowPlayingMovies);
    usePopularMovies(popularMovies);
    useTopRatedMovies(topRatedMovies);
    useUpcomingMovies(upcomingMovies);
    useTrendingMovies(trendingMovies);

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
