import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/redux/movieSlice";

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(TMDB_URLS.UPCOMING_MOVIES, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};
