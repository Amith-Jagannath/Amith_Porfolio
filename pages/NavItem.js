import Link from "next/link";
import { useRouter } from "next/navigation";
function NavItem({ text, href, active }) {
  const router = useRouter();
  const handleRoute = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Link legacyBehavior href="href">
      <a
        className={`nav__item ${active ? "active" : ""}`}
        onClick={handleRoute}
      >
        {text}
      </a>
    </Link>
  );
}

export default NavItem;
