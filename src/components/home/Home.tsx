import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { notificationStyle } from "@/lib/util/notification.util";
import HomeButtons from "./HomeButtons";

const notificationHomeStyle = {
  ...notificationStyle,
  color: "#fff",
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    toast("Welcome to my website!", {
      style: notificationHomeStyle,
      description: "I'm Alexis, a software engineer and a web developer.",
      icon: "👋",
      action: {
        label: "Contact",
        onClick: () => router.push("/contact"),
      },
    });
  }, []);

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
