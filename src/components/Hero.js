import { useNavigate } from "react-router-dom";
import restourantfood from "../Assets/restaurantfood.jpg";

function Hero() {

    const navigate = useNavigate();

    function reserveForm() {
        navigate("/booking");
    }

    return (
        <div className="hero">
            <div className="hero-info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button className="reserve button" onClick={reserveForm}>Reserve a Table</button>
            </div>
            <img src={restourantfood} alt="restourant food" className="hero-img" />
        </div>
    );
}

export default Hero;
