export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE =
    "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_TOKEN,
    },
};

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w780";

export const TMDB_URLS = {
    NOW_PLAYING_TV_SHOWS: "https://api.themoviedb.org/3/tv/airing_today",
    TRENDING_MOVIES_URL: "https://api.themoviedb.org/3/trending/movie/",
    UPCOMING_MOVIES:
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US",
    TOP_RATED_MOVIES:
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
    POPULAR_MOVIES_URL:
        "https://api.themoviedb.org/3/movie/popular?language=en-US",
    NOW_PLAYING_MOVIES_URL: "https://api.themoviedb.org/3/movie/now_playing",
    TMDB_IMAGE_URL: "https://image.tmdb.org/t/p/w780",
};
