const Button = ({ href, children, args }) => {
  return (
    <div>
      <a role="button" href={href} className={`btn btn-primary ${args}`}  target="_blank">
        {children}
      </a>
    </div>
  );
};

export default Button;
