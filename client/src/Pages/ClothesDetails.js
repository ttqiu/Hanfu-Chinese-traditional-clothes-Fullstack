import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ClothesDetails = () => {
  const [clothesDetails, setClothesDetails] = useState({})

  let { id } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getClothesDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/clothes/details/${id}`
      )
      if (!isCancelled) {
        // console.log(response.data.clothes)
        setClothesDetails(response.data.clothes)
      }
    }
    getClothesDetails()
    return () => {
      isCancelled = true
    }
  }, [id])

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
            <h3>Store: {clothesDetails.store}</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClothesDetails
