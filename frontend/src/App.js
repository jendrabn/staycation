import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Example from "./pages/Example";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/404";
import { ToastContainer } from "react-toastify";
import "@popperjs/core";
import "bootstrap";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/example" element={<Example />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
