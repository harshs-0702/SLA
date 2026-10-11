import { useEffect } from "react";

export default function useCustomScripts() {
  useEffect(() => {

    // TESTIMONIAL SLIDER (without swiper)
    const testimonials = document.querySelectorAll(".testimonial-item");
    let index = 0;

    function showTestimonial() {
      testimonials.forEach(item => item.classList.remove("active"));
      if (testimonials[index]) {
        testimonials[index].classList.add("active");
      }

      index++;
      if (index >= testimonials.length) index = 0;
    }

    const interval = setInterval(showTestimonial, 3000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return null;
}