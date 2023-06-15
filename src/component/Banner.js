import React from 'react'

const Banner = (movie) => {
    return (
        <div className='banner'>
            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.movie.poster_path}`} />
            <div className='movie-info'>
                <h1 className='banner-title'>{movie.movie.title}</h1>
                <h3>{movie.movie.overview}</h3>
            </div>
        </div>
    )
}

export default Banner