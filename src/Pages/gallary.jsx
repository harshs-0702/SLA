// function Gallary() {
//     return (
//         <div>
//             <section id="gallery" className="gallery-section">
//                 <div className="container">

//                     <div className="section-title text-center">
//                         <h2>Our Creations</h2>
//                         <p>Explore divine marble artistry</p>
//                     </div>

//                     <div className="gallery-grid">

//                         <div className="gallery-item">
//                             <img src="\assets\images\img1.png" alt="" />
//                                 <div className="overlay">
//                                     <h5>Ganesh Moorti</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\img2.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Krishna Statue</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item wide">
//                             <img src="\assets\images\img3.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Marble Face</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item wide">
//                             <img src="\assets\images\Ram_darbar.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Ram Darbar</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\Ram_darbar.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Hanuman Ji</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\Hanuman ji.webp" alt="" />
//                                 <div className="overlay">
//                                     <h5>Buddha Art</h5>
//                                 </div>
//                         </div>
//                         <div className="gallery-item">
//                             <img src="\assets\images\img1.png" alt="" />
//                                 <div className="overlay">
//                                     <h5>Ganesh Moorti</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\img2.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Krishna Statue</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item wide">
//                             <img src="\assets\images\img3.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Marble Face</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item wide">
//                             <img src="\assets\images\Ram_darbar.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Ram Darbar</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\Ram_darbar.jpg" alt="" />
//                                 <div className="overlay">
//                                     <h5>Hanuman Ji</h5>
//                                 </div>
//                         </div>

//                         <div className="gallery-item">
//                             <img src="\assets\images\Hanuman ji.webp" alt="" />
//                                 <div className="overlay">
//                                     <h5>Buddha Art</h5>
//                                 </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Gallary

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function Gallary() {
  const galleryRef = useRef();

  useGSAP(
    () => {
      // Split Title
      const title = new SplitType(".gallery-heading", {
        types: "chars",
      });

      // Title Animation
      gsap.from(title.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".gallery-heading",
          start: "top 85%",
        },
      });

      gsap.from(".gallery-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".gallery-subtitle",
          start: "top 85%",
        },
      });

      // Gallery Items Reveal
      gsap.from(".gallery-item", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 80%",
        },
      });

      // Parallax Images
      gsap.utils.toArray(".gallery-item img").forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Hover Effects
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        const image = item.querySelector("img");
        const overlay = item.querySelector(".overlay");

        item.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
          });

          gsap.to(overlay, {
            y: 0,
            opacity: 1,
            duration: 0.4,
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
          });

          gsap.to(overlay, {
            y: 100,
            opacity: 0,
            duration: 0.4,
          });
        });
      });
    },
    { scope: galleryRef },
  );

  return (
    <section id="gallery" className="gallery-section" ref={galleryRef}>
      <div className="container">
        <div className="section-title text-center">
          <h2 className="gallery-heading">Our Creations</h2>

          <p className="gallery-subtitle">Explore divine marble artistry</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/assets/images/img1.png" alt="Ganesh Moorti" />
            <div className="overlay">
              <h5>Ganesh Moorti</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/img2.jpg" alt="Krishna Statue" />
            <div className="overlay">
              <h5>Krishna Statue</h5>
            </div>
          </div>

          <div className="gallery-item wide">
            <img src="/assets/images/img3.jpg" alt="Marble Face" />
            <div className="overlay">
              <h5>Marble Face</h5>
            </div>
          </div>

          <div className="gallery-item wide">
            <img src="/assets/images/Ram_darbar.jpg" alt="Ram Darbar" />
            <div className="overlay">
              <h5>Ram Darbar</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/Ram_darbar.jpg" alt="Hanuman Ji" />
            <div className="overlay">
              <h5>Hanuman Ji</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/Hanuman ji.webp" alt="Buddha Art" />
            <div className="overlay">
              <h5>Buddha Art</h5>
            </div>
          </div>

          {/* Duplicate Items */}
          <div className="gallery-item">
            <img src="/assets/images/img1.png" alt="Ganesh Moorti" />
            <div className="overlay">
              <h5>Ganesh Moorti</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/img2.jpg" alt="Krishna Statue" />
            <div className="overlay">
              <h5>Krishna Statue</h5>
            </div>
          </div>

          <div className="gallery-item wide">
            <img src="/assets/images/img3.jpg" alt="Marble Face" />
            <div className="overlay">
              <h5>Marble Face</h5>
            </div>
          </div>

          <div className="gallery-item wide">
            <img src="/assets/images/Ram_darbar.jpg" alt="Ram Darbar" />
            <div className="overlay">
              <h5>Ram Darbar</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/Ram_darbar.jpg" alt="Hanuman Ji" />
            <div className="overlay">
              <h5>Hanuman Ji</h5>
            </div>
          </div>

          <div className="gallery-item">
            <img src="/assets/images/Hanuman ji.webp" alt="Buddha Art" />
            <div className="overlay">
              <h5>Buddha Art</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallary;
