import Nav from "./components/Nav";
import logo from "./Assets/Logo .svg"

function Header() {
    return (
        <>
            <header className="header">
                <img src={logo} alt="logo" className="header--logo"/>
                <Nav />
            </header>
        </>
    );
}

export default Header;
