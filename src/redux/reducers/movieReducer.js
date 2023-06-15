let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    genreList: [],
    selectMovie: {},
    movieTrailer: {},
    movieReviews: {},
    relatedMovies: {},
    selectPageMovies: {},
    searchMovies: {},
    sort: "",
    genre: {}
}

function movieReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case 'GET_MOVIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                genreList: payload.genreList,
                loading: false
            }
        case "GET-DETAIL-MOVIE":
            return {
                ...state,
                selectMovie: payload.selectMovie,
                movieTrailer: payload.movieTrailer,
                movieReviews: payload.movieReviews,
                relatedMovies: payload.relatedMovies,
                loading: false
            }
        case "SELECT_PAGE_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.selectPageMovies,
                genreList: payload.genreList,
                loading: false
            }
        case "SEARCH_MOVIE":
            return {
                ...state,
                searchMovies: payload.searchMovies,
                loading: false
            }
        case "SELECT_POPULARITY_DESC_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.popularityDesc,
                sort: "popularity (Desc)",
                genre: {},
                loading: false
            }
        case "SELECT_RELEASE_DAY_DESC_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.releaseDayDesc,
                sort: "Release Day (Desc)",
                genre: {},
                loading: false
            }
        case "SELECT_RELEASE_DAY_ASC_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.releaseDayAsc,
                sort: "Release Day (Asc)",
                genre: {},
                loading: false
            }
        case "SELECT_VOTE_ASC_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.voteDesc,
                sort: "Vote (Desc)",
                genre: {},
                loading: false
            }
        case "SELECT_REVENUE_ASC_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.revenueDesc,
                sort: "Revenue (Desc)",
                genre: {},
                loading: false
            }
        case "SELECT_GENRE_MOVIE":
            return {
                ...state,
                selectPageMovies: payload.selectGenreMovie,
                genre: payload.genre,
                sort: "",
                loading: false
            }




        case "SEARCH_MOVIE_RESET":
            return {
                ...state,
                searchMovies: {},
                sort: "",
                genre: "",
                loading: false
            }
        case "GET_MOVIES_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return { ...state }
    }
}



export default movieReducer