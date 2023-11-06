import { useDispatch } from "react-redux"

const useTrailerMovie = (movieId) =>{
    const dispatch = useDispatch();

    const getTrailerMovie = async () => {
        await fetch("https://api.themoviedb.org/3/movie/507089/videos")
    }
}