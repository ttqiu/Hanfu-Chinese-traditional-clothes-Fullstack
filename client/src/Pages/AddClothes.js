import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddClothes = ({ getClothes, initClothes }) => {
  const [newClothes, setNewClothes] = useState(initClothes)
  const handleChange = (e) => {
    setNewClothes({ ...newClothes, [e.target.name]: e.target.value })
  }
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/clothes', newClothes)
      console(res)
      setNewClothes(initClothes)
      getClothes()
    } catch (err) {
      console.log(err)
    }
  }

  // const handleSubmit = (e) => {
  //   addClothes(e)
  //   navigate('/')
  // }

  return (
    <div>
      <h1>Add A New Hanfu</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <h4>Update Clothes Info</h4>
          <p>Please fill in the Update info in the corresponding field</p>
        </div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={clothes.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={clothes.image}
        />
        <label htmlFor="style">Style:</label>
        <input
          type="text"
          id="style"
          onChange={handleChange}
          value={clothes.style}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="array"
          id="category"
          onChange={handleChange}
          value={clothes.category}
        />
        <label htmlFor="fabric">Fabric:</label>
        <input
          type="array"
          id="fabric"
          onChange={handleChange}
          value={clothes.fabric}
        />
        <button type="submit">Update</button>
      </form> */}
    </div>
  )
}

export default AddClothes
