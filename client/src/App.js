import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './Pages/About'
import Home from './Pages/Home'
import ClothesDetails from './Pages/ClothesDetails'
import ViewClothes from './Pages/ViewClothes'
import AddClothes from './Pages/AddClothes'

const App = () => {
  const [stores, setStore] = useState([])
  const initClothes = {
    name: '',
    image: '',
    style: '',
    category: [],
    fabric: [],
    store: ''
  }

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

  const [clothes, setClothes] = useState([])

  const getClothes = async () => {
    try {
      const res = await axios.get('http://localhost:3001/clothes')
      setClothes(res.data.clothes)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getClothes()
  }, [])

  const storeName = (result) => {
    for (let i = 0; i < stores.length; i++) {
      if (stores[i]._id === result) {
        return stores[i].name
      }
    }
  }

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home stores={stores} storeName={storeName} />}
          />
          <Route path="about" element={<About />} />
          <Route
            path="clothes/details/:id"
            element={
              <ClothesDetails
                // clothes={clothes}
                stores={stores}
                getClothes={getClothes}
                storeName={storeName}
              />
            }
          />
          <Route
            path="view/clothes/:id"
            element={
              <ViewClothes
                clothes={clothes}
                stores={stores}
                // initClothes={initClothes}
                // getClothes={getClothes}
              />
            }
          />
          <Route
            path="add/"
            element={
              <AddClothes
                getClothes={getClothes}
                initClothes={initClothes}
                stores={stores}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
