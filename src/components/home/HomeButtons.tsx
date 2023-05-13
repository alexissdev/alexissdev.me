import Image from "next/image";
import imageStyle from "@/styles/image.module.css";

export default function HomeButtons() {
  return (
    <div className="pt-5 grid grid-rows-1 grid-flow-col gap-4 content-center">
      <a href="https://github.com/alexissdev">
        <Image
          src="/github.svg"
          alt="Github"
          className={imageStyle.img}
          width={60}
          height={60}
        />
      </a>

      <a href="https://discord.gg/BWqqbXbUep">
        <Image
          src="/discord.svg"
          alt="discord"
          className={imageStyle.img}
          width={60}
          height={60}
        />
      </a>

      <a href="https://www.youtube.com/@alexissdev">
        <Image
          src="/youtube.svg"
          alt="youtube"
          className={imageStyle.img}
          width={60}
          height={60}
        />
      </a>
    </div>
  );
}
