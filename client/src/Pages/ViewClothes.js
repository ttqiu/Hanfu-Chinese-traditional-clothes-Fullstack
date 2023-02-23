import { NavLink, useParams } from 'react-router-dom'
import ClothesCard from '../components/ClothesCard'

const ViewClothes = ({ clothes, stores }) => {
  let { id } = useParams()
  const store = stores.find((store) => store._id === id)
  const clothesDetails = clothes.filter((cloth) => cloth.store === store._id)

  return (
    <div>
      <h1>{store?.name}</h1>
      <div className="container-grid">
        {clothesDetails.map((cloth) => (
          <NavLink to={`/clothes/details/${cloth._id}`} key={cloth._id}>
            <ClothesCard
              image={cloth.image}
              name={cloth.name}
              category={cloth.category}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ViewClothes
