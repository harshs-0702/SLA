// export default function Contact() {
//   return (
//     <div>
//       <section id="contact" className="contact-section">
//         <div className="container">
//           <div className="contact-wrapper">
//             <div className="contact-info">
//               <h2>Get in Touch</h2>

//               <p>
//                 Have an idea for a custom marble piece? Our team is here to
//                 guide you from concept to creation with precision craftsmanship
//                 and timeless artistry.
//               </p>

//               <div className="contact-details">
//                 <div className="item">
//                   <i className="fas fa-phone-alt"></i>
//                   <span>+91 9829009918, +91 8690909918</span>
//                 </div>

//                 <div className="item">
//                   <i className="fas fa-globe"></i>
//                   <span>www.slamoortiart.com</span>
//                 </div>

//                 <div className="item">
//                   <i className="fas fa-map-marker-alt"></i>
//                   <span>
//                     2890, Bhindo ka Rasta, near Indra bazar, 5th Crossing,
//                     Chandpole Bazar, Indira Bazar, Pink City, Jaipur, Rajasthan
//                     302001
//                   </span>
//                 </div>

//                 <div className="item">
//                   <i className="fas fa-map-pin"></i>
//                   <span>Gopinath Marg, New Colony, Jaipur</span>
//                 </div>
//               </div>

//               <div className="contact-social">
//                 <a
//                   href="https://www.facebook.com/yourpage"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="facebook"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/sugari_lal_arts/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="instagram"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>

//                 <a
//                   href="https://wa.me/918690909918"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="whatsapp"
//                 >
//                   <i className="fab fa-whatsapp"></i>
//                 </a>

//                 <a
//                   href="https://www.youtube.com/@yourchannel"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="youtube"
//                 >
//                   <i className="fab fa-youtube"></i>
//                 </a>
//               </div>
//             </div>

//             <div className="contact-form">
//               <form>
//                 <div className="form-group">
//                   <input type="text" placeholder="Full Name*" required />
//                 </div>

//                 <div className="form-group">
//                   <input type="email" placeholder="Email Address" />
//                 </div>

//                 <div className="form-group">
//                   <input type="tel" placeholder="Phone Number*" required />
//                 </div>

//                 <div className="form-group">
//                   <textarea
//                     rows="4"
//                     placeholder="Tell us about your requirement"
//                   ></textarea>
//                 </div>

//                 <button type="submit" className="btn-submit">
//                   Send Inquiry
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const contactRef = useRef(null);

//   useGSAP(
//     () => {
//       // Left Side Animation
//       gsap.from(".contact-info", {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: "#contact",
//           start: "top 75%",
//         },
//       });

//       // Form Animation
//       gsap.from(".contact-form", {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: "#contact",
//           start: "top 75%",
//         },
//       });

//       // Contact Details Animation
//       gsap.from(".contact-details .item", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".contact-details",
//           start: "top 85%",
//         },
//       });

//       // Form Fields Animation
//       gsap.from(".form-group", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".contact-form",
//           start: "top 85%",
//         },
//       });

//       // Button Animation
//       gsap.from(".btn-submit", {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".btn-submit",
//           start: "top 90%",
//         },
//       });

//       // Floating Social Icons
//       gsap.to(".contact-social a", {
//         y: -8,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.15,
//         ease: "sine.inOut",
//       });

//       // Contact Section Parallax
//       gsap.from("#contact", {
//         backgroundPositionY: "-100px",
//         ease: "none",
//         scrollTrigger: {
//           trigger: "#contact",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       ScrollTrigger.refresh();
//     },
//     { scope: contactRef },
//   );

//   return (
//     <section id="contact" className="contact-section" ref={contactRef}>
//       <div className="container">
//         <div className="contact-wrapper">
//           {/* Left Side */}
//           <div className="contact-info">
//             <h2>Get in Touch</h2>

//             <p>
//               Have an idea for a custom marble piece? Our team is here to guide
//               you from concept to creation with precision craftsmanship and
//               timeless artistry.
//             </p>

//             <div className="contact-details">
//               <div className="item">
//                 <i className="fas fa-phone-alt"></i>
//                 <span>+91 9829009918, +91 8690909918</span>
//               </div>

//               <div className="item">
//                 <i className="fas fa-globe"></i>
//                 <span>www.sugarilalarts.com</span>
//               </div>

//               <div className="item">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <span>
//                   2890, Bhindo ka Rasta, near Indra Bazar, 5th Crossing,
//                   Chandpole Bazar, Indira Bazar, Pink City, Jaipur, Rajasthan
//                   302001
//                 </span>
//               </div>

//               <div className="item">
//                 <i className="fas fa-map-pin"></i>
//                 <span>Gopinath Marg, New Colony, Jaipur</span>
//               </div>
//             </div>

//             <div className="contact-social">
//               <a
//                 href="https://www.facebook.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="facebook"
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>

//               <a
//                 href="https://www.instagram.com/sugari_lal_arts/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="instagram"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>

//               <a
//                 href="https://wa.me/918690909918"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="whatsapp"
//               >
//                 <i className="fab fa-whatsapp"></i>
//               </a>

//               <a
//                 href="https://www.youtube.com/@yourchannel"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="youtube"
//               >
//                 <i className="fab fa-youtube"></i>
//               </a>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="contact-form">
//             <form>
//               <div className="form-group">
//                 <input type="text" placeholder="Full Name*" required />
//               </div>

//               <div className="form-group">
//                 <input type="email" placeholder="Email Address" />
//               </div>

//               <div className="form-group">
//                 <input type="tel" placeholder="Phone Number*" required />
//               </div>

//               <div className="form-group">
//                 <textarea
//                   rows="4"
//                   placeholder="Tell us about your requirement"
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn-submit">
//                 Send Inquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const contactRef = useRef(null);

//   // FORM STATE
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       alert(data.message || "Message sent successfully");

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (error) {
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // GSAP ANIMATION
//   useGSAP(
//     () => {
//       gsap.from(".contact-info", {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: "#contact",
//           start: "top 75%",
//         },
//       });

//       gsap.from(".contact-form", {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: "#contact",
//           start: "top 75%",
//         },
//       });

//       gsap.from(".contact-details .item", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".contact-details",
//           start: "top 85%",
//         },
//       });

//       gsap.from(".form-group", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".contact-form",
//           start: "top 85%",
//         },
//       });

//       gsap.from(".btn-submit", {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".btn-submit",
//           start: "top 90%",
//         },
//       });

//       gsap.to(".contact-social a", {
//         y: -8,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.15,
//         ease: "sine.inOut",
//       });

//       ScrollTrigger.refresh();
//     },
//     { scope: contactRef }
//   );

//   return (
//     <section id="contact" className="contact-section" ref={contactRef}>
//       <div className="container">
//         <div className="contact-wrapper">

//           {/* LEFT SIDE */}
//           <div className="contact-info">
//             <h2>Get in Touch</h2>

//             <p>
//               Have an idea for a custom marble piece? Our team is here to guide
//               you from concept to creation.
//             </p>

//             <div className="contact-details">
//               <div className="item">
//                 <i className="fas fa-phone-alt"></i>
//                 <span>+91 9829009918, +91 8690909918</span>
//               </div>

//               <div className="item">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <span>
//                   2890, Bhindo ka Rasta, Indira Bazar, Jaipur, Rajasthan 302001
//                 </span>
//               </div>
//             </div>

//             {/* SOCIAL */}
//             <div className="contact-social">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="https://www.instagram.com/sugari_lal_arts/">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="https://wa.me/918690909918">
//                 <i className="fab fa-whatsapp"></i>
//               </a>
//               <a href="#"><i className="fab fa-youtube"></i></a>
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div className="contact-form">
//             <form onSubmit={handleSubmit}>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name*"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={form.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number*"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about your requirement"
//                   value={form.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn-submit" disabled={loading}>
//                 {loading ? "Sending..." : "Send Inquiry"}
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const contactRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send inquiry");
      }

      alert(data.message || "Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".contact-info", {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
          },
        });

        gsap.from(".contact-form", {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
          },
        });

        gsap.from(".contact-details .item", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-details",
            start: "top 85%",
          },
        });

        gsap.from(".form-group", {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        });

        gsap.from(".btn-submit", {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".btn-submit",
            start: "top 90%",
          },
        });

        gsap.to(".contact-social a", {
          y: -8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          stagger: 0.15,
          ease: "sine.inOut",
        });

        ScrollTrigger.refresh();
      }, contactRef);

      return () => ctx.revert();
    },
    { scope: contactRef },
  );

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="container">
        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Have an idea for a custom marble piece? Our team is here to guide
              you from concept to creation.
            </p>

            <div className="contact-details">
              <div className="item">
                <i className="fas fa-phone-alt"></i>
                <span>+91 9829009918, +91 8690909918</span>
              </div>
              <div className="item">
                <i className="fas fa-envelope"></i>
                <span>sugarilalarts@gmail.com</span>
              </div>

              <div className="item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  2890, Bhindo Ka Rasta, Indira Bazar, Jaipur, Rajasthan 302001
                </span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/sugari_lal_arts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://wa.me/918690909918"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirement"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
