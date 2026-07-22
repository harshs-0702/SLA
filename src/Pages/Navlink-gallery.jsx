



import { useEffect, useState, useRef } from "react";
import { Row, Col, Tag, Card } from "antd";
import { fetchProducts } from "../api/products";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const { Meta } = Card;

export default function NavlinkGallery() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const sectionRef = useRef(null); // ✅ fixed: "sectionRefc" tha, ab "sectionRef" hai

  useEffect(() => {
    fetchProducts().then((res) => {
      setData(res);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }, []);

  useGSAP(
    () => {
      if (!data.length) return;

      gsap.from(".section-title1", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-title1",
          start: "top 85%",
        },
      });

      gsap.from(sectionRef.current.querySelectorAll(".custom-card"), {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
      dependencies: [data],
    },
  );

  return (
    <section id="products" className="product-section" ref={sectionRef}>
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
                  <div className="image-wrapper">
                    <img alt={item.name} src={item.img} className="card-img" />
                  </div>
                }
              >
                {item.badge && <Tag color="gold">{item.badge}</Tag>}
                <Meta title={item.name} description={item.desc} />
                <div className="price">{item.price}</div>
                <button
                  className="btn-enquire"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${item.id}`);
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


// import { useEffect, useState } from "react";
// import { Row, Col, Tag, Card } from "antd";
// import { fetchProducts } from "../api/products";

// const { Meta } = Card;

// export default function NavlinkGallery() {
//     const [data, setData] = useState([]);

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

//                 <Row gutter={[16, 16]}>
//                     {data.map((item) => (
//                         <Col xs={24} sm={12} md={8} lg={8} key={item.id}>

//                             <Card
//                                 hoverable
//                                 cover={
//                                     <img
//                                         alt={item.name}
//                                         src={item.img}
//                                         style={{ height: 250, objectFit: "cover" }}
//                                         className="product-img"
//                                     />
//                                 }
//                             >
//                                 {item.badge && (
//                                     <Tag color="gold" style={{ marginBottom: 10 }}>
//                                         {item.badge}
//                                     </Tag>
//                                 )}

//                                 <Meta title={item.name} description={item.desc} />

//                                 <div className="price">
//                                     {item.price}
//                                 </div>

//                                 <a href="#" className="btn-enquire">Get Quote</a>

//                                 {/* <button
//                                     type="primary"
//                                     className="btn-enquire"
//                                 >
//                                     Enquire Now
//                                 </button> */}
//                             </Card>

//                         </Col>
//                     ))}
//                 </Row>

//             </div>
//         </section>
//     );
// }
