import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import ClothesCard from '../components/ClothesCard'

const ViewClothes = () => {
  let { id } = useParams()
  const [clothes, setClothes] = useState([])

  useEffect(() => {
    const getClothesByStore = async () => {
      const res = await axios.get(`http://localhost:3001/view/clothes/${id}`)
      console.log(res.data.clothes)
      setClothes(res.data.clothes)
    }
    getClothesByStore()
  }, [id])

  return (
    <div className="container-grid">
      {clothes.map((cloth) => (
        <NavLink to={`/clothes/details/${cloth._id}`} key={cloth._id}>
          <ClothesCard
            image={cloth.image}
            name={cloth.name}
            category={cloth.category}
          />
        </NavLink>
      ))}
    </div>
  )
}

export default ViewClothes
