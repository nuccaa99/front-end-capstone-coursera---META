import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import homeIcon from "../Assets/home icon.svg";

function BookingPage({ availableTimes, dispatch, submitForm }) {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="booking-form wrapper">
            <img src={homeIcon} alt="home" className="home icon" onClick={goHome} />
            <div className="booking-form container">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            </div>
        </div>
    );
}

export default BookingPage;
