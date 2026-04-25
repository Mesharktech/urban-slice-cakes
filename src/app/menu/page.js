"use client";
import { useEffect } from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/254745104413";

const SIZES = [
  { size: "½ kg", tier: "Luxury",       price: "KES 850",   was: "KES 1,000", popular: false },
  { size: "1 kg",  tier: "Top",          price: "KES 1,700", was: "KES 2,200", popular: true  },
  { size: "1.5 kg",tier: "Rich Flavors", price: "KES 2,500", was: "KES 3,200", popular: false },
];

const CAKES = [
  { name: "White Forest",    desc: "Light vanilla sponge layered with whipped cream and fresh cherries.", img: "/images/white_forest.jpg" },
  { name: "Passion Cake",    desc: "Tropical passion fruit curd folded into a zesty, golden sponge.",      img: "/images/passion.jpg"     },
  { name: "Chocolate Cake",  desc: "Triple-layer dark chocolate with silky ganache and a glossy drip.",    img: "/images/chocolate.jpg"   },
  { name: "Mocha Cake",      desc: "Espresso-soaked sponge with coffee buttercream and dark chocolate.",   img: "/images/mocha.jpg"       },
  { name: "Tiramisu Cake",   desc: "Classic Italian mascarpone cream, lady fingers, and cocoa dust.",       img: "/images/tiramisu.jpg"    },
  { name: "Caramel Cake",    desc: "Buttery sponge drenched in salted caramel with a stunning drip.",      img: "/images/caramel.jpg"     },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function MenuPage() {
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
        <div className="page-hero-bg" style={{ backgroundImage: "url(/images/chocolate.jpg)" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="section-tag">Our Menu</span>
          <h1>Signature <span>Cake</span> Collection</h1>
          <p>Six exquisite flavours, three sizes — each baked fresh to your order.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="inner-section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <header className="section-header reveal">
            <span className="section-tag">Pricing</span>
            <h2>Choose Your <span>Size</span></h2>
            <p>Available in three sizes to suit every occasion and budget.</p>
          </header>

          <div className="size-grid">
            {SIZES.map((s, i) => (
              <div key={i} className={`size-card glass reveal${s.popular ? " size-card--popular" : ""}`} style={{ "--delay": `${i * 0.1}s` }}>
                {s.popular && <span className="popular-badge">Most Popular</span>}
                <div className="size-label">{s.size}</div>
                <div className="size-tier">{s.tier}</div>
                <div className="size-price">{s.price}</div>
                <div className="size-was">Was {s.was}</div>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm size-btn">
                  Order This Size
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cake Gallery */}
      <section className="inner-section">
        <div className="container">
          <header className="section-header reveal">
            <span className="section-tag">Flavours</span>
            <h2>Pick Your <span>Favourite</span></h2>
            <p>All flavours are available in any size. Mix and match for your celebration.</p>
          </header>

          <div className="cake-gallery">
            {CAKES.map((cake, i) => (
              <article key={i} className="cake-card reveal" style={{ "--delay": `${i * 0.1}s` }}>
                <div className="cake-img-wrap">
                  <Image src={cake.img} alt={cake.name} width={600} height={400} className="cake-img" />
                  <div className="cake-img-overlay">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <WhatsAppIcon /> Order
                    </a>
                  </div>
                </div>
                <div className="cake-card-body">
                  <h3>{cake.name}</h3>
                  <p>{cake.desc}</p>
                  <div className="cake-sizes-row">
                    <span>½kg — KES 850</span>
                    <span>1kg — KES 1,700</span>
                    <span>1.5kg — KES 2,500</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orb cta-orb-1" /><div className="cta-orb cta-orb-2" />
        <div className="container cta-content reveal">
          <h2>Found Your <span>Perfect Cake?</span></h2>
          <p>Message us on WhatsApp to place your order — we bake fresh to every request.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
              <WhatsAppIcon /> Order on WhatsApp
            </a>
          </div>
          <p className="cta-phone">Or call: <strong>0745 104 413</strong></p>
        </div>
      </section>
    </main>
  );
}
