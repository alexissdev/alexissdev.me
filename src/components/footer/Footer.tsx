import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="text-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start">
        <div className="p-5">
          <ul>
            <p className="font-bold text-3xl pb-6">Alexis Costa</p>
            <div className="text-gray-500 flex gap-6 pb-5">
              Pilar, Buenos Aires, Argentina
            </div>
            <div className="flex gap-6 text-gray-500">
              <FaInstagram className="text-2xl cursor-pointer hover:text-hover" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-hover" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-hover" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-2xl pb-4">Popular Repositories</p>
            <li className="text-gray-500 text-md pb-2 font-light hover:text-hover cursor-pointer">
              <a
                href="https://github.com/alexissdev/balder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Balder
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-light hover:text-hover cursor-pointer">
              <a
                href="https://github.com/alexissdev/Isis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Isis
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-2xl pb-4">Contact</p>
            <li className="text-gray-500 text-md pb-2 font-light hover:text-primary cursor-pointer">
              <a
                href="https://discord.com/invite/BWqqbXbUep"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-white justify-center items-center text-center p-5">
        <h1 className="text-center">
          © All rights reserved {""}
          <span className="cursor-pointer">AlexisDev </span>
        </h1>
      </div>
    </div>
  );
}
