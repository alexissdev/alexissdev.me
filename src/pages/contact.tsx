import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <Header
        metaData={{
          title: "Alexis | Contact",
          description: "Contact page",
          url: "contact",
        }}
      />
      <Contact />
      <Footer />
    </>
  );
}
