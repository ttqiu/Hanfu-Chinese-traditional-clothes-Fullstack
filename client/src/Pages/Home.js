import { useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import ClothesCard from '../components/ClothesCard'
import StoreCard from '../components/StoreCard'
import { NavLink } from 'react-router-dom'

const Home = ({ stores, storeName }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3001/clothes/${searchQuery}`)
    setSearchResults(res.data.clothes)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <h1 className="title">Let's Enjoy Hanfu (Chinese Traditional Clothes)</h1>
      <div>
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="container-grid">
              {searchResults.map((result) => (
                <NavLink to={`/clothes/details/${result._id}`} key={result._id}>
                  <ClothesCard
                    name={result.name}
                    image={result.image}
                    store={storeName(result.store)}
                  />
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
      <div>
        <h2>Stores</h2>
        <section className="container-grid">
          {stores.map((store) => (
            <NavLink to={`/view/clothes/${store._id}`} key={store._id}>
              <StoreCard
                logo={store.logo}
                name={store.name}
                city={store.city}
              />
            </NavLink>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
