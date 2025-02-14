import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Navbar from "./components/Navbar";
import Ticket from "./Pages/Ticket";

const App = () => {
  return (
    <Router>
      <div className="bg-[#041E23] pb-9 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
