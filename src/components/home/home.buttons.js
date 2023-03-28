import Image from "next/image";

import Button from "../button/button";
import imageStyle from "@/styles/ImageEffect.module.css";

const HomeButtons = () => {
  return (
    <div className="row">
      <div className="col">
        <Button href="https://github.com/alexissdev">
            <Image
              src="/github.svg"
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
            className={imageStyle.img}
            width={60}
            height={60}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeButtons;
