// export default function Products() {
//     return (
//         <div>
//             <section id="products" className="product-section">
//                 <div className="container">

//                     <div className="section-title text-center">
//                         <h2>Featured Creations</h2>
//                         <p>Handcrafted marble idols & custom stone art</p>
//                     </div>

//                     <div className="product-grid">

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\assets\images\img1.png" alt="" />
//                                 <span className="badge">Best Seller</span>
//                             </div>
//                             <div className="product-content">
//                                 <h5>Ganesh Moorti</h5>
//                                 <p>Makrana Marble • 2ft – 4ft</p>
//                                 <div className="price">Starts from ₹15,000</div>
//                                 <a href="#" className="btn-enquire">Enquire Now</a>
//                             </div>
//                         </div>

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\assets\images\img2.jpg" alt="" />
//                             </div>
//                             <div className="product-content">
//                                 <h5>Krishna Statue</h5>
//                                 <p>White Marble • Custom Sizes</p>
//                                 <div className="price">Price on Request</div>
//                                 <a href="#" className="btn-enquire">Get Quote</a>
//                             </div>
//                         </div>

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\assets\images\img3.jpg" alt="" />
//                                 <span className="badge gold">Premium</span>
//                             </div>
//                             <div className="product-content">
//                                 <h5>Radha Krishna</h5>
//                                 <p>Handcrafted • Fine Finish</p>
//                                 <div className="price">Starts from ₹25,000</div>
//                                 <a href="#" className="btn-enquire">Enquire Now</a>
//                             </div>
//                         </div>

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\assets\images\Ram_darbar.jpg" alt="" />
//                             </div>
//                             <div className="product-content">
//                                 <h5>Ram Darbar Panel</h5>
//                                 <p>Wall Art • Custom Design</p>
//                                 <div className="price">Price on Request</div>
//                                 <a href="#" className="btn-enquire">Get Quote</a>
//                             </div>
//                         </div>

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\assets\images\Hanuman ji.webp" alt="" />
//                             </div>
//                             <div className="product-content">
//                                 <h5>Hanuman Ji</h5>
//                                 <p>Temple Work • 3ft+</p>
//                                 <div className="price">Starts from ₹18,000</div>
//                                 <a href="#" className="btn-enquire">Enquire Now</a>
//                             </div>
//                         </div>

//                         <div className="product-card">
//                             <div className="product-img">
//                                 <img src="\public\assets\images\img6.png" alt="" />
//                             </div>
//                             <div className="product-content">
//                                 <h5>Buddha Statue</h5>
//                                 <p>Decor Art • Smooth Finish</p>
//                                 <div className="price">Starts from ₹12,000</div>
//                                 <a href="#" className="btn-enquire">Enquire Now</a>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

// import { useEffect, useState } from "react";
// import { Row, Col, Tag, Card } from "antd";
// import { fetchProducts } from "../api/products";
// import { useNavigate } from "react-router-dom";

// const { Meta } = Card;

// export default function NavlinkGallery() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchProducts().then((res) => setData(res));
//     }, []);

//     return (
//         <section id="products" className="product-section">
//             <div className="container">

//                 <div className="section-title1 text-center">
//                     <h2>Featured Creations</h2>
//                     <p>Handcrafted marble idols & custom stone art</p>
//                 </div>

//                 <Row gutter={[20, 20]}>
//                     {data.map((item) => (
//                         <Col xs={24} sm={12} md={12} lg={8} xl={8} key={item.id}>

//                             <Card
//                                 hoverable
//                                 className="custom-card"
//                                 onClick={() => navigate(`/product/${item.id}`)}  // ✅ CLICK HERE
//                                 cover={
//                                     <img
//                                         alt={item.name}
//                                         src={item.img}
//                                         className="card-img"
//                                     />
//                                 }
//                             >
//                                 {item.badge && (
//                                     <Tag color="gold">{item.badge}</Tag>
//                                 )}

//                                 <Meta
//                                     title={item.name}
//                                     description={item.desc}
//                                 />

//                                 <div className="price">
//                                     {item.price}
//                                 </div>

//                                 <button
//                                     type="primary"
//                                     block
//                                     className="btn-enquire"
//                                     onClick={(e) => {
//                                         e.stopPropagation(); // ✅ prevent card click
//                                         navigate(`/product/${item.id}`);
//                                     }}
//                                 >
//                                     Enquire Now
//                                 </button>

//                             </Card>

//                         </Col>
//                     ))}
//                 </Row>

//             </div>
//         </section>
//     );
// }

// import { useEffect, useState } from "react";
// import { Row, Col, Tag, Card } from "antd";
// import { fetchProducts } from "../api/products";
// import { useNavigate } from "react-router-dom";

// const { Meta } = Card;

// export default function NavlinkGallery() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const res = await fetchProducts();
//         setData(res);
//       } catch (error) {
//         console.error("Failed to load products:", error);
//       }
//     };

//     loadProducts();
//   }, []);

//   return (
//     <section id="products" className="product-section">
//       <div className="container">
//         <div className="section-title1 text-center">
//           <h2>Featured Creations</h2>
//           <p>Handcrafted marble idols & custom stone art</p>
//         </div>

//         <Row gutter={[20, 20]}>
//           {data.map((item) => (
//             <Col xs={24} sm={12} md={12} lg={8} xl={8} key={item.id}>
//               <Card
//                 hoverable
//                 className="custom-card"
//                 onClick={() => navigate(`/product/${item.id}`)}
//                 cover={
//                   <img src={item.img} alt={item.name} className="card-img" />
//                 }
//               >
//                 {item.badge && (
//                   <Tag color="gold" style={{ marginBottom: 10 }}>
//                     {item.badge}
//                   </Tag>
//                 )}

//                 <Meta title={item.name} description={item.desc} />

//                 <div className="price">{item.price}</div>

//                 <button
//                   className="btn-enquire"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/product/${item.id}`);
//                     window.scrollTo(0, 0);
//                   }}
//                 >
//                   Enquire Now
//                 </button>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </section>
//   );
// }











import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  memo,
} from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ---------- utils ---------- */
const pad = (n) => String(n).padStart(2, "0");

const parsePrice = (price) => {
  if (typeof price !== "string") return NaN;
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : NaN;
};

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A to Z" },
];

/* ---------- icons ---------- */
const IconSearch = (p) => (
  <svg viewBox="0 0 20 20" width="16" height="16" {...p}>
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
    <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconX = (p) => (
  <svg viewBox="0 0 20 20" width="16" height="16" {...p}>
    <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" />
    <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" />
  </svg>
);

/* ---------- card ---------- */
const PlateCard = memo(function PlateCard({
  item,
  index,
  onNavigate,
  onSpotlight,
}) {
  return (
    <article
      className="sg-plate"
      onMouseMove={onSpotlight}
      onClick={() => onNavigate(item.id)}
      tabIndex={0}
    >
      {/* <span className="sg-number">No. {pad(index + 1)}</span> */}

      <div className="sg-media">
        <img src={item.img} alt={item.name} loading="lazy" />

        <svg className="sg-frame" viewBox="0 0 100 100">
          <rect x="1" y="1" width="98" height="98" />
        </svg>
      </div>

      {item.badge && <span className="sg-badge">{item.badge}</span>}

      <h3 className="sg-name">{item.name}</h3>
      <p className="sg-desc">{item.desc}</p>

      <div className="sg-footer">
        <span className="sg-price">{item.price}</span>
        <button className="sg-enquire">View Piece →</button>
      </div>
    </article>
  );
});

/* ---------- main ---------- */
export default function SculptureGallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const navigate = useNavigate();
  const rootRef = useRef(null);
  const gridRef = useRef(null);

  /* ---------- load data ---------- */
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchProducts();
      setData(Array.isArray(res) ? res : []);
      setLoading(false);
    })();
  }, []);

  /* ---------- search debounce ---------- */
  useEffect(() => {
    const t = setTimeout(
      () => setSearch(searchInput.trim().toLowerCase()),
      250
    );
    return () => clearTimeout(t);
  }, [searchInput]);

  /* ---------- filter ---------- */
  const visible = useMemo(() => {
    let list = data;

    if (category !== "All") {
      list = list.filter((i) => i.badge === category);
    }

    if (search) {
      list = list.filter(
        (i) =>
          i.name?.toLowerCase().includes(search) ||
          i.desc?.toLowerCase().includes(search)
      );
    }

    if (sortBy === "featured") return list;

    const arr = list.map((i) => ({ i, p: parsePrice(i.price) }));

    arr.sort((a, b) => {
      if (sortBy === "name-asc")
        return a.i.name.localeCompare(b.i.name);

      if (Number.isNaN(a.p)) return 1;
      if (Number.isNaN(b.p)) return -1;

      return sortBy === "price-asc" ? a.p - b.p : b.p - a.p;
    });

    return arr.map((x) => x.i);
  }, [data, category, search, sortBy]);

  /* ---------- GSAP ---------- */
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".sg-plate", {
          opacity: 0,
          y: 40,
          stagger: 0.08,
          duration: 0.8,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }, rootRef);

      return () => ctx.revert();
    },
    { dependencies: [data] }
  );

  /* ---------- spotlight ---------- */
  const handleSpotlight = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`
    );
    el.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`
    );
  }, []);

  const goToProduct = useCallback(
    (id) => {
      navigate(`/product/${id}`);
      window.scrollTo(0, 0);
    },
    [navigate]
  );

  return (
    <section className="sg-section" ref={rootRef}>
      <div className="sg-container">

        {/* heading */}
        <div className="sg-hero">
          <p className="sg-eyebrow">Featured Creations</p>

          <h1 className="sg-title">
            Where stone becomes spirit
          </h1>

          <p className="sg-sub">
            Handcarved marble idols & custom stone art, crafted with precision and heritage.
          </p>
        </div>

        {/* toolbar */}
        <div className="sg-toolbar">
          <div className="sg-tabs">
            {["All", ...new Set(data.map((d) => d.badge).filter(Boolean))].map(
              (c) => (
                <button key={c} onClick={() => setCategory(c)}>
                  {c}
                </button>
              )
            )}
          </div>

          <div className="sg-controls">
            <div className="sg-search">
              <IconSearch />
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
              />
              {searchInput && (
                <button onClick={() => setSearchInput("")}>
                  <IconX />
                </button>
              )}
            </div>

            <select
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* grid */}
        <div className="sg-grid" ref={gridRef}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="sg-plate">
                  Loading...
                </div>
              ))
            : visible.map((item, i) => (
                <PlateCard
                  key={item.id}
                  item={item}
                  index={i}
                  onNavigate={goToProduct}
                  onSpotlight={handleSpotlight}
                />
              ))}
        </div>
      </div>
    </section>
  );
}