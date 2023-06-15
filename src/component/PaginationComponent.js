import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useEffect } from "react";
import { filterAction } from "../redux/actions/filterAction";

const PaginationComponent = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const { selectPageMovies, searchMovies, sort, genre } = useSelector(state => state.movie)
    const { searchValue } = useSelector(state => state.state)

    const selectHandlePageChange = (page) => {
        if(sort === "popularity (Desc)"){
            dispatch(filterAction.popularityDesc(page))
            setPage(page);
        }
        else if(sort === "Release Day (Desc)"){
          dispatch(filterAction.releaseDayDesc(page))
          setPage(page);
        }
        else if(sort === "Release Day (Asc)"){
          dispatch(filterAction.releaseDayAsc(page))
          setPage(page);
        }
        else if(sort === "Vote (Desc)"){
          dispatch(filterAction.voteDesc(page))
          setPage(page);
        }
        else if(sort === "Revenue (Desc)"){
          dispatch(filterAction.revenueDesc(page))
          setPage(page);
        }
        else if(sort === "" || genre !== undefined){
        dispatch(filterAction.selectGenreMovie(genre, page))
        setPage(page);
        }
        else if(sort === "" || genre === undefined){
        dispatch(movieAction.selectPage(page))
        setPage(page);
        }
    };
    const searchHandlePageChange = (page) => {
        dispatch(movieAction.searchMovie(searchValue, page))
        setPage(page);
    };


    return (
        <div className="pagination-component">

            {searchMovies.results === undefined
                ?
                <Pagination
                    activePage={selectPageMovies.page}
                    totalItemsCount={selectPageMovies.total_results < 5000 ? selectPageMovies.total_results : 5000}
                    pageRangeDisplayed={selectPageMovies.total_results < 5000 ? selectPageMovies.total_page : 10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={selectHandlePageChange}
                />
                : searchMovies.results.length === 0
                ?
                <></>
                :
                <Pagination
                    activePage={searchMovies.page}
                    totalItemsCount={searchMovies.total_results < 5000 ? searchMovies.total_results : 5000}
                    pageRangeDisplayed={searchMovies.total_results < 5000 ? searchMovies.total_page : 10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={searchHandlePageChange}
                />
            }


        </div>
    )
}

export default PaginationComponent