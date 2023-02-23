import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddStore = ({ getStores }) => {
  const initStore = {
    name: '',
    city: '',
    logo: ''
  }
  const [newStore, setNewStore] = useState(initStore)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/stores', newStore)
      setNewStore(initStore)
      getStores()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setNewStore({ ...newStore, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>Add A New Hanfu Store</h1>
      <h3>Please fill in the store info</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={newStore.name}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          onChange={handleChange}
          value={newStore.city}
        />
        <label htmlFor="logo">Logo Url:</label>
        <input
          type="text"
          id="logo"
          onChange={handleChange}
          value={newStore.logo}
        />
        <button type="submit" className="buttom">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddStore
