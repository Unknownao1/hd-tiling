'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

const BEFORE_IMG = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80'
const AFTER_IMG = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Luxury bathroom with freestanding bath' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', alt: 'Modern bathroom renovation' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', alt: 'Elegant bathroom design' },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', alt: 'Premium bathroom tiling' },
  { src: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80', alt: 'Marble bathroom' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', alt: 'Spa-style bathroom' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80', alt: 'Gold fixtures bathroom' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Contemporary bathroom' },
  ]

export default function Home() {
    const containerRef = useRef(null)
    const [sliderPos, setSliderPos] = useState(50)
    const [isDragging, setIsDragging] = useState(false)

  const handleMove = useCallback((clientX) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        setSliderPos((x / rect.width) * 100)
  }, [])

  const onMouseMove = useCallback((e) => {
        if (isDragging) handleMove(e.clientX)
  }, [isDragging, handleMove])

  const onTouchMove = useCallback((e) => {
        e.preventDefault()
        handleMove(e.touches[0].clientX)
  }, [handleMove])

  useEffect(() => {
        const up = () => setIsDragging(false)
        window.addEventListener('mouseup', up)
        return () => window.removeEventListener('mouseup', up)
  }, [])

  return (
        <>
          <nav>
            <div className="logo">HD Tiling</div>
          <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>

      <section className="hero" ref={containerRef} onMouseMove={onMouseMove} onTouchMove={onTouchMove}>
            <div className="before-after-container">
              <img className="before-img" src={BEFORE_IMG} alt="Before renovation" draggable={false} />
              <div style={{ position: 'absolute', inset: 0, zIndex: 2, overflow: 'hidden', width: `${sliderPos}%` }}>
            <img src={AFTER_IMG} alt="After renovation" draggable={false} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${10000 / sliderPos}%`, maxWidth: 'none', objectFit: 'cover' }} />
  </div>
          <div className="slider-handle" style={{ left: `${sliderPos}%` }} onMouseDown={() => setIsDragging(true)} onTouchStart={(e) => { e.preventDefault(); setIsDragging(true) }}>
            <div className="slider-circle">◀▶</div>
  </div>
          <span className="before-label">BEFORE</span>
          <span className="after-label">AFTER</span>
  </div>
        <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Transform Your <span>Bathroom</span></h1>
            <p>Premium tiling &amp; renovation specialists across the UK</p>
          <div className="cta-group">
              <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="#gallery" className="btn-secondary">View Our Work</a>
  </div>
  </div>
  </section>

      <section className="services" id="services">
          <h2 className="section-title">Our Services</h2>
        <div className="gold-line" />
          <div className="services-grid">
{[
{ icon: '🛁', title: 'Full Bathroom Renovation', desc: 'Complete transformation from design to finish — bespoke bathrooms tailored to your vision.' },
{ icon: '🪨', title: 'Premium Tiling', desc: 'Large format, marble, mosaic and feature walls installed with precision and care.' },
{ icon: '✨', title: 'Luxury Fixtures', desc: 'Freestanding baths, floating vanities, gold and brushed brass hardware fitted flawlessly.' },
{ icon: '💡', title: 'Lighting & Finishes', desc: 'LED strip lighting, backlit mirrors, and atmospheric finishing touches to complete the look.' },
            ].map((s, i) => (
                          <div className="service-card" key={i}>
                            <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
              </div>
                            ))}
  </div>
  </section>

      <section id="gallery">
          <h2 className="section-title">Our Work</h2>
        <div className="gold-line" />
          <div className="gallery-grid">
{galleryImages.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
  </div>
          ))}
            </div>
            </section>

      <section className="contact" id="contact">
                    <h2 className="section-title">Get In Touch</h2>
        <div className="gold-line" />
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Email Address" required />
                      <input type="tel" placeholder="Phone Number" />
                      <select defaultValue="">
                        <option value="" disabled>Select Service</option>
            <option>Full Bathroom Renovation</option>
            <option>Tiling Only</option>
            <option>Luxury Fixtures</option>
            <option>Other</option>
            </select>
          <textarea placeholder="Tell us about your project..." />
                      <button type="submit" className="btn-primary">Send Message</button>
            </form>
              </section>

      <footer>
                    <p>© 2025 <span className="footer-gold">HD Tiling</span> · Premium Bathroom Renovations · All Rights Reserved</p>
            </footer>
            </>
  )
}
