import { NavLink } from 'react-router-dom'
import Logo from "../../../assets/json logo.jpg"
import './sidebar.css'
NavLink
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={Logo} alt="logo" />
        <NavLink to="/main" className="navlink" >
            Users
        </NavLink>
        <NavLink to="/main/brand" className="navlink" >
           Posts
        </NavLink>
    </div>
  )
}

export default Sidebar