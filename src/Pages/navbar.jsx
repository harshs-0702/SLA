// import { NavLink, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Navbar() {
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar fixed-top navbar-light">
//       <div className="container">
//         <NavLink className="navbar-brand logo-box" to="/">
//           <img src="\public\assets\images\marbles-logo.png" alt="SLA Logo" />
//         </NavLink>
        

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navmenu"
//           style={{ backgroundColor: "#e9dfdf" }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navmenu"
//         >
//           <ul className="navbar-nav align-items-lg-center text-center">
//             <NavLink to="/">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </NavLink>

//             <li className="nav-item">
//               <NavLink to="/gallery" className="nav-link">
//                 Gallery
//               </NavLink>
              
//               <span
//                 className="dropdown-toggle custom-toggle dropdown-logo"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               ></span>

//               <div className="dropdown-menu custom-mega-menu shadow">
//                 <div className="dropdown-grid">
//                   <div className="menu-column">
//                     <h6>Marble Icons</h6>
//                     <ul>
//                       <li>
//                         <Link to="/category/Ganesh%20Moorti">
//                           Ganesh Moorti
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Shiva%20Statues">
//                           Shiva Statues
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Radha%20Krishna">
//                           Radha Krishna
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Durga%20Maa">Durga Maa</Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Hanuman%20Ji">
//                           Hanuman Ji
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="menu-column">
//                     <h6>Stone Varieties</h6>
//                     <ul>
//                       <li>
//                         <Link to="/category/White%20Marble">
//                           White Marble
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Black%20Granite">
//                           Black Granite
//                         </Link> 
//                       </li>
//                       <li>
//                         <Link to="/category/Sandstone%20Art">
//                           Sandstone Art
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Green%20Marble">
//                           Green Marble
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Pink%20Sandstone">
//                           Pink Sandstone
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="menu-column">
//                     <h6>Custom Projects</h6>
//                     <ul>
//                       <li>
//                         <Link to="/category/Temple%20Architecture">
//                           Temple Architecture
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Garden%20Sculptures">
//                           Garden Sculptures
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Wall%20Reliefs">
//                           Wall Reliefs
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Portrait%20Busts">
//                           Portrait Busts
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Fountain%20Designs">
//                           Fountain Designs
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="menu-column">
//                     <h6>Art Collections</h6>
//                     <ul>  
//                       <li>  
//                         <Link to="/category/Modern%20Abstracts">
//                           Modern Abstracts  
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Classical%20Indian">
//                           Classical Indian
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Animal%20Figures">
//                           Animal Figures
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Miniature%20Art">
//                           Miniature Art
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/category/Decorative%20Items">
//                           Decorative Items
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li className="nav-item">
//               {/* <a className="nav-link" href="#">
//                 About
//               </a> */}
//                <NavLink to="/about" className="nav-link">
//                 About
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               {/* <a className="nav-link" href="#">
//                 Contact
//               </a> */}
//                <NavLink to="/contact" className="nav-link">
//                 Contact
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/cart" className="nav-link position-relative">
//                 Cart
//                 {totalItems > 0 && (
//                   <span className="badge bg-danger ms-1">{totalItems}</span>
//                 )}
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




















import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import marbleLogo from "../assets/images/marbles-logo.png";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState({
    locationKey: location.key,
    open: false,
  });
  const mobileOpen =
    mobileMenu.locationKey === location.key && mobileMenu.open;

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top navbar-light">
      <div className="container">
        <NavLink className="navbar-brand logo-box" to="/">
          <img src={marbleLogo} alt="SLA Logo" />
        </NavLink>
        

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navmenu"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() =>
            setMobileMenu({ locationKey: location.key, open: !mobileOpen })
          }
          style={{ backgroundColor: "#e9dfdf" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            mobileOpen ? "show" : ""
          }`}
          id="navmenu"
        >
          <ul className="navbar-nav align-items-lg-center text-center">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <li className="nav-item dropdown-hover">
              <NavLink
                to="/gallery"
                className="nav-link"
                onClick={(event) => {
                  if (window.matchMedia("(max-width: 991.98px)").matches) {
                    event.preventDefault();
                    setGalleryOpen((open) => !open);
                  } else {
                    setGalleryOpen(false);
                  }
                }}
              >
                Gallery
              </NavLink>

              <div
                id="gallery-categories"
                className={`dropdown-menu custom-mega-menu shadow ${
                  galleryOpen ? "is-open" : ""
                }`}
                onClick={() => setGalleryOpen(false)}
              >
                <Link
                  className="mega-menu-gallery-link"
                  to="/gallery"
                  onClick={() => setGalleryOpen(false)}
                >
                  View full gallery
                </Link>
                <div className="dropdown-grid">
                  <div className="menu-column">
                    <h6>Marble Icons</h6>
                    <ul>
                      <li>
                        <Link to="/category/Ganesh%20Moorti">
                          Ganesh Moorti
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Shiva%20Statues">
                          Shiva Statues
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Radha%20Krishna">
                          Radha Krishna
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Durga%20Maa">Durga Maa</Link>
                      </li>
                      <li>
                        <Link to="/category/Hanuman%20Ji">
                          Hanuman Ji
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Stone Varieties</h6>
                    <ul>
                      <li>
                        <Link to="/category/White%20Marble">
                          White Marble
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Black%20Granite">
                          Black Granite
                        </Link> 
                      </li>
                      <li>
                        <Link to="/category/Sandstone%20Art">
                          Sandstone Art
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Green%20Marble">
                          Green Marble
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Pink%20Sandstone">
                          Pink Sandstone
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Custom Projects</h6>
                    <ul>
                      <li>
                        <Link to="/category/Temple%20Architecture">
                          Temple Architecture
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Garden%20Sculptures">
                          Garden Sculptures
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Wall%20Reliefs">
                          Wall Reliefs
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Portrait%20Busts">
                          Portrait Busts
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Fountain%20Designs">
                          Fountain Designs
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h6>Art Collections</h6>
                    <ul>  
                      <li>  
                        <Link to="/category/Modern%20Abstracts">
                          Modern Abstracts  
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Classical%20Indian">
                          Classical Indian
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Animal%20Figures">
                          Animal Figures
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Miniature%20Art">
                          Miniature Art
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/Decorative%20Items">
                          Decorative Items
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                About
              </a> */}
               <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Contact
              </a> */}
               <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
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


// import React, { useState, useRef, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const MEGA_MENU = [
//   {
//     title: "Marble Icons",
//     items: ["Ganesh Moorti", "Shiva Statues", "Radha Krishna", "Durga Maa", "Hanuman Ji"],
//   },
//   {
//     title: "Stone Varieties",
//     items: ["White Marble", "Black Granite", "Sandstone Art", "Green Marble", "Pink Sandstone"],
//   },
//   {
//     title: "Custom Projects",
//     items: ["Temple Architecture", "Garden Sculptures", "Wall Reliefs", "Portrait Busts", "Fountain Designs"],
//   },
//   {
//     title: "Art Collections",
//     items: ["Modern Abstracts", "Classical Indian", "Animal Figures", "Miniature Art", "Decorative Items"],
//   },
// ];

// function CartIcon() {
//   return (
//     <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="9" cy="21" r="1" />
//       <circle cx="20" cy="21" r="1" />
//       <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
//     </svg>
//   );
// }

// function ChevronIcon() {
//   return (
//     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }

// function MenuIcon({ open }) {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//       {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
//     </svg>
//   );
// }

// export default function Navbar() {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [megaOpen, setMegaOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const megaRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     function onClickOutside(e) {
//       if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
//     }
//     document.addEventListener("mousedown", onClickOutside);
//     return () => document.removeEventListener("mousedown", onClickOutside);
//   }, []);

//   return (
//     <>
//       <style>{STYLES}</style>
//       <nav className={`sla-nav ${scrolled ? "sla-scrolled" : ""}`}>
//         <div className="sla-nav-hairline" />
//         <div className="sla-nav-inner">
//           <NavLink className="sla-logo" to="/" onClick={() => setMobileOpen(false)}>
//             <img src="/assets/images/marbles-logo.png" alt="Sugari Lal Arts Logo" />
//             <span className="sla-logo-text">
//               Sugari Lal <em>Arts</em>
//             </span>
//           </NavLink>

//           <ul className="sla-links sla-desktop">
//             <li>
//               <NavLink to="/" end className={({ isActive }) => `sla-link ${isActive ? "sla-active" : ""}`}>
//                 Home
//               </NavLink>
//             </li>

//             <li className="sla-mega-wrap" ref={megaRef}>
//               <button
//                 type="button"
//                 className={`sla-link sla-mega-trigger ${megaOpen ? "sla-active" : ""}`}
//                 onClick={() => setMegaOpen((v) => !v)}
//                 aria-expanded={megaOpen}
//               >
//                 Gallery
//                 <ChevronIcon />
//               </button>

//               <div className={`sla-mega-panel ${megaOpen ? "sla-mega-show" : ""}`}>
//                 <div className="sla-mega-glow" aria-hidden="true" />
//                 <div className="sla-mega-grid">
//                   {MEGA_MENU.map((col) => (
//                     <div className="sla-mega-col" key={col.title}>
//                       <h6>{col.title}</h6>
//                       <ul>
//                         {col.items.map((item) => (
//                           <li key={item}>
//                             <Link to={`/category/${encodeURIComponent(item)}`} onClick={() => setMegaOpen(false)}>
//                               <span className="sla-mega-dot" />
//                               {item}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="sla-mega-footer">
//                   <span>Hand-carved in marble &amp; stone, since generations</span>
//                   <Link to="/gallery" onClick={() => setMegaOpen(false)}>
//                     View full gallery →
//                   </Link>
//                 </div>
//               </div>
//             </li>

//             <li>
//               <NavLink to="/about" className={({ isActive }) => `sla-link ${isActive ? "sla-active" : ""}`}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className={({ isActive }) => `sla-link ${isActive ? "sla-active" : ""}`}>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>

//           <div className="sla-actions">
//             <NavLink to="/cart" className="sla-cart-btn" aria-label="Cart">
//               <CartIcon />
//               {totalItems > 0 && <span className="sla-cart-badge">{totalItems}</span>}
//             </NavLink>

//             <button
//               type="button"
//               className="sla-mobile-toggle"
//               onClick={() => setMobileOpen((v) => !v)}
//               aria-label="Toggle menu"
//               aria-expanded={mobileOpen}
//             >
//               <MenuIcon open={mobileOpen} />
//             </button>
//           </div>
//         </div>

//         <div className={`sla-mobile-panel ${mobileOpen ? "sla-mobile-show" : ""}`}>
//           <NavLink to="/" end className="sla-mobile-link" onClick={() => setMobileOpen(false)}>
//             Home
//           </NavLink>

//           <details className="sla-mobile-gallery">
//             <summary>
//               Gallery <ChevronIcon />
//             </summary>
//             {MEGA_MENU.map((col) => (
//               <div className="sla-mobile-mega-col" key={col.title}>
//                 <h6>{col.title}</h6>
//                 <ul>
//                   {col.items.map((item) => (
//                     <li key={item}>
//                       <Link to={`/category/${encodeURIComponent(item)}`} onClick={() => setMobileOpen(false)}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </details>

//           <NavLink to="/about" className="sla-mobile-link" onClick={() => setMobileOpen(false)}>
//             About
//           </NavLink>
//           <NavLink to="/contact" className="sla-mobile-link" onClick={() => setMobileOpen(false)}>
//             Contact
//           </NavLink>
//           <NavLink to="/cart" className="sla-mobile-link" onClick={() => setMobileOpen(false)}>
//             Cart {totalItems > 0 && <span className="sla-cart-badge sla-inline">{totalItems}</span>}
//           </NavLink>
//         </div>
//       </nav>
//       <div className="sla-nav-spacer" />
//     </>
//   );
// }

// const STYLES = `
// :root {
//   --sla-ink: #14110F;
//   --sla-ink-soft: #6d6660;
//   --sla-gold: #D4AF37;
//   --sla-gold-deep: #A9822A;
//   --sla-gold-light: #F2E4B8;
//   --sla-bg: #FFFDF8;
//   --sla-border: #EDE5D4;
//   --sla-ease: cubic-bezier(.22,1,.36,1);
// }

// .sla-nav-spacer { height: 92px; }

// .sla-nav {
//   position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
//   background: rgba(255, 253, 248, 0.62);
//   backdrop-filter: blur(20px) saturate(180%);
//   -webkit-backdrop-filter: blur(20px) saturate(180%);
//   transition: background .4s var(--sla-ease), box-shadow .4s var(--sla-ease);
//   font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
// }
// .sla-nav.sla-scrolled {
//   background: rgba(255, 253, 248, 0.94);
//   box-shadow: 0 12px 36px -12px rgba(20,17,15,0.14);
// }
// .sla-nav-hairline {
//   position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
//   background: linear-gradient(90deg, transparent, var(--sla-gold) 20%, var(--sla-gold) 80%, transparent);
//   opacity: .35;
// }

// .sla-nav-inner {
//   max-width: 1360px; margin: 0 auto;
//   padding: 0 clamp(18px, 4vw, 48px);
//   height: 92px;
//   display: flex; align-items: center; justify-content: space-between; gap: 24px;
//   position: relative;
// }

// .sla-logo {
//   display: flex; align-items: center; gap: 13px;
//   text-decoration: none; color: var(--sla-ink); flex-shrink: 0;
// }
// .sla-logo img { height: 56px; width: auto; display: block; filter: drop-shadow(0 3px 8px rgba(20,17,15,0.1)); }
// .sla-logo-text {
//   font-weight: 800; font-size: 19px; letter-spacing: -0.01em; white-space: nowrap;
//   background: linear-gradient(120deg, var(--sla-ink) 55%, var(--sla-gold-deep));
//   -webkit-background-clip: text; background-clip: text; color: transparent;
// }
// .sla-logo-text em { font-style: normal; }

// .sla-links { list-style: none; display: flex; align-items: center; gap: 2px; margin: 0; padding: 0; }
// .sla-desktop { display: flex; }

// .sla-link {
//   position: relative; display: inline-flex; align-items: center; gap: 6px;
//   padding: 10px 18px; border-radius: 999px;
//   font-size: 13.5px; font-weight: 600; letter-spacing: .01em; color: var(--sla-ink-soft);
//   text-decoration: none; background: none; border: none; cursor: pointer;
//   transition: color .3s var(--sla-ease);
// }
// .sla-link::after {
//   content: ''; position: absolute; left: 18px; right: 18px; bottom: 6px; height: 1.5px;
//   background: linear-gradient(90deg, var(--sla-gold-deep), var(--sla-gold));
//   transform: scaleX(0); transform-origin: center; transition: transform .3s var(--sla-ease);
// }
// .sla-link:hover { color: var(--sla-ink); }
// .sla-link:hover::after { transform: scaleX(1); }
// .sla-link.sla-active { color: var(--sla-ink); }
// .sla-link.sla-active::after { transform: scaleX(1); }
// .sla-mega-trigger svg { transition: transform .3s var(--sla-ease); color: var(--sla-gold-deep); }
// .sla-mega-trigger.sla-active svg { transform: rotate(180deg); }

// .sla-mega-wrap { position: relative; }
// .sla-mega-panel {
//   position: absolute; top: calc(100% + 16px); left: 50%;
//   transform: translateX(-50%) translateY(-10px) scale(.98);
//   width: min(820px, 88vw);
//   background: #fff; border: 1px solid var(--sla-border); border-radius: 22px;
//   box-shadow: 0 30px 70px -16px rgba(20,17,15,0.22), 0 0 0 1px rgba(212,175,55,0.06);
//   overflow: hidden;
//   opacity: 0; visibility: hidden; pointer-events: none;
//   transition: opacity .3s var(--sla-ease), transform .3s var(--sla-ease), visibility .3s;
// }
// .sla-mega-panel.sla-mega-show {
//   opacity: 1; visibility: visible; pointer-events: auto;
//   transform: translateX(-50%) translateY(0) scale(1);
// }
// .sla-mega-glow {
//   position: absolute; top: -140px; left: 50%; transform: translateX(-50%);
//   width: 480px; height: 260px;
//   background: radial-gradient(closest-side, rgba(212,175,55,.16), transparent 70%);
//   filter: blur(30px); pointer-events: none;
// }
// .sla-mega-grid { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; padding: 30px 32px 22px; }
// .sla-mega-col h6 {
//   font-size: 10.5px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
//   color: var(--sla-gold-deep); margin: 0 0 14px;
// }
// .sla-mega-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
// .sla-mega-col a {
//   display: inline-flex; align-items: center; gap: 8px;
//   font-size: 13px; font-weight: 500; color: var(--sla-ink); text-decoration: none;
//   transition: color .2s ease;
// }
// .sla-mega-dot {
//   width: 4px; height: 4px; border-radius: 50%; background: var(--sla-gold);
//   opacity: 0; transform: scale(0); transition: opacity .2s ease, transform .2s ease;
// }
// .sla-mega-col a:hover { color: var(--sla-gold-deep); }
// .sla-mega-col a:hover .sla-mega-dot { opacity: 1; transform: scale(1); }

// .sla-mega-footer {
//   display: flex; align-items: center; justify-content: space-between; gap: 16px;
//   padding: 16px 32px; border-top: 1px solid var(--sla-border);
//   background: linear-gradient(180deg, transparent, rgba(212,175,55,0.04));
// }
// .sla-mega-footer span { font-size: 11.5px; color: var(--sla-ink-soft); font-style: italic; }
// .sla-mega-footer a {
//   font-size: 12px; font-weight: 700; color: var(--sla-gold-deep); text-decoration: none; white-space: nowrap;
//   transition: transform .25s var(--sla-ease);
//   display: inline-block;
// }
// .sla-mega-footer a:hover { transform: translateX(3px); }

// .sla-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

// .sla-cart-btn {
//   position: relative; display: flex; align-items: center; justify-content: center;
//   width: 42px; height: 42px; border-radius: 50%; color: var(--sla-ink);
//   background: rgba(20,17,15,0.04); border: 1px solid transparent; text-decoration: none;
//   transition: background .3s var(--sla-ease), border-color .3s var(--sla-ease), transform .3s var(--sla-ease), color .3s var(--sla-ease);
// }
// .sla-cart-btn:hover {
//   background: #fff; border-color: var(--sla-gold-light); color: var(--sla-gold-deep);
//   transform: translateY(-2px); box-shadow: 0 10px 22px -8px rgba(212,175,55,.5);
// }
// .sla-cart-badge {
//   position: absolute; top: -5px; right: -5px;
//   min-width: 19px; height: 19px; padding: 0 5px; border-radius: 999px;
//   background: linear-gradient(135deg, var(--sla-gold), var(--sla-gold-deep)); color: #1a1400;
//   font-size: 10.5px; font-weight: 800; display: flex; align-items: center; justify-content: center;
//   box-shadow: 0 3px 10px rgba(184,149,46,0.45), 0 0 0 2px #fff;
// }
// .sla-cart-badge.sla-inline { position: static; margin-left: 6px; display: inline-flex; }

// .sla-mobile-toggle {
//   display: none; align-items: center; justify-content: center;
//   width: 42px; height: 42px; border-radius: 50%; border: none;
//   background: rgba(20,17,15,0.04); color: var(--sla-ink); cursor: pointer;
//   transition: background .25s ease;
// }
// .sla-mobile-toggle:active { background: var(--sla-gold-light); }

// .sla-mobile-panel {
//   max-height: 0; overflow: hidden; background: #fff; border-top: 1px solid transparent;
//   transition: max-height .4s var(--sla-ease), border-color .2s ease;
// }
// .sla-mobile-panel.sla-mobile-show {
//   max-height: 640px; overflow-y: auto; border-top-color: var(--sla-border);
// }
// .sla-mobile-link {
//   display: block; padding: 16px 24px; font-size: 14.5px; font-weight: 600;
//   color: var(--sla-ink); text-decoration: none; border-bottom: 1px solid var(--sla-border);
// }
// .sla-mobile-gallery { border-bottom: 1px solid var(--sla-border); }
// .sla-mobile-gallery summary {
//   display: flex; align-items: center; gap: 8px;
//   padding: 16px 24px; font-size: 14.5px; font-weight: 600; color: var(--sla-ink);
//   cursor: pointer; list-style: none;
// }
// .sla-mobile-gallery summary::-webkit-details-marker { display: none; }
// .sla-mobile-gallery summary svg { color: var(--sla-gold-deep); }
// .sla-mobile-mega-col { padding: 6px 24px 18px; }
// .sla-mobile-mega-col h6 {
//   font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
//   color: var(--sla-gold-deep); margin: 8px 0 8px;
// }
// .sla-mobile-mega-col ul { list-style: none; margin: 0; padding: 0; }
// .sla-mobile-mega-col a {
//   display: block; padding: 7px 0; font-size: 13.5px; color: var(--sla-ink-soft); text-decoration: none;
// }
// .sla-mobile-mega-col a:active { color: var(--sla-gold-deep); }

// @media (max-width: 900px) {
//   .sla-desktop { display: none; }
//   .sla-mobile-toggle { display: flex; }
//   .sla-logo-text { display: none; }
// }
// `;