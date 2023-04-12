import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <>
      <Header
        metaData={{
          title: "Alexis | About",
          description: "Get extra information about me",
          openGraphTitle: "Alexis | About",
          url: "https://alexissdev.me/about",
        }}
      />
      <Navigation />
      <About />
      <Footer />
    </>
  );
}
