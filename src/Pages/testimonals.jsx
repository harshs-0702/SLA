// "use client";

// import { useEffect } from "react";
// import Swiper from "swiper";
// import { Pagination, Autoplay } from "swiper/modules";

// // import styles
// import "swiper/css";
// import "swiper/css/pagination";

// export default function Testimonals() {

//     useEffect(() => {
//         const swiper = new Swiper(".testimonialSwiper", {
//             modules: [Pagination, Autoplay],
//             loop: true,
//             spaceBetween: 30,
//             slidesPerView: 1,

//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false,
//             },

//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },

//             breakpoints: {
//                 768: {
//                     slidesPerView: 1,
//                 },
//                 1024: {
//                     slidesPerView: 1,
//                 },
//             },
//         });

//         return () => {
//             swiper.destroy(true, true);
//         };
//     }, []);

//     return (
//         <div>
//             <section id="testimonials" className="testimonial-section">
//                 <div className="container">

//                     <div className="section-title text-center">
//                         <span className="sub-title">Our Testimonials</span>
//                         <h2>What Our Clients Say</h2>
//                     </div>

//                     <div className="swiper testimonialSwiper">
//                         <div className="swiper-wrapper">

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “The craftsmanship is outstanding. Every detail in the moorti
//                                         reflects true dedication and skill. Highly recommended.”
//                                     </p>
//                                     <h5>— Rajesh Sharma</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “We ordered a custom Radha Krishna statue and the result was
//                                         beyond expectations. Truly beautiful work.”
//                                     </p>
//                                     <h5>— Priya Mehta</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Premium quality marble and smooth finishing. The statue looks
//                                         even better than what we imagined.”
//                                     </p>
//                                     <h5>— Ankit Verma</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Very professional team and timely delivery. The temple work
//                                         they created for us is simply divine.”
//                                     </p>
//                                     <h5>— Jasveer Singh</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Amazing detailing and finishing. You can clearly see the
//                                         dedication in every carving.”
//                                     </p>
//                                     <h5>— Asmita Patel</h5>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="swiper-pagination"></div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Section Title
      gsap.from(".testimonial-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top 80%",
        },
      });

      // Testimonial Card
      gsap.from(".testimonial-box", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonialSwiper",
          start: "top 80%",
        },
      });

      // Floating Stars
      gsap.to(".stars", {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="testimonials" className="testimonial-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title text-center testimonial-title">
          <span className="sub-title">Our Testimonials</span>

          <h2>What Our Clients Say</h2>
        </div>

        <Swiper
          className="testimonialSwiper"
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>

              <p>
                The craftsmanship is outstanding. Every detail in the moorti
                reflects true dedication and skill. Highly recommended.
              </p>

              <h5>— Rajesh Sharma</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>

              <p>
                We ordered a custom Radha Krishna statue and the result was
                beyond expectations.
              </p>

              <h5>— Priya Mehta</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>

              <p>
                Premium quality marble and smooth finishing. The statue looks
                even better than imagined.
              </p>

              <h5>— Ankit Verma</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>

              <p>
                Very professional team and timely delivery. Temple work is
                simply divine.
              </p>

              <h5>— Jasveer Singh</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <div className="stars">★★★★★</div>

              <p>
                Amazing detailing and finishing. You can clearly see dedication
                in every carving.
              </p>

              <h5>— Asmita Patel</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

// export default function Testimonals() {
//     return (
//         <div>
//             <section id="testimonials" className="testimonial-section">
//                 <div className="container">

//                     <div className="section-title text-center">
//                         <span className="sub-title">Our Testimonials</span>
//                         <h2>What Our Clients Say</h2>
//                     </div>

//                     <div className="swiper testimonialSwiper">
//                         <div className="swiper-wrapper">

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “The craftsmanship is outstanding. Every detail in the moorti
//                                         reflects true dedication and skill. Highly recommended.”
//                                     </p>
//                                     <h5>— Rajesh Sharma</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “We ordered a custom Radha Krishna statue and the result was
//                                         beyond expectations. Truly beautiful work.”
//                                     </p>
//                                     <h5>— Priya Mehta</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Premium quality marble and smooth finishing. The statue looks
//                                         even better than what we imagined.”
//                                     </p>
//                                     <h5>— Ankit Verma</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Very professional team and timely delivery. The temple work
//                                         they created for us is simply divine.”
//                                     </p>
//                                     <h5>— Jasveer Singh</h5>
//                                 </div>
//                             </div>

//                             <div className="swiper-slide">
//                                 <div className="testimonial-box">
//                                     <div className="stars">★★★★★</div>
//                                     <p>
//                                         “Amazing detailing and finishing. You can clearly see the
//                                         dedication in every carving.”
//                                     </p>
//                                     <h5>— Asmita Patel</h5>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="swiper-pagination"></div>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }
