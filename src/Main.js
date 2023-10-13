import restourantfood from "./Assets/restaurantfood.jpg";
import SpecialsCard from "./SpecialsCard";
import specialsData from "./Assets/specialsData";

function Main() {
    return (
        <>
            <main>
                <div className="hero">
                    <div className="hero-info">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                        <button className="reserve button">Reserve a Table</button>
                    </div>
                    <img src={restourantfood} alt="restourant food" className="hero-img" />
                </div>
                <div className="specials">
                    <div className="specials-header">
                        <h1>This Weeks Specials!</h1>
                        <button className="menu button">Online Menu</button>
                    </div>
                    <div className="specials-container">
                        {specialsData.specials.map((specials) => {
                            return (
                                <SpecialsCard key={specials.title} img={specials.img} title={specials.title}
                                    desc={specials.desc} price={specials.price} />
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
