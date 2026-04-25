"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "https://wa.me/254745104413";

const FEATURES = [
  { icon: "🌿", title: "Premium Ingredients",  desc: "Only the finest, freshest ingredients. No shortcuts, no compromise — ever." },
  { icon: "👨‍🍳", title: "Artisan Crafted",     desc: "Every cake is meticulously handcrafted by skilled bakers with a passion for detail." },
  { icon: "🚚", title: "Fresh Delivery",       desc: "Baked to order and delivered with care, straight to your celebration." },
  { icon: "💬", title: "Custom Designs",       desc: "Have a vision? We'll bring it to life with a fully personalised cake design." },
  { icon: "⏱️", title: "Always On Time",       desc: "Your celebration doesn't wait. We pride ourselves on punctual delivery." },
  { icon: "🎁", title: "Beautiful Packaging",  desc: "Every order arrives in premium packaging that makes the unboxing unforgettable." },
];

const VALUES = [
  { num: "500+",  label: "Cakes Delivered"  },
  { num: "100%",  label: "Fresh Daily"       },
  { num: "6",     label: "Signature Flavours"},
  { num: "5★",    label: "Customer Rating"   },
];

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="inner-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url(/images/tiramisu.jpg)" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="section-tag">Our Story</span>
          <h1>Above <span>The Best</span></h1>
          <p>A journey built on passion, quality, and the belief that every celebration deserves the extraordinary.</p>
        </div>
      </section>

      {/* Story */}
      <section className="inner-section" style={{ background: "var(--surface)" }}>
        <div className="container story-grid">
          <div className="story-image-side reveal">
            <div className="story-frame">
              <Image src="/images/caramel.jpg" alt="Our craft" width={600} height={700} className="story-image" />
            </div>
            <div className="story-accent-card glass">
              <span>🏆</span>
              <div><strong>Above The Best</strong><small>Quality Guaranteed</small></div>
            </div>
          </div>

          <div className="story-text reveal" style={{ "--delay": "0.1s" }}>
            <span className="section-tag">Who We Are</span>
            <h2>Baked with <span>Passion</span> in Every Layer</h2>
            <p>
              Urban Slice Cakes was born from a simple belief: every celebration deserves
              something truly extraordinary. We started small — just a kitchen, a dream,
              and a commitment to quality that has never wavered.
            </p>
            <p>
              Today we craft premium cakes and pastries using only the finest ingredients,
              combining traditional techniques with modern artistry. Every order is personal
              to us because every celebration is personal to you.
            </p>
            <ul className="story-list">
              {[
                "Premium, locally-sourced ingredients",
                "Custom designs for every occasion",
                "Baked fresh to order, always",
                "Delivered with care and precision",
              ].map((item, i) => (
                <li key={i}><span className="story-dot" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="inner-section values-section">
        <div className="container">
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card glass reveal" style={{ "--delay": `${i * 0.08}s` }}>
                <span className="value-num">{v.num}</span>
                <span className="value-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="inner-section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <header className="section-header reveal">
            <span className="section-tag">Why Choose Us</span>
            <h2>The Urban Slice <span>Difference</span></h2>
            <p>We bring passion and perfection to every single slice.</p>
          </header>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card glass reveal" style={{ "--delay": `${i * 0.08}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing image + CTA */}
      <section className="about-closing">
        <div className="about-closing-img-wrap">
          <Image src="/images/white_forest.jpg" alt="Our cakes" width={1400} height={500} className="about-closing-img" />
          <div className="about-closing-overlay">
            <div className="container">
              <h2>Let's Bake Something <span>Beautiful</span></h2>
              <div className="cta-actions">
                <Link href="/menu" className="btn btn-primary btn-lg">View Full Menu</Link>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-outline">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
