import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <Link to="/"><img className='header_icon' src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Alt_Rectangle_Black._CB443386324_.png" alt="IMDB-LOGO" /></Link>
                <Link to='/movies/popular'><span>Popular</span></Link>
                <Link to='/movies/top_rated'><span>Top Rated</span></Link>
                <Link to='/movies/upcoming'><span>UpComing</span></Link>

            </div>
        </div>
    )
}

export default Header