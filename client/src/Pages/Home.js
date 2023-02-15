import { useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import ClothesCard from '../components/ClothesCard'
import StoreCard from '../components/StoreCard'
import { NavLink } from 'react-router-dom'

const Home = ({ stores }) => {
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

  const storeName = (result) => {
    for (let i = 0; i < stores.length; i++) {
      if (stores[i]._id === result) {
        return stores[i].name
      }
    }
  }

  return (
    <div>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                <NavLink to={`/clothes/details/${result._id}`} key={result._id}>
                  <ClothesCard
                    name={result.name}
                    image={result.image}
                    // category={result.category}
                    store={storeName(result.store)}
                  />
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="stores">
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
