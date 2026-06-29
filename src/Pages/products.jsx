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

import { useEffect, useState } from "react";
import { Row, Col, Tag, Card } from "antd";
import { fetchProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function NavlinkGallery() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetchProducts();
        setData(res);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section id="products" className="product-section">
      <div className="container">
        <div className="section-title1 text-center">
          <h2>Featured Creations</h2>
          <p>Handcrafted marble idols & custom stone art</p>
        </div>

        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} key={item.id}>
              <Card
                hoverable
                className="custom-card"
                onClick={() => navigate(`/product/${item.id}`)}
                cover={
                  <img src={item.img} alt={item.name} className="card-img" />
                }
              >
                {item.badge && (
                  <Tag color="gold" style={{ marginBottom: 10 }}>
                    {item.badge}
                  </Tag>
                )}

                <Meta title={item.name} description={item.desc} />

                <div className="price">{item.price}</div>

                <button
                  className="btn-enquire"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${item.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  Enquire Now
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
