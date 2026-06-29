// export default function Location() {
//   return (
//     <section id="location" className="map-section">
//       <div className="section-title text-center">
//         <span className="sub-title">Our Location</span>
//         <h2>Visit Our Workshop</h2>
//       </div>

//       <div className="map-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d682.4991405953455!2d75.81167139217388!3d26.92013053448449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2890%20bhindo%20ka%20rasta%20indira%20bazar%201st%20crossing%20jaipur%20%2C302001!5e0!3m2!1sen!2sin!4v1778222982907!5m2!1sen!2sin"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </section>
//   );
// }

export default function Location() {
  return (
    <section id="location" className="map-section">
      <div className="section-title text-center">
        <span className="sub-title">Our Location</span>
        <h2>Visit Sugari Lal Arts</h2>
      </div>

      <div className="map-container">
        <iframe
          title="Sugari Lal Arts Location"
          src="https://maps.google.com/maps?q=Sugari%20Lal%20Arts%202890%20Bhindo%20Ka%20Rasta%20Indira%20Bazar%20Jaipur&t=k&z=19&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}