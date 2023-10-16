import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const availableOccasions = ["Birthday", "Anniversary"];


    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-firstName">Name</label>
                <input type="text" id="res-firstName" value={formData.firstName} onChange={handleFormChange} required />
                <label htmlFor="res-lastName">Last Name</label>
                <input type="text" id="res-lastName" value={formData.lastName} onChange={handleFormChange} required />
                <label htmlFor="res-number">Phone Number</label>
                <input type="text" id="res-number" value={formData.contactNumber} onChange={handleFormChange} required/>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={formData.date} onChange={handleFormChange} required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={formData.time} onChange={handleFormChange} required>
                    {availableTimes.map((time) => {
                        return (
                            <option key={time}>{time}</option>
                        )
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests}
                    onChange={handleFormChange} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={formData.occasion} onChange={handleFormChange}>
                    {availableOccasions.map((occ) => {
                        return (
                            <option key={occ}>{occ}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;
