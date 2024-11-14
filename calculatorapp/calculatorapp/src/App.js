import Home from "./home";
import About from "./about";
import User, { Orders, Profile } from "./user";
import Contact from "./contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/user">User</Link></li> {/* Link to User route */}
    </ul>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />}>
            {/* Use relative paths for nested routes */}
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
