import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import { NewsProvider } from "./NewsContext";

function App() {
  return (
    <>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/shop" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </NewsProvider>
    </>
  );
}

export default App;
