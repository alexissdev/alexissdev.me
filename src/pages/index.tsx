import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import Home from "@/components/home/Home";

export default function App() {
  return (
    <>
      <Header
        metaData={{
          title: "Alexis | Home",
          description: "Alexis is a software engineer and a web developer.",
          openGraphTitle: "Alexis | Home",
          url: "https://alexissdev.me/",
        }}
      />
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}
