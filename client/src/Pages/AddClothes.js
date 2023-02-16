import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddClothes = ({ getClothes, initClothes, stores }) => {
  const [newClothes, setNewClothes] = useState(initClothes)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/clothes', newClothes)
      setNewClothes(initClothes)
      getClothes()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setNewClothes({ ...newClothes, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>Add A New Hanfu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Add Clothes</h4>
          <p>Please fill in the clothes info</p>
        </div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={newClothes.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={newClothes.image}
        />
        <label htmlFor="style">Style:</label>
        <input
          type="text"
          id="style"
          onChange={handleChange}
          value={newClothes.style}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="array"
          id="category"
          onChange={handleChange}
          value={newClothes.category}
        />
        <label htmlFor="fabric">Fabric:</label>
        <input
          type="array"
          id="fabric"
          onChange={handleChange}
          value={newClothes.fabric}
        />
        <label htmlFor="store">Store:</label>
        <select id="store" onChange={handleChange} value={newClothes.store}>
          <option value="Select" hidden>
            Select
          </option>
          {stores.map((store) => (
            <option value={`${store._id}`}>{store.name}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddClothes
