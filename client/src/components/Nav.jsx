import { NavLink } from "react-router-dom"

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>Hanfu</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to='/new'>Add Boat</NavLink>
      </div>
    </nav>
  )
}

export default Nav