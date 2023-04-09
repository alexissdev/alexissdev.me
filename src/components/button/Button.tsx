export default function Button({ href, children, args }: any,) {
  return (
    <div>
      <a
        role="button"
        href={href}
        className={`btn btn-primary ${args}`}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
}
