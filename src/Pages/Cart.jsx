// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   addToCart,
//   removeFromCart,
//   clearCart,
// } from "../redux/cartSlice";

// import {
//   DeleteOutlined,
//   ShoppingCartOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";

// export default function Cart() {
//   const dispatch = useDispatch();

//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   const totalItems = cartItems.reduce(
//     (acc, item) => acc + item.qty,
//     0
//   );

// const totalPrice = cartItems.reduce((total, item) => {
//   const rawPrice = item.price;

//   // Handle ₹25,000 | 25000 | undefined | Price On Request
//   const price = Number(
//     String(rawPrice || 0)
//       .replace(/,/g, "")
//       .replace(/[^\d.]/g, "")
//   ) || 0;

//   return total + price * (item.qty || 1);
// }, 0);
//   const whatsappMessage = encodeURIComponent(`
// 🛕 NEW ORDER REQUEST

// 👤 Name: ${customer.name}
// 📞 Phone: ${customer.phone}

// 📍 Delivery Address:
// ${customer.address}

// --------------------------------

// ${cartItems
//     .map(
//       (item) => `
// • ${item.name}
// Qty: ${item.qty}
// Price: ${item.price}
// `
//     )
//     .join("\n")}

// --------------------------------

// 🛒 Total Items: ${totalItems}

// 💰 Total Amount: ₹${totalPrice.toLocaleString()}
// `);

//   const handleOrder = () => {
//     if (
//       !customer.name ||
//       !customer.phone ||
//       !customer.address
//     ) {
//       alert("Please fill all delivery details");
//       return;
//     }

//     window.open(
//       `https://wa.me/918690909918?text=${whatsappMessage}`,
//       "_blank"
//     );
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "14px",
//     marginTop: "15px",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     outline: "none",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f7f7f7",
//         padding: "120px 7%",
//       }}
//     >
//       {/* HEADER */}
//       <div style={{ marginBottom: "40px" }}>
//         <h1
//           style={{
//             fontSize: "48px",
//             fontWeight: "700",
//             color: "#111",
//           }}
//         >
//           <ShoppingCartOutlined /> Shopping Cart
//         </h1>

//         <p
//           style={{
//             color: "#777",
//             marginTop: "10px",
//           }}
//         >
//           Review your selected marble creations.
//         </p>
//       </div>

//       {cartItems.length === 0 ? (
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: "25px",
//             padding: "80px 30px",
//             textAlign: "center",
//             boxShadow:
//               "0 15px 40px rgba(0,0,0,.06)",
//           }}
//         >
//           <h2>Your Cart Is Empty 😔</h2>

//           <p
//             style={{
//               color: "#666",
//               marginTop: "10px",
//             }}
//           >
//             Add products to your cart.
//           </p>
//         </div>
//       ) : (
//         <>
//           {/* CART ITEMS */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 gap: "25px",
//                 alignItems: "center",
//                 background: "#fff",
//                 padding: "20px",
//                 borderRadius: "20px",
//                 marginBottom: "20px",
//                 boxShadow:
//                   "0 10px 25px rgba(0,0,0,.05)",
//                 flexWrap: "wrap",
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 style={{
//                   width: "140px",
//                   height: "140px",
//                   objectFit: "cover",
//                   borderRadius: "15px",
//                 }}
//               />

//               <div style={{ flex: 1 }}>
//                 <h3>{item.name}</h3>

//                 <h4
//                   style={{
//                     color: "#c79a2b",
//                   }}
//                 >
//                   {item.price}
//                 </h4>
//               </div>

//               {/* QTY */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                 }}
//               >
//                 <button
//                   onClick={() =>
//                     dispatch(removeFromCart(item.id))
//                   }
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     border: "none",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                     background: "#f3f3f3",
//                     fontSize: "20px",
//                   }}
//                 >
//                   -
//                 </button>

//                 <span
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: "700",
//                     minWidth: "30px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {item.qty}
//                 </span>

//                 <button
//                   onClick={() =>
//                     dispatch(addToCart(item))
//                   }
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     border: "none",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                     background:
//                       "linear-gradient(135deg,#c79a2b,#f4d03f)",
//                     fontSize: "20px",
//                     fontWeight: "700",
//                   }}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* REMOVE */}
//               <button
//                 onClick={() => {
//                   for (let i = 0; i < item.qty; i++) {
//                     dispatch(removeFromCart(item.id));
//                   }
//                 }}
//                 style={{
//                   border: "none",
//                   background: "#ff4d4f",
//                   color: "#fff",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 <DeleteOutlined /> Remove
//               </button>
//             </div>
//           ))}

//           {/* CUSTOMER DETAILS */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "30px",
//               borderRadius: "20px",
//               marginTop: "30px",
//               marginBottom: "30px",
//               boxShadow:
//                 "0 10px 25px rgba(0,0,0,.05)",
//             }}
//           >
//             <h2>Delivery Details</h2>

//             <input
//               type="text"
//               placeholder="Full Name"
//               value={customer.name}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   name: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />

//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               value={customer.phone}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   phone: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />

//             <textarea
//               rows="4"
//               placeholder="Delivery Address"
//               value={customer.address}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   address: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />
//           </div>

//           {/* SUMMARY */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "35px",
//               borderRadius: "25px",
//               boxShadow:
//                 "0 15px 40px rgba(0,0,0,.06)",
//             }}
//           >
//             <h2>Order Summary</h2>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "20px",
//               }}
//             >
//               <span>Total Items</span>
//               <strong>{totalItems}</strong>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "15px",
//               }}
//             >
//               <span>Total Amount</span>
//               <strong
//                 style={{
//                   color: "#c79a2b",
//                   fontSize: "24px",
//                 }}
//               >
//                 ₹{totalPrice.toLocaleString()}
//               </strong>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "15px",
//                 marginTop: "30px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <button
//                 onClick={() =>
//                   dispatch(clearCart())
//                 }
//                 style={{
//                   padding: "15px 30px",
//                   border: "none",
//                   borderRadius: "12px",
//                   background: "#111",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 Empty Cart
//               </button>

//               <button
//                 onClick={handleOrder}
//                 style={{
//                   padding: "15px 30px",
//                   border: "none",
//                   borderRadius: "12px",
//                   background: "#25D366",
//                   color: "#fff",
//                   cursor: "pointer",
//                   fontWeight: "700",
//                 }}
//               >
//                 <WhatsAppOutlined /> Place Order
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

// import {
//   DeleteOutlined,
//   ShoppingCartOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";

// export default function Cart() {
//   const dispatch = useDispatch();

//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

//   const totalPrice = cartItems.reduce((total, item) => {
//     const rawPrice = item.price;

//     // Handle ₹25,000 | 25000 | undefined | Price On Request
//     const price =
//       Number(
//         String(rawPrice || 0)
//           .replace(/,/g, "")
//           .replace(/[^\d.]/g, ""),
//       ) || 0;

//     return total + price * (item.qty || 1);
//   }, 0);

//   const subTotal = totalPrice;

//   const packingCharge = subTotal > 0 ? 250 : 0;

//   const shippingCharge = subTotal >= 50000 ? 0 : 500;

//   const gst = Math.round(subTotal * 0.18);

//   const grandTotal = subTotal + packingCharge + shippingCharge + gst;

//   const whatsappMessage = encodeURIComponent(`
// 🛕 NEW ORDER REQUEST

// 👤 Name: ${customer.name}
// 📞 Phone: ${customer.phone}

// 📍 Delivery Address:
// ${customer.address}

// --------------------------------

// ${cartItems
//   .map(
//     (item) => `
// • ${item.name}
// Qty: ${item.qty}
// Price: ${item.price}
// `,
//   )
//   .join("\n")}

// --------------------------------

// 🛒 Total Items: ${totalItems}

// Subtotal: ₹${subTotal.toLocaleString("en-IN")}
// Packing Charges: ₹${packingCharge.toLocaleString("en-IN")}
// Shipping Charges: ₹${shippingCharge.toLocaleString("en-IN")}
// GST (18%): ₹${gst.toLocaleString("en-IN")}

// 💰 Grand Total: ₹${grandTotal.toLocaleString("en-IN")}

// `);

//   const handleOrder = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all delivery details");
//       return;
//     }

//     window.open(`https://wa.me/918690909918?text=${whatsappMessage}`, "_blank");
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "14px",
//     marginTop: "15px",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     outline: "none",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f7f7f7",
//         padding: "120px 7%",
//       }}
//     >
//       {/* HEADER */}
//       <div style={{ marginBottom: "40px" }}>
//         <h1
//           style={{
//             fontSize: "48px",
//             fontWeight: "700",
//             color: "#111",
//           }}
//         >
//           <ShoppingCartOutlined /> Shopping Cart
//         </h1>

//         <p
//           style={{
//             color: "#777",
//             marginTop: "10px",
//           }}
//         >
//           Review your selected marble creations.
//         </p>
//       </div>

//       {cartItems.length === 0 ? (
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: "25px",
//             padding: "80px 30px",
//             textAlign: "center",
//             boxShadow: "0 15px 40px rgba(0,0,0,.06)",
//           }}
//         >
//           <h2>Your Cart Is Empty 😔</h2>

//           <p
//             style={{
//               color: "#666",
//               marginTop: "10px",
//             }}
//           >
//             Add products to your cart.
//           </p>
//         </div>
//       ) : (
//         <>
//           {/* CART ITEMS */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 gap: "25px",
//                 alignItems: "center",
//                 background: "#fff",
//                 padding: "20px",
//                 borderRadius: "20px",
//                 marginBottom: "20px",
//                 boxShadow: "0 10px 25px rgba(0,0,0,.05)",
//                 flexWrap: "wrap",
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 style={{
//                   width: "140px",
//                   height: "140px",
//                   objectFit: "cover",
//                   borderRadius: "15px",
//                 }}
//               />

//               <div style={{ flex: 1 }}>
//                 <h3>{item.name}</h3>

//                 <h4
//                   style={{
//                     color: "#c79a2b",
//                   }}
//                 >
//                   {item.price}
//                 </h4>
//               </div>

//               {/* QTY */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                 }}
//               >
//                 <button
//                   onClick={() => dispatch(removeFromCart(item.id))}
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     border: "none",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                     background: "#f3f3f3",
//                     fontSize: "20px",
//                   }}
//                 >
//                   -
//                 </button>

//                 <span
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: "700",
//                     minWidth: "30px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {item.qty}
//                 </span>

//                 <button
//                   onClick={() => dispatch(addToCart(item))}
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     border: "none",
//                     borderRadius: "10px",
//                     cursor: "pointer",
//                     background: "linear-gradient(135deg,#c79a2b,#f4d03f)",
//                     fontSize: "20px",
//                     fontWeight: "700",
//                   }}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* REMOVE */}
//               <button
//                 onClick={() => {
//                   for (let i = 0; i < item.qty; i++) {
//                     dispatch(removeFromCart(item.id));
//                   }
//                 }}
//                 style={{
//                   border: "none",
//                   background: "#ff4d4f",
//                   color: "#fff",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 <DeleteOutlined /> Remove
//               </button>
//             </div>
//           ))}

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "../Styles/Cart.css";

// import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

// import {
//   DeleteOutlined,
//   ShoppingCartOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";

// export default function Cart() {
//   const dispatch = useDispatch();

//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

//   const totalPrice = cartItems.reduce((total, item) => {
//     const price =
//       Number(
//         String(item.price || 0)
//           .replace(/,/g, "")
//           .replace(/[^\d.]/g, ""),
//       ) || 0;

//     return total + price * (item.qty || 1);
//   }, 0);

//   const subTotal = totalPrice;

//   const packingCharge = subTotal > 0 ? 250 : 0;

//   const shippingCharge = subTotal >= 50000 ? 0 : 500;

//   const gst = Math.round(subTotal * 0.18);

//   const grandTotal = subTotal + packingCharge + shippingCharge + gst;

//   const handleOrder = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all delivery details");
//       return;
//     }

//     const message = encodeURIComponent(`

// 🛕 NEW ORDER REQUEST

// 👤 Name:
// ${customer.name}

// 📞 Phone:
// ${customer.phone}

// 📍 Address:
// ${customer.address}


// ----------------------------


// ${cartItems
//   .map(
//     (item) => `

// • ${item.name}

// Qty:
// ${item.qty}

// Price:
// ${item.price}

// `,
//   )
//   .join("")}


// ----------------------------


// Total Items:
// ${totalItems}


// Subtotal:
// ₹${subTotal.toLocaleString("en-IN")}


// Packing:
// ₹${packingCharge.toLocaleString("en-IN")}


// Shipping:
// ₹${shippingCharge.toLocaleString("en-IN")}


// GST:
// ₹${gst.toLocaleString("en-IN")}


// Grand Total:
// ₹${grandTotal.toLocaleString("en-IN")}

// `);

//     window.open(`https://wa.me/918690909918?text=${message}`, "_blank");
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "14px",
//     marginTop: "15px",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     outline: "none",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f7f7f7",
//         padding: "120px 7%",
//       }}
//     >
//       <div style={{ marginBottom: "40px" }}>
//         <h1
//           style={{
//             fontSize: "48px",
//             fontWeight: "700",
//             color: "#111",
//           }}
//         >
//           <ShoppingCartOutlined />
//           Shopping Cart
//         </h1>

//         <p style={{ color: "#777" }}>Review your selected marble creations.</p>
//       </div>

//       {cartItems.length === 0 ? (
//         <div
//           style={{
//             background: "#fff",
//             padding: "80px 30px",
//             borderRadius: "25px",
//             textAlign: "center",
//           }}
//         >
//           <h2>Your Cart Is Empty 😔</h2>
//         </div>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 gap: "25px",
//                 alignItems: "center",
//                 background: "#fff",
//                 padding: "20px",
//                 borderRadius: "20px",
//                 marginBottom: "20px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <img
//                 src={item.image || item.img}
//                 alt={item.name}
//                 onError={(e) => {
//                   e.currentTarget.src = "https://via.placeholder.com/140";
//                 }}
//                 style={{
//                   width: "140px",
//                   height: "140px",
//                   objectFit: "cover",
//                   borderRadius: "15px",
//                 }}
//               />

//               <div style={{ flex: 1 }}>
//                 <h3>{item.name}</h3>

//                 <h4
//                   style={{
//                     color: "#c79a2b",
//                   }}
//                 >
//                   {item.price}
//                 </h4>
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   gap: "12px",
//                   alignItems: "center",
//                 }}
//               >
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>
//                   -
//                 </button>

//                 <span>{item.qty}</span>

//                 <button onClick={() => dispatch(addToCart(item))}>+</button>
//               </div>

//               <button
//                 onClick={() => {
//                   for (let i = 0; i < item.qty; i++) {
//                     dispatch(removeFromCart(item.id));
//                   }
//                 }}
//               >
//                 <DeleteOutlined />
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* CUSTOMER DETAILS */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "30px",
//               borderRadius: "20px",
//               marginTop: "30px",
//               marginBottom: "30px",
//               boxShadow: "0 10px 25px rgba(0,0,0,.05)",
//             }}
//           >
//             <h2>Delivery Details</h2>

//             <input
//               type="text"
//               placeholder="Full Name"
//               value={customer.name}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   name: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />

//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               value={customer.phone}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   phone: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />

//             <textarea
//               rows="4"
//               placeholder="Delivery Address"
//               value={customer.address}
//               onChange={(e) =>
//                 setCustomer({
//                   ...customer,
//                   address: e.target.value,
//                 })
//               }
//               style={inputStyle}
//             />
//           </div>

//           {/* SUMMARY */}
//           <div
//             style={{
//               background: "#fff",
//               padding: "35px",
//               borderRadius: "25px",
//               boxShadow: "0 15px 40px rgba(0,0,0,.06)",
//             }}
//           >
//             <h2>Order Summary</h2>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "20px",
//               }}
//             >
//               <span>Total Items</span>
//               <strong>{totalItems}</strong>
//             </div>

//             {/* <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "15px",
//               }}
//             >
//               <span>Total Amount</span>
//               <strong
//                 style={{
//                   color: "#c79a2b",
//                   fontSize: "24px",
//                 }}
//               >
//                 ₹{totalPrice.toLocaleString()}
//               </strong>
//             </div> */}

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "15px",
//               }}
//             >
//               <span>Subtotal</span>
//               <strong>₹{subTotal.toLocaleString("en-IN")}</strong>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "12px",
//               }}
//             >
//               <span>Packing Charges</span>
//               <strong>₹{packingCharge.toLocaleString("en-IN")}</strong>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "12px",
//               }}
//             >
//               <span>Shipping Charges</span>
//               <strong>
//                 {shippingCharge === 0
//                   ? "FREE"
//                   : `₹${shippingCharge.toLocaleString("en-IN")}`}
//               </strong>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "12px",
//               }}
//             >
//               <span>GST (18%)</span>
//               <strong>₹{gst.toLocaleString("en-IN")}</strong>
//             </div>

//             <hr
//               style={{
//                 margin: "20px 0",
//                 border: "1px dashed #ddd",
//               }}
//             />

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "15px",
//               }}
//             >
//               <span
//                 style={{
//                   fontSize: "20px",
//                   fontWeight: "700",
//                 }}
//               >
//                 Grand Total
//               </span>

//               <strong
//                 style={{
//                   color: "#c79a2b",
//                   fontSize: "28px",
//                   fontWeight: "700",
//                 }}
//               >
//                 ₹{grandTotal.toLocaleString("en-IN")}
//               </strong>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 gap: "15px",
//                 marginTop: "30px",
//                 flexWrap: "wrap",
//               }}
//             >
//               <button
//                 onClick={() => dispatch(clearCart())}
//                 style={{
//                   padding: "15px 30px",
//                   border: "none",
//                   borderRadius: "12px",
//                   background: "#111",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//               >
//                 Empty Cart
//               </button>

//               <button
//                 onClick={handleOrder}
//                 style={{
//                   padding: "15px 30px",
//                   border: "none",
//                   borderRadius: "12px",
//                   background: "#25D366",
//                   color: "#fff",
//                   cursor: "pointer",
//                   fontWeight: "700",
//                 }}
//               >
//                 <WhatsAppOutlined /> Place Order
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";

import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

import {
  DeleteOutlined,
  ShoppingCartOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function Cart() {
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      Number(
        String(item.price || 0)
          .replace(/,/g, "")
          .replace(/[^\d.]/g, ""),
      ) || 0;

    return total + price * (item.qty || 1);
  }, 0);

  const subTotal = totalPrice;

  const packingCharge = subTotal > 0 ? 250 : 0;

  const shippingCharge = subTotal >= 50000 ? 0 : 500;

  const gst = Math.round(subTotal * 0.18);

  const grandTotal = subTotal + packingCharge + shippingCharge + gst;

  const handleOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all delivery details");
      return;
    }

    const message = encodeURIComponent(`

🛕 NEW ORDER REQUEST

👤 Name:
${customer.name}

📞 Phone:
${customer.phone}

📍 Address:
${customer.address}


----------------------------


${cartItems
  .map(
    (item) => `

• ${item.name}

Qty:
${item.qty}

Price:
${item.price}

`,
  )
  .join("")}


----------------------------


Total Items:
${totalItems}


Subtotal:
₹${subTotal.toLocaleString("en-IN")}


Packing:
₹${packingCharge.toLocaleString("en-IN")}


Shipping:
₹${shippingCharge.toLocaleString("en-IN")}


GST:
₹${gst.toLocaleString("en-IN")}


Grand Total:
₹${grandTotal.toLocaleString("en-IN")}

`);

    window.open(`https://wa.me/918690909918?text=${message}`, "_blank");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">
          <ShoppingCartOutlined />
          Shopping Cart
        </h1>

        <p className="cart-subtitle">Review your selected marble creations.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h2>Your Cart Is Empty 😔</h2>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image || item.img}
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/140";
                }}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <h4 className="cart-item-price">{item.price}</h4>
              </div>

              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  -
                </button>

                <span className="qty-value">{item.qty}</span>

                <button
                  className="qty-btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => {
                  for (let i = 0; i < item.qty; i++) {
                    dispatch(removeFromCart(item.id));
                  }
                }}
              >
                <DeleteOutlined />
                Remove
              </button>
            </div>
          ))}

          {/* CUSTOMER DETAILS */}
          <div className="delivery-card">
            <h2>Delivery Details</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  name: e.target.value,
                })
              }
              className="cart-input"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
              className="cart-input"
            />

            <textarea
              rows="4"
              placeholder="Delivery Address"
              value={customer.address}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: e.target.value,
                })
              }
              className="cart-input"
            />
          </div>

          {/* SUMMARY */}
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{subTotal.toLocaleString("en-IN")}</strong>
            </div>

            <div className="summary-row">
              <span>Packing Charges</span>
              <strong>₹{packingCharge.toLocaleString("en-IN")}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping Charges</span>
              <strong className={shippingCharge === 0 ? "free-tag" : ""}>
                {shippingCharge === 0
                  ? "FREE"
                  : `₹${shippingCharge.toLocaleString("en-IN")}`}
              </strong>
            </div>

            <div className="summary-row">
              <span>GST (18%)</span>
              <strong>₹{gst.toLocaleString("en-IN")}</strong>
            </div>

            <hr className="summary-divider" />

            <div className="grand-total-row">
              <span className="grand-total-label">Grand Total</span>
              <strong className="grand-total-value">
                ₹{grandTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="summary-actions">
              <button className="btn-empty" onClick={() => dispatch(clearCart())}>
                Empty Cart
              </button>

              <button className="btn-order" onClick={handleOrder}>
                <WhatsAppOutlined /> Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}