import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utils/constants";
import { setMovies } from "../utils/redux/movieSlice";

export const useNowPlayingMovies = (filter) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        let url;
        if (filter == "movies") {
            url = TMDB_URLS.NOW_PLAYING_MOVIES_URL;
        } else if (filter == "tvShows") {
            url = TMDB_URLS.NOW_PLAYING_TV_SHOWS;
        }

        const data = await fetch(url, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(
            setMovies({
                data: json.results,
                category: "nowPlayingMovies",
                filter,
            })
        );
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [filter]);
};
