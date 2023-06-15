import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { movieAction } from '../redux/actions/movieAction';

const Banner = (movie) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showDetail =()=>{
        navigate(`/movies/${movie.id}`)
        dispatch(movieAction.getDetailMovie(movie.id))
        dispatch({type:"STATE_RESET"})
    }

    console.log(movie)
    return (
        <div className='banner' onClick={showDetail}>
            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.movie.poster_path}`} />
            <div className='movie-info'>
                <h1 className='banner-title'>{movie.movie.title}</h1>
                <h3>{movie.movie.overview}</h3>
            </div>
        </div>
    )
}

export default Banner