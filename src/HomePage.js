import Specials from "./components/Specials";
import Hero from "./components/Hero";
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Specials />
            </main>
            <Footer />
        </>
    );
}

export default Homepage;
