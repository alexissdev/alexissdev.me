import Link from "next/link";
import Image from "next/image";

import imageStyle from  "@/styles/ImageEffect.module.css";

export default function Navigation() {
  return (
    <div className="background-secondary">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand">
            <Image
              src="/logo.png"
              alt=""
              className="max-height-60 overflow-hidden mt-6"
              width={83}
              height={60}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="/"
                  children="Home"
                />
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="/about"
                  children="About"
                />
              </li>
              <li className="nav-item">
                <Link
                  href="https://github.com/alexissdev"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github.svg"
                    alt="github"
                    className={imageStyle.img}
                    width={28}
                    height={28}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://discord.gg/BWqqbXbUep"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/discord.svg"
                    alt="discord"
                    className={imageStyle.img}
                    width={28}
                    height={28}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
