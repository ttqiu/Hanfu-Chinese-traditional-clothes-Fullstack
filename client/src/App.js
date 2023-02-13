import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

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
    <div>
      <h1>Hanfu</h1>
    </div>
  )
}

export default App
