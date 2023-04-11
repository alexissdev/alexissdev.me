export default function Button({ href, children, args }: { href?: string; children?: any; args?: string }) {
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
