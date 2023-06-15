import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1836 },
        items: 5,
        slidesToSlide : 5,
        renderDotsOutside : true
    },
    desktop: {
        breakpoint: { max: 3000, min: 1836 },
        items: 5,
        slidesToSlide : 5
    },
    desktop2: {
        breakpoint: { max: 1835, min: 1501 },
        items: 4,
        slidesToSlide : 4
    },
    desktop3: {
        breakpoint: { max: 1500, min: 1160 },
        items: 3,
        slidesToSlide : 3
    },
    desktop4: {
        breakpoint: { max: 1159, min: 1025 },
        items: 2,
        slidesToSlide : 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 840 },
        items: 2,
        slidesToSlide : 2
    },
    tablet2: {
        breakpoint: { max: 839, min: 464 },
        items: 1,
        slidesToSlide : 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide : 1
    }
};
const MovieSlide = ({ movies }) => {
    return (
        <div>
            <Carousel showDots={true} responsive={responsive} renderButtonGroupOutside = { true }>
                {movies.results.map(item => (
                    <MovieCard item={item} />
                ))}

            </Carousel>
        </div>
    )
}

export default MovieSlide