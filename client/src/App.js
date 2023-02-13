import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  const [clothes, setClothes] = useState([])
  const [store, setStore] = useState([])

  const getClothes = async () => {
    try {
      let res = await axios.get('http://localhost:3001/clothes')
      setClothes(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getStores = async () => {
    try {
      let res = await axios.get('http://localhost:3001/stores')
      setStore(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getClothes()
  }, [])

  useEffect(() => {
    getStores()
  }, [])

  return (
    <div className="App">
      <h1>Hanfu</h1>
      {/* <Nav /> */}
    </div>
  )
}

export default App
