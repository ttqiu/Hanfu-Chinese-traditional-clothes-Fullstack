import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ClothesDetails = ({ storeName, getClothes, stores }) => {
  let { id } = useParams()
  const [clothesDetails, setClothesDetails] = useState({})
  const [updated, setUpdated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getClothesDetails = async () => {
      const res = await axios.get(`http://localhost:3001/clothes/details/${id}`)
      setClothesDetails(res.data.clothes)
    }
    getClothesDetails()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/clothes/${id}`, clothesDetails)
    setClothesDetails({ ...clothesDetails })
    alert('The info on this hanfu has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setClothesDetails({ ...clothesDetails, [e.target.id]: e.target.value })
  }

  const deleted = async () => {
    let text = 'Are you sure to delete this hanfu?'
    if (window.confirm(text) == true) {
      await axios.delete(`http://localhost:3001/clothes/${id}`, clothesDetails)
      setClothesDetails({ ...clothesDetails })
      getClothes()
      navigate('/')
    }
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
        <div className="flex-row">
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
      <h4>
        Update Clothes Info: Please fill in the update info in the corresponding
        field
      </h4>
      <div>
        <button onClick={update}>Update Info</button>
        {updated && (
          <form onSubmit={handleSubmit}>
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
            <select
              id="store"
              onChange={handleChange}
              value={clothesDetails.store}
            >
              {stores.map((store) => (
                <option value={`${store._id}`} key={store._id}>
                  {store.name}
                </option>
              ))}
            </select>
            <button type="submit" className="buttom">
              Send Update
            </button>
          </form>
        )}
      </div>
      <div className="delete">
        <h4>Delete Clothes:</h4>
        <button onClick={deleted} className="buttom">
          Delete
        </button>
      </div>
      <div>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ClothesDetails
