import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="logo"></div>
            <div className="menu_wrapper">
                <Link to={'/'}>
                    <p>Home</p>
                </Link>
                <Link to={'/about'}>
                    <p>About</p>
                </Link>
                <Link to={'/contacts'}>
                    <p>Contacts</p>
                </Link>
            </div>
        </div>
    )
}
export default Header