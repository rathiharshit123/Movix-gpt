import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { NOW_PLAYING_MOVIES_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";

export const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();


    const getNowPlayingMovies = async () =>{
        const data = await fetch(NOW_PLAYING_MOVIES_URL,TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}