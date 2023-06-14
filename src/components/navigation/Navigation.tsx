import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import imageStyle from "@/styles/image.module.css";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-secondary w-full flex flex-col justify-center p-2">
      <nav className="flex items-center justify-between flex-wrap md:w-full md:flex-row md:justify-between md:max-w-5xl md:h-16 md:items-center md:mx-auto md:px-8">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt=""
              className="overflow-hidden mt-1"
              width={83}
              height={60}
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
            onClick={() => setOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`text-left w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="text-white text-sm md:flex-grow">
            {[
              ["/", "Home"],
              ["/projects", "Projects"],
            ].map(([path, id]) => (
              <span
                key={id}
                className="block mt-4 md:inline-block md:mt-0 text-whit mr-4 hover:text-hover"
              >
                <Link href={path}>{id}</Link>
              </span>
            ))}
          </div>
          <div className="md:flex md:flex-row md:items-center">
            {[
              ["/github", "/github.svg"],
              ["/discord", "/discord.svg"],
            ].map(([path, id]) => (
              <div
                key={id}
                className="block mt-4 md:inline-block md:mt-0 text-whit mr-4 hover:text-hover"
              >
                <a href={path}>
                  <Image
                    src={id}
                    alt={id}
                    className={imageStyle.img}
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
