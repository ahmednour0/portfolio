"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

type NavItem = {
  href: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type ProjectLink = {
  href: string;
  iconClass: string;
  label: string;
};

type Project = {
  title: string;
  description?: string;
  image: string;
  alt: string;
  links: ProjectLink[];
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactFormStorageKey = "portfolio-contact-form";

const emptyContactForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function readStoredContactForm(): ContactFormData {
  if (typeof window === "undefined") {
    return emptyContactForm;
  }

  const savedContactForm = window.sessionStorage.getItem(contactFormStorageKey);

  if (!savedContactForm) {
    return emptyContactForm;
  }

  try {
    const parsedContactForm = JSON.parse(savedContactForm) as Partial<ContactFormData>;

    return {
      name: parsedContactForm.name ?? "",
      email: parsedContactForm.email ?? "",
      subject: parsedContactForm.subject ?? "",
      message: parsedContactForm.message ?? "",
    };
  } catch {
    window.sessionStorage.removeItem(contactFormStorageKey);
    return emptyContactForm;
  }
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#mobile", label: "Mobile" },
  { href: "#template", label: "Template" },
  { href: "#contact", label: "Contact" },
];

const services: Service[] = [
  {
    title: "Web Designer",
    description:
      "I specialize in designing attractive user interfaces for web, using modern design principles to ensure a satisfying user experience.",
    image: "/images/serv.png",
    alt: "Web Designer",
  },
  {
    title: "Front-End Developer",
    description:
      "I offer top-notch UI development services using modern languages and libraries to create responsive interfaces for electronic apps.",
    image: "/images/serv22.png",
    alt: "Front-End Developer",
  },
  {
    title: "Mobile App Developer",
    description:
      "I deliver high-quality mobile app development using the latest languages and libraries to create responsive, seamless applications.",
    image: "/images/mobile.png",
    alt: "Mobile App Developer",
  },
];

const portfolioProjects: Project[] = [
  {
    title: "Marinoz",
    description:
      "Using Tailwind CSS, Next.js, Marinoz is a platform for marine and tourism services where users can book experiences and owners manage listings.",
    image: "/images/marinoz.png",
    alt: "Marinoz project",
    links: [{ href: "https://beta.marinoz.com/en", iconClass: "bx bx-globe", label: "Visit site" }],
  },
  {
    title: "Bask Hospitality",
    description:
      "Using Tailwind CSS, React.js, TypeScript, Bask is a multi platform vacation rental marketplace focused on seaside properties.",
    image: "/images/bask.png",
    alt: "Bask Hospitality project",
    links: [{ href: "https://baskeg.com/", iconClass: "bx bx-globe", label: "Visit site" }],
  },
  {
    title: "Home Masters",
    description:
      "Using Tailwind CSS, React.js, Home Masters is a real estate platform for buying, selling, and listing residential and commercial properties.",
    image: "/images/home.png",
    alt: "Home Masters project",
    links: [
      {
        href: "https://home-masters-dev.on-forge.com/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
    ],
  },
  {
    title: "Eventy Academy",
    description:
      "Using Tailwind CSS, React.js, Eventy is a modern platform offering practical, in-demand skills through interactive courses by expert instructors.",
    image: "/images/eventy.png",
    alt: "Eventy Academy project",
    links: [
      {
        href: "https://eventy-fe.on-forge.com/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
    ],
  },
  {
    title: "Admin Dashboard",
    description:
      "Using Material UI, React.js, app that provides administrators with a centralized view of various aspects of a system.",
    image: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1700681687/admin_dashboard_obu2ho.webp",
    alt: "Admin Dashboard project",
    links: [
      {
        href: "https://admin-dashboard-87971.web.app/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
      {
        href: "https://github.com/ahmednour0/react-admin-dashboard",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Movies",
    description:
      "Using Tailwind CSS and Next.js, this application ensures fast and responsive performance including viewing list and movie details.",
    image: "/images/movies.png",
    alt: "Movies project",
    links: [
      {
        href: "https://new-movies-cyan.vercel.app/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
      {
        href: "https://github.com/ahmednour0/new-movies",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "To Do List",
    description:
      "Using React.js, Authentication, Localization and Firebase as Backend, website helps you to organize, schedule and archive tasks easily.",
    image: "/images/todo.png",
    alt: "To Do List project",
    links: [
      {
        href: "https://full-stack-todolist.web.app/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
      {
        href: "https://github.com/ahmednour0/full-stack-todolist",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Souq Car",
    description:
      "Using Bootstrap, React.js, Firebase as Backend, website helps with buying and selling cars and services.",
    image: "/images/souqcar.jpg",
    alt: "Souq Car project",
    links: [
      {
        href: "https://souq-car.onrender.com/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
      {
        href: "https://github.com/ahmednour0/souq-car-reactjs",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "E-Commerce",
    description:
      "Using HTML5, CSS3 and JavaScript, includes a list view of categories and products with a details view and checkout process.",
    image: "/images/ecommerce.jpg",
    alt: "E-Commerce project",
    links: [
      {
        href: "https://ahmednour0.github.io/E-Commerce-Website/",
        iconClass: "bx bx-globe",
        label: "Visit site",
      },
      {
        href: "https://github.com/ahmednour0/E-Commerce-Website",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
];

const mobileProjects: Project[] = [
  {
    title: "Booking.com",
    description:
      "Using React Native, Firebase as Auth, this app is for searching, booking, and managing hotel reservations with reviews and real-time availability.",
    image: "/images/booking.png",
    alt: "Booking app",
    links: [
      {
        href: "https://www.mediafire.com/file/mkq9y10d1rsskob/booking.apk/file/",
        iconClass: "bx bx-download",
        label: "Download app",
      },
      {
        href: "https://github.com/ahmednour0/booking",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Fitness",
    description:
      "Using React Native, fitness app designed to help you reach your health and fitness goals effortlessly with personalized workout and nutrition plans.",
    image: "/images/fitness.png",
    alt: "Fitness app",
    links: [
      {
        href: "https://www.mediafire.com/file/v5zyqz10ua6dztc/fitness-app.apk/file/",
        iconClass: "bx bx-download",
        label: "Download app",
      },
      {
        href: "https://github.com/ahmednour0/fitness-app",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Recipe Book",
    description:
      "Using React Native, the ultimate guide to cooking for every part of the day, featuring recipes with simple instructions and practical tips.",
    image: "/images/food.png",
    alt: "Recipe Book app",
    links: [
      {
        href: "https://www.mediafire.com/file/uodxev9p44fpove/recipe-book.apk/file/",
        iconClass: "bx bx-download",
        label: "Download app",
      },
      {
        href: "https://github.com/ahmednour0/recipe-book-meal",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Expense Tracker",
    description:
      "Using React Native, an expense tracker app helps users manage finances by recording and categorizing income and expenses.",
    image: "/images/expense.jpg",
    alt: "Expense Tracker app",
    links: [
      {
        href: "https://www.mediafire.com/file/isxd0lolf7o490t/expense-tracker.apk/file/",
        iconClass: "bx bx-download",
        label: "Download app",
      },
      {
        href: "https://github.com/ahmednour0/expense-tracker",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
];

const templateProjects: Project[] = [
  {
    title: "Material UI Template",
    image: "/images/MaterialUI.png",
    alt: "Material UI template",
    links: [
      {
        href: "https://material-ui-s7ik.onrender.com/",
        iconClass: "bx bx-globe",
        label: "Visit template",
      },
      {
        href: "https://github.com/ahmednour0/Templates/tree/Material-UI",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Compensatory Care Template",
    image: "/images/compensatory.png",
    alt: "Compensatory Care template",
    links: [
      {
        href: "https://compensatory-care.netlify.app",
        iconClass: "bx bx-globe",
        label: "Visit template",
      },
      {
        href: "https://github.com/ahmednour0/Compensatory-care",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
  {
    title: "Bootstrap Template",
    image: "/images/Bootstrap.jpg",
    alt: "Bootstrap template",
    links: [
      {
        href: "https://bootstrap-temple.netlify.app",
        iconClass: "bx bx-globe",
        label: "Visit template",
      },
      {
        href: "https://github.com/ahmednour0/Templates/tree/bootstrap",
        iconClass: "fa-brands fa-github",
        label: "View code",
      },
    ],
  },
];

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="heading" data-aos="fade-up" >
      <h2 >{title}</h2>
      {subtitle ? <h4>{subtitle}</h4> : null}
    </div>
  );
}

function ProjectCard({
  project,
  animation = "fade-up",
  delay = 0,
}: {
  project: Project;
  animation?: string;
  delay?: number;
}) {
  return (
    <div
      className="port"
      data-aos={animation}
      data-aos-duration="1500"
      data-aos-delay={delay}
      data-aos-anchor-placement="top-bottom"
    >
      <img src={project.image} id="imag" alt={project.alt} />
      <div className="main-box" >
        <div className="box-text" >
          <h5 >{project.title}</h5>
        </div>
      </div>
      {project.description ? <p>{project.description}</p> : null}
      <div className="project-links-row">
        {project.links.map((link) => (
          <a
            key={`${project.title}-${link.href}`}
            target="_blank"
            rel="noreferrer"
            href={link.href}
            className="icon-link"
            aria-label={`${project.title} - ${link.label}`}
          >
            <i className={link.iconClass} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>(emptyContactForm);
  const [hasLoadedStoredContactForm, setHasLoadedStoredContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const setRestoreState = (isRestoring: boolean) => {
      document.body.toggleAttribute("data-page-restoring", isRestoring);
    };

    const revealAosElements = () => {
      document.querySelectorAll<HTMLElement>("[data-aos]").forEach((element) => {
        element.classList.add("aos-animate");
      });
    };

    const initAos = () => {
      AOS.init({
        duration: 1500,
        easing: "ease-out-cubic",
        once: false,
        mirror: false,
        offset: 120,
        anchorPlacement: "top-bottom",
      });
    };

    let syncTimer = 0;

    const scrollToCurrentHash = () => {
      const currentHash = window.location.hash;

      if (!currentHash || currentHash === "#home") {
        return;
      }

      const targetId = decodeURIComponent(currentHash.slice(1));
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    const syncAos = (delay = 0) => {
      setRestoreState(true);
      revealAosElements();
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            AOS.refreshHard();
            window.dispatchEvent(new Event("scroll"));
            setRestoreState(false);
          });
        });
      }, delay);
    };

    const onLoad = () => {
      scrollToCurrentHash();
      syncAos();
    };

    const onPageShow = (event: PageTransitionEvent) => {
      scrollToCurrentHash();
      syncAos(event.persisted ? 80 : 20);
    };

    const onFocus = () => {
      scrollToCurrentHash();
      syncAos(20);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        scrollToCurrentHash();
        syncAos(20);
      }
    };

    const onHashChange = () => {
      scrollToCurrentHash();
      syncAos(20);
    };

    initAos();
    window.addEventListener("load", onLoad);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("focus", onFocus);
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    scrollToCurrentHash();
    syncAos(20);

    return () => {
      setRestoreState(false);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearTimeout(syncTimer);
      window.clearTimeout(refreshTimer);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    document.body.toggleAttribute("data-page-restoring", true);

    const routeTimer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-aos]").forEach((element) => {
        element.classList.add("aos-animate");
      });
      AOS.refreshHard();
      window.dispatchEvent(new Event("scroll"));
      document.body.toggleAttribute("data-page-restoring", false);
    }, 30);

    return () => {
      window.clearTimeout(routeTimer);
      document.body.toggleAttribute("data-page-restoring", false);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncPageState = () => {
      setContactForm(readStoredContactForm());
      setHasLoadedStoredContactForm(true);
    };

    syncPageState();
    window.addEventListener("pageshow", syncPageState);

    return () => {
      window.removeEventListener("pageshow", syncPageState);
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedStoredContactForm) {
      return;
    }

    const hasFormData = Object.values(contactForm).some((value) => value.trim() !== "");

    if (hasFormData) {
      window.sessionStorage.setItem(contactFormStorageKey, JSON.stringify(contactForm));
      return;
    }

    window.sessionStorage.removeItem(contactFormStorageKey);
  }, [contactForm, hasLoadedStoredContactForm]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = event.currentTarget.name as keyof ContactFormData;
    const { value } = event.currentTarget;

    setContactForm((currentForm) => ({
      ...currentForm,
      [fieldName]: value,
    }));

    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");

    const formData = new FormData();
    formData.append("name", contactForm.name);
    formData.append("email", contactForm.email);
    formData.append("subject", contactForm.subject);
    formData.append("message", contactForm.message);

    try {
      const response = await fetch("https://formspree.io/f/mpzgdnea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setContactForm(emptyContactForm);
      window.sessionStorage.removeItem(contactFormStorageKey);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <a href="#home" className="logo">
          <span>P</span>ortfolio
        </a>

        <div
          className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}
          id="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

        <ul className={`navbar ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text" data-aos="fade-up">
          <br />
          <br />
          <h4>Hello !</h4>
          <h1>I&apos;M Ahmed Nour Eldeen</h1>
          <h3>
            <img
              src="https://readme-typing-svg.demolab.com?font=Quicksand&weight=600&size=30&duration=3500&pause=1000&color=F7F7F7&width=435&lines=Front-End+Developer;Web+Designer"
              alt="Typing SVG"
            />
          </h3>
          <h3>
            <a href="#about" className="btn">
              About Me
            </a>
          </h3>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content" data-aos="fade-right">
          <h2>About Me</h2>
          <h4>Hello, I&apos;M Here To Help In Your Next Project</h4>
          <p>
            I&apos;m a Front-End Developer with knowledge in designing, developing, and deploying web and mobile
            applications using HTML5, CSS3, Bootstrap, Tailwind CSS, Material UI, JavaScript, Typescript, React.js,
            Next.js, React Native and seeking a challenging opportunity as a Software Engineer in a company with a
            good reputation that will add to my knowledge, skills, and experience on a day-to-day basis.
          </p>
          <a
            className="btn"
            href="https://drive.google.com/drive/folders/1YEz-nD7dUIhBEuR8WmtJkbmHe6nKGDNz?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
          <div className="social-icons" style={{ paddingTop: "30px" }}>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmednoureldeen/">
              <i className="bx bxl-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-left" data-aos-delay="120">
          <img
            src="/images/iti.jpg"
            className="about-img"
            style={{ borderRadius: "8px", width: "70%", height: "70%" }}
            alt="Profile"
          />
        </div>
      </section>

      <section className="services" id="services">
        <SectionHeading title="My Services" subtitle="Better Experience" />
        <div className="services-content">
          {services.map((service, index) => (
            <div className="box" key={service.title} data-aos="fade-up" data-aos-delay={index * 120}>
              <img src={service.image} alt={service.alt} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <SectionHeading title="My Portfolio" subtitle="Some Of My Work" />
        <div className="portfolio-content">
          {portfolioProjects.map((project, index) => (
            <ProjectCard project={project} key={project.title} animation="fade-up" delay={(index % 3) * 130} />
          ))}
        </div>
      </section>

      <section className="portfolio" id="mobile">
        <SectionHeading title="Mobile Apps" />
        <div className="portfolio-content">
          {mobileProjects.map((project, index) => (
            <ProjectCard project={project} key={project.title} animation="fade-up" delay={(index % 3) * 130} />
          ))}
        </div>
      </section>
      <section className="portfolio" id="template" >
        <SectionHeading title="My Template" />
        <div className="portfolio-content" >
          {templateProjects.map((project, index) => (
            <ProjectCard project={project} key={project.title} animation="fade-up" delay={(index + 1) * 120} />
          ))}
        </div>
      </section>
 

      <section id="contact" className="contact">
        <div className="contact-text" data-aos="fade-right">
          <h2>Contact Me</h2>
          <h4 style={{marginLeft:"5px"}}>My Contact Details</h4>
          <ul className="contact-list">
            <li>
              <i className="bx bx-map" /> Maadi, Cairo, Egypt
            </li>
            <li>
              <i className="bx bx-envelope" /> ahmednour3123@gmail.com
            </li>
            <li>
              <i className="bx bx-phone" /> +201141767882
            </li>
          </ul>
          <div className="social-icons">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmednoureldeen/">
              <i className="bx bxl-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/ahmednour0">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left" data-aos-delay="120">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="nam"
              placeholder="Name"
              value={contactForm.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              id="ema"
              name="email"
              placeholder="Email"
              value={contactForm.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              id="sub"
              name="subject"
              placeholder="Enter Your Subject"
              value={contactForm.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              rows={10}
              id="tex"
              cols={30}
              name="message"
              placeholder="Enter Your Message"
              value={contactForm.message}
              onChange={handleInputChange}
              required
            />
            <input type="submit" id="inp" value={isSubmitting ? "Sending..." : "Send"} className="send" disabled={isSubmitting} />
            {submitState === "success" ? (
              <p className="contact-form-status success" aria-live="polite">
                Your message has been sent successfully.
              </p>
            ) : null}
            {submitState === "error" ? (
              <p className="contact-form-status error" aria-live="polite">
                Something went wrong. Your message is still saved here, so you can try again.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
