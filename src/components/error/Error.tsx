import Image from "next/image";

export default function Error() {
  return (
    <div>
      <div className="flex flex-col vh-100 items-center gap-4 my-10 p-8">
        <br />
        <Image
          src={"https://http.cat/404"}
          alt="http cat"
          className="vh-90 error-img"
          width={621}
          height={621}
        />
      </div>
    </div>
  );
}
