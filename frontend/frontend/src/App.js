import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Account from "./pages/Account";
import About from "./pages/About";
import AddAnnonce from "./pages/AddAnnonce";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/addannonce" element={<AddAnnonce />} />
      </Routes>
    </div>
  );
}

export default App;
