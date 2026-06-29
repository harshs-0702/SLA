import "./Styles/main.css";
import About from "./Pages/about";
import Gallary from "./Pages/gallary";
import Hero from "./Pages/hero";
import Navbar from "./Pages/navbar";
import Products from "./Pages/products";
import Contact from "./Pages/contact";
import Testimonals from "./Pages/testimonals";
import Location from "./Pages/location";
import Footer from "./Pages/footer";
import UseCustomScripts from "./script";
import { Route, Routes } from "react-router-dom";
import NavlinkGallery from "./Pages/Navlink-gallery";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <UseCustomScripts />
      {/* Navbar always visible */}
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        
         <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Gallary />
              <Products />
              <Contact />
              <Testimonals />
              <Location />
            </>
          }
        />

        {/* GALLERY PAGE */}
        {/* <Route path="/gallery" element={<NavlinkGallery />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> */} 
        
 
  <Route path="/about" element={<About />} />
  <Route path="/gallery" element={<Gallary />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/testimonials" element={<Testimonals />} />
  <Route path="/location" element={<Location />} />

  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<Cart />} />

      </Routes>

      {/* Footer always visible */}
      <Footer />

      {/* WhatsApp */}
      <a
        href="https://wa.me/918690909918"
        target="_blank"
        className="whatsapp-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
