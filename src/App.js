import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./components/BookingPage"
import "./Assets/style.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
