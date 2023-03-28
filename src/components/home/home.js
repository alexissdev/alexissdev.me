import HomeButtons from "./home.buttons";

const Home = () => {
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

export default Home;