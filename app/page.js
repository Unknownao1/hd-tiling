'use client'
import {useState,useEffect} from 'react'
const IMGS=['/images/p1.jpg','/images/h1.jpg','/images/p3.jpg','/images/p4.jpg','/images/p5.jpg','/images/p6.jpg','/images/p7.jpg','/images/p8.jpg']
const PROJECTS=[
  {title:'Borough Way, Potters Bar',type:'Extension & Complete Refurbishment'},
  {title:'Ramsey Close, Brookmans Park',type:'Orangery'},
  {title:'Wood Hall, Hertfordshire',type:'Grade II Listed Building Renovation'},
  {title:'Byng Drive, Potters Bar',type:'Loft Conversion'},
  {title:'Craigweil Avenue, Radlett',type:'New Build Home'},
  {title:'Fox Lane, Southgate',type:'Rear Extension'},
  {title:'Grove Park, Haringey',type:'Rear Extension'},
  {title:'New Barnes, Saint Albans',type:'Double Storey Extension'},
  ]
const HERO_IMGS_LEFT=['/images/p1.jpg','/images/p3.jpg','/images/p5.jpg','/images/h1.jpg','/images/p7.jpg']
const HERO_IMGS_RIGHT=['/images/p4.jpg','/images/p6.jpg','/images/p8.jpg','/images/p2.jpg','/images/p1.jpg']
const SERVICES=[
  {img:'/images/p3.jpg',title:'Extensions & Conversions',desc:'Rear, side and double storey extensions plus loft conversions designed and built to the highest standard. From planning to final finish.'},
  {img:'/images/p1.jpg',title:'Renovations',desc:'Complete home transformations from concept to completion. Our team works with you to match your vision, budget and timeline.'},
  {img:'/images/h1.jpg',title:'New Builds & Listed Buildings',desc:'New build homes and sensitive Grade II listed building renovations — expertly managed by James Boulton and his team.'},
  ]
const WHY=[
  {h:'Quality Comes First',p:'JMB Design and Build was founded on the principle that quality should never be compromised. Every project receives the same meticulous attention to detail.'},
  {h:'25+ Years Experience',p:'James and his team of qualified craftsmen have more than 25 years of experience in the industry, covering everything from groundwork to final decoration.'},
  {h:'Full In-House Service',p:'From architectural planning and design through to build and final finish, you deal with one trusted team from start to completion.'},
  ]
export default function Home(){
  const [form,setForm]=useState({name:'',phone:'',email:'',service:'',message:''})
  const [sent,setSent]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60)
    window.addEventListener('scroll',fn)
    return ()=>window.removeEventListener('scroll',fn)
  },[])
  function hc(e){setForm(f=>({...f,[e.target.name]:e.target.value}))}
  function hs(e){e.preventDefault();setSent(true)}
  return(<>
    <header className={scrolled?'scrolled':''}>
<a href="#home" className="logo">
  <img src="/images/logo.png" alt="JMB Design & Build"/>
  </a>
<nav>
  <a href="#portfolio">Portfolio</a>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
<a href="https://www.instagram.com/p/DB6nDlVIODT/" target="_blank" rel="noopener noreferrer">Instagram</a>
<a href="#contact" className="nav-cta">Contact Us</a>
  </nav>
  </header>

<section className="hero-split" id="home">
  <div className="hero-left">
  <div className="hero-left-inner">
  <p className="hero-eyebrow">Premium Contractors · Hertfordshire & London</p>
<h1 className="hero-h1">Design.<br/>Build.<br/>Transform.</h1>
<p className="hero-sub">JMB Design & Build — 25 years of exceptional construction, renovation and design across Hertfordshire and London.</p>
<div className="hero-btns">
  <a href="#contact" className="hbtn hbtn-solid">Get a Free Quote</a>
<a href="#portfolio" className="hbtn hbtn-outline">View Our Work</a>
  </div>
  </div>
  </div>
<div className="hero-right">
  <div className="hero-scroll-col hero-col-a">
{[...HERO_IMGS_LEFT,...HERO_IMGS_LEFT].map((src,i)=>(
  <div className="hero-scroll-img" key={i}><img src={src} alt="JMB project"/></div>
))}
  </div>
<div className="hero-scroll-col hero-col-b">
{[...HERO_IMGS_RIGHT,...HERO_IMGS_RIGHT].map((src,i)=>(
  <div className="hero-scroll-img" key={i}><img src={src} alt="JMB project"/></div>
))}
  </div>
  </div>
  </section>

<section className="booking-strip" id="book">
  <p className="booking-strip-title">Request a Free Consultation</p>
{sent?(<p className="booking-thanks">Thank you! We will be in touch within 24 hours.</p>):(
 <form className="booking-form" onSubmit={hs}>
  <div className="form-group"><label>Full Name</label><input name="name" type="text" placeholder="James Smith" required value={form.name} onChange={hc}/></div>
 <div className="form-group"><label>Phone Number</label><input name="phone" type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={hc}/></div>
 <div className="form-group"><label>Email Address</label><input name="email" type="email" placeholder="james@example.com" required value={form.email} onChange={hc}/></div>
 <div className="form-group"><label>Service Required</label>
 <select name="service" value={form.service} onChange={hc}>
  <option value="">Select...</option>
 <option>Loft Conversion</option>
 <option>House Extension</option>
 <option>Home Renovation</option>
 <option>New Build</option>
 <option>Listed Building</option>
 <option>Other</option>
  </select></div>
  <div className="form-group form-group-wide"><label>Tell us about your project</label><textarea name="message" placeholder="Brief description, location, and budget..." value={form.message} onChange={hc}/></div>
 <button type="submit" className="booking-submit">Send Enquiry</button>
  </form>
 )}
</section>

<section className="intro" id="intro">
  <div className="intro-text">
  <p className="section-eyebrow">Premium Contractors</p>
<h2>Premium Contractors For Exceptional Home Upgrades</h2>
<p>When you are ready to transform your property — whether it is more space, a full renovation, or expert groundwork — JMB Design &amp; Build is here to guide you every step of the way.</p>
<p>We deliver premium craftsmanship across Hertfordshire, London and surrounding areas. Our experienced team handles everything from groundwork to the final polish, ensuring each detail is executed with skill and dedication.</p>
<div className="btn-row">
  <a href="#contact" className="btn-outline">Contact Us</a>
<a href="#portfolio" className="btn-solid">View Our Portfolio</a>
  </div>
  </div>
<div className="intro-image"><img src="/images/p6.jpg" alt="JMB Design Build premium home renovation Hertfordshire"/></div>
  </section>

<section className="portfolio" id="portfolio">
  <p className="portfolio-label">View Our Portfolio Of Projects</p>
<div className="portfolio-grid">
{PROJECTS.map((p,i)=>(
  <div className="portfolio-item" key={i}>
  <img src={IMGS[i]||IMGS[0]} alt={p.title+' - '+p.type}/>
<div className="portfolio-item-caption">{p.type}</div>
  </div>
))}
  </div>
  </section>

<section className="about" id="about">
  <div className="about-image"><img src="/images/p8-team.jpg" alt="JMB team on site"/></div>
<div className="about-text">
  <p className="section-eyebrow">Who We Are</p>
<h2>Welcome to J.M.B Design &amp; Build Ltd, Where Quality Comes First</h2>
<p>JMB Design &amp; Build is a comprehensive building and contracting company dedicated to delivering exceptional construction experiences. With 25+ years in the industry and 450+ projects completed, our standards are unmatched.</p>
<p>Founded by James Boulton and based in Hertfordshire, we offer professional help from concept through our in-house Architectural Planning and Design team, through to build and final finish. We pride ourselves on quality, workmanship and referrals from happy clients.</p>
<a href="#contact" className="btn-about">About Us</a>
  </div>
  </section>

<section className="services" id="services">
  <div className="services-header">
  <p className="section-eyebrow">Our Services</p>
<h2>Our Construction And Renovation Services</h2>
  </div>
<div className="services-grid">
{SERVICES.map((s,i)=>(
  <div className="service-card" key={i}>
  <div className="service-card-img"><img src={s.img} alt={s.title}/></div>
  <h3>{s.title}</h3>
<p>{s.desc}</p>
  </div>
))}
  </div>
  </section>

<section className="why-us" id="why">
  <div className="why-us-image"><img src="/images/p4.jpg" alt="JMB Design Build site"/></div>
<div className="why-us-text">
  <h2>Why Choose JMB Design &amp; Build?</h2>
{WHY.map((w,i)=>(
  <div className="why-item" key={i}>
  <h4>{w.h}</h4>
 <p>{w.p}</p>
  </div>
 ))}
</div>
  </section>

<section className="testimonial">
  <img className="testimonial-bg" src="/images/p5.jpg" alt="JMB project"/>
  <div className="testimonial-overlay"/>
  <div className="testimonial-inner">
  <blockquote>"JMB Design &amp; Build have been fantastic throughout our renovation. James and his team worked diligently, communicated clearly and delivered a truly exceptional finish. I could not recommend them more highly."</blockquote>
<cite>— Gavin O'Donavan, Potters Bar</cite>
  </div>
  </section>

<div className="badges">
  <div className="badges-row">
  <span className="badge gold">Houzz Service Award 2022–2026</span>
<span className="badge">25+ Years Experience</span>
<span className="badge">450+ Projects Completed</span>
<span className="badge">Hertfordshire &amp; London</span>
<span className="badge">Grade II Listed Specialists</span>
  </div>
  </div>

<section className="cta-section" id="contact">
  <img src="/images/logo.png" alt="JMB Design &amp; Build" className="cta-logo"/>
  <h2>Ready to Transform Your Home?</h2>
<p>Get in touch with JMB Design &amp; Build today for a free consultation. We work closely with each client to deliver outstanding results on time and on budget.</p>
<p>Email: <a href="mailto:info@jmbdesignandbuild.co.uk">info@jmbdesignandbuild.co.uk</a></p>
  <a href="tel:+447908815645" className="cta-btn">Call Us Now</a>
  </section>

<section className="map-section">
  <p className="section-eyebrow">Find Us</p>
<h2>Our Location</h2>
<p className="map-address">14 The Service Road, Potters Bar, Hertfordshire EN6 1QA</p>
<div className="map-embed">
  <iframe title="JMB Design and Build location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.7!2d-0.1755!3d51.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487619f3a4a5a5a5%3A0x0!2s14+The+Service+Road%2C+Potters+Bar+EN6+1QA!5e0!3m2!1sen!2suk!4v1" width="100%" height="400" style={{border:0}} allowFullScreen loading="lazy"/>
  </div>
  </section>

<footer>
  <div className="footer-inner">
  <span className="footer-copy">&copy; {new Date().getFullYear()} JMB Design &amp; Build Ltd. All rights reserved.</span>
<div className="footer-social">
  <a href="https://www.facebook.com/JMBdesignandbuild" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  </a>
<a href="https://www.instagram.com/p/DB6nDlVIODT/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  </a>
<a href="https://www.instagram.com/direct/t/110683106996382/" target="_blank" rel="noopener noreferrer" aria-label="Message on Instagram">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  </a>
  </div>
<div className="footer-links">
  <a href="#home">Home</a>
<a href="#portfolio">Portfolio</a>
<a href="#services">Services</a>
<a href="#about">About</a>
  </div>
  </div>
  </footer>

<div className="wa-widget">
  <a href="https://wa.me/447908815645" target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp">
  <span className="wa-tooltip">Chat on WhatsApp</span>
<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
  </div>
  </>)
}
