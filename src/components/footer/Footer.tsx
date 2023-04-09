import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row p-5 pb-2 background-secondary">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h3"> Alexis Costa</p>
          <p className="text-secondary">Buenos Aires, Argentina.</p>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h5 mb-3"> Popular Repositories </p>
          <div className="mb-2">
            <Link
              className="text-decoration-none footer-link"
              href="https://github.com/alexissdev/balder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Balder
            </Link>
          </div>
          <div className="mb-2">
            <Link
              className="text-decoration-none footer-link"
              href="https://github.com/alexissdev/Isis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Isis
            </Link>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h5 mb-3"> External Links </p>
          <div className="mb-2">
            <Link
              className="text-decoration-none footer-link"
              href="https://www.youtube.com/@alexissdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </Link>
          </div>
          <div className="mb-2">
            <Link
              className="footer-link text-decoration-none"
              href="https://github.com/alexissdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="h5 mb-3"> Contact </p>
          <div className="mb-2">
            <Link
              className="text-decoration-none footer-link"
              href="https://discord.com/invite/BWqqbXbUep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div>
        </div>

        <div className="col-xs-12 pt-4">
          <p className="text-white text-center">
            All rights reserved. Alexis Costa
          </p>
        </div>
      </div>
    </div>
  );
}
