import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <>
      <Toaster richColors closeButton position="top-center" />
      <Navigation />
      <Header
        metaData={{
          title: "Alexis | Contact",
          description: "Contact page",
          url: "https://www.alexissdev.me/contact",
        }}
      />
      <Contact />
      <Footer />
    </>
  );
}
