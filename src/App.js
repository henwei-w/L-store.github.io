import { createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "components/Layout/Header";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import WomenPage from "./pages/ProductPage/WomenPage";
import MenPage from "./pages/ProductPage/MenPage";
import KidsPage from "./pages/ProductPage/KidsPage";
import ProductDetail from "./pages/ProductDetail";
import Footer from "components/Layout/Footer";
import Information from "./pages/Checkout/Information";
import Pay from "./pages/Checkout/Pay";
import Login from "pages/Login";
import Register from "./pages/Register";
import ImageSource from "./assets/ImageSource";
import Backstage from "./pages/Management/Backstage";
import NotFound from "pages/NotFound";

const data = require("./data.json");
export const content = createContext(data);

function App() {
  return (
    <HashRouter>
      <Header />

      <div
        style={{ minHeight: "calc(100vh - 66px - 10rem)", marginTop: "66px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="/info" element={<Information />} />

          <Route path="/pay" element={<Pay />} />

          <Route path="/login" element={<Login />} />

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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}

export default App;
