"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP  = "https://wa.me/254745104413";
const INSTAGRAM = "https://instagram.com/urbanslicecakes";

const FEATURED = [
  { name: "Chocolate Decadence", img: "/images/chocolate.jpg",   href: "/menu" },
  { name: "Tiramisu Elegance",   img: "/images/tiramisu.jpg",    href: "/menu" },
  { name: "Caramel Dream",       img: "/images/caramel.jpg",     href: "/menu" },
];

const PASTRY_TEASER = [
  { name: "Croissants",  img: "/images/croissant.jpg" },
  { name: "Doughnuts",   img: "/images/donuts.jpg"    },
  { name: "Cupcakes",    img: "/images/cupcakes.jpg"  },
];

const REVIEWS = [
  { name: "Amina K.", occasion: "Wedding Cake",        text: "Absolutely stunning. The cake was not only beautiful but tasted incredible. Every guest was asking where we got it." },
  { name: "Brian M.", occasion: "Birthday Celebration", text: "Ordered a custom birthday cake and Urban Slice exceeded every expectation. The attention to detail is genuinely unmatched." },
  { name: "Grace W.", occasion: "Corporate Event",      text: "We order from Urban Slice for all our office events now. Consistent quality, gorgeous presentation, always on time." },
];

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fade-in">
              <span className="badge-pulse" /> Now Open for Custom Orders
            </div>
            <h2 className="animate-fade-in animate-delay-1">Urban Slice Cakes</h2>
            <h1 className="animate-fade-in animate-delay-2">
              Above<br /><span>The Best</span>
            </h1>
            <p className="animate-fade-in animate-delay-3">
              From velvety whole cakes to freshly baked pastries — we craft happiness
              into every layer. Premium ingredients, stunning designs, delivered fresh
              across Nairobi.
            </p>
            <div className="hero-actions animate-fade-in animate-delay-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon /> Order via WhatsApp
              </a>
              <Link href="/menu" className="btn btn-outline">
                View Full Menu
              </Link>
            </div>
            <div className="hero-stats animate-fade-in animate-delay-4">
              <div className="stat"><span className="stat-num">500+</span><span className="stat-label">Happy Clients</span></div>
              <div className="stat-divider" />
              <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Fresh Daily</span></div>
              <div className="stat-divider" />
              <div className="stat"><span className="stat-num">5★</span><span className="stat-label">Rated</span></div>
            </div>
          </div>

          <div className="hero-image-col animate-fade-in animate-delay-2">
            <div className="hero-image-ring" />
            <div className="hero-image-wrapper">
              <Image src="/hero-image.png" alt="Premium cakes" width={800} height={800} className="hero-image" priority />
            </div>
            <div className="hero-float-badge glass">
              <span>🎂</span>
              <div><strong>Custom Orders</strong><small>Available Now</small></div>
            </div>
          </div>
        </div>
        <div className="scroll-cue animate-fade-in animate-delay-4">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Featured Cakes ────────────────────────────────────────── */}
      <section className="home-section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <header className="section-header reveal">
            <span className="section-tag">Signature Cakes</span>
            <h2>Crafted to <span>Perfection</span></h2>
            <p>Each cake is a masterpiece — baked fresh, designed with intention.</p>
          </header>

          <div className="featured-grid">
            {FEATURED.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="featured-card reveal"
                style={{ "--delay": `${i * 0.12}s` }}
              >
                <div className="featured-img-wrap">
                  <Image src={c.img} alt={c.name} width={600} height={420} className="featured-img" />
                  <div className="featured-overlay">
                    <span className="featured-cta">View Menu →</span>
                  </div>
                </div>
                <div className="featured-name">{c.name}</div>
              </Link>
            ))}
          </div>

          <div className="section-link reveal">
            <Link href="/menu" className="btn btn-primary">
              See Full Cake Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pastries Teaser ───────────────────────────────────────── */}
      <section className="home-section pastries-teaser">
        <div className="container teaser-grid">
          <div className="teaser-text reveal">
            <span className="section-tag">Fresh Daily</span>
            <h2>Pastries & <span>Bites</span></h2>
            <p>
              Croissants, doughnuts, cupcakes, pies, and more — baked fresh every morning
              and perfect for any occasion, big or small.
            </p>
            <div className="teaser-prices">
              <span className="price-pill">Pastries from <strong>KES 80</strong></span>
              <span className="price-pill">Pies from <strong>KES 150</strong></span>
            </div>
            <Link href="/pastries" className="btn btn-primary">
              Browse Pastries →
            </Link>
          </div>
          <div className="teaser-photos reveal" style={{ "--delay": "0.15s" }}>
            {PASTRY_TEASER.map((p, i) => (
              <div key={i} className="teaser-photo-wrap" style={{ "--ph-delay": `${i * 0.1}s` }}>
                <Image src={p.img} alt={p.name} width={300} height={300} className="teaser-photo" />
                <span className="teaser-photo-label">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="home-section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <header className="section-header reveal">
            <span className="section-tag">Happy Clients</span>
            <h2>What They're <span>Saying</span></h2>
          </header>
          <div className="testimonials-grid">
            {REVIEWS.map((r, i) => (
              <blockquote key={i} className="testimonial-card glass reveal" style={{ "--delay": `${i * 0.12}s` }}>
                <div className="testimonial-stars">★★★★★</div>
                <p>"{r.text}"</p>
                <footer className="testimonial-author">
                  <div className="author-avatar">{r.name.charAt(0)}</div>
                  <div><strong>{r.name}</strong><small>{r.occasion}</small></div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-orb cta-orb-1" /><div className="cta-orb cta-orb-2" />
        <div className="container cta-content reveal">
          <h2>Ready for Your <span>Dream Cake?</span></h2>
          <p>Message us on WhatsApp and let's create something unforgettable together.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn btn-outline">
              Follow on Instagram
            </a>
          </div>
          <p className="cta-phone">Or call: <strong>0745 104 413</strong></p>
        </div>
      </section>
    </main>
  );
}
