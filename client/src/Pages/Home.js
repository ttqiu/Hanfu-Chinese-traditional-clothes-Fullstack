import { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import ClothesCard from '../components/ClothesCard'
import StoreCard from '../components/StoreCard'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [stores, setStore] = useState([])

  const getStores = async () => {
    try {
      const res = await axios.get('http://localhost:3001/stores')
      setStore(res.data.stores)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getStores()
  }, [])

  // const [searchResults, setSearchResults] = useState([])
  // const [searched, toggleSearched] = useState(false)
  // const [searchQuery, setSearchQuery] = useState('')

  // const getSearchResults = async (e) => {
  //   e.preventDefault()
  //   const response = await axios.get(
  //     `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
  //   )
  //   setSearchResults(response.data.results)
  //   toggleSearched(true)
  //   setSearchQuery('')
  // }

  // const handleChange = (event) => {
  //   setSearchQuery(event.target.value)
  // }

  return (
    <div>
      {/* <div className="search">
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
                <NavLink to={`/Clothes/${result.id}`} key={result.id}>
                  <ClothesCard
                    name={result.name}
                    image={result.image}
                    rating={result.store}
                  />
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div> */}
      <div className="stores">
        <h2>Stores</h2>
        <section className="container-grid">
          {stores.map((store) => (
            <NavLink to={`/stores/${store._id}`} key={store._id}>
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
