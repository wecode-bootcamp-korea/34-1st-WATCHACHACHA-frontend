import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Detail from "./pages/Details/Detail";

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/:ggg/:ddd" element={<Main />} /> */}
        {/* <Route path="/:parameter" element={<Main />} /> */}
        {/* <Route path="/films/main?genre=드라마" element={<Main />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
