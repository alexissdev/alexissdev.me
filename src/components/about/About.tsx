import Image from "next/image";
import Button from "../button/Button";

export default function AboutComponent() {
  return (
    <div className="vh-100 container pt-2 text-center d-flex justify-content-center align-items-center">
      <div className="card mb-3 card">
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src="/yo.jpeg"
              alt="Alexis"
              className="img-fluid rounded-start "
              width={840}
              height={840}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="display-4" style={{ fontWeight: 700 }}>
                About
              </h5>

              <div className="position-relative">
                <div className="position-absolute fst-italic">
                  <p className="card-text">
                    {"Hi, my name is Alexis, I'm 17 years old, I'm from Argentina."}
                    <br />I am currently a freelance developer specialized in
                    Java language with an experience of 2 years, but I also have
                    knowledge in JavaScript and TypeScript. with an ongoing
                    trajectory in order to become a Backend Developer.
                    <br />
                    Currently I am about to start my career as a Computer
                    Engineer, at the UBA university in Argentina.
                  </p>
                </div>
              </div>

              <Button
                href="https://github.com/alexissdev"
                args="w-25 card-button"
              >
                Repositories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
