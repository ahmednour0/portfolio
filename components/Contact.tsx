export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-text" data-aos="fade-up" data-aos-duration="1500">
        <h2>Contact Me</h2>
        <h4>My Contact Details</h4>
        <div className="contact-list">
          <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
            <i className="bx bx-map" /> Maadi, Cairo, Egypt
          </li>
          <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
            <i className="bx bx-envelope" /> ahmednour3123@gmail.com
          </li>
          <li data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
            <i className="bx bx-phone" /> +201141767882
          </li>
        </div>
        <div className="social-icons" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmednoureldeen/">
            <i className="bx bxl-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0">
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
      <div className="contact-form" data-aos="fade-up" data-aos-duration="1500">
        <form action="https://formspree.io/f/mpzgdnea" method="POST">
          <input
            type="text"
            name="name"
            id="nam"
            placeholder="Name"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            required
          />
          <input
            type="email"
            id="ema"
            name="email"
            placeholder="Email"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
            required
          />
          <input
            type="text"
            id="sub"
            name="subject"
            placeholder="Enter Your Subject"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            required
          />
          <textarea
            rows={10}
            id="tex"
            cols={30}
            name="message"
            placeholder="Enter Your Message"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
            required
          />
          <input
            type="submit"
            id="inp"
            value="Send"
            className="send"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1000"
          />
        </form>
      </div>
    </section>
  );
}
