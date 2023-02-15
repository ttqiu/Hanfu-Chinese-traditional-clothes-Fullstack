import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import ClothesCard from '../components/ClothesCard'

const ViewClothes = ({ stores }) => {
  let { id } = useParams()
  const [clothes, setClothes] = useState([])
  const store = stores.find((store) => store._id === id)

  useEffect(() => {
    const getClothesByStore = async () => {
      const res = await axios.get(`http://localhost:3001/view/clothes/${id}`)
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
            store={store.name}
          />
        </NavLink>
      ))}
    </div>
  )
}

export default ViewClothes
