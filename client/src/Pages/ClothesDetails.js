import { useParams, NavLink } from 'react-router-dom'

const ClothesDetails = ({ clothes, stores }) => {
  let { id } = useParams()
  const clothesDetails = clothes.find((cloth) => cloth._id === id)
  const storeDetails = stores.find(
    (store) => store._id === clothesDetails.store
  )

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
            <h3>Category: {clothesDetails.category.join(', ')}</h3>
          </div>
          <div className="detail">
            <h3>Fabric: {clothesDetails.fabric.join(', ')}</h3>
          </div>
          <div className="detail">
            <h3>Store: {storeDetails.name}</h3>
            <img src={storeDetails.logo} />
          </div>
        </div>
      </section>
      <div>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ClothesDetails
