import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import MovieList from './components/MovieList/MovieList'
import MovieDetail from './Pages/MovieDetail/MovieDetail'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/movies/:type' element={<MovieList />} />
          <Route path='/*' element={<h1>Error Page 404</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;