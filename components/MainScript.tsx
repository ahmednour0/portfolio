'use client';

import { useEffect } from "react";
import AOS from "aos";

export default function MainScript() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });

    const header = document.querySelector("header");
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    const onScroll = () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }

      if (menu) {
        menu.classList.remove("bx-x");
      }

      if (navbar) {
        navbar.classList.remove("active");
      }
    };

    const onMenuClick = () => {
      if (menu) {
        menu.classList.toggle("bx-x");
      }

      if (navbar) {
        navbar.classList.toggle("active");
      }
    };

    window.addEventListener("scroll", onScroll);
    menu?.addEventListener("click", onMenuClick);

    const inputButton = document.getElementById("inp");
    const onInputClick = () => {
      setTimeout(() => {
        const nam = document.getElementById("nam") as HTMLInputElement | null;
        const ema = document.getElementById("ema") as HTMLInputElement | null;
        const sub = document.getElementById("sub") as HTMLInputElement | null;
        const tex = document.getElementById("tex") as HTMLTextAreaElement | null;

        if (nam) nam.value = "";
        if (ema) ema.value = "";
        if (sub) sub.value = "";
        if (tex) tex.value = "";
      }, 50);
    };

    inputButton?.addEventListener("click", onInputClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      menu?.removeEventListener("click", onMenuClick);
      inputButton?.removeEventListener("click", onInputClick);
    };
  }, []);

  return null;
}
