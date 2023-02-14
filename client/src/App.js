import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './Pages/About'
import Home from './Pages/Home'

const App = () => {
  const [clothes, setClothes] = useState([])
  // const [store, setStore] = useState([])

  // const getClothes = async () => {
  //   try {
  //     let res = await axios.get('http://localhost:3001/clothes')
  //     setClothes(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const getStores = async () => {
  //   try {
  //     let res = await axios.get('http://localhost:3001/stores')
  //     setStore(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   getClothes()
  // }, [])

  // useEffect(() => {
  //   getStores()
  // }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
