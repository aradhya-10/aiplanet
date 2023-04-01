import "./App.css";
import Navbar from "./components/Navbar";
import Submit from "./pages/Submit";
import Hack from "./components/Hack";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/submissions" element={<Hack />}/>
          <Route path="/upload" element={<Submit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
