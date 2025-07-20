import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/display" element={<Display />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
