import { Link } from "@tanstack/react-router";
import { Award, ArrowRight, Send, CalendarDays, BriefcaseBusiness, Globe, FileText, Layers, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { images, aboutDescription, workExperience, education, certifications, projects, updates } from "@/lib/portfolio-data";
import portrait from "@/assets/satria-cutout.png";
import fluidBg from "@/assets/hero-fluid-bg.png";

export function SectionHeading({ title, kicker }: { title: string; kicker?: string }) {
 return <div className="section-heading">{kicker && <p className="kicker">{kicker}</p>}<h2 className="section-title">{title}</h2><div className="short-rule" /></div>;
}
export function HeroSection() {
  return <section className="hero"><div className="site-container"><div className="hero-grid"><div className="hero-copy"><p className="kicker">Hello, I am</p><h1>Satria Nur<br />Ardiansyah</h1><p className="hero-role">CATALOGER ELINS STAFF</p><div className="short-rule" /><p className="hero-summary">Experienced in product and material standardization, data management, and administrative activities, with a focus on accurate cataloguing and procurement support.</p><Button asChild variant="portfolio" className="hero-action"><Link to="/portfolio">View Portfolio <ArrowRight /></Link></Button></div><div className="hero-portrait"><img className="hero-portrait-bg" src={fluidBg} alt="" aria-hidden="true" /><img src={portrait} alt="Satria Nur Ardiansyah" fetchPriority="high" /></div></div><div className="stats">{[{number:'3+',label:'Years Experience',Icon:CalendarDays},{number:'104',label:'Projects Completed',Icon:BriefcaseBusiness},{number:'3',label:'Web Development',Icon:Globe}].map(({number,label,Icon})=><div className="stat" key={label}><span className="stat-icon"><Icon size={24} strokeWidth={1.7} /></span><div><p className="stat-number">{number}</p><p className="stat-label">{label}</p></div></div>)}</div></div></section>;
}
export function AboutSection() {
 return <section className="page-section"><div className="site-container about-grid"><SectionHeading title="About Me" /><div><p className="body-copy">{aboutDescription}</p><div className="contact-list"><p><strong>Email:</strong><a href="mailto:satria62317@gmail.com">satria62317@gmail.com</a></p><p><strong>Location:</strong>Teuku Umar Street, Latsari 2 No. 57, Tuban, East Java</p><p><strong>Phone:</strong><a href="tel:+6281216130661">081216130661</a></p><p><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/satria-nur16" target="_blank" rel="noreferrer">www.linkedin.com/in/satria-nur16</a></p></div></div></div></section>;
}
export function ProfileSection() {
 return <section className="page-section section-muted"><div className="site-container"><SectionHeading title="Profile" /><div className="profile-grid"><div><h3 className="profile-heading">Work Experience</h3><div className="timeline">{workExperience.map(job=><div className="timeline-item" key={job.role}><p className="timeline-period">{job.period}</p><h4 className="timeline-role">{job.role}</h4><p className="timeline-company">{job.company}</p><p className="timeline-summary">{job.summary}</p></div>)}</div></div><div><h3 className="profile-heading">Education</h3><div className="timeline">{education.map(item=><div className="timeline-item" key={item.role}><p className="timeline-period">{item.period}</p><h4 className="timeline-role">{item.role}</h4><p className="timeline-company">{item.company}</p></div>)}</div><div className="skills"><h3 className="profile-heading">Skill Information</h3>{['Microsoft Office','Material Cataloging & Product Standardization','Data Management & Data Entry'].map(skill=><p className="skill" key={skill}>{skill}</p>)}</div></div></div></div></section>;
}
export function CertificationSection() {
 return <section className="page-section"><div className="site-container"><SectionHeading title="Sertification Information" kicker="Achievements" /><div className="card-grid">{certifications.map(cert=><article className="info-card" key={cert.title}><Award className="certificate-icon" size={28} strokeWidth={1.5} /><h3>{cert.title}</h3><p className="body-copy">{cert.description}</p></article>)}</div></div></section>;
}
export function PortfolioSection() {
 return <section className="page-section"><div className="site-container"><div className="section-heading"><p className="kicker">Web Development</p><h2 className="section-title">Websites Successfully Developed</h2><div className="short-rule" /></div><div className="card-grid">{projects.map(project=><article className="project-card" key={project.name}><img className="card-image" src={images[project.image]} alt={project.title} loading="lazy" /><div className="card-body"><p className="kicker">{project.name}</p><h3>{project.title}</h3><Link className="details-link" to="/contact">View details <ArrowRight size={14} /></Link></div></article>)}</div></div></section>;
}
export function UpdatesSection() {
  return <section className="page-section work-section"><div className="site-container">
    <div className="work-heading"><div className="short-rule" /><h2 className="work-section-title">WORK PERFORMED THIS YEAR</h2><p>Berikut adalah beberapa pekerjaan yang telah saya kerjakan selama tahun ini.</p></div>
    <div className="work-grid">{updates.map(update => {
      const isTender = update.title.startsWith('Dokumen Tender');
      const lines = update.title.split('\n').map(line => line.trim()).filter(Boolean);
      const title = isTender ? 'Dokumen Tender' : lines[0];
      const category = isTender ? update.title.replace('Dokumen Tender', '').trim() : (lines[1] ?? '');
      const materials = lines.slice(2).map(line => line.replace(/^•\s*/, ''));
      const tasks = update.description.split('•').map(task => task.trim()).filter(Boolean);
      const materialLabel = category.replace(/\.\s*Meliputi\s*:?/i, '').replace(/,\s*/g, ', ');
      const documents = update.description.includes('Bill of Quantity') ? `BOQ, HPP${update.description.includes('RFI') ? ', RFI' : ''}` : '—';
      return <article className="work-card" key={`${update.date}-${update.title}`}>
        <header className="work-card-header"><span className="work-date"><CalendarDays size={13} aria-hidden="true" />{update.date}</span><div><h3>{title}</h3>{materialLabel && <p>{materialLabel}</p>}</div></header>
        <div className={`work-card-content${materials.length ? ' has-materials' : ''}`}>
          <img className="work-image" src={images[update.image]} alt={materialLabel || title} loading="lazy" />
          {materials.length > 0 && <div className="work-materials"><h4>{category.replace(/\s*:\s*$/, '')}:</h4><ul>{materials.map(material => <li key={material}>{material}</li>)}</ul></div>}
          <div className="work-tasks">{isTender && <h4>Scope of Work</h4>}<ul>{tasks.map(task => <li key={task}>{task}</li>)}</ul></div>
        </div>
        <dl className="work-info"><div><span className="work-info-icon"><FileText size={16} aria-hidden="true" /></span><div><dt>Dokumen Terkait</dt><dd>{documents}</dd></div></div><div><span className="work-info-icon"><Layers size={16} aria-hidden="true" /></span><div><dt>Material</dt><dd>{isTender ? materialLabel : '—'}</dd></div></div><div><span className="work-info-icon"><MapPin size={16} aria-hidden="true" /></span><div><dt>Lingkup Pekerjaan</dt><dd>{isTender ? 'Tender Preparation & Procurement' : 'Cataloguing & Data Management'}</dd></div></div></dl>
      </article>;
    })}</div>
  </div></section>;
}
export function ContactSection() {
 const [status,setStatus]=useState('');
 function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const form=e.currentTarget; const d=new FormData(form); const name=String(d.get('name')??''); const email=String(d.get('email')??''); const message=String(d.get('message')??''); setStatus('Sending…'); fetch('/api/public/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,message})}).then(r=>{ if(!r.ok) throw new Error('failed'); setStatus('Thank you! Your message has been received — your email app is also opening with a ready draft.'); }).catch(()=>{ setStatus('Your email draft is open, but the message could not be saved. Please try again later.'); }); window.location.href=`mailto:satria62317@gmail.com?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`; }
 return <section className="page-section section-muted"><div className="site-container"><SectionHeading title="Contact" /><div className="contact-grid"><div><h3>Let’s make something useful.</h3><p className="body-copy">Have an interesting project in mind? I would love to hear about it.</p><div className="contact-list"><p><strong>Email</strong><br /><a href="mailto:satria62317@gmail.com">satria62317@gmail.com</a></p><p><strong>WhatsApp</strong><br /><a href="https://wa.me/6281216130661" target="_blank" rel="noreferrer">Chat via WhatsApp</a></p><p><strong>Phone</strong><br /><a href="tel:+6281216130661">081216130661</a></p><p><strong>Location</strong><br />Tuban, East Java, Indonesia</p></div></div><div><h3>Tell me about your project</h3><form className="contact-form" onSubmit={submit}><label className="form-field">Your Name<input name="name" autoComplete="name" required /></label><label className="form-field">Email Address<input name="email" type="email" autoComplete="email" required /></label><label className="form-field">Your Message<textarea name="message" required /></label><div className="contact-actions"><Button type="submit">Send Message <Send size={15} /></Button><Button asChild variant="outline"><a href="https://wa.me/6281216130661" target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={15} /></a></Button></div>{status && <p className="form-status" role="status">{status}</p>}</form></div></div></div></section>;
}
