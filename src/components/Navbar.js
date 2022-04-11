import '../App.css'

function Navbar() {
    return (
        <div>
            <header>
                <div id="brand"><a href="/">LiveEO</a></div>
                <nav>
                    <ul>
                        <li><a href="/">Map</a></li>
                        <li><a href="/">Tasks</a></li>
                        <li><a href="/">Dashboard</a></li>
                        <li id="comments"><a href="/">Comments</a></li>
                        <li id="admin"><a href="/">Admin</a></li>
                        <li id="login"><a href="/">L</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )

}
export default Navbar
