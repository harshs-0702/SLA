



// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import { fetchProducts } from "../api/products";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/cartSlice";
// import { ShoppingCartOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
// import "../styles/ProductDetails.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [product, setProduct] = useState(null);
//   const [imgLoaded, setImgLoaded] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isZooming, setIsZooming] = useState(false);
//   const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
//   const imageWrapRef = useRef(null);

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   useEffect(() => {
//     setProduct(null);
//     setImgLoaded(false);
//     fetchProducts().then((res) => {
//       const found = res.find((item) => item.id === Number(id));
//       setProduct(found);
//     });
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="pd-loading">
//         <span className="pd-loading-text">Loading</span>
//       </div>
//     );
//   }

//   const cartItem = cartItems.find((item) => item.id === product.id);
//   const qty = cartItem?.qty || 0;

//   const handleMouseMove = (e) => {
//     const wrap = imageWrapRef.current;
//     if (!wrap) return;
//     const rect = wrap.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setZoomPos({ x, y });
//   };

//   return (
//     <div className="pd-page">
//       {/* Breadcrumb */}
//       <nav className="pd-breadcrumb">
//         <span onClick={() => navigate("/")}>Home</span>
//         <span className="pd-crumb-sep">/</span>
//         <span onClick={() => navigate(-1)}>{product.type || "Collection"}</span>
//         <span className="pd-crumb-sep">/</span>
//         <span className="pd-crumb-current">No. {String(product.id).padStart(3, "0")}</span>
//       </nav>

//       <div className="pd-layout">
//         {/* IMAGE SECTION */}
//         <div className="pd-image-panel">
//           <span className="pd-catalog-tag">No. {String(product.id).padStart(3, "0")}</span>

//           <div
//             className="pd-image-wrap"
//             ref={imageWrapRef}
//             onMouseEnter={() => setIsZooming(true)}
//             onMouseLeave={() => setIsZooming(false)}
//             onMouseMove={handleMouseMove}
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               onLoad={() => setImgLoaded(true)}
//               className="pd-image"
//               style={{
//                 opacity: imgLoaded ? 1 : 0,
//                 transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
//                 transform: isZooming ? "scale(2)" : "scale(1)",
//               }}
//             />

//             <button
//               className={`pd-wishlist-btn ${isWishlisted ? "active" : ""}`}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsWishlisted(!isWishlisted);
//               }}
//               aria-label="Add to wishlist"
//             >
//               {isWishlisted ? <HeartFilled /> : <HeartOutlined />}
//             </button>
//           </div>

//           <span className="pd-zoom-hint">Move over image to zoom</span>
//         </div>

//         {/* CONTENT SECTION — same as before */}
//         <div className="pd-content">
//           <span className="pd-eyebrow">Premium Marble Collection</span>

//           <h1 className="pd-title">{product.name}</h1>

//           <h2 className="pd-price">{product.price}</h2>

//           <div className="pd-divider" />

//           <p className="pd-desc">
//             {product.desc ||
//               "Crafted with premium quality marble and detailed artistry. Perfect for temples, homes, offices, and gifting purposes."}
//           </p>

//           <div className="pd-specs">
//             <div className="pd-spec-row">
//               <span className="pd-spec-label">Type</span>
//               <span className="pd-spec-value">{product.type || "Marble Statue"}</span>
//             </div>
//             <div className="pd-spec-row">
//               <span className="pd-spec-label">Material</span>
//               <span className="pd-spec-value">{product.material || "Premium Marble"}</span>
//             </div>
//             <div className="pd-spec-row">
//               <span className="pd-spec-label">Size</span>
//               <span className="pd-spec-value">{product.size || "Custom Available"}</span>
//             </div>
//             <div className="pd-spec-row">
//               <span className="pd-spec-label">Color</span>
//               <span className="pd-spec-value">{product.color || "White Marble"}</span>
//             </div>
//           </div>

//           <div className="pd-qty-block">
//             <span className="pd-qty-label">Quantity</span>
//             <div className="pd-qty">
//               <button
//                 className="pd-qty-btn"
//                 onClick={() => dispatch(removeFromCart(product.id))}
//                 aria-label="Decrease quantity"
//               >
//                 −
//               </button>
//               <span key={qty} className="pd-qty-value">{qty}</span>
//               <button
//                 className="pd-qty-btn pd-qty-btn-add"
//                 onClick={() => dispatch(addToCart(product))}
//                 aria-label="Increase quantity"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="pd-actions">
//             <button
//               className="pd-btn pd-btn-primary"
//               onClick={() => dispatch(addToCart(product))}
//             >
//               <ShoppingCartOutlined /> Add To Cart
//             </button>

//             <button
//               className="pd-btn pd-btn-secondary"
//               onClick={() => navigate("/cart")}
//             >
//               View Cart
//             </button>
//           </div>

//           <div className="pd-note">
//             <span className="pd-note-label">Craftsmanship</span>
//             <p>
//               Every piece is hand-carved by skilled artisans and may show
//               subtle natural variations in stone grain — a mark of its
//               authenticity, not a flaw.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setProduct(null);
    setImgLoaded(false);

    fetchProducts().then((res) => {
      const found = res.find((item) => item.id === Number(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="pd-loading">
        <span className="pd-loading-text">Loading</span>
      </div>
    );
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const qty = cartItem?.qty || 0;

  return (
    <div className="pd-page">
      {/* Breadcrumb */}
      <nav className="pd-breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>
        <span className="pd-crumb-sep">/</span>
        <span onClick={() => navigate(-1)}>
          {product.type || "Products"}
        </span>
        {/* <span className="pd-crumb-sep">/</span> */}
        {/* <span className="pd-crumb-current">
          No. {String(product.id).padStart(3, "0")}
        </span> */}
      </nav>

      <div className="pd-layout">
        {/* IMAGE SECTION */}
        <div className="pd-image-panel">
          {/* <span className="pd-catalog-tag">
            No. {String(product.id).padStart(3, "0")}
          </span> */}

          <div className="pd-image-wrap">
            <img
              src={product.img}
              alt={product.name}
              onLoad={() => setImgLoaded(true)}
              className="pd-image"
              style={{
                opacity: imgLoaded ? 1 : 0,
              }}
            />

           
          </div>

        
        </div>

        {/* CONTENT SECTION */}
        <div className="pd-content">
          <span className="pd-eyebrow">
            Premium Marble Collection
          </span>

          <h1 className="pd-title">{product.name}</h1>

          <h2 className="pd-price">{product.price}</h2>

          <div className="pd-divider" />

          <p className="pd-desc">
            {product.desc ||
              "Crafted with premium quality marble and detailed artistry. Perfect for temples, homes, offices, and gifting purposes."}
          </p>

          <div className="pd-specs">
            <div className="pd-spec-row">
              <span className="pd-spec-label">Type</span>
              <span className="pd-spec-value">
                {product.type || "Marble Statue"}
              </span>
            </div>

            <div className="pd-spec-row">
              <span className="pd-spec-label">Material</span>
              <span className="pd-spec-value">
                {product.material || "Premium Marble"}
              </span>
            </div>

            <div className="pd-spec-row">
              <span className="pd-spec-label">Size</span>
              <span className="pd-spec-value">
                {product.size || "Custom Available"}
              </span>
            </div>

            <div className="pd-spec-row">
              <span className="pd-spec-label">Color</span>
              <span className="pd-spec-value">
                {product.color || "White Marble"}
              </span>
            </div>
          </div>

          <div className="pd-qty-block">
            <span className="pd-qty-label">Quantity</span>

            <div className="pd-qty">
              <button
                className="pd-qty-btn"
                onClick={() =>
                  dispatch(removeFromCart(product.id))
                }
              >
                −
              </button>

              <span className="pd-qty-value">{qty}</span>

              <button
                className="pd-qty-btn pd-qty-btn-add"
                onClick={() =>
                  dispatch(addToCart(product))
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="pd-actions">
            {/* <button
              className="pd-btn pd-btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCartOutlined /> Add To Cart
            </button> */}

            <button
              className="pd-btn pd-btn-secondary"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </button>
          </div>

          {/* <div className="pd-note">
            <span className="pd-note-label">
              Craftsmanship
            </span>
            <p>
              Every piece is hand-carved by skilled artisans and
              may show subtle natural variations in stone grain —
              a mark of its authenticity, not a flaw.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}



// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef, useCallback } from "react";
// import { fetchProducts } from "../api/products";

// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/cartSlice";

// import {
//   ShoppingCartOutlined,
//   HeartOutlined,
//   LeftOutlined,
//   RightOutlined,
// } from "@ant-design/icons";

// // Fallback placeholder images used to top up the gallery to 3-4 images
// const FALLBACK_IMAGES = [
//   "https://images.unsplash.com/photo-1583946099390-d6157e0e5e60?w=800&q=80",
//   "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
//   "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80",
//   "https://images.unsplash.com/photo-1574170877937-4e7d3f7c4c6a?w=800&q=80",
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [product, setProduct] = useState(null);
//   const [imgLoaded, setImgLoaded] = useState(false);
//   const [isHoveringImg, setIsHoveringImg] = useState(false);
//   const [activeImg, setActiveImg] = useState(0);
//   const [slideDir, setSlideDir] = useState("next");

//   const galleryRef = useRef(null);
//   const thumbRefs = useRef([]);

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   useEffect(() => {
//     setProduct(null);
//     setImgLoaded(false);
//     setActiveImg(0);
//     fetchProducts().then((res) => {
//       const found = res.find((item) => item.id === Number(id));
//       setProduct(found);
//     });
//   }, [id]);

//   // Build a fixed gallery of 3-4 images: product images first, then
//   // top up with fallback placeholders so every product shows a full gallery
//   const images = (() => {
//     const base =
//       product?.images && product.images.length > 0
//         ? product.images
//         : product?.img
//         ? [product.img]
//         : [];

//     const combined = [...base];
//     let i = 0;
//     while (combined.length < 4 && i < FALLBACK_IMAGES.length) {
//       if (!combined.includes(FALLBACK_IMAGES[i])) {
//         combined.push(FALLBACK_IMAGES[i]);
//       }
//       i++;
//     }
//     return combined.slice(0, 4);
//   })();

//   const goToImage = useCallback(
//     (index, dir) => {
//       if (index === activeImg) return;
//       setSlideDir(dir);
//       setImgLoaded(false);
//       setActiveImg(index);
//     },
//     [activeImg]
//   );

//   const goPrev = useCallback(() => {
//     const newIndex = activeImg === 0 ? images.length - 1 : activeImg - 1;
//     goToImage(newIndex, "prev");
//   }, [activeImg, images.length, goToImage]);

//   const goNext = useCallback(() => {
//     const newIndex = activeImg === images.length - 1 ? 0 : activeImg + 1;
//     goToImage(newIndex, "next");
//   }, [activeImg, images.length, goToImage]);

//   // Keyboard navigation when gallery is focused
//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       goPrev();
//     } else if (e.key === "ArrowRight") {
//       e.preventDefault();
//       goNext();
//     }
//   };

//   // Auto-scroll active thumbnail into view
//   useEffect(() => {
//     const activeThumb = thumbRefs.current[activeImg];
//     if (activeThumb) {
//       activeThumb.scrollIntoView({
//         behavior: "smooth",
//         inline: "center",
//         block: "nearest",
//       });
//     }
//   }, [activeImg]);

//   if (!product) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "30px",
//           fontWeight: "700",
//         }}
//       >
//         <span className="loading-pulse">Loading...</span>
//         <style>{`
//           .loading-pulse {
//             animation: pulseFade 1.2s ease-in-out infinite;
//           }
//           @keyframes pulseFade {
//             0%, 100% { opacity: 0.3; }
//             50% { opacity: 1; }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   const cartItem = cartItems.find((item) => item.id === product.id);
//   const qty = cartItem?.qty || 0;

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f7f7f7",
//         padding: "100px 7%",
//       }}
//     >
//       <style>{`
//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeSlideLeft {
//           from { opacity: 0; transform: translateX(-40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeSlideRight {
//           from { opacity: 0; transform: translateX(40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes priceGlow {
//           0%, 100% { text-shadow: 0 0 0px rgba(199,154,43,0); }
//           50% { text-shadow: 0 0 14px rgba(199,154,43,0.35); }
//         }
//         @keyframes slideInNext {
//           from { opacity: 0; transform: translateX(40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInPrev {
//           from { opacity: 0; transform: translateX(-40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .pd-image-wrap {
//           animation: fadeSlideLeft 0.7s ease-out both;
//           transition: box-shadow 0.4s ease;
//         }
//         .pd-image-wrap:focus {
//           outline: none;
//         }
//         .pd-image-wrap:hover {
//           box-shadow: 0 25px 50px rgba(0,0,0,.15) !important;
//         }
//         .pd-main-img-slide-next {
//           animation: slideInNext 0.35s ease-out both;
//         }
//         .pd-main-img-slide-prev {
//           animation: slideInPrev 0.35s ease-out both;
//         }
//         .pd-content {
//           animation: fadeSlideRight 0.7s ease-out both;
//         }
//         .pd-content > * {
//           animation: fadeSlideUp 0.6s ease-out both;
//         }
//         .pd-title { animation-delay: 0.1s !important; }
//         .pd-price { animation-delay: 0.2s !important; animation: priceGlow 2.5s ease-in-out infinite; }
//         .pd-desc { animation-delay: 0.25s !important; }
//         .pd-info { animation-delay: 0.3s !important; transition: transform 0.3s ease, box-shadow 0.3s ease; }
//         .pd-info:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,.08) !important; }
//         .pd-qty { animation-delay: 0.35s !important; }
//         .pd-actions { animation-delay: 0.4s !important; }

//         .pd-btn {
//           transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
//         }
//         .pd-btn:hover {
//           transform: translateY(-3px) scale(1.03);
//           filter: brightness(1.05);
//         }
//         .pd-btn:active {
//           transform: translateY(0) scale(0.97);
//         }

//         .pd-qty-btn {
//           transition: transform 0.2s ease, background 0.2s ease;
//         }
//         .pd-qty-btn:hover {
//           transform: scale(1.1);
//         }
//         .pd-qty-btn:active {
//           transform: scale(0.9);
//         }
//         .pd-qty-value {
//           display: inline-block;
//           transition: transform 0.25s ease;
//         }

//         .pd-arrow {
//           transition: transform 0.25s ease, background 0.25s ease, opacity 0.25s ease;
//           background: rgba(255,255,255,0.6);
//         }
//         .pd-arrow:hover:not(:disabled) {
//           background: rgba(255,255,255,0.95);
//           transform: translateY(-50%) scale(1.12);
//         }
//         .pd-arrow:active:not(:disabled) {
//           transform: translateY(-50%) scale(0.95);
//         }
//         .pd-arrow:disabled {
//           opacity: 0.35;
//           cursor: not-allowed;
//         }

//         .pd-thumb-strip {
//           scrollbar-width: thin;
//         }
//         .pd-thumb {
//           transition: transform 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
//           cursor: pointer;
//           flex-shrink: 0;
//         }
//         .pd-thumb:hover {
//           transform: translateY(-4px);
//         }
//       `}</style>

//       <div
//         style={{
//           display: "flex",
//           gap: "70px",
//           flexWrap: "wrap",
//           alignItems: "center",
//         }}
//       >
//         {/* IMAGE SECTION */}
//         <div
//           style={{
//             flex: 1,
//             minWidth: "350px",
//           }}
//         >
//           <div
//             ref={galleryRef}
//             className="pd-image-wrap"
//             tabIndex={0}
//             onKeyDown={handleKeyDown}
//             onMouseEnter={() => setIsHoveringImg(true)}
//             onMouseLeave={() => setIsHoveringImg(false)}
//             style={{
//               background: "#fff",
//               borderRadius: "25px",
//               overflow: "hidden",
//               boxShadow: "0 15px 40px rgba(0,0,0,.08)",
//               position: "relative",
//             }}
//           >
//             <img
//               key={activeImg}
//               className={
//                 slideDir === "next"
//                   ? "pd-main-img-slide-next"
//                   : "pd-main-img-slide-prev"
//               }
//               src={images[activeImg]}
//               alt={`${product.name} ${activeImg + 1}`}
//               onLoad={() => setImgLoaded(true)}
//               style={{
//                 width: "100%",
//                 height: "700px",
//                 objectFit: "cover",
//                 opacity: imgLoaded ? 1 : 0,
//                 transition: "opacity 0.4s ease",
//               }}
//             />

//             {/* WISHLIST ICON */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "20px",
//                 width: "48px",
//                 height: "48px",
//                 borderRadius: "50%",
//                 background: "#fff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "20px",
//                 color: "#c79a2b",
//                 cursor: "pointer",
//                 boxShadow: "0 6px 16px rgba(0,0,0,.15)",
//                 opacity: isHoveringImg ? 1 : 0,
//                 transform: isHoveringImg ? "scale(1)" : "scale(0.7)",
//                 transition: "all 0.3s ease",
//                 zIndex: 2,
//               }}
//             >
//               <HeartOutlined />
//             </div>

//             {/* PREV ARROW */}
//             {images.length > 1 && (
//               <button
//                 className="pd-arrow"
//                 onClick={goPrev}
//                 aria-label="Previous image"
//                 style={{
//                   position: "absolute",
//                   left: "16px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   width: "46px",
//                   height: "46px",
//                   borderRadius: "50%",
//                   border: "none",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "18px",
//                   color: "#111",
//                   boxShadow: "0 6px 16px rgba(0,0,0,.15)",
//                   zIndex: 2,
//                 }}
//               >
//                 <LeftOutlined />
//               </button>
//             )}

//             {/* NEXT ARROW */}
//             {images.length > 1 && (
//               <button
//                 className="pd-arrow"
//                 onClick={goNext}
//                 aria-label="Next image"
//                 style={{
//                   position: "absolute",
//                   right: "16px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   width: "46px",
//                   height: "46px",
//                   borderRadius: "50%",
//                   border: "none",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "18px",
//                   color: "#111",
//                   boxShadow: "0 6px 16px rgba(0,0,0,.15)",
//                   zIndex: 2,
//                 }}
//               >
//                 <RightOutlined />
//               </button>
//             )}

//             {/* DOT INDICATORS */}
//             {images.length > 1 && (
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "18px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   display: "flex",
//                   gap: "8px",
//                   zIndex: 2,
//                 }}
//               >
//                 {images.map((_, index) => (
//                   <span
//                     key={index}
//                     style={{
//                       width: index === activeImg ? "22px" : "8px",
//                       height: "8px",
//                       borderRadius: "4px",
//                       background:
//                         index === activeImg
//                           ? "#c79a2b"
//                           : "rgba(255,255,255,0.7)",
//                       boxShadow: "0 2px 6px rgba(0,0,0,.15)",
//                       transition: "all 0.3s ease",
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* THUMBNAILS */}
//           {images.length > 1 && (
//             <div
//               className="pd-thumb-strip"
//               style={{
//                 display: "flex",
//                 gap: "15px",
//                 marginTop: "20px",
//                 overflowX: "auto",
//                 paddingBottom: "6px",
//               }}
//             >
//               {images.map((src, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (thumbRefs.current[index] = el)}
//                   className="pd-thumb"
//                   onClick={() =>
//                     goToImage(index, index > activeImg ? "next" : "prev")
//                   }
//                   style={{
//                     width: "90px",
//                     height: "90px",
//                     borderRadius: "14px",
//                     overflow: "hidden",
//                     border:
//                       activeImg === index
//                         ? "3px solid #c79a2b"
//                         : "3px solid transparent",
//                     background: "#fff",
//                     boxShadow: "0 4px 12px rgba(0,0,0,.08)",
//                     opacity: activeImg === index ? 1 : 0.7,
//                   }}
//                 >
//                   <img
//                     src={src}
//                     alt={`${product.name} thumbnail ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* CONTENT SECTION */}
//         <div
//           className="pd-content"
//           style={{
//             flex: 1,
//             minWidth: "350px",
//           }}
//         >
//           <p
//             style={{
//               color: "#c79a2b",
//               letterSpacing: "2px",
//               fontWeight: "700",
//               textTransform: "uppercase",
//               marginBottom: "10px",
//             }}
//           >
//             Premium Marble Collection
//           </p>

//           <h1
//             className="pd-title"
//             style={{
//               fontSize: "56px",
//               fontWeight: "700",
//               color: "#111",
//               marginBottom: "15px",
//             }}
//           >
//             {product.name}
//           </h1>

//           <h2
//             className="pd-price"
//             style={{
//               fontSize: "38px",
//               color: "#c79a2b",
//               marginBottom: "25px",
//             }}
//           >
//             {product.price}
//           </h2>

//           <p
//             className="pd-desc"
//             style={{
//               fontSize: "18px",
//               color: "#555",
//               lineHeight: "1.9",
//               marginBottom: "35px",
//             }}
//           >
//             {product.desc ||
//               "Crafted with premium quality marble and detailed artistry. Perfect for temples, homes, offices, and gifting purposes."}
//           </p>

//           {/* PRODUCT INFORMATION */}
//           <div
//             className="pd-info"
//             style={{
//               background: "#fff",
//               padding: "25px",
//               borderRadius: "20px",
//               marginBottom: "35px",
//               boxShadow: "0 8px 25px rgba(0,0,0,.05)",
//             }}
//           >
//             <p>
//               <strong>Type:</strong> {product.type || "Marble Statue"}
//             </p>

//             <p>
//               <strong>Material:</strong> {product.material || "Premium Marble"}
//             </p>

//             <p>
//               <strong>Size:</strong> {product.size || "Custom Available"}
//             </p>

//             <p>
//               <strong>Color:</strong> {product.color || "White Marble"}
//             </p>
//           </div>

//           {/* QUANTITY */}
//           <div
//             className="pd-qty"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               background: "#fff",
//               padding: "8px",
//               borderRadius: "16px",
//               boxShadow: "0 8px 20px rgba(0,0,0,.08)",
//               marginBottom: "35px",
//             }}
//           >
//             <button
//               className="pd-qty-btn"
//               onClick={() => dispatch(removeFromCart(product.id))}
//               style={{
//                 width: "50px",
//                 height: "50px",
//                 border: "none",
//                 borderRadius: "12px",
//                 background: "#f3f3f3",
//                 fontSize: "22px",
//                 cursor: "pointer",
//               }}
//             >
//               -
//             </button>

//             <span
//               key={qty}
//               className="pd-qty-value"
//               style={{
//                 minWidth: "60px",
//                 textAlign: "center",
//                 fontSize: "22px",
//                 fontWeight: "700",
//               }}
//             >
//               {qty}
//             </span>

//             <button
//               className="pd-qty-btn"
//               onClick={() => dispatch(addToCart(product))}
//               style={{
//                 width: "50px",
//                 height: "50px",
//                 border: "none",
//                 borderRadius: "12px",
//                 background: "linear-gradient(135deg,#c79a2b,#f4d03f)",
//                 color: "#111",
//                 fontSize: "22px",
//                 fontWeight: "700",
//                 cursor: "pointer",
//               }}
//             >
//               +
//             </button>
//           </div>

//           {/* ACTION BUTTONS */}
//           <div
//             className="pd-actions"
//             style={{
//               display: "flex",
//               gap: "20px",
//               flexWrap: "wrap",
//             }}
//           >
//             <button
//               className="pd-btn"
//               onClick={() => dispatch(addToCart(product))}
//               style={{
//                 padding: "18px 40px",
//                 border: "none",
//                 borderRadius: "14px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 fontWeight: "700",
//                 background: "linear-gradient(135deg,#c79a2b,#f4d03f)",
//                 color: "#111",
//                 boxShadow: "0 10px 25px rgba(199,154,43,.35)",
//               }}
//             >
//               <ShoppingCartOutlined /> Add To Cart
//             </button>

//             <button
//               className="pd-btn"
//               onClick={() => navigate("/cart")}
//               style={{
//                 padding: "18px 40px",
//                 border: "none",
//                 borderRadius: "14px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 fontWeight: "700",
//                 background: "#111",
//                 color: "#fff",
//                 boxShadow: "0 10px 25px rgba(0,0,0,.25)",
//               }}
//             >
//               View Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }