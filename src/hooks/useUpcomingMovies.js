import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const useUpcomingMovies = (filter) => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((state)=>state.movies?.upcomingMovies);
    let data = upcomingMovies[filter];

    const getUpcomingMovies = async () => {
        let url;
        if (filter == "movies") {
            url = TMDB_URLS.UPCOMING_MOVIES;
        } else if (filter == "tvShows") {
            url = TMDB_URLS.UPCOMING_TV_SHOWS;
        }
        const data = await fetch(url, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(setMovies({data: json.results,category: "upcomingMovies",filter}));
    };

    useEffect(() => {
        if(!data) getUpcomingMovies();
    }, [filter]);
};
