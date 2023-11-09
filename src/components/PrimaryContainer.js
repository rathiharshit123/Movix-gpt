import React from "react";
import VideoDetails from "./VideoDetails";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const PrimaryContainer = () => {

    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies?.movies)

    if(!movies) return;
    const primaryMovie = movies[0];
    const {original_title,overview,id} = primaryMovie;

    return (
        <div>
            <VideoDetails movieOverview={overview} movieTitle={original_title} />
            <VideoBackground movieId= {id} />
        </div>
    );
};

export default PrimaryContainer;
