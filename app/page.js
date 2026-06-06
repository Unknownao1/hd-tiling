'use client'
import { useState } from 'react'
const P=[
  {l:'Borough Way, Potters Bar',t:'Extension & Complete Refurbishment'},
  {l:'Byng Drive, Potters Bar',t:'Loft Conversion'},
  {l:'Craigweil Avenue, Radlett',t:'New Build Home'},
  {l:'Fox Lane, Southgate',t:'Rear Extension'},
  {l:'Grove Park, Haringey',t:'Rear Extension'},
  {l:'New Barnes, Saint Albans',t:'Double Storey Extension'},
  {l:'Ramsey Close, Brookmans Park',t:'Orangery'},
  {l:'Wood Hall, Hertfordshire',t:'Grade II Listed Building Renovation'},
  ]
const IMGS=['/images/p1.jpg','/images/p8-team.jpg','/images/p3.jpg','/images/p4.jpg','/images/p5.jpg','/images/p6.jpg','/images/p7.jpg','/images/p8.jpg']
const SVC=[
  {img:'/images/p3.jpg',title:'Loft Conversions',desc:'Transform unused loft space into stunning living areas. We handle planning, structural work and stunning finishes from start to completion.'},
  {img:'/images/p1.jpg',title:'House Extensions',desc:'Rear, side and double storey extensions designed and built to the highest standard. We manage planning, design and full construction.'},
  {img:'/images/p8-team.jpg',title:'Home Renovations',desc:'Complete home transformations from concept to completion. Our in-house design team works with you to match your vision, needs and budget.'},
  ]
const WHY=[
  {h:'Quality Comes First',p:'JMB Design and Build was founded on the principle that quality should never be compromised. Every project receives the same meticulous attention to detail.'},
  {h:'25+ Years Experience',p:'James and his team of qualified craftsmen have more than 25 years of experience in the industry, covering everything from groundwork to final decoration.'},
  {h:'Full In-House Service',p:'From architectural planning and design through to build and final finish, you deal with one trusted team from start to completion.'},
  ]
export default function Home(){
    const [form,setForm]=useState({name:'',phone:'',email:'',service:'',message:''})
    const [sent,setSent]=useState(false)
    function handleChange(e){setForm(f=>({...f,[e.target.name]:e.target.value}))}
    function handleSubmit(e){e.preventDefault();setSent(true)}
    return(<>
      <nav>
      <a href="#home" className="nav-logo"><img src="/images/logo.png" alt="JMB Design &amp; Build" className="nav-logo-img"/></a>
  <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
  <section className="hero" id="home">
      <img className="hero-bg" src="/images/p5.jpg" alt="JMB Design and Build - Premium Construction Hertfordshire London"/>
      <div className="hero-overlay"/>
      <div className="hero-text">
      <h1>JMB<span>Design &amp; Build</span></h1>
      <div className="hero-tagline">Design. Build. Transform.</div>
  <div className="hero-scroll"><a href="#intro"><div className="hero-scroll-line"/>Scroll</a></div>
      </div>
      </section>
  <section className="booking-strip" id="book">
      <h2 className="booking-title">Request a Free Consultation</h2>
  {sent?(<p className="booking-thanks">Thank you! We will be in touch within 24 hours.</p>):(
   <form className="booking-form" onSubmit={handleSubmit}>
    <div className="form-group"><label>Full Name</label><input name="name" type="text" placeholder="James Smith" required value={form.name} onChange={handleChange}/></div>
   <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={handleChange}/></div>
   <div className="form-group"><label>Email Address</label><input name="email" type="email" placeholder="james@example.com" required value={form.email} onChange={handleChange}/></div>
   <div className="form-group"><label>Service Required</label>
   <select name="service" value={form.service} onChange={handleChange}>
    <option value="">Select a service...</option>
   <option>Loft Conversion</option>
   <option>House Extension</option>
   <option>Home Renovation</option>
   <option>New Build</option>
   <option>Listed Building</option>
   <option>Other</option>
    </select></div>
    <div className="form-group form-group-wide"><label>Tell us about your project</label><textarea name="message" placeholder="Brief description of your project, location, and budget..." value={form.message} onChange={handleChange}/></div>
   <button type="submit" className="booking-submit">Send Enquiry</button>
    </form>
   )}
  </section>
  <section className="intro" id="intro">
    <div className="intro-content">
    <p className="section-label">Premium Contractors</p>
  <h2>Premium Contractors For Exceptional Home Upgrades</h2>
  <p>When you are ready to transform your property — whether it is more space, a full renovation, or expert groundwork — JMB Design &amp; Build is here to guide you every step of the way.</p>
  <p>We deliver premium craftsmanship across Hertfordshire, London and surrounding areas. Our experienced team handles everything from groundwork to the final polish, ensuring each detail is executed with skill and dedication.</p>
  <div className="btn-group">
    <a href="#contact" className="btn-dark">Contact Us</a>
  <a href="#portfolio" className="btn-gold">View Our Portfolio</a>
    </div>
    </div>
  <div className="intro-image"><img src="/images/p6.jpg" alt="JMB Design Build premium home renovation Hertfordshire"/></div>
    </section>
  <section className="portfolio" id="portfolio">
    <div className="portfolio-header">
    <p className="portfolio-label">Recent Projects</p>
  <h2>View Our Portfolio Of Projects</h2>
    </div>
  <div className="portfolio-grid">
  {P.map((p,i)=>(
    <div className="portfolio-item" key={i}>
    <img src={IMGS[i]||IMGS[0]} alt={p.l+' - '+p.t+' | JMB Design and Build'} loading="lazy"/>
  <div className="portfolio-caption"><h3>{p.l}</h3><p>{p.t}</p></div>
  </div>
))}
  </div>
  </section>
<section className="about" id="about">
  <div className="about-image"><img src="/images/p8-team.jpg" alt="JMB Design Build team on site"/></div>
<div className="about-content">
  <p className="section-label">About Us</p>
<h2>Welcome to J.M.B Design &amp; Build Ltd, Where Quality Comes First</h2>
<p>We design, build and create beautiful spaces within your home. J.M.B Design &amp; Build Ltd is a building firm based in Hertfordshire run by James Boulton.</p>
<p>James and his team of qualified craftsmen have more than 25 years of experience in the industry. We offer professional help from concept through our in-house Architectural Planning and Design team, through to build and final finish.</p>
<p>J.M.B Design &amp; Build Ltd prides itself on quality, workmanship and referrals from happy clients.</p>
<a href="#contact" className="btn-dark">Learn More About JMB</a>
  </div>
  </section>
<section className="services" id="services">
  <div className="services-header">
  <p className="section-label">Our Services</p>
<h2>Our Construction &amp; Renovation Services</h2>
  </div>
<div className="services-grid">
{SVC.map((s,i)=>(
  <div className="service-card" key={i}>
  <div className="service-card-img"><img src={s.img} alt={s.title+' | JMB Design and Build Hertfordshire'} loading="lazy"/></div>
<div className="service-card-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
  </div>
))}
  </div>
  </section>
<section className="why">
  <div className="why-image"><img src="/images/p4.jpg" alt="JMB Design Build quality construction"/></div>
<div className="why-content">
  <p className="section-label">Why JMB</p>
<h2>Choose JMB Design &amp; Build: Your Trusted Building Partner</h2>
{WHY.map((w,i)=>(
  <div className="why-item" key={i}><h4>{w.h}</h4><p>{w.p}</p></div>
 ))}
</div>
  </section>
<section className="testimonial">
  <img className="testimonial-bg" src="/images/p6.jpg" alt=""/>
  <div className="testimonial-inner">
  <blockquote>&ldquo;A very professional service. James and the team transformed our bungalow into exactly what we had hoped for and all within the initial fee scope. Delighted with the outcome. We have recommended JMB to friends!&rdquo;</blockquote>
<cite>— Gavin O&apos;Donavan, Potters Bar</cite>
  </div>
  </section>
<section className="badges">
  <p className="badges-label">Some Of Our Recognitions</p>
<div className="badges-row">
  <span className="badge gold">&#9733;&#9733;&#9733;&#9733;&#9733; Houzz Award 2022&#8211;2026</span>
<span className="badge">25+ Years Experience</span>
<span className="badge">450+ Projects Completed</span>
<span className="badge">Fully Insured</span>
<span className="badge">Hertfordshire &amp; London</span>
  </div>
  </section>
<section className="cta-section" id="contact">
  <div className="cta-logo"><img src="/images/logo.png" alt="JMB Design &amp; Build" className="cta-logo-img"/></div>
<h2>Start Your Project With JMB Design &amp; Build Today</h2>
<p>From full extensions to loft conversions, renovations and groundwork &#8212; JMB Design &amp; Build delivers quality on every project.</p>
<p>Get in touch with our team today!</p>
<a href="mailto:info@jmbdesignandbuild.co.uk" className="btn-dark">Contact Us</a>
  </section>
<section className="map-section">
  <div className="map-header">
  <p className="section-label">Find Us</p>
<h2>Visit Our Office</h2>
<p className="map-address">14 The Service Road, Potters Bar, Hertfordshire EN6 1QA</p>
  </div>
<iframe className="map-embed" title="JMB Design &amp; Build Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.7!2d-0.1757!3d51.6978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876172b8c3a1f41%3A0x0!2s14+The+Service+Road%2C+Potters+Bar+EN6+1QA!5e0!3m2!1sen!2suk!4v1717700000000" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
  </section>
<footer>
  <p className="footer-copy">&copy; 2026 <span>JMB Design &amp; Build Ltd</span>. All rights reserved.</p>
  <div className="footer-social">
  <a href="https://www.instagram.com/p/DB6nDlVIODT/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  </a>
<a href="https://www.facebook.com/JMBdesignandbuild" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  </a>
<a href="https://www.instagram.com/direct/t/110683106996382/" target="_blank" rel="noopener noreferrer" aria-label="Message on Instagram">
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
  </a>
  </div>
<div className="footer-links">
  <a href="#about">About Us</a>
<a href="#portfolio">Portfolio</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
  </div>
  </footer>
<div className="wa-widget">
  <span className="wa-tooltip">Chat with us on WhatsApp</span>
<a href="https://wa.me/447908815645" target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  </a>
  </div>
  </>)}
