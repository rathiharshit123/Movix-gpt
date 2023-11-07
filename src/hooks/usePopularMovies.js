import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { POPULAR_MOVIES_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/redux/movieSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_URL, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};
