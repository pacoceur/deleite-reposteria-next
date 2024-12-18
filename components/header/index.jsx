"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Header({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo">
          <Image
            src="/logo.svg"
            alt="Deleite Repostería"
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src="/logo-white.svg"
            alt="Deleite Repostería"
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      {links && (
        <div className="inner-nav desktop-nav">
          <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
            <Nav links={links} />
          </ul>
          <ul className="items-end clearlist local-scroll">
            {/* End Languages */}
            <li>
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="link-hover-anim underline"
                  data-link-animate="y"
                >
                  ¡Contáctanos!
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* End Main Menu */}
    </div>
  );
}
