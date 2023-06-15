import React from 'react'
import { FaChild, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { movieAction } from '../redux/actions/movieAction'

const FilterCard = ({ item }) => {

    const { genreList } = useSelector(state => state.movie)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showDetail =()=>{
        navigate(`/movies/${item.id}`)
        dispatch(movieAction.getDetailMovie(item.id))
        dispatch({type:"STATE_RESET"})
    }


    return (
            <div
                className='filter-card'
                style={item.poster_path === null
                    ? { backgroundColor: "#dcdcdc", backgroundImage: "url(/images/noImage.jpg)" }
                    : { backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}` + ')' }}
                    onClick={showDetail}
            >
                <div className='filter-card-hover'>
                    <div className='movie-header'>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} />
                        <h1 className='title'>{item.title}</h1>
                        <p className='movie-year'>{item.release_date ? item.release_date.split("-")[0]:""}</p>
                    </div>

                    <div className='genre-box'>
                        {item.genre_ids.map((item) => (
                            genreList.map((genre) => (
                                item === genre.id ? <div className='genre'>{genre.name}</div> : <></>
                            ))
                        ))}
                    </div>
                    <div className='overview'>{item.overview}</div>
                    <div className='movie-viewing-info'>
                        <span className='average-box'>
                            <FaStar className='average-icon' />{item.vote_average}
                        </span>
                        <span>
                            <FaChild className='popularity-icon' />
                            {item.popularity}</span>
                        <span className='adult'>{item.adult ? "청불" : "Under 18"}</span>
                    </div>

                </div>
            </div>
    )
}

export default FilterCard