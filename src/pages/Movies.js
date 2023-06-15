import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../component/FilterCard'
import { movieAction } from '../redux/actions/movieAction'
import { filterAction } from '../redux/actions/filterAction'
import { ClipLoader } from 'react-spinners'
import PaginationComponent from '../component/PaginationComponent'
import NoSearchValue from '../component/NoSearchValue'

const Movies = () => {

  const sortMenuList = ["popularity (Desc)", "Release Day (Desc)", "Release Day (Asc)", "Vote (Desc)", "Revenue (Desc)"]
  const genresList = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(movieAction.selectPage())
  }, [])

  const { loading, selectPageMovies, searchMovies, genreList, genre, sort } = useSelector(state => state.movie)
  const { sortMenu, filterMenu } = useSelector(state => state.state)

  console.log("selectPageMovies", selectPageMovies)
  console.log("searchMovies", searchMovies)

  const sortBoxClick = () => {
    if (sortMenu) {
      dispatch({ type: "SORT-BOX-OFF" })
    }
    else {
      dispatch({ type: "SORT-BOX-ON" })
    }
  }

  const selectSort = (e) => {
    let value = e.target.value
    if (value === "popularity (Desc)") {
      dispatch(filterAction.popularityDesc())
    }
    else if (value === "Release Day (Desc)") {
      dispatch(filterAction.releaseDayDesc())
    }
    else if (value === "Release Day (Asc)") {
      dispatch(filterAction.releaseDayAsc())
    }
    else if (value === "Vote (Desc)") {
      dispatch(filterAction.voteDesc())
    }
    else if (value === "Revenue (Desc)") {
      dispatch(filterAction.revenueDesc())
    }
  }

  const filterBoxClick = () => {
    if (filterMenu) {
      dispatch({ type: "FILTER-BOX-OFF" })
    }
    else {
      dispatch({ type: "FILTER-BOX-ON" })
    }
  }

  const genresClick = (genre) => {
    let selectGenre = genreList.find((item) => {
      return item.name === genre
    })
    dispatch(filterAction.selectGenreMovie(selectGenre))
  }


  if (loading) {
    return <div className='loading'><ClipLoader color='rgb(255 192 0)' size={150} /></div>
  }

  return (
    <div className='movies-page'>

      <div className='sort-filter'>

        <div className={sortMenu ? 'sort-filter-box sort-box on' : 'sort-filter-box sort-box'}>
          <div onClick={sortBoxClick} className='sort'>
            <h3>Sort</h3>
          </div>
          <select onChange={(e)=>{selectSort(e)}}>
            <option disabled selected className='sort-title'>{sort?sort:'Sort By'}</option>
            {sortMenuList.map((item) => {
              return <option>{item}</option>
            })}
          </select>
        </div>

        <div className={filterMenu ? 'sort-filter-box filter-box on' : 'sort-filter-box filter-box'}>
          <div onClick={filterBoxClick} className='filter'>
            <h3>Filter 
            {genreList.map((item) => (
              item.id == genre.id ? <span> : {item.name}</span> : <></>
            ))}</h3>
          </div>

          {/* <div className='year-filter'>
            <h4>YEAR Filter</h4>
            <div className='year'>
              <span>From : </span>
              <span className='result'>1990</span>
              <span> ~ to : </span>
              <span className='result'>2021</span>
            </div>
          </div>

          <div className='ibm-score-filter'>
            <h4>IBM Score Filter</h4>
            <div className='score'>
              <span>From : </span>
              <span className='result'>0</span>
              <span> ~ to : </span>
              <span className='result'>10</span>
            </div>
          </div> */}

          <div className='genres'>
            {genresList.map((item) => {
              return <div onClick={() => { genresClick(item) }}>{item}</div>
            })}
          </div>

        </div>

      </div>
      <div className='movies-content'>
        <dlv className='filter-card-box'>
          {searchMovies.results === undefined
            ?
            selectPageMovies.results.map((item) => {
              return <FilterCard item={item} />
            })
            : searchMovies.results.length === 0
              ?
              <NoSearchValue />
              :
              searchMovies.results.map((item) => {
                return <FilterCard item={item} />
              })
          }
        </dlv>
        <PaginationComponent />
      </div>


    </div>
  )
}

export default Movies