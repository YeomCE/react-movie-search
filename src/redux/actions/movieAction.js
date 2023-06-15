import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([
                popularMovieApi, topRatedApi, upComingApi, genreApi
            ]);

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upComingMovies: upComingMovies.data,
                    genreList: genreList.data.genres,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }

    }
}

function getDetailMovie(id) {
    console.log("!selectMovie", id)
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })

            const selectApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
            const trailerApi = api.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            const reviewsApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            const relatedApi =  api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`)
            
            let [selectMovie, movieTrailer, movieReviews, relatedMovies] = await Promise.all([
                selectApi, trailerApi, reviewsApi, relatedApi
            ]);


            relatedMovies.data.results.sort(function(a, b){
                return a.popularity > b.popularity ? -1 : 1
            });
            dispatch({
                type: "GET-DETAIL-MOVIE",
                payload: {
                    selectMovie: selectMovie.data,
                    movieTrailer : movieTrailer.data,
                    movieReviews : movieReviews.data,
                    relatedMovies : relatedMovies.data,
                }
            });
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function selectPage(page){
    console.log("selectPage")
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const selectPageMoviesApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}`)
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [selectPageMovies, genreList] = await Promise.all([
                selectPageMoviesApi, genreApi
            ]);

            dispatch({
                type: "SELECT_PAGE_MOVIE",
                payload: {
                    selectPageMovies: selectPageMovies.data,
                    genreList : genreList.data.genres,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}


function searchMovie(value, page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const searchMoviesApi = api.get(`/search/movie?query=${value}&api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}`)

            let [searchMovies] = await Promise.all([
                searchMoviesApi
            ]);

            dispatch({
                type: "SEARCH_MOVIE",
                payload: {
                    searchMovies: searchMovies.data,
                    searchValue:value,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

export const movieAction = {
    getMovies,
    getDetailMovie,
    selectPage,
    searchMovie,
}