const Error = () => {
  return (
    <div>
      <div className="flex flex-col vh-100 items-center gap-4 my-10 p-8">
        <br />
        <img
          src={"https://http.cat/404"}
          alt="http cat"
          className="vh-90 error-img"
        />
      </div>
    </div>
  );
};

export default Error;
