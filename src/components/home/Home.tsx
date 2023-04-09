import HomeButtons from "./HomeButtons";

export default function Home() {
  return (
    <div>
      <header className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 my-5 text-uppercase fw-bold">
            Java Developer
          </h1>
          <HomeButtons />
        </div>
      </header>
    </div>
  );
}
