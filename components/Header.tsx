export default function Header() {
  return (
    <header>
      <a href="#" className="logo" data-aos="fade-down" data-aos-duration="1500">
        <span>P</span>ortfolio
      </a>
      <div
        className="bx bx-menu"
        id="menu-icon"
        data-aos="fade-down"
        data-aos-duration="1500"
      />
      <ul
        className="navbar"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#mobile">Mobile</a></li>
        <li><a href="#template">Template</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}
