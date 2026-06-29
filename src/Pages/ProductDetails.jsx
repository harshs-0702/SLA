// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { fetchProducts } from "../api/products";

// // export default function ProductDetails() {
// //     const { id } = useParams();
// //     const [product, setProduct] = useState(null);

// //     useEffect(() => {
// //         fetchProducts().then((res) => {
// //             const found = res.find((item) => item.id === Number(id));
// //             setProduct(found);
// //         });
// //     }, [id]);

// //     if (!product)
// //         return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// //     return (
// //         <div
// //             style={{
// //                 display: "flex",
// //                 justifyContent: "center",   // horizontal center
// //                 alignItems: "center",       // vertical center
// //                 minHeight: "100vh",
// //                 padding: "20px"
// //             }}
// //         >
// //             <div
// //                 style={{
// //                     textAlign: "center",
// //                     maxWidth: "600px",
// //                     width: "100%",
// //                     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //                     padding: "30px",
// //                     borderRadius: "12px",
// //                     background: "#fff"
// //                 }}
// //             >
// //                 <h1>{product.name}</h1>

// //                 <img
// //                     src={product.img}
// //                     alt={product.name}
// //                     style={{
// //                         width: "100%",
// //                         maxWidth: "400px",
// //                         borderRadius: "10px",
// //                         margin: "20px auto",
// //                         display: "block"
// //                     }}
// //                 />

// //                 <p style={{ marginTop: "10px" }}>
// //                     {product.desc}
// //                 </p>

// //                 <h3 style={{ marginTop: "15px", color: "#b8860b" }}>
// //                     {product.price}
// //                 </h3>
// //             </div>
// //         </div>
// //     );
// // }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/products";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts().then((res) => {
//       const found = res.find((item) => item.id === Number(id));
//       setProduct(found);
//     });
//   }, [id]);

//   if (!product) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "28px",
//           fontWeight: "600",
//           background: "#f8f8f8",
//         }}
//       >
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         background: "#f8f8f8",
//         padding: "60px 7%",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "80px",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           width: "100%",
//         }}
//       >
//         {/* LEFT IMAGE SECTION */}
//         <div
//           style={{
//             flex: "1",
//             minWidth: "420px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               maxWidth: "620px",
//               height: "720px",
//               overflow: "hidden",
//               borderRadius: "24px",
//               background: "#fff",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//             }}
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "0.4s ease",
//               }}
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div
//           style={{
//             flex: "1",
//             minWidth: "420px",
//           }}
//         >
//           <p
//             style={{
//               color: "#c79a2b",
//               fontWeight: "600",
//               letterSpacing: "2px",
//               marginBottom: "15px",
//               fontSize: "14px",
//               textTransform: "uppercase",
//             }}
//           >
//             Premium Collection
//           </p>

//           <h1
//             style={{
//               fontSize: "56px",
//               color: "#111",
//               marginBottom: "18px",
//               lineHeight: "1.2",
//               fontWeight: "700",
//             }}
//           >
//             {product.name}
//           </h1>

//           <h2
//             style={{
//               fontSize: "38px",
//               color: "#c79a2b",
//               marginBottom: "28px",
//               fontWeight: "700",
//             }}
//           >
//             {product.price}
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             style={{
//               fontSize: "18px",
//               color: "#555",
//               lineHeight: "2",
//               marginBottom: "45px",
//               maxWidth: "700px",
//             }}
//           >
//             {product.desc ||
//               "This premium quality product is crafted with modern design and exceptional attention to detail. Built using high-quality materials, it offers both durability and elegance for everyday use. Its stylish appearance, comfortable finish, and premium craftsmanship make it a perfect choice for customers looking for luxury, performance, and timeless design."}
//           </p>

//           {/* PRODUCT DETAILS */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "22px",
//               marginBottom: "50px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "15px",
//                 fontSize: "18px",
//               }}
//             >
//               <strong>Type</strong>
//               <span>{product.type || "Luxury Product"}</span>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "15px",
//                 fontSize: "18px",
//               }}
//             >
//               <strong>Size</strong>
//               <span>{product.size || "Full Size"}</span>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "15px",
//                 fontSize: "18px",
//               }}
//             >
//               <strong>Color</strong>
//               <span>{product.color || "Golden Black"}</span>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "15px",
//                 fontSize: "18px",
//               }}
//             >
//               <strong>Material</strong>
//               <span>{product.material || "Premium Quality"}</span>
//             </div>
//           </div>

//           {/* BUTTONS */}
//           <div
//             style={{
//               display: "flex",
//               gap: "20px",
//               flexWrap: "wrap",
//             }}
//           >
//             <button
//               style={{
//                 padding: "18px 42px",
//                 background: "#111",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "12px",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 transition: "0.3s",
//               }}
//             >
//               Add To Cart
//             </button>

//             <button
//               style={{
//                 padding: "18px 42px",
//                 background: "transparent",
//                 color: "#111",
//                 border: "2px solid #111",
//                 borderRadius: "12px",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 transition: "0.3s",
//               }}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/products";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
// } from "../redux/cartSlice";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [product, setProduct] = useState(null);

//   const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   useEffect(() => {
//     fetchProducts().then((res) => {
//       const found = res.find(
//         (item) => item.id === Number(id)
//       );
//       setProduct(found);
//     });
//   }, [id]);

//   const cartItem = cartItems.find(
//     (item) => item.id === product?.id
//   );

//   const qty = cartItem?.qty || 0;

//   <><div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "20px",
//       marginBottom: "30px",
//     }}
//   >
//     <button
//       onClick={() => dispatch(removeFromCart(product.id))}
//       style={{
//         width: "50px",
//         height: "50px",
//         border: "none",
//         background: "#111",
//         color: "#fff",
//         borderRadius: "10px",
//         cursor: "pointer",
//         fontSize: "22px",
//       }}
//     >
//       -
//     </button>

//     <span
//       style={{
//         fontSize: "24px",
//         fontWeight: "700",
//         minWidth: "40px",
//         textAlign: "center",
//       }}
//     >
//       {qty}
//     </span>

//     <button
//       onClick={() => dispatch(addToCart(product))}
//       style={{
//         width: "50px",
//         height: "50px",
//         border: "none",
//         background: "#c79a2b",
//         color: "#fff",
//         borderRadius: "10px",
//         cursor: "pointer",
//         fontSize: "22px",
//       }}
//     >
//       +
//     </button>
//   </div><div
//     style={{
//       display: "flex",
//       gap: "20px",
//       flexWrap: "wrap",
//     }}
//   >
//       <button
//         onClick={() => dispatch(addToCart(product))}
//         style={{
//           padding: "18px 42px",
//           background: "#111",
//           color: "#fff",
//           border: "none",
//           borderRadius: "12px",
//           fontSize: "16px",
//           fontWeight: "600",
//           cursor: "pointer",
//         }}
//       >
//         Add To Cart
//       </button>

//       <button
//         onClick={() => navigate("/cart")}
//         style={{
//           padding: "18px 42px",
//           background: "#c79a2b",
//           color: "#fff",
//           border: "none",
//           borderRadius: "12px",
//           fontSize: "16px",
//           fontWeight: "600",
//           cursor: "pointer",
//         }}
//       >
//         Go To Cart
//       </button>
//     </div>
//     </>
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

import { ShoppingCartOutlined } from "@ant-design/icons";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetchProducts().then((res) => {
      const found = res.find((item) => item.id === Number(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        Loading...
      </div>
    );
  }

  const cartItem = cartItems.find((item) => item.id === product.id);

  const qty = cartItem?.qty || 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "100px 7%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "70px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* IMAGE SECTION */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,.08)",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
          }}
        >
          <p
            style={{
              color: "#c79a2b",
              letterSpacing: "2px",
              fontWeight: "700",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Premium Marble Collection
          </p>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#111",
              marginBottom: "15px",
            }}
          >
            {product.name}
          </h1>

          <h2
            style={{
              fontSize: "38px",
              color: "#c79a2b",
              marginBottom: "25px",
            }}
          >
            {product.price}
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: "1.9",
              marginBottom: "35px",
            }}
          >
            {product.desc ||
              "Crafted with premium quality marble and detailed artistry. Perfect for temples, homes, offices, and gifting purposes."}
          </p>

          {/* PRODUCT INFORMATION */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "20px",
              marginBottom: "35px",
              boxShadow: "0 8px 25px rgba(0,0,0,.05)",
            }}
          >
            <p>
              <strong>Type:</strong> {product.type || "Marble Statue"}
            </p>

            <p>
              <strong>Material:</strong> {product.material || "Premium Marble"}
            </p>

            <p>
              <strong>Size:</strong> {product.size || "Custom Available"}
            </p>

            <p>
              <strong>Color:</strong> {product.color || "White Marble"}
            </p>
          </div>

          {/* QUANTITY */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#fff",
              padding: "8px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              marginBottom: "35px",
            }}
          >
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              style={{
                width: "50px",
                height: "50px",
                border: "none",
                borderRadius: "12px",
                background: "#f3f3f3",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              -
            </button>

            <span
              style={{
                minWidth: "60px",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              {qty}
            </span>

            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                width: "50px",
                height: "50px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#c79a2b,#f4d03f)",
                color: "#111",
                fontSize: "22px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          {/* ACTION BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* <button
              onClick={() =>
                dispatch(addToCart(product))
              }
              style={{
                padding: "18px 40px",
                border: "none",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "700",
                background:
                  "linear-gradient(135deg,#c79a2b,#f4d03f)",
                color: "#111",
                boxShadow:
                  "0 10px 25px rgba(199,154,43,.35)",
              }}
            >
              <ShoppingCartOutlined /> Add To Cart
            </button> */}

            <button
              onClick={() => navigate("/cart")}
              style={{
                padding: "18px 40px",
                border: "none",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "700",
                background: "#111",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
              }}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
