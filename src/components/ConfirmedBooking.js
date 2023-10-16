import logo from "../Assets/Logofooter.png"

const ConfirmedBooking = () => {
    return (
        <main className="confirmed-main">
            <img src={logo} alt="confirmation logo"/>
            <p className="title confirmed-title">Booking Confirmed!!!</p>
            <p className="subtitle confirmed-subtitle">Please provide your name and contact number at the reception upon arrival.</p>
            <p className="subtitle confirmed-subtitle">We are excited to serve you.</p>
        </main>
    )
}

export default ConfirmedBooking;