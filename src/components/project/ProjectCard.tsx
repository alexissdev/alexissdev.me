import Link from "next/link";
import Image from "next/image";
import Repository from "@/lib/github/github.repository";

import imageStyle from "@/styles/image.module.css";

export default function ProjectCard({
  repository,
}: {
  repository: Repository;
}) {
  return (
    <div className="flex basis-full p-2 md:p-4 md:basis-1/2 xl:basis-1/3">
      <div className="flex flex-col py-2 md:py-4 px-4 md:px-8 gap-4 w-full justify-between rounded-2xl bg-secondary">
        <div className="flex flex-col gap-1">
          <p className="font-normal text-white/80">{repository.name}</p>
          <p className="font-light text-white/60">{repository.description}</p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href={`https://github.com/${repository.fullName}`}>
            <span className="font-normal text-sm text-white/70 hover:text-pink-200 cursor-pointer flex flex-row gap-1.5 items-center">
              <Image
                src="/github.svg"
                alt="github"
                width={28}
                height={28}
                className={imageStyle.img}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
