import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-col footer-about">
              <img
                src="\public\assets\images\marbles-logo.png"
                alt="SLA Logo"
                className="footer-logo"
              />

              <p>
                SLA Moorti Art creates timeless marble sculptures with devotion,
                precision and traditional craftsmanship.
              </p>

              <div className="footer-contact">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 2890, Bhindo ka
                  Rasta, near Indra bazar, 5th Crossing, Chandpole Bazar, Indira
                  Bazar, Pink City, Jaipur, Rajasthan 302001
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> +91 9829009918,
                  8690909918
                </p>
                <p>
                  <i className="fas fa-envelope"></i> sugarilalarts@gmail.com
                </p>
              </div>
            </div>

            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Our Services</h5>
              <ul>
                <li>
                  <a href="#">Custom Moorti</a>
                </li>
                <li>
                  <a href="#">Temple Design</a>
                </li>
                <li>
                  <a href="#">Marble Sculptures</a>
                </li>
                <li>
                  <a href="#">Stone Art</a>
                </li>
                <li>
                  <a href="#">Bulk Orders</a>
                </li>
              </ul>
            </div>

            {/* <div className="footer-col">
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div> */}

            <div className="footer-col">
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  href="https://wa.me/918690909918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a
                  href="https://www.youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 SLA Moorti Art. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
