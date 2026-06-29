import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top navbar-light">
      <div className="container">
        <NavLink className="navbar-brand logo-box" to="/">
          <img src="\public\assets\images\marbles-logo.png" alt="SLA Logo" />
        </NavLink>
        {/* <a className="navbar-brand logo-box" href="#">
                    <img src="\public\assets\images\marbles-logo.png" alt="SLA Logo" />
                </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          style={{ backgroundColor: "#e9dfdf" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navmenu"
        >
          <ul className="navbar-nav align-items-lg-center text-center">
            <NavLink to="/">
              <a className="nav-link" href="#">
                Home
              </a>
            </NavLink>

            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
              {/* <a
                                className="nav-link"
                                href="#"
                            >
                                Gallery
                            </a> */}
              <span
                className="dropdown-toggle custom-toggle dropdown-logo"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></span>

              <div className="dropdown-menu custom-mega-menu shadow">
                <div className="dropdown-grid">
                  <div className="menu-column">
                    <h6>Marble Icons</h6>
                    <ul>
                      <li>
                        <a href="#">Ganesh Moorti</a>
                      </li>
                      <li>
                        <a href="#">Shiva Statues</a>
                      </li>
                      <li>
                        <a href="#">Radha Krishna</a>
                      </li>
                      <li>
                        <a href="#">Durga Maa</a>
                      </li>
                      <li>
                        <a href="#">Hanuman Ji</a>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Stone Varieties</h6>
                    <ul>
                      <li>
                        <a href="#">White Marble</a>
                      </li>
                      <li>
                        <a href="#">Black Granite</a>
                      </li>
                      <li>
                        <a href="#">Sandstone Art</a>
                      </li>
                      <li>
                        <a href="#">Green Marble</a>
                      </li>
                      <li>
                        <a href="#">Pink Sandstone</a>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Custom Projects</h6>
                    <ul>
                      <li>
                        <a href="#">Temple Architecture</a>
                      </li>
                      <li>
                        <a href="#">Garden Sculptures</a>
                      </li>
                      <li>
                        <a href="#">Wall Reliefs</a>
                      </li>
                      <li>
                        <a href="#">Portrait Busts</a>
                      </li>
                      <li>
                        <a href="#">Fountain Designs</a>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Art Collections</h6>
                    <ul>
                      <li>
                        <a href="#">Modern Abstracts</a>
                      </li>
                      <li>
                        <a href="#">Classical Indian</a>
                      </li>
                      <li>
                        <a href="#">Animal Figures</a>
                      </li>
                      <li>
                        <a href="#">Miniature Art</a>
                      </li>
                      <li>
                        <a href="#">Decorative Items</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                Cart
                {totalItems > 0 && (
                  <span className="badge bg-danger ms-1">{totalItems}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// export default function Navbar() {

//     return (
//         <nav className="navbar navbar-expand-lg custom-navbar fixed-top navbar-light">
//             <div className="container">

//                 <a className="navbar-brand logo-box" href="#">
//                     <img src="\public\assets\images\marbles-logo.png" alt="SLA Logo" />
//                 </a>

//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse justify-content-end" id="navmenu">
//                     <ul className="navbar-nav align-items-center">
//                         <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownGallary"
//                                 data-bs-toggle="dropdown">Gallery</a>
//                             <div className="dropdown-menu custom-mega-menu shadow" aria-labelledby="navbarDropdownGallary"
//                                 style={{
//                                     padding: '25px',
//                                     borderRadius: '10px',
//                                     width: '50%'
//                                 }}>
//                                 <div className="dropdown-grid">
//                                     <div className="menu-column">
//                                         <h6>Marble Icons</h6>
//                                         <ul>
//                                             <li><a href="#">Ganesh Moorti</a></li>
//                                             <li><a href="#">Shiva Statues</a></li>
//                                             <li><a href="#">Radha Krishna</a></li>
//                                             <li><a href="#">Durga Maa</a></li>
//                                             <li><a href="#">Hanuman Ji</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="menu-column">
//                                         <h6>Stone Varieties</h6>
//                                         <ul>
//                                             <li><a href="#">White Marble</a></li>
//                                             <li><a href="#">Black Granite</a></li>
//                                             <li><a href="#">Sandstone Art</a></li>
//                                             <li><a href="#">Green Marble</a></li>
//                                             <li><a href="#">Pink Sandstone</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="menu-column">
//                                         <h6>Custom Projects</h6>
//                                         <ul>
//                                             <li><a href="#">Temple Architecture</a></li>
//                                             <li><a href="#">Garden Sculptures</a></li>
//                                             <li><a href="#">Wall Reliefs</a></li>
//                                             <li><a href="#">Portrait Busts</a></li>
//                                             <li><a href="#">Fountain Designs</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="menu-column">
//                                         <h6>Art Collections</h6>
//                                         <ul>
//                                             <li><a href="#">Modern Abstracts</a></li>
//                                             <li><a href="#">classNameical Indian</a></li>
//                                             <li><a href="#">Animal Figures</a></li>
//                                             <li><a href="#">Miniature Art</a></li>
//                                             <li><a href="#">Decorative Items</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="nav-item"><a className="nav-link" href="#">About</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav >
//     );
// }
