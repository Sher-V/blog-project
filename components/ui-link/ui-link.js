import Link from "next/link";

const UiLink = ({ className, href, children }) => (
  <Link href={href}>
    <a className={`block text-white text-base ${className}`}>{children}</a>
  </Link>
);

export default UiLink;
