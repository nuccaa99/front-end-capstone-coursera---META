import restourantfood from "../Assets/restaurantfood.jpg";

function Hero() {
    return (
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
    );
}

export default Hero;
