'use client'

const P=[
  {l:'Borough Way, Potters Bar',t:'Extension & Complete Refurbishment'},
  {l:'Byng Drive, Potters Bar',t:'Loft Conversion'},
  {l:'Craigweil Avenue, Radlett',t:'New Build Home'},
  {l:'Fox Lane, Southgate',t:'Rear Extension'},
  {l:'Grove Park, Haringey',t:'Rear Extension'},
  {l:'New Barnes, Saint Albans',t:'Double Storey Extension'},
  {l:'Ramsey Close, Brookmans Park',t:Orangery'},
  {l:'Wood Hall, Hertfordshire',t:'Grade II Listed Building Renovation'},
  ]

const IMGS=[
    '/images/p1.jpg','/images/p8-team.jpg','/images/p3.jpg',
  '/images/p4.jpg','/images/p5.jpg','/images/p6.jpg',
  '/images/p7.jpg','/images/p8.jpg',
  ]

const SVC=[
  {img:'/images/p3.jpg',title:'Loft Conversions',desc:'Transform unused loft space into stunning living areas. We handle planning, structural work and stunning finishes from start to completion.'},
  {img:'/images/p8-team.jpg',title:'Home Renovations',desc:'Complete home transformations from concept to completion. Our in-house design team works with you to match your vision, needs and budget.'},
  {img:'/images/p2.jpg',title:'Home Renovations',desc:'Complete home transformations from concept to completion. Our in-house design team works with you to match your vision, needs and budget.'},
  ]

const WHY=[
  {h:'Quality Comes First',p:'JMB Design and Build was founded on the principle that quality should never be compromised. Every project receives the same meticulous attention to detail.'},
  {h:'25+ Years Experience',p:'James and his team of qualified craftsmen have more than 25 years of experience in the industry, covering everything from groundwork to final decoration.'},
  {h:'Full In-House Service',p:'From architectural planning and design through to build and final finish, you deal with one trusted team from start to completion.'},
  ]

export default function Home(){return(<>
  <nav>
  <a href="#home" className="nav-logo">
  <div className="nav-logo-text">JMB<span>Design &amp; Build</span></div>
  </a>
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
                               <div className="intro-image"><img src="/images/p2.jpg" alt="JMB Design Build premium home renovation Hertfordshire"/></div>
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
  <div className="about-image"><img src="/images/p8.jpg" alt="JMB Design Build team on site"/></div>
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
  <div className="cta-logo">&#127959;</div>
<h2>Start Your Project With JMB Design &amp; Build Today</h2>
<p>From full extensions to loft conversions, renovations and groundwork &#8212; JMB Design &amp; Build is here to guide you through every step of the process.</p>
<p>Get in touch with our team today!</p>
<a href="mailto:info@jmbdesignandbuild.co.uk" className="btn-dark">Contact Us</a>
  </section>

<footer>
  <p className="footer-copy">&#169; 2026 <span>JMB Design &amp; Build Ltd</span>. All Rights Reserved.</p>
  <div className="footer-links">
  <a href="#about">About Us</a>
<a href="#portfolio">Portfolio</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
  </div>
  </footer>
  </>)}
