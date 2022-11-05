import { createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import WomenPage from "./components/WomenPage";
import MenPage from "./components/MenPage";
import KidsPage from "./components/KidsPage";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Pay from "./components/Pay";
import Account from "./components/Account";
import Register from "./components/Register";
import ImageSource from "./components/ImageSource";
import Backstage from "./components/Backstage";

const data = require("./data.json");
export const content = createContext(data);

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

let setCartAmount;

const setCart = (orderData, orderAmount) => {
  cartData = orderData;
  setCartAmount(orderAmount);
};

const setChangeAmount = (data) => {
  setCartAmount(data);
};

const setAmount = (set) => {
  setCartAmount = set;
};

export const getCart = createContext(setCart);
export const set = createContext(setAmount);
export const changeAmount = createContext(setChangeAmount);
export const cart = createContext(cartData);

function App() {
  return (
    <HashRouter>
      <Navbar />

      <div
        style={{ minHeight: "calc(100vh - 66px - 10rem)", marginTop: "66px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="/info" element={<Information />} />

          <Route path="/pay" element={<Pay />} />

          <Route path="/account" element={<Account />} />

          <Route path="/register" element={<Register />} />

          <Route path="/imgsource" element={<ImageSource />} />

          <Route path="/backstage" element={<Backstage />}>
            <Route path=":type" element={<Backstage />} />
          </Route>

          <Route path="/women" element={<WomenPage />}>
            <Route path=":type" element={<WomenPage />}>
              <Route path=":id" element={<WomenPage />} />
            </Route>
          </Route>

          <Route path="/men" element={<MenPage />}>
            <Route path=":type" element={<MenPage />}>
              <Route path=":id" element={<MenPage />} />
            </Route>
          </Route>

          <Route path="/kids" element={<KidsPage />}>
            <Route path=":type" element={<KidsPage />}>
              <Route path=":id" element={<KidsPage />} />
            </Route>
          </Route>

          <Route path="/Product_detail" element={<ProductDetail />}>
            <Route path=":type" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}

export default App;
