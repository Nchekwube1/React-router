import "./scss/nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">

            <div className="logo"><h1>Navigatorr</h1></div>
            <div className="links">
                <div className="each"> <Link to="/" > <button className="yo">home</button></Link></div>
                <div className="each"><Link to="/about"><button className="yo">about</button></Link></div>
                <div className="each"><Link to="/contact"><button className="yo">contact us</button></Link></div>
                <div className="each"><Link to="/login"><button className="yo">login</button></Link></div>
            </div>
        </div>

    )
}

export default Nav