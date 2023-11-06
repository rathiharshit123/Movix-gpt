import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContrainer from "./SecondaryContrainer";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <PrimaryContainer/>
            <SecondaryContrainer/>
        </div>
    );
};

export default Browse;
