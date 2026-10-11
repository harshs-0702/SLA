import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();

  useGSAP(
    () => {
      // Split heading
      const heading = new SplitType(".about-heading", {
        types: "chars",
      });

      // Image Reveal
      gsap.from(".about-image", {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
        },
      });

      // Content Reveal
      gsap.from(".about-content", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
        },
      });

      // Heading Characters
      gsap.from(heading.chars, {
        y: 80,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
      });

      // Paragraph Animation
      gsap.from(".about-content p", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      // Stats Animation
      gsap.from(".about-stats > div", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
      });

      // Counter Animation
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        const target = +counter.dataset.target;

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            onStart: () => counter.classList.remove("is-counted"),
            onComplete: () => counter.classList.add("is-counted"),
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
              toggleActions: "restart none restart none",
            },
          },
        );
      });

      // Parallax Image
      gsap.to(".about-image img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Button Hover
      const btn = document.querySelector(".about-btn");

      btn?.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3,
        });
      });

      btn?.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
        });
      });
    },
    { scope: aboutRef },
  );

  return (
    <section id="about" ref={aboutRef}>
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src="/assets/images/img1.png" alt="About SLA Moorti Art" />
          </div>

          <div className="about-content">
            <span className="section-tag">ABOUT US</span>

            <h2 className="about-heading">
              Crafting Divine
              <span>Marble Masterpieces</span>
            </h2>

            <p>
              At SLA Moorti Art, we specialize in creating timeless marble
              sculptures that blend traditional craftsmanship with artistic
              excellence. From custom temple architecture to handcrafted marble moortis, our
              artisans transform premium stone into spiritual and artistic
              expressions.
            </p>

            <p>
              From custom temple architecture to handcrafted marble moortis, our
              artisans transform premium stone into spiritual and artistic
              expressions.
            </p>

            <div className="about-stats">
              <div>
                <h3 className="counter" data-target="25">
                  0+
                </h3>
                <span>Years Experience</span>
              </div>

              <div>
                <h3 className="counter" data-target="500">
                  0+
                </h3>
                <span>Projects Completed</span>
              </div>

              <div>
                <h3 className="counter" data-target="100">
                  0+
                </h3>
                <span>Client Satisfaction</span>
              </div>
            </div>

            <a href="#" className="about-btn">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
