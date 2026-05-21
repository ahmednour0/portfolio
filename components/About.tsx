export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content" data-aos="fade-up" data-aos-duration="1500">
        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">About Me</h2>
        <h4 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
          Hello, I&apos;M Here To Help In Your Next Project
        </h4>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
          I&apos;m a Front-End Developer with knowledge in designing, developing, and deploying web and mobile applications
          using HTML5, CSS3, Bootstrap, Tailwind CSS, Material UI, JavaScript, Typescript, React.js, Next.js, React
          Native and Seeking a challenging opportunity as a Software Engineer in a company with a good reputation that
          will add to my Knowledge, Skills, and Experience on a day-to-day basis.
        </p>
        <form
          target="_blank"
          method="get"
          action="https://drive.google.com/drive/folders/1YEz-nD7dUIhBEuR8WmtJkbmHe6nKGDNz?usp=sharing"
        >
          <button className="btn" type="submit" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800">
            My Resume
          </button>
        </form>
        <div
          className="social-icons"
          style={{ paddingTop: "10px" }}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmednoureldeen/">
            <i className="bx bxl-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0">
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/images/iti.jpg"
          className="about-img"
          style={{ borderRadius: "8px", width: "70%", height: "70%" }}
          alt="Profile"
        />
      </div>
    </section>
  );
}
