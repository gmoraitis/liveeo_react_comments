import { Link, NavLink } from "react-router-dom";
import '../styles/components/Navbar.css'

function Navbar() {
    return (
        <div>
            <header className="header">
                <div id="brand">
                    <Link to="/">LiveEO</Link></div>
                <nav>
                    <ul>
                        <li><NavLink to="map">Map</NavLink></li>
                        <li><NavLink to="tasks">Tasks</NavLink></li>
                        <li><NavLink to="dashboard">Dashboard</NavLink></li>
                        <li id="comments"><NavLink to="comments">Comments</NavLink></li>
                        <li id="admin"><NavLink to="admin">Admin</NavLink></li>
                        <li id="login"><NavLink to="login">L</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )

}
export default Navbar
