

// import { useParams, Link, useNavigate } from "react-router-dom";
// import { categories } from "../api/category";
// import { useState, useRef } from "react";
// import "../styles/Product.css";

// export default function ProductPage() {
//   const { categoryName, id } = useParams();
//   const navigate = useNavigate();
//   const categoryProducts = categories[categoryName] || [];
//   const product = categoryProducts.find((p) => p.id === Number(id));

//   const [zoomStyle, setZoomStyle] = useState({});
//   const imageWrapRef = useRef(null);

//   if (!product) {
//     return (
//       <div className="product-not-found">
//         <span className="pnf-eyebrow">404</span>
//         <h2>This piece isn't in our collection.</h2>
//         <button onClick={() => navigate(-1)}>Go back</button>
//       </div>
//     );
//   }

//   // desc string ko specs list mein todna: "Makrana Marble • 2ft – 4ft"
//   const specs = product.desc.split("•").map((s) => s.trim());

//   const handleMouseMove = (e) => {
//     const wrap = imageWrapRef.current;
//     if (!wrap) return;
//     const rect = wrap.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(1.6)" });
//   };

//   const resetZoom = () => setZoomStyle({ transform: "scale(1)" });

//   return (
//     <div className="product-page">
//       {/* Breadcrumb */}
//       <nav className="product-breadcrumb">
//         <Link to="/">Home</Link>
//         <span className="crumb-sep">/</span>
//         <Link to={`/category/${categoryName}`}>{categoryName}</Link>
//         <span className="crumb-sep">/</span>
//         <span className="crumb-current">No. {String(product.id).padStart(3, "0")}</span>
//       </nav>

//       <div className="product-layout">
//         {/* Image side */}
//         <div
//           className="product-image-panel"
//           ref={imageWrapRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={resetZoom}
//         >
//           {/* <span className="product-catalog-tag">
//             No. {String(product.id).padStart(3, "0")}
//           </span> */}
//           <div className="product-image-frame">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//               style={zoomStyle}
//             />
//           </div>
//           {/* <span className="product-zoom-hint">Move to inspect detail</span> */}
//         </div>

//         {/* Info side */}
//         <div className="product-info-panel">
//           <span className="product-eyebrow">{categoryName}</span>
//           <h1 className="product-title">{product.name}</h1>
//           <p className="product-price">{product.price}</p>

//           <div className="product-divider" />

//           <ul className="product-specs">
//             {specs.map((spec, i) => (
//               <li key={i}>
//                 <span className="spec-dot" />
//                 {spec}
//               </li>
//             ))}
//           </ul>

//           <div className="product-actions">
//             <button className="btn-primary">Enquire Now</button>
//             {/* <button className="btn-secondary">Request Custom Size</button> */}
//           </div>

//           <div className="product-note">
//             <span className="note-label">Craftsmanship</span>
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
import { fetchCategoryProducts } from "../api/category";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import "../Styles/ProductDetails.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setProduct(null);
    setImgLoaded(false);

    // fetchProducts()
    //   .then((res) => {
    //     console.log("RAW RESPONSE:", res);

    //     // ✅ UNIVERSAL SAFE ARRAY EXTRACTOR
    //     const list =
    //       Array.isArray(res)
    //         ? res
    //         : Array.isArray(res?.data)
    //         ? res.data
    //         : Array.isArray(res?.data?.products)
    //         ? res.data.products
    //         : Array.isArray(res?.products)
    //         ? res.products
    //         : Array.isArray(res?.data?.items)
    //         ? res.data.items
    //         : [];

    //     console.log("EXTRACTED LIST:", list);
    //     console.log("IS ARRAY:", Array.isArray(list));

    //     // ✅ SAFE FIND
    //     const found =
    //       Array.isArray(list)
    //         ? list.find(
    //             (item) => String(item.id) === String(id)
    //           )
    //         : null;

    //     console.log("FOUND PRODUCT:", found);

    //     setProduct(found || null);
    //   })
    //   .catch((err) => {
    //     console.error("Fetch error:", err);
    //     setProduct(null);
    //   });

    fetchCategoryProducts()
  .then((res) => {
    console.log("RAW RESPONSE:", res);

    // ✅ OBJECT → ARRAY FLATTEN FIX
    const list = Object.values(res).flat();

    console.log("FLATTENED LIST:", list);
    console.log("IS ARRAY:", Array.isArray(list));

    const found = list.find(
      (item) => String(item.id) === String(id)
    );

    console.log("FOUND PRODUCT:", found);

    setProduct(found || null);
  })
  .catch((err) => {
    console.error("Fetch error:", err);
    setProduct(null);
  });
  }, [id]);

  if (!product) {
    return (
      <div className="pd-loading">
        <span className="pd-loading-text">Loading...</span>
      </div>
    );
  }

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

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
      </nav>

      <div className="pd-layout">

        {/* IMAGE */}
        <div className="pd-image-panel">
          <div className="pd-image-wrap">
            <img
              src={product.image || product.img}
              alt={product.name}
              className="pd-image"
              onLoad={() => setImgLoaded(true)}
              style={{
                opacity: imgLoaded ? 1 : 0,
                transition: "0.3s ease",
              }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pd-content">

          <span className="pd-eyebrow">
            Premium Marble Collection
          </span>

          <h1 className="pd-title">{product.name}</h1>

          <h2 className="pd-price">{product.price}</h2>

          <div className="pd-divider" />

          <p className="pd-desc">
            {product.desc ||
              "Crafted with premium quality marble and detailed artistry."}
          </p>

          {/* SPECS */}
          <div className="pd-specs">
            <div className="pd-spec-row">
              <span>Type</span>
              <span>{product.type || "Marble Statue"}</span>
            </div>

            <div className="pd-spec-row">
              <span>Material</span>
              <span>{product.material || "Premium Marble"}</span>
            </div>

            <div className="pd-spec-row">
              <span>Size</span>
              <span>{product.size || "Custom Available"}</span>
            </div>

            <div className="pd-spec-row">
              <span>Color</span>
              <span>{product.color || "White Marble"}</span>
            </div>
          </div>

          {/* QTY */}
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

          {/* ACTIONS */}
          <div className="pd-actions">
            <button
              className="pd-btn pd-btn-secondary"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}