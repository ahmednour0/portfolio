export default function Mobile() {
  return (
    <section className="portfolio" id="mobile">
      <div className="heading" data-aos="fade-up" data-aos-duration="1500">
        <h2>Mobile Apps</h2>
      </div>
      <div className="portfolio-content" data-aos="fade-up" data-aos-duration="1500">
        <div className="port" data-aos="fade-up" data-aos-duration="1500">
          <img src="/images/booking.png" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Booking.com</h5>
            </div>
          </div>
          <p>
            Using React Native, Firebase as Auth, this App for searching, booking, and managing hotel reservations
            with reviews and real-time availability.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mediafire.com/file/mkq9y10d1rsskob/booking.apk/file/"
              className="icon-link"
            >
              <i className="bx bx-download" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0/booking" className="icon-link">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500">
          <img src="/images/fitness.png" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Fitness</h5>
            </div>
          </div>
          <p>
            Using React Native, fitness app designed to help you reach your health and fitness goals effortlessly.
            With a personalized workout and nutrition planner.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mediafire.com/file/v5zyqz10ua6dztc/fitness-app.apk/file/"
              className="icon-link"
            >
              <i className="bx bx-download" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/fitness-app"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500">
          <img src="/images/food.png" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Recipe Book</h5>
            </div>
          </div>
          <p>
            Using React Native, The ultimate guide to cooking for every part of the day, featuring recipes with simple
            instructions and practical tips.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mediafire.com/file/uodxev9p44fpove/recipe-book.apk/file/"
              className="icon-link"
            >
              <i className="bx bx-download" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/recipe-book-meal"
              className="icon-link"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="port" data-aos="fade-up" data-aos-duration="1500">
          <img src="/images/expense.jpg" id="imag" alt="to do list" />
          <div className="main-box">
            <div className="box-text">
              <h5>Expense Tracker</h5>
            </div>
          </div>
          <p>
            Using React Native, An expense tracker app helps users manage finances by recording and categorizing income
            and expenses.
          </p>
          <div style={{ marginTop: "8px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mediafire.com/file/isxd0lolf7o490t/expense-tracker.apk/file/"
              className="icon-link"
            >
              <i className="bx bx-download" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmednour0/expense-tracker"
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
