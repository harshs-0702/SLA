export const categories = {
  "Ganesh Moorti": [
    {
      id: 1,
      name: "Ganesh Moorti",
      desc: "Makrana Marble • 2ft – 4ft",
      price: "₹15,000",
      image: "/assets/images/mahadev.png",
    },
    {
      id: 2,
      name: "Ganesh Moorti",    
      desc: "Makrana Marble • 2ft – 4ft",
      price: "₹15,000",
      image: "/assets/images/img1.png",
    },
    {
      id: 10,
      name: "Ganesh Moorti",    
      desc: "Makrana Marble • 2ft – 4ft",
      price: "₹15,000",
      image: "/assets/images/img1.png",
    },
    {
      id: 11,
      name: "Ganesh Moorti",    
      desc: "Makrana Marble • 2ft – 4ft",
      price: "₹15,000",
      image: "/assets/images/img1.png",
    },
    {
      id: 12,
      name: "Ganesh Moorti",    
      desc: "Makrana Marble • 2ft – 4ft",
      price: "₹15,000",
      image: "/assets/images/img1.png",
    },
  ],
  "Krishna Statue": [
    {
      id: 3,
      name: "Krishna Statue",
      desc: "White Marble • Custom Sizes",
      price: "₹20,000",
      image: "/assets/images/devi.png",
    },
    { 
      id: 4,  
    name: "Krishna Statue",
      desc: "White Marble • Custom Sizes",
      price: "₹20,000",
      image: "/assets/images/devi.png",
    },
  ],
  "Radha Krishna": [
    {
      id: 5,    
  name: "Radha Krishna",
      desc: "Handcrafted • Fine Finish",
      price: "₹25,000",
      image: "/assets/images/img3.jpg",
    },
    {
      id: 6,  
    name: "Radha Krishna",
      desc: "Handcrafted • Fine Finish",
      price: "₹25,000",
      image: "/assets/images/img3.jpg",
    },
  ],
  "Shiva Statues": [
    {
      id: 7,
      name: "Shiv Parivar",
      desc: "Wall Art • Custom Design",
      price: "₹30,000",
      image: "/assets/images/mahadev.png",
    },
  ],
  "Hanuman Ji": [
    {
      id: 8,
      name: "Hanuman Ji",
      desc: "Temple Work • 3ft+",
      price: "₹18,000",
      image: "/assets/images/Hanuman ji.webp",
    },
  ],
  "Buddha Statue": [  
  {
      id: 9,
      name: "Buddha Statue",  
      desc: "Decor Art • Smooth Finish",
      price: "₹12,000",
      image: "/assets/images/img6.png",
    },
  ],
};


// export const fetchProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(categories);
//     }, 0); // simulate delay
//   });
// };


export const fetchCategoryProducts = (categoryName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!categoryName || categoryName === "all") {
        resolve(Object.values(categories).flat());
        return;
      }

      const products = categories[categoryName];

      if (products) {
        resolve(products);
      } else {
        reject(new Error("Category not found"));
      }
    }, 0);
  });
};