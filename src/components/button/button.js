const Button = ({href, children }) => {
  return (
    <div>
      <button href={href}>
        {children}
      </button>
    </div>
  );
};

export default Button;
