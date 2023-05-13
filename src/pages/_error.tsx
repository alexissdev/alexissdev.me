import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import Error from "@/components/error/Error";

export default function ErrorPage() {
  return (
    <div className="bg-primary">
      <Header
        metaData={{
          title: "Alexis | Error",
          description: "Error page.",
          openGraphTitle: "Alexis | Error",
          url: "https://alexissdev.me/error",
        }}
      />
      <Navigation />
      <Error />
      <Footer />
    </div>
  );
}
