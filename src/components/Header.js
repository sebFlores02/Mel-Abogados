"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const NavItem = ({ href, text }) => (
  <li className="flex justify-center gap-3 text-lg">
    <Link href={`#${href}`}>{text}</Link>
  </li>
);

function Header() {
  const menuItems = [
    { href: "1", text: "Nuestros Socios" },
    { href: "2", text: "Servicios" },
    { href: "3", text: "Nuestra Historia" },
    { href: "4", text: "Unete al Equipo" },
    { href: "5", text: "Contacto" },
  ];
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={`${isVisible ? "fixed w-full" : ""}`}>
      <section
        className={`${
          isVisible ? "bg-white" : "bg-transparent"
        } flex justify-between items-center text-white px-8 xl:mx-20 pt-8 h-[10vh]`}
      >
        <Image
          src="/Logo.png"
          width={200}
          height={200}
          alt="Logo MX Sostenible"
        />
        <Image
          onClick={toggleMenu}
          quality={60}
          src={isVisible ? "/icons/close.png" : "/icons/menu.png"}
          alt={"burger menu"}
          width={25}
          height={25}
          className="float-end nav:hidden"
        />

        <ul className="hidden nav:flex gap-10 font-semibold text-primario">
          <li>
            <a href="#1">Nuestros Servicios</a>
          </li>
          <li>
            <a href="#2">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#3">Nuestras Noticias</a>
          </li>
          <li>
            <a href="#4">Contacto</a>
          </li>
        </ul>
      </section>
      {isVisible && (
        <section className="bg-white h-[90vh] flex flex-col justify-between pt-16 text-black font-medium lg:hidden px-6">
          <ul className="flex flex-col justify-center gap-7 bg-gray-200 rounded-2xl py-7 px-7">
            {menuItems.map((item, index) => (
              <article
                onClick={toggleMenu}
                className="flex justify-between py-4"
                key={index}
              >
                <NavItem key={index} {...item} />
                <Image
                  onClick={toggleMenu}
                  quality={60}
                  src={"/icons/next.png"}
                  alt={"burger menu"}
                  width={24}
                  height={24}
                  className="float-end lg:hidden"
                />
                {/* {index < menuItems.length - 1 && (
                  <div className="w-[200px] border-gray-300 border float-end mt-5"></div>
                )} */}
              </article>
            ))}
          </ul>
          <section className="md:px-20 xl:px-40 py-10 lg:py-0 flex justify-center lg:justify-start gap-7">
            <a href={`mailto:hola@mxsostenible.com`}>
              <Image
                src="/emailWine.png"
                width={24}
                height={24}
                alt="Logo Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/beverlyvel/" target="_blank">
              <Image
                src="/phoneWine.png"
                width={24}
                height={24}
                alt="Logo Twitter"
              />
            </a>
          </section>
        </section>
      )}
    </nav>
  );
}

export default Header;
