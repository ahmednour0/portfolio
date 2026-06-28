"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Template() {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <section className="portfolio" id="template">
      <div className="heading" data-aos="fade-up" data-aos-duration="1500">
        <h2>My Templates</h2>
      </div>
      <div className="portfolio-content">
        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <img src="/images/MaterialUI.png" alt="" />
          <div className="main-box">
            <a target="_blank" rel="noreferrer" href="https://material-ui-s7ik.onrender.com/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/Templates/tree/Material-UI"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="220" data-aos-anchor-placement="top-bottom">
          <img src="/images/compensatory care.png" alt="" />
          <div className="main-box">
            <a target="_blank" rel="noreferrer" href="https://compensatory-care.netlify.app" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/Compensatory-care"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="340" data-aos-anchor-placement="top-bottom">
          <img src="/images/Bootstrap.jpg" alt="" />
          <div className="main-box">
            <a target="_blank" rel="noreferrer" href="https://bootstrap-temple.netlify.app" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/Templates/tree/bootstrap"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
