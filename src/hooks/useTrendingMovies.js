import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TRENDING_MOVIES_URL } from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const useTrendingMovies = (filter) => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch(TRENDING_MOVIES_URL + filter, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(setMovies({data: json.results,category: "trendingMovies",filter}));
    };

    useEffect(() => {
        getTrendingMovies();
    }, [filter]);
};
