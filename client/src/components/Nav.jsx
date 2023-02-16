import { NavLink } from "react-router-dom"

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>Hanfu</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to='/add'>Add Clothes</NavLink>
        <NavLink to='/add/store'>Add Store</NavLink>
      </div>
    </nav>
  )
}

export default Nav