import { Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api"
import HomePage from "./HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import "./Assets/style.css";



function App() {

  const [date, setDate] = useState(new Date())

  const initializeTimes = (date) => {
    return fetchAPI(date)
  }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmation");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate)
        break;

      default:
        throw new Error()
    }
    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}></Route>
      <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
    </Routes>
  );
}

export default App;
