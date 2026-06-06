'use client'
import Image from 'next/image'
import { useState } from 'react'

const P = [
  {title:'Borough Way, Potters Bar',type:'Extension & Complete Refurbishment',img:'/images/p1.jpg'},
  {title:'Byng Drive, Potters Bar',type:'Loft Conversion',img:'/images/p2.jpg'},
  {title:'Craigweil Avenue, Radlett',type:'New Build Home',img:'/images/p3.jpg'},
  {title:'Fox Lane, Southgate',type:'Rear Extension',img:'/images/p4.jpg'},
  {title:'Grove Park, Haringey',type:'Rear Extension',img:'/images/p5.jpg'},
  {title:'New Barnes, Saint Albans',type:'Double Storey Extension',img:'/images/p6.jpg'},
  {title:'Ramsey Close, Brookmans Park',type:'Orangery',img:'/images/p7.jpg'},
  {title:'Wood Hall, Hertfordshire',type:'Grade II Listed Building Renovation',img:'/images/p8.jpg'},
  ]

const IMGS = ['/images/p1.jpg','/images/p2.jpg','/images/p3.jpg','/images/p4.jpg','/images/p5.jpg','/images/p6.jpg','/images/p8.jpg','/images/p8-team.jpg']

const SVC = [
  {title:'Loft Conversions',desc:'Transform unused roof space into stunning living areas. From dormer to hip-to-gable, we handle every detail with precision and care.',img:'/images/p3.jpg'},
  {title:'House Extensions',desc:'Create the space your family needs. Our extensions blend seamlessly with your existing home using the finest materials and craftsmanship.',img:'/images/p1.jpg'},
  {title:'Home Renovations',desc:'Complete interior transformations that breathe new life into your property. Full refurbishments planned and executed to the highest standard.',img:'/images/p8-team.jpg'},
  ]

const WHY = [
    'Over 25 years of specialist experience in high-end residential construction across Hertfordshire and London.',
    'Award-winning service recognised by Houzz for five consecutive years — 2022, 2023, 2024, 2025 and 2026.',
    'Fully insured, directly employed tradespeople with a relentless commitment to quality, communication and on-time delivery.',
  ]

export default function Home() {
    const [form, setForm] = useState({name:'',phone:'',email:'',service:'',message:''})
    const [sent, setSent] = useState(false)

  function handleChange(e) {
        setForm(f => ({...f, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e) {
        e.preventDefault()
        setSent(true)
  }

  return (
        <>
  {/* NAV */}
          <nav className="nav">
            <a href="#home" className="nav-logo">
              <Image src="/images/logo.png" alt="JMB Design & Build" width={120} height={44} style={{objectFit:'contain'}} />
  </a>
        <ul className="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
  </ul>
  </nav>

{/* HERO */}
      <section id="home" className="hero">
                <div className="hero-bg" style={{backgroundImage:"url('/images/p5.jpg')"}} />
        <div className="hero-overlay" />
                <div className="hero-content">
                  <p className="hero-label">Hertfordshire & London</p>
          <h1 className="hero-title">JMB</h1>
          <p className="hero-tagline">Design. Build. Transform.</p>
          <div className="hero-btns">
                    <a href="#book" className="btn-primary">Book a Consultation</a>
            <a href="#projects" className="btn-outline">View Our Work</a>
        </div>
        </div>
        <div className="hero-scroll">
                  <span />
                  scroll
        </div>
        </section>

{/* BOOKING FORM */}
      <section id="book" className="booking-strip">
                <h2>Request a Free Consultation</h2>
{sent ? (
            <p style={{textAlign:'center',color:'var(--gold)',fontSize:'1rem',padding:'1rem 0'}}>Thank you! We will be in touch within 24 hours.</p>
         ) : (
                     <form className="booking-form" onSubmit={handleSubmit}>
                       <div className="form-group">
                         <label htmlFor="name">Full Name</label>
               <input id="name" name="name" type="text" placeholder="James Smith" required value={form.name} onChange={handleChange} />
  </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={handleChange} />
  </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="james@example.com" required value={form.email} onChange={handleChange} />
  </div>
            <div className="form-group">
                <label htmlFor="service">Service Required</label>
              <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                <option>Loft Conversion</option>
                <option>House Extension</option>
                <option>Home Renovation</option>
                <option>New Build</option>
                <option>Listed Building</option>
                <option>Other</option>
  </select>
  </div>
            <div className="form-group">
                <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" placeholder="Brief description of your project, location, and budget..." value={form.message} onChange={handleChange} />
  </div>
            <button type="submit" className="booking-submit">Send Enquiry</button>
  </form>
        )}
</section>

{/* INTRO */}
      <section className="intro">
                <div className="intro-text">
                  <p className="section-label">Design & Build Specialists</p>
          <h2>Building Exceptional Homes Across Hertfordshire</h2>
          <p>JMB Design & Build is a premier construction company with over 25 years of experience delivering loft conversions, extensions, new builds and complete home transformations to the highest standard.</p>
          <p>Founded by James Boulton, we combine expert craftsmanship with meticulous project management — ensuring every build is delivered on time, on budget and beyond expectation.</p>
          <div className="intro-btns">
                    <a href="#projects" className="btn-primary">Our Projects</a>
            <a href="#book" className="btn-outline">Free Consultation</a>
        </div>
        </div>
        <div className="intro-img">
                  <Image src="/images/p6.jpg" alt="Luxury home exterior" fill style={{objectFit:'cover'}} />
        </div>
        </section>

{/* PORTFOLIO */}
      <section id="projects" className="portfolio">
                <div className="portfolio-header">
                  <div>
                    <p className="section-label">Our Work</p>
            <h2>Featured Projects</h2>
        </div>
          <a href="#book" className="btn-primary">Start Your Project</a>
        </div>
        <div className="portfolio-grid">
      {P.slice(0,6).map((p,i) => (
                    <div key={i} className="portfolio-item">
                      <Image src={p.img} alt={p.title} fill style={{objectFit:'cover'}} />
              <div className="portfolio-caption">
                        <h3>{p.title}</h3>
                <p>{p.type}</p>
        </div>
        </div>
          ))}
            </div>
            </section>

{/* ABOUT */}
      <section id="about" className="about">
                <div className="about-img">
                  <Image src="/images/p8-team.jpg" alt="JMB team on site" fill style={{objectFit:'cover'}} />
        </div>
        <div className="about-text">
                  <p className="section-label">About JMB</p>
          <h2>25 Years of Craftsmanship</h2>
          <p>Founded by James Boulton, JMB Design & Build has been transforming homes across Hertfordshire and London for over two decades. We take enormous pride in the relationships we build with our clients and the quality of every project we undertake.</p>
          <p>Our directly employed team of skilled tradespeople is backed by a network of trusted specialists. From initial design through to final snag, we manage every aspect of your build with complete transparency.</p>
          <a href="#book" className="btn-primary" style={{marginTop:'1.5rem',display:'inline-block'}}>Meet the Team</a>
        </div>
        </section>

{/* SERVICES */}
      <section id="services" className="services">
                <div className="services-header">
                  <p className="section-label">What We Do</p>
          <h2>Our Specialist Services</h2>
        </div>
        <div className="services-grid">
      {SVC.map((s,i) => (
                    <div key={i} className="service-card">
                      <Image src={s.img} alt={s.title} width={600} height={340} style={{objectFit:'cover',width:'100%',height:'auto'}} />
                             <div className="service-card-body">
                               <h3>{s.title}</h3>
                               <p>{s.desc}</p>
               </div>
               </div>
                         ))}
</div>
  </section>

{/* WHY */}
      <section className="why">
                <div className="why-img">
                  <Image src="/images/p4.jpg" alt="JMB craftsmanship" fill style={{objectFit:'cover'}} />
        </div>
        <div className="why-text">
                  <h2>Why Choose JMB?</h2>
          <ul className="why-list">
      {WHY.map((w,i) => <li key={i}>{w}</li>)}
               </ul>
               </div>
               </section>

               {/* TESTIMONIAL */}
      <section className="testimonial">
                       <blockquote>A very professional service from start to finish. James and his team transformed our rear extension beyond what we imagined. Exceptional quality, brilliant communication throughout and delivered on time. We cannot recommend JMB highly enough.</blockquote>
        <cite>— Gavin O'Donavan, Potters Bar</cite>
        </section>

{/* BADGES */}
      <div className="badges">
                <div className="badges-inner">
                  <span className="badge">⭐ Houzz Service Award 2022–2026</span>
          <span className="badge">25+ Years Experience</span>
          <span className="badge">500+ Projects Completed</span>
          <span className="badge">Fully Insured</span>
          <span className="badge">📍 Hertfordshire & London</span>
        </div>
        </div>

{/* CTA */}
      <section id="contact" className="cta-section">
                <Image src="/images/logo.png" alt="JMB Design & Build" width={120} height={60} className="cta-logo" style={{objectFit:'contain'}} />
        <h2>Ready to Transform Your Home?</h2>
        <p>From a loft conversion to a complete renovation, JMB Design & Build delivers exceptional results. Contact us today for a free no-obligation consultation and quote.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="#book" className="btn-primary">Book a Consultation</a>
          <a href="https://wa.me/447908815645" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
        </div>
        </section>

{/* MAP */}
      <section className="map-section">
                <div className="map-header">
                  <p className="section-label">Find Us</p>
          <h2>Visit Our Office</h2>
          <p>14 The Service Road, Potters Bar, Hertfordshire EN6 1QA</p>
        </div>
        <iframe
          className="map-embed"
          title="JMB Design & Build Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.123456789!2d-0.1757!3d51.6978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s14+The+Service+Road%2C+Potters+Bar%2C+Hertfordshire+EN6+1QA!5e0!3m2!1sen!2suk!4v1234567890"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
            </section>

{/* FOOTER */}
      <footer className="footer">
                <div className="footer-inner">
                  <div className="footer-logo">
                    <Image src="/images/logo.png" alt="JMB Design & Build" width={80} height={36} style={{objectFit:'contain'}} />
        </div>
          <nav className="footer-links">
                    <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
          <div className="footer-social">
                    <a href="https://www.instagram.com/p/DB6nDlVIODT/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
            <a href="https://www.facebook.com/JMBdesignandbuild" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
            <a href="https://www.instagram.com/direct/t/110683106996382/" target="_blank" rel="noopener noreferrer" aria-label="Message on Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
        </a>
        </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} JMB Design & Build Ltd. All rights reserved. Potters Bar, Hertfordshire.</p>
        </div>
        </footer>

{/* WHATSAPP WIDGET */}
      <div className="wa-widget">
                <span className="wa-tooltip">Chat with us on WhatsApp</span>
        <a href="https://wa.me/447908815645" target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        </div>
        </>
  )
}
