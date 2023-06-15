import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY

function popularityDesc(page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const popularityDescApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&sort_by=popularity.desc`)

            let [popularityDesc] = await Promise.all([
                popularityDescApi
            ]);

            dispatch({
                type: "SELECT_POPULARITY_DESC_MOVIE",
                payload: {
                    popularityDesc: popularityDesc.data,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function releaseDayDesc(page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const releaseDayDescApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&sort_by=primary_release_date.desc`)

            let [releaseDayDesc] = await Promise.all([
                releaseDayDescApi
            ]);

            dispatch({
                type: "SELECT_RELEASE_DAY_DESC_MOVIE",
                payload: {
                    releaseDayDesc: releaseDayDesc.data,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function releaseDayAsc(page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const releaseDayAscApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&sort_by=primary_release_date.asc`)

            let [releaseDayAsc] = await Promise.all([
                releaseDayAscApi
            ]);

            dispatch({
                type: "SELECT_RELEASE_DAY_ASC_MOVIE",
                payload: {
                    releaseDayAsc: releaseDayAsc.data,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function voteDesc(page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const voteDescApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&sort_by=vote_average.desc`)

            let [voteDesc] = await Promise.all([
                voteDescApi
            ]);

            dispatch({
                type: "SELECT_VOTE_ASC_MOVIE",
                payload: {
                    voteDesc: voteDesc.data,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function revenueDesc(page){
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const revenueDescApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&sort_by=revenue.desc`)

            let [revenueDesc] = await Promise.all([
                revenueDescApi
            ]);

            dispatch({
                type: "SELECT_REVENUE_ASC_MOVIE",
                payload: {
                    revenueDesc: revenueDesc.data,
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

function selectGenreMovie(genre, page){
    console.log("action", genre)
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_MOVIES_REQUEST' })
            const selectGenreMovieApi = api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${page === undefined ? 1 : page}&with_genres=${genre.id}`)

            let [selectGenreMovie] = await Promise.all([
                selectGenreMovieApi
            ]);

            dispatch({
                type: "SELECT_GENRE_MOVIE",
                payload: {
                    selectGenreMovie: selectGenreMovie.data,
                    genre : genre
                }
            })
        }
        catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }
    }
}

export const filterAction = {
    popularityDesc,
    releaseDayDesc,
    releaseDayAsc,
    voteDesc,
    revenueDesc,
    selectGenreMovie,
}