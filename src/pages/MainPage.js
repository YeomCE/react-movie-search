import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const MainPage = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie)

  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, [])
    
  console.log("popularMovies", popularMovies)

  if (loading) {
    return <div className='loading'><ClipLoader color='rgb(255 192 0)' size={150} /></div>
  }
  return (
    <div className='main-page'>
      <Banner movie={popularMovies.results[0]} />
      <div className='movie-list' id='movie-list'>
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  )
}

export default MainPage