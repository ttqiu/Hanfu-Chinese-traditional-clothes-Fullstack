import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import store from '../../models/store'

const ClothesDetails = ({ storeName, getClothes, stores }) => {
  let { id } = useParams()
  const [clothesDetails, setClothesDetails] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const getClothesDetails = async () => {
      const res = await axios.get(`http://localhost:3001/clothes/details/${id}`)
      setClothesDetails(res.data.clothes)
    }
    getClothesDetails()
  }, [id])

  // const clothesDetails = clothes.find((cloth) => cloth._id === id)
  // console.log(clothesDetails)
  // const storeDetails = stores.find(
  //   (store) => store._id === clothesDetails.store
  // )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `http://localhost:3001/clothes/${id}`,
      clothesDetails
    )
    setClothesDetails({ ...clothesDetails })
  }

  const handleChange = (e) => {
    setClothesDetails({ ...clothesDetails, [e.target.id]: e.target.value })
  }

  console.log(clothesDetails)

  const deleted = async () => {
    const res = await axios.delete(
      `http://localhost:3001/clothes/${id}`,
      clothesDetails
    )
    setClothesDetails({ ...clothesDetails })
    getClothes()
    navigate('/')
  }

  return (
    <div className="clothes-content">
      <div>
        <h1>{clothesDetails.name}</h1>
      </div>
      <section className="image-container">
        <a href={clothesDetails.website}>
          <img src={clothesDetails.image} alt="image" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row game-details">
          <div className="detail">
            <h3>Style: {clothesDetails.style}</h3>
          </div>
          <div className="detail">
            <h3>Category: {clothesDetails.category}</h3>
          </div>
          <div className="detail">
            <h3>Fabric: {clothesDetails.fabric}</h3>
          </div>
          <div className="detail">
            <h3>Store: {storeName(clothesDetails.store)}</h3>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Update Clothes Info</h4>
          <p>Please fill in the Update info in the corresponding field</p>
        </div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={clothesDetails.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={clothesDetails.image}
        />
        <label htmlFor="style">Style:</label>
        <input
          type="text"
          id="style"
          onChange={handleChange}
          value={clothesDetails.style}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="array"
          id="category"
          onChange={handleChange}
          value={clothesDetails.category}
        />
        <label htmlFor="fabric">Fabric:</label>
        <input
          type="array"
          id="fabric"
          onChange={handleChange}
          value={clothesDetails.fabric}
        />
        <label htmlFor="store">Store:</label>
        <select id="store" onChange={handleChange} value={clothesDetails.store}>
          {stores.map((store) => (
            <option value={`${store._id}`}>{store.name}</option>
          ))}
        </select>
        <button type="submit">Update</button>
      </form>
      <div>
        <h4>Delete Clothes</h4>
        <button onClick={deleted}>Delete</button>
      </div>
      <div>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ClothesDetails
