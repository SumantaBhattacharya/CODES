// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/page1/Home";
import Cart from "./Components/page1/Cart";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer/Footer.js";
import AboutUs from "./Components/layout/Footer/AboutUs.js";
import Feature from "./Components/layout/Footer/Feature.js";
import ProductDts from "./Components/ProductDts";
import Page404 from "./Components/Pages_404";
import RegandLogin from "./Components/RegandLogin";
import Privacy_Policy from "./Components/layout/Footer/Privacy_Policy.js";
import Contact from "./Components/layout/Footer/Contact.js";
import {Social} from "./Components/layout/Footer/Social.js";
import Testimonials from "./Components/layout/Footer/Testimonials.js";
import Breadcrums from "./Components/Breadcrums.js";

import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Breadcrums />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDts />} />
            <Route path="/auth" element={<RegandLogin />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/privacy-policy" element={<Privacy_Policy />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/social-links" element={<Social />} />
            <Route path="/customer-testimonials" element={<Testimonials />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
