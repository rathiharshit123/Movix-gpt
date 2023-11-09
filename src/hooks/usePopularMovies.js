import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const usePopularMovies = (filter) => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((state)=>state.movies?.popularMovies);
    let data = popularMovies[filter];

    const getPopularMovies = async () => {

        let url;
        if (filter == "movies") {
            url = TMDB_URLS.POPULAR_MOVIES_URL;
        } else if (filter == "tvShows") {
            url = TMDB_URLS.POPULAR_TV_SHOWS_URL;
        }

        
        const data = await fetch(
            url,
            TMDB_API_OPTIONS
        );
        const json = await data.json();
        dispatch(setMovies({data: json.results,filter,category: "popularMovies"}));
    };

    useEffect(() => {
        if(!data) getPopularMovies();
    }, [filter]);
};
