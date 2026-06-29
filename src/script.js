import { useEffect } from "react";

export default function useCustomScripts() {
  useEffect(() => {

    // COUNTER ANIMATION
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {

        const duration = 1500;
        const steps = 60;
        const intervalTime = duration / steps;

        counters.forEach((counter) => {
          let target = +counter.dataset.target;
          let count = 0;
          let increment = target / steps;

          let interval = setInterval(() => {
            count += increment;

            if (count >= target) {
              counter.innerText = target + "+";
              clearInterval(interval);
            } else {
              counter.innerText = Math.floor(count);
            }
          }, intervalTime);
        });
      }
    }, { threshold: 0.6 });

    const about = document.querySelector("#about");
    if (about) observer.observe(about);

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