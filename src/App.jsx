import "./App.css";
// import Intro from "./pages/Intro/Intro";
// import CreateAccount from "./pages/CreateAccount/CreateAccount"
// import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
