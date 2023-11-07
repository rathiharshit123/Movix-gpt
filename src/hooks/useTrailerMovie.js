import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/redux/movieSlice";
import { useEffect } from "react";

export const useTrailerMovie = (movieId) => {
    const dispatch = useDispatch();

    const getTrailerMovie = async () => {
        const movieTrailerUrl =
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US";
        const result = await fetch(movieTrailerUrl, TMDB_API_OPTIONS);
        const json = await result.json();

        const filteredTrailers = json.results.filter(
            (movie) => movie.type == "Trailer"
        );
        const trailer = filteredTrailers.length ? filteredTrailers[0] : json[0];

        dispatch(addTrailer(trailer));
    };

    useEffect(() => {
        getTrailerMovie();
    }, []);
};
