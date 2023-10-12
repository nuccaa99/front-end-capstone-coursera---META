import Nav from "./Nav";
import logo from "./Assets/Logo .svg"

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <Nav />
            </header>
        </>
    );
}

export default Header;
