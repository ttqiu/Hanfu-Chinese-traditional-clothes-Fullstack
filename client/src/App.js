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
  const [stores, setStore] = useState([])

  const getStores = async () => {
    try {
      const res = await axios.get('http://localhost:3001/stores')
      setStore(res.data.stores)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getStores()
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home stores={stores} />} />
          <Route path="about" element={<About />} />
          <Route path="clothes/details/:id" element={<ClothesDetails />} />
          <Route
            path="view/clothes/:id"
            element={<ViewClothes stores={stores} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
