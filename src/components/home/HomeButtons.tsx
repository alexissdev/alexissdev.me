import Image from "next/image";

import Button from "../button/Button";
import imageStyle from "@/styles/ImageEffect.module.css";

export default function HomeButtons() {
  return (
    <div className="row">
      <div className="col">
        <Button href="https://github.com/alexissdev">
          <Image
            src="/github.svg"
            alt="Github"
            className={imageStyle.img}
            width={60}
            height={60}
          />
        </Button>
      </div>

      <div className="col">
        <Button href="https://discord.gg/BWqqbXbUep">
          <Image
            src="/discord.svg"
            alt="discord"
            className={imageStyle.img}
            width={60}
            height={60}
          />
        </Button>
      </div>

      <div className="col">
        <Button href="https://www.youtube.com/@alexissdev">
          <Image
            src="/youtube.svg"
            alt="youtube"
            className={imageStyle.img}
            width={60}
            height={60}
          />
        </Button>
      </div>
    </div>
  );
}
