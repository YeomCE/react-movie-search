let initialState = {
    trailerMovie: false,
    reviewButtonOn: true,
    sortMenu: false,
    filterMenu: false,
    searchValue : "",
}

function stateReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {

        case "STATE_RESET":
            return {
                ...state,
                trailerMovie: false,
                reviewButtonOn: true,
                sortMenu: false,
                filterMenu: false,
                searchValue : ""
            }
        case "TRAILER_ON":
            return {
                ...state,
                trailerMovie: true,
            }
        case "CLOSE-TRAILER":
            return{
                ...state,
                trailerMovie: false,
            }
        case "RELATED_VIEW":
            return {
                ...state,
                reviewButtonOn: false,
            }
        case "SORT-BOX-ON":
            return {
                ...state,
                sortMenu: true,
            }
        case "SORT-BOX-OFF":
            return {
                ...state,
                sortMenu: false,
            }
        case "FILTER-BOX-ON":
            return {
                ...state,
                filterMenu: true,
            }
        case "FILTER-BOX-OFF":
            return {
                ...state,
                filterMenu: false,
            }
        case "SEARCH-VALUE":
            return{
                ...state,
                searchValue:payload,
            }
        default:
            return { ...state }
    }
}



export default stateReducer