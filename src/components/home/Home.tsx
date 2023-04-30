import HomeButtons from "./HomeButtons";

export default function Home() {
  return (
    <div>
      <header className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 fw-bold">{"I'm Alexis"}</h1>
          <h2 className="display-6 fw-bold">Full Stack Developer</h2>
          <br />
          <HomeButtons />
        </div>
      </header>
    </div>
  );
}
