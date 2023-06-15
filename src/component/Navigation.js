import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { movieAction } from '../redux/actions/movieAction';

const Navigation = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const clickLogo =()=>{
        dispatch({type:"STATE_RESET"})
        dispatch(movieAction.getMovies())
    }
    
    const MoviesClick = () => {
        dispatch({type:"STATE_RESET"})
        dispatch({type:"SEARCH_MOVIE_RESET"})
        dispatch(movieAction.selectPage())
    }

    const click = (e) => {
        e.preventDefault();
    }
    const showSearchBar = () => {
        if (showSearch) {
            setShowSearch(false)
        }
        else {
            setShowSearch(true)
        }
    }
    const search =(e)=>{
        setSearchValue(e.target.value)
    }
    const searchKeyDown = (e)=>{
        if(e.key==='Enter'){
            searchClick()
        }
    }

    const searchClick = () => {
        navigate('/movies')
        dispatch(movieAction.searchMovie(searchValue))
        dispatch({type:"SEARCH-VALUE", payload:searchValue})
        dispatch({type:"SELECT_MOVIE_RESET"})
    }

    return (
        <div className='nav-bg'>
            <div className='nav'>
                <Link to='/'><img src='/images/logo.png' onClick={clickLogo}></img></Link>
                <div className='nav-menu'>
                    <div><Link to='/movies' onClick={MoviesClick}>Movies</Link></div>
                    {/* <div>My Favorite</div>1 */}
                </div>
            </div>

            <form onSubmit={(e) => click(e)} className={`${showSearch ? 'show' : ''}`}>
                <button className='search-icon-out-button'><FaSearch className='search-icon-out' onClick={showSearchBar} /></button>
                <div className='search-box'>
                    <input type='search' placeholder='search' onChange={search} onKeyDown={searchKeyDown}/>
                    <button onClick={searchClick} ><FaSearch className='search-icon' /></button>
                </div>
            </form>
        </div>
    )
}

export default Navigation