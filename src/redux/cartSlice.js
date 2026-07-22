// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   reducers: {
//     addToCart: (state, action) => {
//       const exist = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );

//       if (exist) {
//         exist.qty += 1;
//       } else {
//         state.cartItems.push({
//           ...action.payload,
//           qty: 1,
//         });
//       }
//     },

//     removeFromCart: (state, action) => {
//       const exist = state.cartItems.find(
//         (item) => item.id === action.payload
//       );

//       if (!exist) return;

//       if (exist.qty === 1) {
//         state.cartItems = state.cartItems.filter(
//           (item) => item.id !== action.payload
//         );
//       } else {
//         exist.qty -= 1;
//       }
//     },

//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";


const savedCart = JSON.parse(
  localStorage.getItem("cartItems")
) || [];


const initialState = {
  cartItems: savedCart,
};


const saveCart = (items) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(items)
  );
};


const cartSlice = createSlice({

  name: "cart",

  initialState,


  reducers:{


    addToCart:(state,action)=>{

      const product = action.payload;


      const existing =
        state.cartItems.find(
          item => item.id === product.id
        );


      if(existing){

        existing.qty += 1;

      }
      else{

        state.cartItems.push({

          id:product.id,

          name:product.name,

          image:
          product.image || product.img,

          price:product.price,

          qty:1

        });

      }


      saveCart(state.cartItems);

    },



    removeFromCart:(state,action)=>{


      const item =
      state.cartItems.find(
        item=>item.id===action.payload
      );


      if(item){

        if(item.qty>1){

          item.qty -=1;

        }
        else{

          state.cartItems =
          state.cartItems.filter(
            item=>item.id!==action.payload
          );

        }

      }


      saveCart(state.cartItems);


    },



    clearCart:(state)=>{

      state.cartItems=[];

      localStorage.removeItem("cartItems");

    }


  }

});


export const {
addToCart,
removeFromCart,
clearCart

}=cartSlice.actions;



export default cartSlice.reducer;