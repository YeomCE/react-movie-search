import React, { useEffect } from 'react'
import { FaChild, FaStar, FaYoutube } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import YouTube from 'react-youtube';
import { movieAction } from '../redux/actions/movieAction'
import { BsXLg } from "react-icons/bs";
import RelatedMoviesCard from '../component/RelatedMoviesCard'


const MovieDetail = () => {


  const opts = {
    height: '700',
    width: '1200',
  };

  const params = useParams()
  const dispatch = useDispatch()
  const { selectMovie, loading, movieTrailer, movieReviews, relatedMovies } = useSelector(state => state.movie)
  const { trailerMovie, reviewButtonOn } = useSelector(state => state.state)


  useEffect(() => {
    dispatch(movieAction.getDetailMovie(params.id))
  }, [])

  const trailerButtonClick = () => {
      dispatch({type:"TRAILER_ON"})
  }

  console.log("MovieDetail", selectMovie)
  console.log("selectMovie", selectMovie)

  if (loading) {
    return <div className='loading'><ClipLoader color='rgb(255 192 0)' size={150} /></div>
  }
  return (
    <div className='movie-detail-box'>

      <div className='movie-detail'>
        {/* // 이미지 */}
        <div className='img-box'>
          <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${selectMovie.poster_path}`} />
        </div>

        <div>
          {/* // 장르 */}
          <div className='detail-genre'>
            {selectMovie.genres.map((item) => {
              return <div className='detail-genre-tag'>{item.name}</div>
            })}
          </div>

          <h1 className='detail-title'>{selectMovie.title.toUpperCase()}</h1> {/*// 제목*/}
          <h3 className='detail-tagline'>{selectMovie.tagline}</h3> {/*// 슬로건*/}

          {/* // 영화 관람 정보 */}
          <div className='movie-detail-info'>
            <span className='average-box'>
              <FaStar className='average-icon' />{selectMovie.vote_average}
            </span>
            <span>
              <FaChild className='popularity-icon' />
              {selectMovie.popularity}</span>
            <span className='adult'>{selectMovie.adult ? "청불" : "Under 18"}</span>
          </div>


          <p className='detail-overview'>{selectMovie.overview}</p> {/*// 줄거리*/}

          {/* // 영화 상영 정보 */}
          <div className='Screening-info'>
            <div>
              <span>Budget</span>
              <span>$ {selectMovie.budget.toLocaleString()}</span>
            </div>

            <div>
              <span>Revenue</span>
              <span>$ {selectMovie.revenue.toLocaleString()}</span>
            </div>

            <div>
              <span>Release Day</span>
              <span>{selectMovie.release_date}</span>
            </div>

            <div>
              <span>Time</span>
              <span>{selectMovie.runtime} minute</span>
            </div>
          </div>

          {/* // 트레일러 */}
          <div className='trailer-box' onClick={trailerButtonClick}>
            {movieTrailer.results.length === 0 ? <></> : <FaYoutube size={"sm"} />}
            <button>{movieTrailer.results.length === 0 ?"No trailer" : "Watch Trailer"}</button>
          </div>

          {movieTrailer.results.length === 0
            ? 
            <div></div>
            : 
            <div className={trailerMovie ? 'trailer-movie-box show' : 'trailer-movie-box'}>
              <BsXLg className='xIcon' onClick={() => dispatch({type:"CLOSE-TRAILER"})} />
              <YouTube videoId={`${movieTrailer.results[0].key}`} opts={opts} className='trailer-movie' width="800" />
            </div>}

        </div>

      </div>

      {/* // 리뷰 및 관련 영화 */}
      <div className='reviews-related'>
        <div className='buttons'>
          <button
            onClick={() => dispatch({type:"STATE_RESET"})}
            className={reviewButtonOn ? 'button-on' : ''}>
            REVIEWS ({movieReviews.results.length})
          </button>
          <button
            onClick={() => dispatch({type:"RELATED_VIEW"})}
            className={reviewButtonOn ? '' : 'button-on'}>
            RELATED MOVIE ({relatedMovies.results.length})
          </button>
        </div>

        <div className={reviewButtonOn ? 'review-full-box show' : 'review-full-box'}>
          {movieReviews.results.map((item => {
            return <div className='review-box'>
              <div className='review-author'>{item.author}</div>
              <div className='review-content'>{item.content}</div>
            </div>
          }))}
        </div>

        <div className={reviewButtonOn ? 'related-full-box' : 'related-full-box show'}>
          {relatedMovies.results.map((item) => {
            return <RelatedMoviesCard item={item} />
          })}
        </div>
      </div>

    </div>

  )
}

export default MovieDetail