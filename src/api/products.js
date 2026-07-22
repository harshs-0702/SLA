const products = [
  {
    id: 1,
    name: "Ganesh Moorti",
    desc: "Makrana Marble • 2ft – 4ft",
    price: "₹15,000",
    img: "/assets/images/img1.png",
  },
  {
    id: 2,
    name: "Krishna Statue",
    desc: "White Marble • Custom Sizes",
    price: "₹20,000",
    img: "/assets/images/devi.png",
  },
  {
    id: 3,
    name: "Radha Krishna",
    desc: "Handcrafted • Fine Finish",
    price: "₹25,000",
    img: "/assets/images/img3.jpg",
  },
  {
    id: 4,
    name: "Shiv Parivar",
    desc: "Wall Art • Custom Design",
    price: "₹30,000",
    img: "/assets/images/mahadev.png"
  },
  {
    id: 5,
    name: "Hanuman Ji",
    desc: "Temple Work • 3ft+",
    price: "₹18,000",
    img: "/assets/images/Hanuman ji.webp"
  },
  {
    id: 6,
    name: "Buddha Statue",
    desc: "Decor Art • Smooth Finish",
    price: "₹12,000",
    img: "/assets/images/Ram_darbar.jpg"
  },
  {
    id: 7,
    name: "Ganesh Moorti",
    desc: "Makrana Marble • 2ft – 4ft",
    price: "₹15,000",
    img: "/assets/images/img1.png",
  },
  {
    id: 8,
    name: "Krishna Statue",
    desc: "White Marble • Custom Sizes",
    price: "₹20,000",
    img: "/assets/images/devi.png"
  },
  {
    id: 9,
    name: "Radha Krishna",
    desc: "Handcrafted • Fine Finish",
    price: "₹25,000",
    img: "/assets/images/img3.jpg",
  },
  {
    id: 10,
    name: "Shiv Parivar",
    desc: "Wall Art • Custom Design",
    price: "₹30,000",
    img: "/assets/images/mahadev.png"
  },
  {
    id: 11,
    name: "Hanuman Ji",
    desc: "Temple Work • 3ft+",
    price: "₹18,000",
    img: "/assets/images/Hanuman ji.webp"
  },
  {
    id: 12,
    name: "Buddha Statue",
    desc: "Decor Art • Smooth Finish",
    price: "₹12,000",
    img: "/assets/images/Ram_darbar.jpg"
  },
  {
    id: 13,
    name: "Ganesh Moorti",
    desc: "Makrana Marble • 2ft – 4ft",
    price: "₹15,000",
    img: "/assets/images/img1.png",
  },
  {
    id: 14,
    name: "Krishna Statue",
    desc: "White Marble • Custom Sizes",
    price: "₹20,000",
    img: "/assets/images/devi.png"
  },
  {
    id: 15,
    name: "Radha Krishna",
    desc: "Handcrafted • Fine Finish",
    price: "₹25,000",
    img: "/assets/images/img3.jpg",
  },
  {
    id: 16,
    name: "Shiv Parivar",
    desc: "Wall Art • Custom Design",
    price: "₹30,000",
    img: "/assets/images/mahadev.png"
  },
  {
    id: 17,
    name: "Hanuman Ji",
    desc: "Temple Work • 3ft+",
    price: "₹18,000",
    img: "/assets/images/Hanuman ji.webp"
  },
  {
    id: 18,
    name: "Buddha Statue",
    desc: "Decor Art • Smooth Finish",
    price: "₹12,000",
    img: "/assets/images/Ram_darbar.jpg"
  }
];

// fake API function
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 0); // simulate delay
  });
};