export default function Services() {
  return (
    <section className="services" id="services">
      <div className="heading" data-aos="fade-up" data-aos-duration="1500">
        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">My Services</h2>
        <h4 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Better Experience</h4>
      </div>
      <div className="services-content">
        <div className="box" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
          <img src="/images/serv.png" alt="Web Designer" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" />
          <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">Web Designer</h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            I specialize in designing attractive user interfaces for web, using modern design principles to ensure a
            satisfying user experience.
          </p>
        </div>
        <div className="box" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
          <img
            src="/images/serv22.png"
            alt="Front-End Developer"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="500"
          />
          <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">Front-End Developer</h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
            I offer top-notch UI development services using modern languages and libraries to create responsive
            interfaces for electronic apps.
          </p>
        </div>
        <div className="box" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
          <img
            src="/images/mobile.png"
            alt="Mobile App Developer"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="700"
          />
          <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">Mobile App Developer</h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
            I deliver high-quality mobile app development using the latest languages and libraries to create
            responsive, seamless applications.
          </p>
        </div>
      </div>
    </section>
  );
}
