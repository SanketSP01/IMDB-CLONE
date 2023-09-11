import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Home />} />
          <Route path='/movies/:type' element={<Home />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;