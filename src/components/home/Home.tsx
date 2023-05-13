import HomeButtons from "./HomeButtons";

export default function Home() {
  return (
    <div className="bg-primary text-white text-center">
      <header className="container h-screen flex flex-col justify-center items-center max-w-6xl mx-auto">
        <a className="text-6xl font-bold">{"I'm Alexis"}</a>
        <a className="text-5xl font-bold">Full Stack Developer</a>
        <div>
          <HomeButtons />
        </div>
      </header>
    </div>
  );
}
