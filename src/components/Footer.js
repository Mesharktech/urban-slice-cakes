import Link from "next/link";

const WHATSAPP  = "https://wa.me/254745104413";
const INSTAGRAM = "https://instagram.com/urbanslicecakes";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            Urban<span>Slice</span> <em>Cakes</em>
          </Link>
          <p>Premium cakes & pastries, crafted with love for every occasion. Above the Best.</p>
          <div className="footer-social">
            <a href={WHATSAPP}  target="_blank" rel="noreferrer" className="social-link">WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="social-link">Instagram</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/menu">Cake Menu</Link>
          <Link href="/pastries">Pastries</Link>
          <Link href="/about">Our Story</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📱 0745 104 413</p>
          <p>📸 @urbanslicecakes</p>
          <p>📍 Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urban Slice Cakes · Above The Best</p>
      </div>
    </footer>
  );
}
