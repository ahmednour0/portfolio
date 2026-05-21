"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Portfolio() {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="heading" data-aos="fade-up" data-aos-duration="1500">
        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">My Portfolio</h2>
        <h4 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Some Of My Work</h4>
      </div>
      <div className="portfolio-content" data-aos="fade-up" data-aos-duration="1500">
        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <img src="/images/marinoz.png" id="imag" alt="to do list" width="259" height="194" />
          <div className="main-box">
            <div className="box-text">
              <h5>Marinoz</h5>
            </div>
          </div>
          <p>
            Using Tailwind CSS, Next.js, Marinoz is a platform for marine and tourism services where users can book
            experiences and owners manage listings.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://beta.marinoz.com/en" className="icon-link">
              <i className="bx bx-globe" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
          <img src="/images/bask.png" id="imag" alt="to do list" width="259" height="194" />
          <div className="main-box">
            <div className="box-text">
              <h5>Bask Hospitality</h5>
            </div>
          </div>
          <p>
            Using Tailwind CSS, React.js, TypeScript, Bask is a multi platform vacation rental marketplace focused on
            seaside properties.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://baskeg.com/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
          <img src="/images/home.png" id="imag" alt="to do list" width="259" height="194" />
          <div className="main-box">
            <div className="box-text">
              <h5>Home Masters</h5>
            </div>
          </div>
          <p>
            Using Tailwind CSS, React.js, Home Masters is a real estate platform for buying, selling, and listing
            residential and commercial properties.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://home-masters-dev.on-forge.com/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
          <img src="/images/eventy.png" id="imag" alt="to do list" width="259" height="194" />
          <div className="main-box">
            <div className="box-text">
              <h5>Eventy Academy</h5>
            </div>
          </div>
          <p>
            Using Tailwind CSS, React.js, Eventy is a modern platform offering practical, in-demand skills through
            interactive courses by expert instructors.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://eventy-fe.on-forge.com/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
          <img
            src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1700681687/admin_dashboard_obu2ho.webp"
            id="imag"
            alt="to do list"
          />
          <div className="main-box">
            <div className="box-text">
              <h5>Admin Dashboard</h5>
            </div>
          </div>
          <p>
            Using Material UI, React.js, App that provides administrators with a centralized view of various aspects
            of a system.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://admin-dashboard-87971.web.app/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/react-admin-dashboard"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
          <img src="/images/movies.png" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Movies</h5>
            </div>
          </div>
          <p>
            Using Tailwind CSS and Next.js, application ensures fast and responsive performance including viewing list
            and movie details.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://new-movies-cyan.vercel.app/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0/new-movies" className="icon-link">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700" data-aos-anchor-placement="top-bottom">
          <img src="/images/todo.png" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>To Do List</h5>
            </div>
          </div>
          <p>
            Using React.js, Authentication, Localization and Firebase as Backend, Website helps you to organize,
            schedule and archive tasks easily.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://full-stack-todolist.web.app/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/full-stack-todolist"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800" data-aos-anchor-placement="top-bottom">
          <img src="/images/souqcar.jpg" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Souq Car</h5>
            </div>
          </div>
          <p>
            Using Bootstrap, React.js, Firebase as Backend, Website helps you to buying and selling of cars and
            services.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a target="_blank" rel="noreferrer" href="https://souq-car.onrender.com/" className="icon-link">
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/souq-car-reactjs"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900" data-aos-anchor-placement="top-bottom">
          <img src="/images/ecommerce.jpg" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>E-Commerce</h5>
            </div>
          </div>
          <p>
            Using HTML5, CSS3 and JavaScript, includes a list view of categories and products with a details view and
            checkout process.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ahmednour0.github.io/E-Commerce-Website/"
              className="icon-link"
            >
              <i className="bx bx-globe" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/E-Commerce-Website"
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
