const Button = ({ href, children }) => {
  return (
    <div>
      <button href={href} className="btn btn-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
