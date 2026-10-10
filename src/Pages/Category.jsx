// // import { useParams } from "react-router-dom";
// // import { categories } from "../api/category";    

// // export default function CategoryPage() {
// //   const { name } = useParams();

// //   const categoryProducts = categories[name] || [];

// //   return (
// //     <div className="container">
// //       <h2>{name.replace(/-/g, " ")}</h2>

// //       <div className="row">
// //         {categoryProducts.map((item) => (
// //           <div className="col-md-4" key={item.id}>
// //             <div className="card">
// //               <img src={item.image} alt={item.name} />
// //               <h5>{item.name}</h5>
// //               <p>₹ {item.price}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { useParams } from "react-router-dom";
// import { categories } from "../api/category";
// import "../styles/Category.css";

// export default function CategoryPage() {
//   const { name } = useParams();
//   const categoryProducts = categories[name] || [];
//   const displayName = name.replace(/-/g, " ");

//   return (
    
//     <div className="catalog-page">
//       <header className="catalog-header">
//         <span className="catalog-eyebrow">Collection</span>
//         <h1 className="catalog-title">{displayName}</h1>
//         <div className="catalog-meta">
//           <span className="catalog-rule" />
//           <span className="catalog-count">
//             {categoryProducts.length} {categoryProducts.length === 1 ? "piece" : "pieces"} in this collection
//           </span>
//         </div>
//       </header>

//       {categoryProducts.length === 0 ? (
//         <div className="catalog-empty">
//           <p>No pieces catalogued here yet.</p>
//         </div>
//       ) : (
//         <div className="catalog-grid">
//           {categoryProducts.map((item, index) => (
//             <article className="artifact-card" key={item.id}>
//               <span className="artifact-number">
//                 No. {String(index + 1).padStart(3, "0")}
//               </span>

//               <div className="artifact-image-wrap">
//                 <img src={item.image} alt={item.name} className="artifact-image" />
//               </div>

//               <div className="artifact-info">
//                 <h3 className="artifact-name">{item.name}</h3>
//                 <p className="artifact-price"> {item.price.toLocaleString("en-IN")}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { categories } from "../api/category";
// import "../styles/Category.css";

// export default function CategoryPage() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const categoryProducts = categories[name] || [];
//   const displayName = name.replace(/-/g, " ");

//   const handleCardClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="catalog-page">
//       <header className="catalog-header">
//         <span className="catalog-eyebrow">Collection</span>
//         <h1 className="catalog-title">{displayName}</h1>
//         <div className="catalog-meta">
//           <span className="catalog-rule" />
//           <span className="catalog-count">
//             {categoryProducts.length} {categoryProducts.length === 1 ? "piece" : "pieces"} in this collection
//           </span>
//         </div>
//       </header>

//       {categoryProducts.length === 0 ? (
//         <div className="catalog-empty">
//           <p>No pieces catalogued here yet.</p>
//         </div>
//       ) : (
//         <div className="catalog-grid">
//           {categoryProducts.map((item, index) => (
//             <article
//               className="artifact-card"
//               key={item.id}
//               style={{ "--delay": `${Math.min(index * 0.06, 0.4)}s` }}
//               onClick={() => handleCardClick(item.id)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") handleCardClick(item.id);
//               }}
//             >
//               <span className="artifact-number">
//                 No. {String(index + 1).padStart(3, "0")}
//               </span>

//               <div className="artifact-image-wrap">
//                 <img src={item.image} alt={item.name} className="artifact-image" />
//                 <span className="artifact-view">View piece →</span>
//               </div>

//               <div className="artifact-info">
//                 <h3 className="artifact-name">{item.name}</h3>
//                 <p className="artifact-price">₹ {item.price.toLocaleString("en-IN")}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { categories } from "../api/category";
// import "../styles/Category.css";

// export default function CategoryPage() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const categoryProducts = categories[name] || [];
//   const displayName = name.replace(/-/g, " ");

//   const handleCardClick = (id) => {
//     // category name + product id dono URL mein bhejna
//     navigate(`/product/${name}/${id}`);
//   };

//   return (
//     <div className="catalog-page">
//       <header className="catalog-header">
//         <span className="catalog-eyebrow">Collection</span>
//         <h1 className="catalog-title">{displayName}</h1>
//         <div className="catalog-meta">
//           <span className="catalog-rule" />
//           <span className="catalog-count">
//             {categoryProducts.length} {categoryProducts.length === 1 ? "piece" : "pieces"} in this collection
//           </span>
//         </div>
//       </header>

//       {categoryProducts.length === 0 ? (
//         <div className="catalog-empty">
//           <p>No pieces catalogued here yet.</p>
//         </div>
//       ) : (
//         <div className="catalog-grid">
//           {categoryProducts.map((item, index) => (
//             <article
//               className="artifact-card"
//               key={item.id}
//               style={{ "--delay": `${Math.min(index * 0.06, 0.4)}s` }}
//               onClick={() => handleCardClick(item.id)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") handleCardClick(item.id);
//               }}
//             >
//               <span className="artifact-number">
//                 No. {String(index + 1).padStart(3, "0")}
//               </span>

//               <div className="artifact-image-wrap">
//                 <img src={item.image} alt={item.name} className="artifact-image" />
//                 <span className="artifact-view">View piece →</span>
//               </div>

//               <div className="artifact-info">
//                 <h3 className="artifact-name">{item.name}</h3>
//                 <p className="artifact-price">{item.price}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { Row, Col, Card, Tag } from "antd";
// import { categories } from "../api/category";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import "../styles/Category.css";

// gsap.registerPlugin(ScrollTrigger);

// const { Meta } = Card;

// export default function CategoryPage() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   const categoryProducts = categories[name] || [];
//   const displayName = name.replace(/-/g, " ");

//   const handleCardClick = (id) => {
//     navigate(`/product/${name}/${id}`);
//   };

//   useGSAP(
//     () => {
//       if (!categoryProducts.length) return;

//       gsap.from(".catalog-header", {
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(sectionRef.current.querySelectorAll(".custom-card"), {
//         y: 100,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       ScrollTrigger.refresh();
//     },
//     { scope: sectionRef, dependencies: [name] },
//   );

//   return (
//     <section className="catalog-page" ref={sectionRef}>
//       <div className="container">
//         <header className="catalog-header">
//           <span className="catalog-eyebrow">Collection</span>
//           <h1 className="catalog-title">{displayName}</h1>
//           <div className="catalog-meta">
//             <span className="catalog-rule" />
//             <span className="catalog-count">
//               {categoryProducts.length}{" "}
//               {categoryProducts.length === 1 ? "piece" : "pieces"} in this collection
//             </span>
//           </div>
//         </header>

//         {categoryProducts.length === 0 ? (
//           <div className="catalog-empty">
//             <p>No pieces catalogued here yet.</p>
//           </div>
//         ) : (
//           <Row gutter={[20, 20]} align="stretch">
//             {categoryProducts.map((item, index) => (
//               <Col xs={24} sm={12} md={12} lg={8} xl={8} key={item.id}>
//                 <Card
//                   hoverable
//                   className="custom-card"
//                   onClick={() => handleCardClick(item.id)}
//                   cover={
//                     <div className="image-wrapper">
//                       {/* <span className="artifact-number">
//                         No. {String(index + 1).padStart(3, "0")}
//                       </span> */}
//                       <img alt={item.name} src={item.image} className="card-img" />
//                     </div>
//                   }
//                 >
//                   {item.badge && <Tag color="gold">{item.badge}</Tag>}

//                   <Meta title={item.name} description={item.desc} />

//                   <div className="price">{item.price}</div>

//                   <button
//                     className="btn-enquire"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCardClick(item.id);
//                     }}
//                   >
//                     View Piece →
//                   </button>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </div>
//     </section>
//   );
// }









// import { useParams, useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { Row, Col, Card, Tag } from "antd";
// import { categories } from "../api/category";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import "../styles/Category.css";

// gsap.registerPlugin(ScrollTrigger);

// const { Meta } = Card;

// export default function CategoryPage() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   const categoryProducts = categories[name] || [];
//   const displayName = name.replace(/-/g, " ");

//   const handleCardClick = (id) => {
//     navigate(`/product/${name}/${id}`);
//   };

//   useGSAP(
//     () => {
//       const ctx = gsap.context(() => {
//         gsap.from(".catalog-header", {
//           y: 50,
//           opacity: 0,
//           duration: 0.9,
//           ease: "power3.out",
//         });

//         gsap.from(".custom-card", {
//           y: 80,
//           opacity: 0,
//           stagger: 0.12,
//           duration: 0.7,
//           ease: "power3.out",
//           clearProps: "transform,opacity",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//             once: true,
//           },
//         });
//       }, sectionRef);

//       ScrollTrigger.refresh();

//       return () => {
//         ctx.revert(); // IMPORTANT cleanup
//         ScrollTrigger.getAll().forEach((t) => t.kill()); // remove leftovers
//       };
//     },
//     { scope: sectionRef, dependencies: [name] }
//   );

//   return (
//     <section className="catalog-page" ref={sectionRef}>
//       <div className="container">
//         <header className="catalog-header">
//           <span className="catalog-eyebrow">Collection</span>
//           <h1 className="catalog-title">{displayName}</h1>

//           <div className="catalog-meta">
//             <span className="catalog-rule" />
//             <span className="catalog-count">
//               {categoryProducts.length}{" "}
//               {categoryProducts.length === 1 ? "piece" : "pieces"} in this collection
//             </span>
//           </div>
//         </header>

//         {categoryProducts.length === 0 ? (
//           <div className="catalog-empty">
//             <p>No pieces catalogued here yet.</p>
//           </div>
//         ) : (
//           <Row gutter={[20, 20]} align="stretch">
//             {categoryProducts.map((item, index) => (
//               <Col xs={24} sm={12} md={12} lg={8} xl={8} key={item.id}>
//                 <Card
//                   hoverable
//                   className="custom-card"
//                   onClick={() => handleCardClick(item.id)}
//                   cover={
//                     <div className="image-wrapper">
//                       <img
//                         alt={item.name}
//                         src={item.image}
//                         className="card-img"
//                       />
//                     </div>
//                   }
//                 >
//                   {item.badge && <Tag color="gold">{item.badge}</Tag>}

//                   <Meta title={item.name} description={item.desc} />

//                   <div className="price">{item.price}</div>

//                   <button
//                     className="btn-enquire"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCardClick(item.id);
//                     }}
//                   >
//                     View Piece →
//                   </button>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         )}
//       </div>
//     </section>
//   );
// }


// import React, { useState, useEffect, useRef, useMemo } from "react";

// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Meridian Mono",
//     category: "Timepieces",
//     badge: "New",
//     desc: "Hand-wound, 38mm case in brushed steel.",
//     price: "2,480",
//     rating: 5,
//     img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Solaris Chrono",
//     category: "Timepieces",
//     badge: "Limited",
//     desc: "Automatic chronograph, sapphire crystal.",
//     price: "3,920",
//     rating: 5,
//     img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Full-Grain Weekender",
//     category: "Leather",
//     badge: "Bestseller",
//     desc: "Vegetable-tanned Italian hide, brass hardware.",
//     price: "680",
//     rating: 4,
//     img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Aureate Cufflinks",
//     category: "Objects",
//     badge: "New",
//     desc: "18k gold-plated brass, hand polished.",
//     price: "340",
//     rating: 5,
//     img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Meridian Duo",
//     category: "Timepieces",
//     badge: null,
//     desc: "Dual-time automatic movement, 40mm.",
//     price: "4,150",
//     rating: 5,
//     img: "https://images.unsplash.com/photo-1495856458515-0637185db551?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Cardholder, Slim",
//     category: "Leather",
//     badge: null,
//     desc: "Three-pocket construction, hand-stitched edge.",
//     price: "210",
//     rating: 4,
//     img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 7,
//     name: "Obsidian Paperweight",
//     category: "Objects",
//     badge: "Limited",
//     desc: "Solid brass, matte black PVD coating.",
//     price: "165",
//     rating: 4,
//     img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Terra Field Watch",
//     category: "Timepieces",
//     badge: "Bestseller",
//     desc: "Titanium case, sapphire, 100m water resistance.",
//     price: "3,180",
//     rating: 5,
//     img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 9,
//     name: "Belt, Reversible",
//     category: "Leather",
//     badge: null,
//     desc: "Full-grain calfskin, interchangeable buckle.",
//     price: "245",
//     rating: 4,
//     img: "https://images.unsplash.com/photo-1553143820-c1ba6f5fc8db?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// const CATEGORIES = ["all", "Timepieces", "Leather", "Objects"];

// function StarIcon({ filled }) {
//   return (
//     <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" width="11" height="11">
//       <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
//     </svg>
//   );
// }

// function HeartIcon({ filled }) {
//   return (
//     <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
//       <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
//     </svg>
//   );
// }

// function SearchIcon() {
//   return (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <circle cx="11" cy="11" r="7" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
//       <path d="M5 12h14M13 5l7 7-7 7" />
//     </svg>
//   );
// }

// function EmptySearchIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
//       <circle cx="11" cy="11" r="7" />
//       <path d="m21 21-4.3-4.3" />
//       <path d="M8 11h6" />
//     </svg>
//   );
// }

// function ProductCard({ product, isWished, onToggleWish, onOpen, cardRef }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       onOpen(product.id);
//     }
//   };

//   return (
//     <article
//       ref={cardRef}
//       className="amc-card"
//       tabIndex={0}
//       role="link"
//       aria-label={`View ${product.name}`}
//       onClick={() => onOpen(product.id)}
//       onKeyDown={handleKeyDown}
//     >
//       <div className="amc-card-media">
//         <img src={product.img} alt={product.name} loading="lazy" />
//         <div className="amc-media-overlay" />
//         <div className="amc-shine" />
//         {product.badge && (
//           <span className={`amc-badge-float ${product.badge === "Limited" ? "amc-badge-gold" : ""}`}>
//             {product.badge}
//           </span>
//         )}
//         <button
//           type="button"
//           className={`amc-wishlist-btn ${isWished ? "amc-active" : ""}`}
//           aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
//           onClick={(e) => {
//             e.stopPropagation();
//             onToggleWish(product.id, e.currentTarget);
//           }}
//         >
//           <HeartIcon filled={isWished} />
//         </button>
//       </div>
//       <div className="amc-card-body">
//         <div className="amc-card-toprow">
//           <span className="amc-category-tag">{product.category}</span>
//           <span className="amc-rating" aria-label={`${product.rating} out of 5 stars`}>
//             {Array.from({ length: 5 }, (_, i) => (
//               <StarIcon key={i} filled={i < product.rating} />
//             ))}
//           </span>
//         </div>
//         <h3 className="amc-product-name">{product.name}</h3>
//         <p className="amc-product-desc">{product.desc}</p>
//         <div className="amc-card-bottom">
//           <span className="amc-price">
//             ${product.price}
//             <sup>USD</sup>
//           </span>
//           <button
//             type="button"
//             className="amc-piece-btn"
//             onClick={(e) => {
//               e.stopPropagation();
//               onOpen(product.id);
//             }}
//           >
//             View Piece
//             <ArrowIcon />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// function SkeletonCard() {
//   return (
//     <div className="amc-skeleton-card">
//       <div className="amc-skel-media" />
//       <div className="amc-skel-line amc-w60" />
//       <div className="amc-skel-line amc-w90" />
//       <div className="amc-skel-line amc-w40" />
//     </div>
//   );
// }

// export default function CollectionPage() {
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [sort, setSort] = useState("featured");
//   const [wishlist, setWishlist] = useState(() => new Set());
//   // Tracks whether GSAP successfully loaded from the CDN. Card opacity is
//   // driven by this flag via inline style (not the CSS class's opacity:0),
//   // so a blocked or offline CDN never leaves the grid permanently
//   // invisible — it just skips the entrance animation and shows cards as-is.
//   const [librariesFailed, setLibrariesFailed] = useState(false);

//   const gsapRef = useRef(null);
//   const scrollTriggerRef = useRef(null);
//   const librariesReadyRef = useRef(false);

//   const heroTitleRef = useRef(null);
//   const eyebrowRef = useRef(null);
//   const heroDescRef = useRef(null);
//   const heroDividerRef = useRef(null);
//   const countBadgeRef = useRef(null);
//   const cardRefs = useRef(new Map());

//   // Load GSAP + ScrollTrigger from CDN once on mount. The artifact sandbox
//   // only allows a fixed npm import list (no gsap package available), so we
//   // load the UMD builds directly and read them off window, same approach as
//   // the original vanilla build, just wrapped for React's lifecycle.
//   useEffect(() => {
//     let cancelled = false;

//     function loadScript(src) {
//       return new Promise((resolve, reject) => {
//         if (document.querySelector(`script[src="${src}"]`)) {
//           resolve();
//           return;
//         }
//         const script = document.createElement("script");
//         script.src = src;
//         script.async = true;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//       });
//     }

//     async function init() {
//       try {
//         await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
//         await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
//         if (cancelled) return;

//         gsapRef.current = window.gsap;
//         scrollTriggerRef.current = window.ScrollTrigger;
//         gsapRef.current.registerPlugin(scrollTriggerRef.current);
//         librariesReadyRef.current = true;

//         runHeroAnimation();
//         setTimeout(() => {
//           if (!cancelled) setLoading(false);
//         }, 700);
//       } catch (err) {
//         // If the CDN fails to load (offline, blocked domain), degrade
//         // gracefully: skip animation, mark libraries as failed so cards
//         // render at full opacity via inline style instead of staying
//         // invisible waiting for a GSAP tween that will never run.
//         if (!cancelled) {
//           setLibrariesFailed(true);
//           setLoading(false);
//         }
//       }
//     }

//     init();

//     return () => {
//       cancelled = true;
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.getAll().forEach((st) => st.kill());
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   function runHeroAnimation() {
//     const gsap = gsapRef.current;
//     if (!gsap || !heroTitleRef.current) return;

//     const titleEl = heroTitleRef.current;
//     const text = titleEl.textContent;
//     titleEl.innerHTML = text
//       .split("")
//       .map((ch) => (ch === " " ? " " : `<span class="amc-char">${ch}</span>`))
//       .join("");

//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     tl.to(eyebrowRef.current, { opacity: 1, duration: 0.5 })
//       .to(
//         titleEl.querySelectorAll(".amc-char"),
//         { opacity: 1, y: 0, duration: 0.65, stagger: 0.028 },
//         "-=0.15"
//       )
//       .to(heroDescRef.current, { opacity: 1, duration: 0.6 }, "-=0.35")
//       .fromTo(
//         heroDividerRef.current,
//         { scaleX: 0, opacity: 0 },
//         { scaleX: 1, opacity: 1, duration: 0.5 },
//         "-=0.3"
//       )
//       .fromTo(
//         countBadgeRef.current,
//         { y: 10, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5 },
//         "-=0.25"
//       );
//   }

//   const filtered = useMemo(() => {
//     let list = PRODUCTS.filter((p) => {
//       const matchCat = category === "all" || p.category === category;
//       const q = search.toLowerCase();
//       const matchSearch =
//         p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
//       return matchCat && matchSearch;
//     });

//     if (sort === "price-asc") {
//       list = [...list].sort(
//         (a, b) => parseFloat(a.price.replace(/,/g, "")) - parseFloat(b.price.replace(/,/g, ""))
//       );
//     } else if (sort === "price-desc") {
//       list = [...list].sort(
//         (a, b) => parseFloat(b.price.replace(/,/g, "")) - parseFloat(a.price.replace(/,/g, ""))
//       );
//     } else if (sort === "name-asc") {
//       list = [...list].sort((a, b) => a.name.localeCompare(b.name));
//     }

//     return list;
//   }, [search, category, sort]);

//   // Card entrance animation. Re-runs whenever the filtered list changes
//   // (search / category / sort), mirroring the vanilla version's
//   // animateCardsIn(). Old ScrollTrigger instances are killed first so
//   // re-renders never accumulate triggers pointed at stale DOM nodes.
//   useEffect(() => {
//     if (loading) return;

//     const cards = filtered
//       .map((p) => cardRefs.current.get(p.id))
//       .filter(Boolean);

//     if (cards.length === 0) return;

//     const gsap = gsapRef.current;
//     const ScrollTrigger = scrollTriggerRef.current;

//     if (!gsap || !ScrollTrigger) {
//       // GSAP never loaded (CDN blocked/offline). Show cards immediately
//       // at full opacity rather than leaving them invisible forever.
//       cards.forEach((card) => {
//         card.style.opacity = "1";
//         card.style.transform = "translateY(0)";
//       });
//       return;
//     }

//     ScrollTrigger.getAll().forEach((st) => st.kill());

//     gsap.set(cards, { opacity: 0, y: 44 });

//     const aboveFold = cards.slice(0, 6);
//     const belowFold = cards.slice(6);

//     gsap.to(aboveFold, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out",
//       stagger: { amount: Math.min(aboveFold.length * 0.07, 0.45) },
//     });

//     belowFold.forEach((card) => {
//       gsap.to(card, {
//         opacity: 1,
//         y: 0,
//         duration: 0.7,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 88%",
//           toggleActions: "play none none none",
//         },
//       });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [filtered, loading]);

//   function handleToggleWish(id, targetEl) {
//     setWishlist((prev) => {
//       const next = new Set(prev);
//       if (next.has(id)) next.delete(id);
//       else next.add(id);
//       return next;
//     });

//     const gsap = gsapRef.current;
//     if (gsap && targetEl) {
//       gsap.fromTo(
//         targetEl,
//         { scale: 1 },
//         { scale: 1.25, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
//       );
//     }
//   }

//   function handleOpen(id) {
//     const p = PRODUCTS.find((x) => x.id === id);
//     if (p) console.log("Navigate to product:", p.name);
//   }

//   function handleResetFilters() {
//     setSearch("");
//     setCategory("all");
//   }

//   const setCardRef = (id) => (el) => {
//     if (el) cardRefs.current.set(id, el);
//     else cardRefs.current.delete(id);
//   };

//   return (
//     <div className="amc-root">
//       <style>{STYLES}</style>

//       <div className="amc-page">
//         <div className="amc-breadcrumb-wrap">
//           <nav className="amc-breadcrumb" aria-label="Breadcrumb">
//             <a href="#top">Atelier</a>
//             <span className="amc-sep">/</span>
//             <a href="#top">Collections</a>
//             <span className="amc-sep">/</span>
//             <span className="amc-current">Meridian</span>
//           </nav>
//         </div>

//         <header className="amc-hero">
//           <div className="amc-hero-glow" aria-hidden="true" />
//           <div className="amc-hero-inner">
//             <p className="amc-eyebrow" ref={eyebrowRef}>
//               Collection
//             </p>
//             <h1 className="amc-hero-title" ref={heroTitleRef}>
//               The Meridian Line
//             </h1>
//             <p className="amc-hero-desc" ref={heroDescRef}>
//               Nine instruments, each finished by hand and regulated to the second.
//               Built to be worn daily, and kept for decades.
//             </p>
//             <div className="amc-hero-divider" ref={heroDividerRef} />
//             <div className="amc-count-badge" ref={countBadgeRef}>
//               <span className="amc-dot" />
//               <span>
//                 <span className="amc-num">{filtered.length}</span> pieces in this
//                 collection
//               </span>
//             </div>
//           </div>
//         </header>

//         <div className="amc-toolbar-wrap">
//           <div className="amc-toolbar">
//             <div className="amc-search-box">
//               <SearchIcon />
//               <input
//                 type="text"
//                 placeholder="Search the collection"
//                 aria-label="Search products"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//             <div className="amc-chips" role="group" aria-label="Filter by category">
//               {CATEGORIES.map((cat) => (
//                 <button
//                   key={cat}
//                   type="button"
//                   className={`amc-chip ${category === cat ? "amc-active" : ""}`}
//                   onClick={() => setCategory(cat)}
//                 >
//                   {cat === "all" ? "All" : cat}
//                 </button>
//               ))}
//             </div>
//             <div className="amc-sort-box">
//               <select
//                 aria-label="Sort products"
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//               >
//                 <option value="featured">Featured</option>
//                 <option value="price-asc">Price: Low to High</option>
//                 <option value="price-desc">Price: High to Low</option>
//                 <option value="name-asc">Name: A–Z</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <section className="amc-grid-section">
//           {loading ? (
//             <div className="amc-grid">
//               {Array.from({ length: 6 }, (_, i) => (
//                 <SkeletonCard key={i} />
//               ))}
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="amc-empty-state amc-show">
//               <div className="amc-empty-icon">
//                 <EmptySearchIcon />
//               </div>
//               <h3>Nothing matches yet</h3>
//               <p>
//                 Try a different search term, or clear your filters to see the full
//                 collection.
//               </p>
//               <button type="button" className="amc-empty-reset" onClick={handleResetFilters}>
//                 Clear filters
//               </button>
//             </div>
//           ) : (
//             <div className="amc-grid">
//               {filtered.map((p) => (
//                 <ProductCard
//                   key={p.id}
//                   product={p}
//                   isWished={wishlist.has(p.id)}
//                   onToggleWish={handleToggleWish}
//                   onOpen={handleOpen}
//                   cardRef={setCardRef(p.id)}
//                 />
//               ))}
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }

// const STYLES = `
// .amc-root {
//   --amc-bg:#FAFAFA;
//   --amc-ink:#111111;
//   --amc-ink-soft:#666666;
//   --amc-gold:#D4AF37;
//   --amc-gold-deep:#B8952E;
//   --amc-card:#FFFFFF;
//   --amc-border:#ECECEC;
//   --amc-radius-card:20px;
//   --amc-radius-lg:24px;
//   --amc-ease:cubic-bezier(.22,1,.36,1);

//   background: var(--amc-bg);
//   color: var(--amc-ink);
//   font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
//   -webkit-font-smoothing: antialiased;
//   text-rendering: optimizeLegibility;
//   overflow-x: hidden;
//   min-height: 100vh;
// }
// .amc-root * { box-sizing: border-box; }
// .amc-root img { max-width: 100%; display: block; }
// .amc-root button { font-family: inherit; }
// .amc-root a { color: inherit; text-decoration: none; }

// .amc-root a:focus-visible,
// .amc-root button:focus-visible,
// .amc-root input:focus-visible,
// .amc-root select:focus-visible {
//   outline: 2px solid var(--amc-gold-deep);
//   outline-offset: 3px;
//   border-radius: 8px;
// }

// .amc-page {
//   max-width: 1360px;
//   margin: 0 auto;
//   padding: 0 clamp(20px, 4vw, 56px) 40px;
// }

// .amc-breadcrumb-wrap { position: sticky; top: 0; z-index: 40; padding-top: 18px; }
// .amc-breadcrumb {
//   display: flex; align-items: center; gap: 8px; width: fit-content;
//   padding: 9px 16px; border-radius: 999px;
//   background: rgba(255,255,255,.65);
//   backdrop-filter: blur(14px) saturate(160%);
//   -webkit-backdrop-filter: blur(14px) saturate(160%);
//   border: 1px solid rgba(255,255,255,.6);
//   box-shadow: 0 4px 18px rgba(17,17,17,.05);
//   font-size: 12.5px; color: var(--amc-ink-soft); letter-spacing: .01em;
// }
// .amc-breadcrumb a { color: var(--amc-ink-soft); transition: color .25s var(--amc-ease); }
// .amc-breadcrumb a:hover { color: var(--amc-ink); }
// .amc-breadcrumb .amc-sep { opacity: .4; }
// .amc-breadcrumb .amc-current { color: var(--amc-ink); font-weight: 600; }

// .amc-hero { position: relative; padding: 88px 0 56px; text-align: center; overflow: hidden; }
// .amc-hero-glow {
//   position: absolute; top: -220px; left: 50%; transform: translateX(-50%);
//   width: 900px; height: 520px;
//   background: radial-gradient(closest-side, rgba(212,175,55,.16), rgba(212,175,55,0) 70%);
//   filter: blur(40px); pointer-events: none; z-index: 0;
// }
// .amc-hero-inner { position: relative; z-index: 1; }
// .amc-eyebrow {
//   display: inline-flex; align-items: center; gap: 10px;
//   font-size: 11.5px; font-weight: 700; letter-spacing: .32em; text-transform: uppercase;
//   color: var(--amc-gold-deep); margin-bottom: 22px; opacity: 0;
// }
// .amc-eyebrow::before, .amc-eyebrow::after { content: ''; width: 22px; height: 1px; background: linear-gradient(90deg, transparent, var(--amc-gold)); }
// .amc-eyebrow::after { background: linear-gradient(90deg, var(--amc-gold), transparent); }

// .amc-hero-title {
//   font-family: 'Manrope', sans-serif; font-weight: 800;
//   font-size: clamp(40px, 6.2vw, 76px); line-height: 1.04; letter-spacing: -0.03em;
//   margin: 0 0 22px; color: var(--amc-ink);
// }
// .amc-hero-title .amc-char { display: inline-block; opacity: 0; transform: translateY(28px); }

// .amc-hero-desc {
//   max-width: 560px; margin: 0 auto 34px; font-size: 16.5px; line-height: 1.7;
//   color: var(--amc-ink-soft); font-weight: 500; opacity: 0;
// }

// .amc-hero-divider {
//   width: 64px; height: 2px; margin: 0 auto 28px;
//   background: linear-gradient(90deg, var(--amc-gold-deep), var(--amc-gold));
//   border-radius: 2px; opacity: 0; transform-origin: center;
// }

// .amc-count-badge {
//   display: inline-flex; align-items: center; gap: 9px; padding: 9px 18px;
//   border-radius: 999px; background: var(--amc-ink); color: #fff;
//   font-size: 12.5px; font-weight: 600; letter-spacing: .02em; opacity: 0;
//   box-shadow: 0 10px 28px rgba(17,17,17,.18);
// }
// .amc-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--amc-gold); box-shadow: 0 0 0 3px rgba(212,175,55,.25); display: inline-block; }
// .amc-num { color: var(--amc-gold); font-weight: 800; }

// .amc-toolbar-wrap { position: sticky; top: 0; z-index: 30; padding: 14px 0 16px; margin-top: 18px; }
// .amc-toolbar {
//   display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
//   padding: 12px 14px; border-radius: var(--amc-radius-lg);
//   background: rgba(255,255,255,.72);
//   backdrop-filter: blur(18px) saturate(160%);
//   -webkit-backdrop-filter: blur(18px) saturate(160%);
//   border: 1px solid rgba(255,255,255,.7);
//   box-shadow: 0 8px 30px rgba(17,17,17,.06);
// }

// .amc-search-box { position: relative; flex: 1 1 220px; min-width: 180px; }
// .amc-search-box svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--amc-ink-soft); pointer-events: none; }
// .amc-search-box input {
//   width: 100%; padding: 11px 14px 11px 40px; border-radius: 999px;
//   border: 1px solid var(--amc-border); background: #fff; font-size: 13.5px; color: var(--amc-ink);
//   transition: border-color .3s var(--amc-ease), box-shadow .3s var(--amc-ease);
// }
// .amc-search-box input::placeholder { color: #9c9c9c; }
// .amc-search-box input:hover { border-color: #d8d8d8; }
// .amc-search-box input:focus { border-color: var(--amc-gold); box-shadow: 0 0 0 4px rgba(212,175,55,.14); outline: none; }

// .amc-chips { display: flex; gap: 8px; flex-wrap: wrap; }
// .amc-chip {
//   padding: 9px 16px; border-radius: 999px; border: 1px solid var(--amc-border); background: #fff;
//   font-size: 12.5px; font-weight: 600; color: var(--amc-ink-soft); cursor: pointer; white-space: nowrap;
//   transition: all .3s var(--amc-ease);
// }
// .amc-chip:hover { border-color: var(--amc-gold); color: var(--amc-ink); transform: translateY(-1px); }
// .amc-chip.amc-active { background: var(--amc-ink); border-color: var(--amc-ink); color: #fff; }
// .amc-chip.amc-active:hover { background: #000; }

// .amc-sort-box { position: relative; margin-left: auto; }
// .amc-sort-box select {
//   appearance: none; -webkit-appearance: none; padding: 11px 38px 11px 16px; border-radius: 999px;
//   border: 1px solid var(--amc-border); background: #fff; font-size: 12.5px; font-weight: 600;
//   color: var(--amc-ink); cursor: pointer; transition: border-color .3s var(--amc-ease);
// }
// .amc-sort-box select:hover { border-color: #d8d8d8; }
// .amc-sort-box select:focus { border-color: var(--amc-gold); outline: none; }
// .amc-sort-box::after {
//   content: ''; position: absolute; right: 15px; top: 50%; width: 7px; height: 7px;
//   border-right: 1.5px solid var(--amc-ink-soft); border-bottom: 1.5px solid var(--amc-ink-soft);
//   transform: translateY(-65%) rotate(45deg); pointer-events: none;
// }

// .amc-grid-section { padding: 44px 0 60px; }
// .amc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
// @media (max-width: 980px) { .amc-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
// @media (max-width: 620px) { .amc-grid { grid-template-columns: 1fr; gap: 22px; } }

// .amc-card {
//   position: relative; background: var(--amc-card); border: 1px solid var(--amc-border);
//   border-radius: var(--amc-radius-card); overflow: hidden; cursor: pointer; display: block;
//   transition: transform .4s var(--amc-ease), box-shadow .4s var(--amc-ease), border-color .4s var(--amc-ease);
//   will-change: transform;
// }
// /* Cards start visible by default (no CSS opacity:0). The entrance-animation
//    effect explicitly sets opacity:0 via gsap.set() right before animating in,
//    only once GSAP has confirmed it loaded — so a slow/blocked CDN never
//    leaves the grid invisible with no code left to un-hide it. */
// .amc-card:hover, .amc-card:focus-visible {
//   transform: translateY(-8px);
//   box-shadow: 0 26px 54px -18px rgba(17,17,17,.22), 0 0 0 1px rgba(212,175,55,.16), 0 0 46px -12px rgba(212,175,55,.28);
//   border-color: #f0e4bf;
// }
// .amc-card:active { transform: translateY(-4px) scale(.995); }

// .amc-card-media { position: relative; width: 100%; aspect-ratio: 4/5; overflow: hidden; background: #f1f1ef; }
// .amc-card-media img { width: 100%; height: 100%; object-fit: cover; transform: scale(1); transition: transform .7s var(--amc-ease); }
// .amc-card:hover .amc-card-media img { transform: scale(1.08); }

// .amc-media-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.32) 100%); pointer-events: none; }

// .amc-shine {
//   position: absolute; top: 0; left: -60%; width: 45%; height: 100%;
//   background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,.55) 50%, transparent 100%);
//   transform: skewX(-18deg); opacity: 0; pointer-events: none; transition: opacity .2s;
// }
// .amc-card:hover .amc-shine { opacity: 1; animation: amcShineSweep 1.1s var(--amc-ease); }
// @keyframes amcShineSweep { 0% { left: -60%; } 100% { left: 130%; } }

// .amc-badge-float {
//   position: absolute; top: 14px; left: 14px; padding: 6px 12px; border-radius: 999px;
//   background: rgba(255,255,255,.85); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
//   font-size: 10.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
//   color: var(--amc-ink); box-shadow: 0 4px 14px rgba(17,17,17,.1); z-index: 2;
// }
// .amc-badge-gold { background: linear-gradient(135deg, var(--amc-gold), var(--amc-gold-deep)); color: #1a1400; }

// .amc-wishlist-btn {
//   position: absolute; top: 12px; right: 12px; width: 38px; height: 38px; border-radius: 50%; border: none;
//   background: rgba(255,255,255,.88); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
//   display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2;
//   box-shadow: 0 4px 14px rgba(17,17,17,.1); transition: transform .3s var(--amc-ease), background .3s var(--amc-ease);
// }
// .amc-wishlist-btn:hover { transform: scale(1.1); }
// .amc-wishlist-btn svg { color: var(--amc-ink); transition: all .25s var(--amc-ease); }
// .amc-wishlist-btn.amc-active svg { color: var(--amc-gold-deep); }
// .amc-wishlist-btn:active { transform: scale(.92); }

// .amc-card-body { padding: 22px 22px 24px; }
// .amc-card-toprow { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
// .amc-category-tag { font-size: 10.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--amc-gold-deep); }
// .amc-rating { display: flex; align-items: center; gap: 3px; font-size: 11.5px; color: var(--amc-ink-soft); }
// .amc-rating svg { color: var(--amc-gold); }

// .amc-product-name { font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 19px; letter-spacing: -0.015em; color: var(--amc-ink); margin: 0 0 6px; }
// .amc-product-desc { font-size: 13.5px; line-height: 1.55; color: var(--amc-ink-soft); margin: 0 0 18px; font-weight: 500; }

// .amc-card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
// .amc-price { font-family: 'Manrope', sans-serif; font-size: 18px; font-weight: 800; color: var(--amc-ink); letter-spacing: -.01em; }
// .amc-price sup { font-size: 11px; font-weight: 700; color: var(--amc-ink-soft); margin-left: 2px; }

// .amc-piece-btn {
//   position: relative; display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px;
//   border-radius: 999px; border: none; background: var(--amc-ink); color: #fff;
//   font-size: 12.5px; font-weight: 700; letter-spacing: .02em; cursor: pointer; overflow: hidden;
//   transition: transform .35s var(--amc-ease), box-shadow .35s var(--amc-ease), color .35s var(--amc-ease), background .35s var(--amc-ease);
//   z-index: 2;
// }
// .amc-piece-btn svg { transition: transform .35s var(--amc-ease); }
// .amc-piece-btn:hover { background: var(--amc-gold); color: #1a1400; transform: translateY(-3px); box-shadow: 0 12px 24px -6px rgba(212,175,55,.55); }
// .amc-piece-btn:hover svg { transform: translateX(3px); }
// .amc-piece-btn:active { transform: translateY(-1px) scale(.98); }

// .amc-skeleton-card { border-radius: var(--amc-radius-card); overflow: hidden; background: var(--amc-card); border: 1px solid var(--amc-border); }
// .amc-skel-media { width: 100%; aspect-ratio: 4/5; background: linear-gradient(100deg, #f0f0ee 30%, #f7f7f5 50%, #f0f0ee 70%); background-size: 200% 100%; animation: amcShimmer 1.6s infinite; }
// .amc-skel-line { height: 12px; border-radius: 6px; background: linear-gradient(100deg, #eee 30%, #f6f6f4 50%, #eee 70%); background-size: 200% 100%; animation: amcShimmer 1.6s infinite; margin: 14px 22px; }
// .amc-w60 { width: 40%; }
// .amc-w90 { width: 70%; }
// .amc-w40 { width: 35%; margin-top: 20px; }
// @keyframes amcShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

// .amc-empty-state { display: none; flex-direction: column; align-items: center; text-align: center; padding: 100px 20px; }
// .amc-empty-state.amc-show { display: flex; }
// .amc-empty-icon {
//   width: 76px; height: 76px; border-radius: 50%; background: #fff; border: 1px solid var(--amc-border);
//   display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 12px 30px rgba(17,17,17,.06);
// }
// .amc-empty-icon svg { color: var(--amc-gold-deep); }
// .amc-empty-state h3 { font-family: 'Manrope', sans-serif; font-size: 21px; font-weight: 800; margin: 0 0 8px; }
// .amc-empty-state p { font-size: 14px; color: var(--amc-ink-soft); max-width: 340px; line-height: 1.6; margin: 0 0 22px; }
// .amc-empty-reset {
//   padding: 11px 22px; border-radius: 999px; background: var(--amc-ink); color: #fff; border: none;
//   font-size: 12.5px; font-weight: 700; cursor: pointer; transition: transform .3s var(--amc-ease), background .3s var(--amc-ease);
// }
// .amc-empty-reset:hover { background: var(--amc-gold-deep); transform: translateY(-2px); }

// @media (prefers-reduced-motion: reduce) {
//   .amc-root * { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
// }
// `;

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategoryProducts } from "../api/category";

const CATEGORIES = ["all", "Timepieces", "Leather", "Objects"];

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop";

function resolveImage(p) {
  return (
    p.img ||
    p.image ||
    p.imageUrl ||
    p.image_url ||
    p.thumbnail ||
    p.photo ||
    (Array.isArray(p.images) && p.images[0]) ||
    FALLBACK_IMG
  );
}

function StarIcon({ filled }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" width="11" height="11">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function EmptySearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M8 11h6" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  );
}

function ProductCard({ product, isWished, onToggleWish, onOpen, cardRef }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(product.id);
    }
  };

  return (
    <article
      ref={cardRef}
      className="amc-card"
      tabIndex={0}
      role="link"
      aria-label={`View ${product.name}`}
      onClick={() => onOpen(product.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="amc-card-media">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMG;
          }}
        />
        <div className="amc-media-overlay" />
        <div className="amc-shine" />
        {product.badge && (
          <span className={`amc-badge-float ${product.badge === "Limited" ? "amc-badge-gold" : ""}`}>
            {product.badge}
          </span>
        )}
        <button
          type="button"
          className={`amc-wishlist-btn ${isWished ? "amc-active" : ""}`}
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWish(product.id, e.currentTarget);
          }}
        >
          <HeartIcon filled={isWished} />
        </button>
      </div>
      <div className="amc-card-body">
        <div className="amc-card-toprow">
          <span className="amc-category-tag">{product.category}</span>
          {/* <span className="amc-rating" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} filled={i < product.rating} />
            ))}
          </span> */}
        </div>
        <h3 className="amc-product-name">{product.name}</h3>
        <p className="amc-product-desc">{product.desc}</p>
        <div className="amc-card-bottom">
          <span className="amc-price">
            {product.price}
            {/* <sup>USD</sup> */}
          </span>
          <button
            type="button"
            className="amc-piece-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(product.id);
            }}
          >
            View Piece
            <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div className="amc-skeleton-card">
      <div className="amc-skel-media" />
      <div className="amc-skel-line amc-w60" />
      <div className="amc-skel-line amc-w90" />
      <div className="amc-skel-line amc-w40" />
    </div>
  );
}

export default function CollectionPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState(() => new Set());

  const gsapRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const librariesReadyRef = useRef(false);

  const heroTitleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroDividerRef = useRef(null);
  const countBadgeRef = useRef(null);
  const cardRefs = useRef(new Map());

  const displayName = name ? name.replace(/-/g, " ") : "Meridian";

  // --- Real API fetch: products for this category/collection ---
  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCategoryProducts(name);
        const list = Array.isArray(data) ? data : [];
        console.log("API response sample:", list[0]); // check exact image field name yahan se
        const normalized = list.map((p) => ({ ...p, img: resolveImage(p) }));
        if (!cancelled) setRawProducts(normalized);
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Failed to load products");
          setRawProducts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, [name]);

  // --- Load GSAP + ScrollTrigger from CDN once on mount (background, doesn't block loading) ---
  useEffect(() => {
    let cancelled = false;

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function init() {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
        if (cancelled) return;

        gsapRef.current = window.gsap;
        scrollTriggerRef.current = window.ScrollTrigger;
        gsapRef.current.registerPlugin(scrollTriggerRef.current);
        librariesReadyRef.current = true;

        runHeroAnimation();
      } catch (err) {
        // CDN blocked/offline — silently skip animation, cards still render normally
      }
    }

    init();

    return () => {
      cancelled = true;
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.getAll().forEach((st) => st.kill());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function runHeroAnimation() {
    const gsap = gsapRef.current;
    if (!gsap || !heroTitleRef.current) return;

    const titleEl = heroTitleRef.current;
    const text = titleEl.textContent;
    titleEl.innerHTML = text
      .split("")
      .map((ch) => (ch === " " ? " " : `<span class="amc-char">${ch}</span>`))
      .join("");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(eyebrowRef.current, { opacity: 1, duration: 0.5 })
      .to(
        titleEl.querySelectorAll(".amc-char"),
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.028 },
        "-=0.15"
      )
      .to(heroDescRef.current, { opacity: 1, duration: 0.6 }, "-=0.35")
      .fromTo(
        heroDividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        countBadgeRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
  }

  const filtered = useMemo(() => {
    let list = rawProducts.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const q = search.toLowerCase();
      const matchSearch =
        p.name?.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (sort === "price-asc") {
      list = [...list].sort(
        (a, b) => parseFloat(String(a.price).replace(/,/g, "")) - parseFloat(String(b.price).replace(/,/g, ""))
      );
    } else if (sort === "price-desc") {
      list = [...list].sort(
        (a, b) => parseFloat(String(b.price).replace(/,/g, "")) - parseFloat(String(a.price).replace(/,/g, ""))
      );
    } else if (sort === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [rawProducts, search, category, sort]);

  useEffect(() => {
    if (loading) return;

    const cards = filtered
      .map((p) => cardRefs.current.get(p.id))
      .filter(Boolean);

    if (cards.length === 0) return;

    const gsap = gsapRef.current;
    const ScrollTrigger = scrollTriggerRef.current;

    if (!gsap || !ScrollTrigger) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      return;
    }

    ScrollTrigger.getAll().forEach((st) => st.kill());

    gsap.set(cards, { opacity: 0, y: 44 });

    const aboveFold = cards.slice(0, 6);
    const belowFold = cards.slice(6);

    gsap.to(aboveFold, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: { amount: Math.min(aboveFold.length * 0.07, 0.45) },
    });

    belowFold.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered, loading]);

  function handleToggleWish(id, targetEl) {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

    const gsap = gsapRef.current;
    if (gsap && targetEl) {
      gsap.fromTo(
        targetEl,
        { scale: 1 },
        { scale: 1.25, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
      );
    }
  }

  function handleOpen(id) {
    const p = rawProducts.find((x) => x.id === id);
    if (p) navigate(`/product/${name}/${id}`);
  }

  function handleResetFilters() {
    setSearch("");
    setCategory("all");
  }

  function handleRetry() {
    setError(null);
    setLoading(true);
    fetchCategoryProducts(name)
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        setRawProducts(list.map((p) => ({ ...p, img: resolveImage(p) })));
      })
      .catch((err) => setError(err?.message || "Failed to load products"))
      .finally(() => setLoading(false));
  }

  const setCardRef = (id) => (el) => {
    if (el) cardRefs.current.set(id, el);
    else cardRefs.current.delete(id);
  };

  return (
    <div className="amc-root">
      <style>{STYLES}</style>

      <div className="amc-page">
        <div className="amc-breadcrumb-wrap">
          <nav className="amc-breadcrumb" aria-label="Breadcrumb">
            <a href="#top">Atelier</a>
            <span className="amc-sep">/</span>
            <a href="#top">Collections</a>
            <span className="amc-sep">/</span>
            <span className="amc-current">{displayName}</span>
          </nav>
        </div>

        <header className="amc-hero">
          <div className="amc-hero-glow" aria-hidden="true" />
          <div className="amc-hero-inner">
            <p className="amc-eyebrow" ref={eyebrowRef}>
              Collection
            </p>
            <h1 className="amc-hero-title" ref={heroTitleRef}>
              {displayName}
            </h1>
            <p className="amc-hero-desc" ref={heroDescRef}>
              Each piece finished by hand and regulated to the second. Built to be
              worn daily, and kept for decades.
            </p>
            <div className="amc-hero-divider" ref={heroDividerRef} />
            <div className="amc-count-badge" ref={countBadgeRef}>
              <span className="amc-dot" />
              <span>
                <span className="amc-num">{filtered.length}</span> pieces in this
                collection
              </span>
            </div>
          </div>
        </header>

        <div className="amc-toolbar-wrap">
          <div className="amc-toolbar">
            <div className="amc-search-box">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search the collection"
                aria-label="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="amc-chips" role="group" aria-label="Filter by category">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`amc-chip ${category === cat ? "amc-active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
            <div className="amc-sort-box">
              <select
                aria-label="Sort products"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <section className="amc-grid-section">
          {loading ? (
            <div className="amc-grid">
              {Array.from({ length: 6 }, (_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="amc-empty-state amc-show">
              <div className="amc-empty-icon">
                <ErrorIcon />
              </div>
              <h3>Couldn't load this collection</h3>
              <p>{error}</p>
              <button type="button" className="amc-empty-reset" onClick={handleRetry}>
                Retry
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="amc-empty-state amc-show">
              <div className="amc-empty-icon">
                <EmptySearchIcon />
              </div>
              <h3>Nothing matches yet</h3>
              <p>
                Try a different search term, or clear your filters to see the full
                collection.
              </p>
              <button type="button" className="amc-empty-reset" onClick={handleResetFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="amc-grid">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isWished={wishlist.has(p.id)}
                  onToggleWish={handleToggleWish}
                  onOpen={handleOpen}
                  cardRef={setCardRef(p.id)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const STYLES = `
.amc-root {
  --amc-bg:#FAFAFA;
  --amc-ink:#111111;
  --amc-ink-soft:#666666;
  --amc-gold:#D4AF37;
  --amc-gold-deep:#B8952E;
  --amc-card:#FFFFFF;
  --amc-border:#ECECEC;
  --amc-radius-card:20px;
  --amc-radius-lg:24px;
  --amc-ease:cubic-bezier(.22,1,.36,1);

  background: var(--amc-bg);
  color: var(--amc-ink);
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  min-height: 100vh;
}
.amc-root * { box-sizing: border-box; }
.amc-root img { max-width: 100%; display: block; }
.amc-root button { font-family: inherit; }
.amc-root a { color: inherit; text-decoration: none; }

.amc-root a:focus-visible,
.amc-root button:focus-visible,
.amc-root input:focus-visible,
.amc-root select:focus-visible {
  outline: 2px solid var(--amc-gold-deep);
  outline-offset: 3px;
  border-radius: 8px;
}

.amc-page {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 56px) 40px;
}

.amc-breadcrumb-wrap { position: sticky; top: 0; z-index: 40; padding-top: 18px; }
.amc-breadcrumb {
  display: flex; align-items: center; gap: 8px; width: fit-content;
  padding: 9px 16px; border-radius: 999px;
  background: rgba(255,255,255,.65);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(255,255,255,.6);
  box-shadow: 0 4px 18px rgba(17,17,17,.05);
  font-size: 12.5px; color: var(--amc-ink-soft); letter-spacing: .01em;
}
.amc-breadcrumb a { color: var(--amc-ink-soft); transition: color .25s var(--amc-ease); }
.amc-breadcrumb a:hover { color: var(--amc-ink); }
.amc-breadcrumb .amc-sep { opacity: .4; }
.amc-breadcrumb .amc-current { color: var(--amc-ink); font-weight: 600; text-transform: capitalize; }

.amc-hero { position: relative; padding: 88px 0 56px; text-align: center; overflow: hidden; }
.amc-hero-glow {
  position: absolute; top: -220px; left: 50%; transform: translateX(-50%);
  width: 900px; height: 520px;
  background: radial-gradient(closest-side, rgba(212,175,55,.16), rgba(212,175,55,0) 70%);
  filter: blur(40px); pointer-events: none; z-index: 0;
}
.amc-hero-inner { position: relative; z-index: 1; }
.amc-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 11.5px; font-weight: 700; letter-spacing: .32em; text-transform: uppercase;
  color: var(--amc-gold-deep); margin-bottom: 22px; opacity: 0;
}
.amc-eyebrow::before, .amc-eyebrow::after { content: ''; width: 22px; height: 1px; background: linear-gradient(90deg, transparent, var(--amc-gold)); }
.amc-eyebrow::after { background: linear-gradient(90deg, var(--amc-gold), transparent); }

.amc-hero-title {
  font-family: inherit; font-weight: 800;
  font-size: clamp(40px, 6.2vw, 76px); line-height: 1.04; letter-spacing: -0.03em;
  margin: 0 0 22px; color: var(--amc-ink); text-transform: capitalize;
}
.amc-hero-title .amc-char { display: inline-block; opacity: 0; transform: translateY(28px); }

.amc-hero-desc {
  max-width: 560px; margin: 0 auto 34px; font-size: 16.5px; line-height: 1.7;
  color: var(--amc-ink-soft); font-weight: 500; opacity: 0;
}

.amc-hero-divider {
  width: 64px; height: 2px; margin: 0 auto 28px;
  background: linear-gradient(90deg, var(--amc-gold-deep), var(--amc-gold));
  border-radius: 2px; opacity: 0; transform-origin: center;
}

.amc-count-badge {
  display: inline-flex; align-items: center; gap: 9px; padding: 9px 18px;
  border-radius: 999px; background: var(--amc-ink); color: #fff;
  font-size: 12.5px; font-weight: 600; letter-spacing: .02em; opacity: 0;
  box-shadow: 0 10px 28px rgba(17,17,17,.18);
}
.amc-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--amc-gold); box-shadow: 0 0 0 3px rgba(212,175,55,.25); display: inline-block; }
.amc-num { color: var(--amc-gold); font-weight: 800; }

.amc-toolbar-wrap { position: sticky; top: 0; z-index: 30; padding: 14px 0 16px; margin-top: 18px; }
.amc-toolbar {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  padding: 12px 14px; border-radius: var(--amc-radius-lg);
  background: rgba(255,255,255,.72);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255,255,255,.7);
  box-shadow: 0 8px 30px rgba(17,17,17,.06);
}

.amc-search-box { position: relative; flex: 1 1 220px; min-width: 180px; }
.amc-search-box svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--amc-ink-soft); pointer-events: none; }
.amc-search-box input {
  width: 100%; padding: 11px 14px 11px 40px; border-radius: 999px;
  border: 1px solid var(--amc-border); background: #fff; font-size: 13.5px; color: var(--amc-ink);
  transition: border-color .3s var(--amc-ease), box-shadow .3s var(--amc-ease);
}
.amc-search-box input::placeholder { color: #9c9c9c; }
.amc-search-box input:hover { border-color: #d8d8d8; }
.amc-search-box input:focus { border-color: var(--amc-gold); box-shadow: 0 0 0 4px rgba(212,175,55,.14); outline: none; }

.amc-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.amc-chip {
  padding: 9px 16px; border-radius: 999px; border: 1px solid var(--amc-border); background: #fff;
  font-size: 12.5px; font-weight: 600; color: var(--amc-ink-soft); cursor: pointer; white-space: nowrap;
  transition: all .3s var(--amc-ease);
}
.amc-chip:hover { border-color: var(--amc-gold); color: var(--amc-ink); transform: translateY(-1px); }
.amc-chip.amc-active { background: var(--amc-ink); border-color: var(--amc-ink); color: #fff; }
.amc-chip.amc-active:hover { background: #000; }

.amc-sort-box { position: relative; margin-left: auto; }
.amc-sort-box select {
  appearance: none; -webkit-appearance: none; padding: 11px 38px 11px 16px; border-radius: 999px;
  border: 1px solid var(--amc-border); background: #fff; font-size: 12.5px; font-weight: 600;
  color: var(--amc-ink); cursor: pointer; transition: border-color .3s var(--amc-ease);
}
.amc-sort-box select:hover { border-color: #d8d8d8; }
.amc-sort-box select:focus { border-color: var(--amc-gold); outline: none; }
.amc-sort-box::after {
  content: ''; position: absolute; right: 15px; top: 50%; width: 7px; height: 7px;
  border-right: 1.5px solid var(--amc-ink-soft); border-bottom: 1.5px solid var(--amc-ink-soft);
  transform: translateY(-65%) rotate(45deg); pointer-events: none;
}

.amc-grid-section { padding: 44px 0 60px; }
.amc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
@media (max-width: 980px) { .amc-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
@media (max-width: 620px) { .amc-grid { grid-template-columns: 1fr; gap: 22px; } }

.amc-card {
  position: relative; background: var(--amc-card); border: 1px solid var(--amc-border);
  border-radius: var(--amc-radius-card); overflow: hidden; cursor: pointer; display: block;
  transition: transform .4s var(--amc-ease), box-shadow .4s var(--amc-ease), border-color .4s var(--amc-ease);
  will-change: transform;
}
.amc-card:hover, .amc-card:focus-visible {
  transform: translateY(-8px);
  box-shadow: 0 26px 54px -18px rgba(17,17,17,.22), 0 0 0 1px rgba(212,175,55,.16), 0 0 46px -12px rgba(212,175,55,.28);
  border-color: #f0e4bf;
}
.amc-card:active { transform: translateY(-4px) scale(.995); }

.amc-card-media { position: relative; width: 100%; aspect-ratio: 4/5; overflow: hidden; background: #f1f1ef; }
.amc-card-media img { width: 100%; height: 100%; object-fit: cover; transform: scale(1); transition: transform .7s var(--amc-ease); }
.amc-card:hover .amc-card-media img { transform: scale(1.08); }

.amc-media-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.32) 100%); pointer-events: none; }

.amc-shine {
  position: absolute; top: 0; left: -60%; width: 45%; height: 100%;
  background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,.55) 50%, transparent 100%);
  transform: skewX(-18deg); opacity: 0; pointer-events: none; transition: opacity .2s;
}
.amc-card:hover .amc-shine { opacity: 1; animation: amcShineSweep 1.1s var(--amc-ease); }
@keyframes amcShineSweep { 0% { left: -60%; } 100% { left: 130%; } }

.amc-badge-float {
  position: absolute; top: 14px; left: 14px; padding: 6px 12px; border-radius: 999px;
  background: rgba(255,255,255,.85); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  font-size: 10.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--amc-ink); box-shadow: 0 4px 14px rgba(17,17,17,.1); z-index: 2;
}
.amc-badge-gold { background: linear-gradient(135deg, var(--amc-gold), var(--amc-gold-deep)); color: #1a1400; }

.amc-wishlist-btn {
  position: absolute; top: 12px; right: 12px; width: 38px; height: 38px; border-radius: 50%; border: none;
  background: rgba(255,255,255,.88); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2;
  box-shadow: 0 4px 14px rgba(17,17,17,.1); transition: transform .3s var(--amc-ease), background .3s var(--amc-ease);
}
.amc-wishlist-btn:hover { transform: scale(1.1); }
.amc-wishlist-btn svg { color: var(--amc-ink); transition: all .25s var(--amc-ease); }
.amc-wishlist-btn.amc-active svg { color: var(--amc-gold-deep); }
.amc-wishlist-btn:active { transform: scale(.92); }

.amc-card-body { padding: 22px 22px 24px; }
.amc-card-toprow { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.amc-category-tag { font-size: 10.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--amc-gold-deep); }
.amc-rating { display: flex; align-items: center; gap: 3px; font-size: 11.5px; color: var(--amc-ink-soft); }
.amc-rating svg { color: var(--amc-gold); }

.amc-product-name { font-family: inherit; font-weight: 800; font-size: 19px; letter-spacing: -0.015em; color: var(--amc-ink); margin: 0 0 6px; }
.amc-product-desc { font-size: 13.5px; line-height: 1.55; color: var(--amc-ink-soft); margin: 0 0 18px; font-weight: 500; }

.amc-card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.amc-price { font-family: inherit; font-size: 18px; font-weight: 800; color: var(--amc-ink); letter-spacing: -.01em; }
.amc-price sup { font-size: 11px; font-weight: 700; color: var(--amc-ink-soft); margin-left: 2px; }

.amc-piece-btn {
  position: relative; display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px;
  border-radius: 999px; border: none; background: var(--amc-ink); color: #fff;
  font-size: 12.5px; font-weight: 700; letter-spacing: .02em; cursor: pointer; overflow: hidden;
  transition: transform .35s var(--amc-ease), box-shadow .35s var(--amc-ease), color .35s var(--amc-ease), background .35s var(--amc-ease);
  z-index: 2;
}
.amc-piece-btn svg { transition: transform .35s var(--amc-ease); }
.amc-piece-btn:hover { background: var(--amc-gold); color: #1a1400; transform: translateY(-3px); box-shadow: 0 12px 24px -6px rgba(212,175,55,.55); }
.amc-piece-btn:hover svg { transform: translateX(3px); }
.amc-piece-btn:active { transform: translateY(-1px) scale(.98); }

.amc-skeleton-card { border-radius: var(--amc-radius-card); overflow: hidden; background: var(--amc-card); border: 1px solid var(--amc-border); }
.amc-skel-media { width: 100%; aspect-ratio: 4/5; background: linear-gradient(100deg, #f0f0ee 30%, #f7f7f5 50%, #f0f0ee 70%); background-size: 200% 100%; animation: amcShimmer 1.6s infinite; }
.amc-skel-line { height: 12px; border-radius: 6px; background: linear-gradient(100deg, #eee 30%, #f6f6f4 50%, #eee 70%); background-size: 200% 100%; animation: amcShimmer 1.6s infinite; margin: 14px 22px; }
.amc-w60 { width: 40%; }
.amc-w90 { width: 70%; }
.amc-w40 { width: 35%; margin-top: 20px; }
@keyframes amcShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

.amc-empty-state { display: none; flex-direction: column; align-items: center; text-align: center; padding: 100px 20px; }
.amc-empty-state.amc-show { display: flex; }
.amc-empty-icon {
  width: 76px; height: 76px; border-radius: 50%; background: #fff; border: 1px solid var(--amc-border);
  display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 12px 30px rgba(17,17,17,.06);
}
.amc-empty-icon svg { color: var(--amc-gold-deep); }
.amc-empty-state h3 { font-family: inherit; font-size: 21px; font-weight: 800; margin: 0 0 8px; }
.amc-empty-state p { font-size: 14px; color: var(--amc-ink-soft); max-width: 340px; line-height: 1.6; margin: 0 0 22px; }
.amc-empty-reset {
  padding: 11px 22px; border-radius: 999px; background: var(--amc-ink); color: #fff; border: none;
  font-size: 12.5px; font-weight: 700; cursor: pointer; transition: transform .3s var(--amc-ease), background .3s var(--amc-ease);
}
.amc-empty-reset:hover { background: var(--amc-gold-deep); transform: translateY(-2px); }

@media (prefers-reduced-motion: reduce) {
  .amc-root * { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
}
`;