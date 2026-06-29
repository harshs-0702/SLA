// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// function Hero() {
//   return (
//     <section id="hero">
//       <div className="hero-box">
//         <div className="left"></div>

//         <div className="right">
//           <Swiper
//             className="heroSwiper"
//             modules={[Autoplay]}
//             loop={true}
//             speed={1500}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//           >
//             <SwiperSlide>
//               <div className="slide-img special-slide">
//                 <img
//                   className="bg-img"
//                   src="\assets\images\mahadev.png"
//                   alt=""
//                 />
//                 <img
//                   className="front-img"
//                   src="\assets\images\devi.png"
//                   alt=""
//                 />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="slide-img">
//                 <img src="\assets\images\devi.png" alt="" />
//               </div>
//             </SwiperSlide>

//             {/* <SwiperSlide>
//               <div className="slide-img">
//                 <img src="\public\assets\images\img2.png" alt="" />
//               </div>
//             </SwiperSlide> */}

//             <SwiperSlide>
//               <div className="slide-img">
//                 <img src="\assets\images\radhagovind.png" alt="" />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>

//       <div className="container h-100 position-relative">
//         <div className="hero-content">
//           <div className="hero-intro">
//             <h1 className="stroke">SUGARI</h1>
//             <h1>LAL ARTS</h1>
//             <p>Divine Marble Creations</p>
//           </div>

//           <div className="line_wrapper">
//             <div className="line"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "swiper/css";

function Hero() {
  const heroRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".stroke", {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".main-title",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .from(
          ".hero-desc",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".line",
          {
            width: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".heroSwiper",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1",
        );

      // Floating Animation
      gsap.to(".bg-img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".front-img", {
        y: -30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".slide-img img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef },
  );

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-box">
        <div className="left"></div>

        <div className="right">
          <Swiper
            className="heroSwiper"
            modules={[Autoplay]}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="slide-img special-slide">
                <img
                  className="bg-img"
                  src="/assets/images/mahadev.png"
                  alt="Mahadev"
                />

                <img
                  className="front-img"
                  src="/assets/images/devi.png"
                  alt="Devi"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-img">
                <img src="/assets/images/devi.png" alt="Devi" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-img">
                <img src="/assets/images/radhagovind.png" alt="Radha Govind" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container h-100 position-relative">
        <div className="hero-content">
          <div className="hero-intro">
            <h1 className="stroke">SUGARI</h1>

            <h1 className="main-title">LAL ARTS</h1>

            <p className="hero-desc">Divine Marble Creations</p>
          </div>

          <div className="line_wrapper">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// function Hero() {
//     return (
//         <div>
//             <section id="hero">
//                 <div className="hero-box">
//                     <div className="left"></div>
//                     <div className="right">
//                         <div className="swiper heroSwiper">
//                             <div className="swiper-wrapper">
//                                 <div className="swiper-slide">
//                                     <div className="slide-img special-slide">
//                                         <img className="bg-img" src="assets/image/img1.png" />
//                                         <img className="front-img"
//                                             src="\public\assets\images\img2.png" />
//                                     </div>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <div className="slide-img">
//                                         <img src="\public\assets\images\img3.png" />
//                                     </div>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <div className="slide-img">
//                                         <img src="\public\assets\images\img2.png" />
//                                     </div>
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <div className="slide-img">
//                                         <img src="\public\assets\images\Ram_darbar.jpg"/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container h-100 position-relative">
//                     <div className="hero-content">
//                         <div className="hero-intro">
//                             <h1 className="stroke">SUGRI</h1>
//                             <h1>LAL ART</h1>
//                             <p>Divine Marble Creations</p>
//                         </div>
//                         <div className="line_wrapper">
//                             <div className="line"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Hero
