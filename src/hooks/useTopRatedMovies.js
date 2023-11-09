import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const useTopRatedMovies = (filter) => {
    const dispatch = useDispatch();
    
    const topRatedMovies = useSelector((state)=>state.movies?.topRatedMovies);
    let data = topRatedMovies[filter];

    const getTopRatedMovies = async () => {

        let url;
        if (filter == "movies") {
            url = TMDB_URLS.TOP_RATED_MOVIES;
        } else if (filter == "tvShows") {
            url = TMDB_URLS.TOP_RATED_TV_SHOWS;
        }

        const data = await fetch(url, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(setMovies({data: json.results,filter,category: "topRatedMovies"}));
    };

    useEffect(() => {
        if(!data) getTopRatedMovies();
    }, [filter]);
};
