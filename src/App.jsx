import Navbar from "./components/Navbar/Navbar";
import Announce from "./components/Announce/Announce";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./components/Cars/Cars";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
