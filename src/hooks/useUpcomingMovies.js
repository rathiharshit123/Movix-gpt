import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UPCOMING_MOVIES, TMDB_API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/redux/movieSlice";

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};
