"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP = "https://wa.me/254745104413";

const LINKS = [
  { href: "/",          label: "Home"     },
  { href: "/menu",      label: "Menu"     },
  { href: "/pastries",  label: "Pastries" },
  { href: "/about",     label: "Our Story"},
];

export default function NavBar() {
  const path = usePathname();

  return (
    <nav className="nav glass">
      <div className="container nav-content">
        <Link href="/" className="logo">
          Urban<span>Slice</span> <em>Cakes</em>
        </Link>
        <div className="nav-links">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${path === href ? " nav-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Order Now
          </a>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="nav-mobile-order btn btn-primary btn-sm">
          Order
        </a>
      </div>
    </nav>
  );
}
