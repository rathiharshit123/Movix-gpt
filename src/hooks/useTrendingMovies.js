import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS} from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const useTrendingMovies = (filter) => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch(TMDB_URLS.TRENDING_MOVIES_URL + filter, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(setMovies({data: json.results,category: "trendingMovies",filter}));
    };

    useEffect(() => {
        getTrendingMovies();
    }, [filter]);
};
