

export  const  TMDB = {
        IMG_DEFAULT: "https://placehold.co/600x400/1a1a1a/ffffff.png",
        IMG_URL: "https://image.tmdb.org/t/p/w500",
        BASEURL: "https://api.themoviedb.org/3/",
        KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY!,
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + process.env.EXPO_PUBLIC_MOVIE_API_KEY!,
        },
    }
export const EndPoint = {
        DISCOVER: "/discover/movie?sort_by=popularity.desc",
        SEARCH: "/search/movie?query="
    }