import './Navigation.scss'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="topnav">
            <NavLink activeClassName='nav-active' to="/" exact>Home</NavLink>
            <NavLink activeClassName='nav-active' to="/todo-list">TodoList</NavLink>
            <NavLink activeClassName='nav-active' to="/add-products">Add Products</NavLink>
            <NavLink activeClassName='nav-active' to="/display-products">Display Product</NavLink>
            <NavLink activeClassName='nav-active' to="/weather-app">Weather App</NavLink>
            <NavLink activeClassName='nav-active' to="/otp">OTP</NavLink>
        </div>
    )
}
export default Navigation;