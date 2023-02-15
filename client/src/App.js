import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './Pages/About'
import Home from './Pages/Home'
import ClothesDetails from './Pages/ClothesDetails'
import ViewClothes from './Pages/ViewClothes'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clothes/details/:id" element={<ClothesDetails />} />
          <Route path="view/clothes/:id" element={<ViewClothes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
