import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Detail from "./pages/Details/Detail";
import Profile from "./pages/Profile/Profile";

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
