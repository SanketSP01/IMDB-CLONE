import React, { useEffect, useState } from 'react'
import "./Home.css"

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ce50769582001c7226d990c88e19b900&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <div>Home</div>
    )
}

export default Home;