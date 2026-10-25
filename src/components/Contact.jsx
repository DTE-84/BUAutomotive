import React, { useState } from 'react';
import './Contact.css';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { site, fullAddress, mapsEmbed, mapsLink, phoneHref } from '../siteConfig.js';

const emptyForm = { name: '', phone: '', vehicle: '', service: 'General Repair', message: '' };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // The site is static (GitHub Pages), so the request opens in the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Service Request: ${form.service} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle: ${form.vehicle}`,
      `Service: ${form.service}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-header reveal">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">
            Let&apos;s Get You <span className="text-accent">Back on the Road.</span>
          </h2>
          <p className="section-lead">
            Call the shop, stop by on Main Street, or send a request below and we&apos;ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                <span>Your Name</span>
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" />
              </label>
            </div>
            <div className="form-row">
              <label>
                <span>Year / Make / Model</span>
                <input name="vehicle" value={form.vehicle} onChange={update} placeholder="e.g. 2015 Ford F-150" />
              </label>
              <label>
                <span>Service Needed</span>
                <select name="service" value={form.service} onChange={update}>
                  <option>General Repair</option>
                  <option>Diagnostics / Check Engine</option>
                  <option>Brakes &amp; Suspension</option>
                  <option>Engine &amp; Drivetrain</option>
                  <option>Diesel, Farm &amp; Fleet</option>
                  <option>Performance &amp; Race</option>
                  <option>Oil Change &amp; Maintenance</option>
                </select>
              </label>
            </div>
            <label>
              <span>What&apos;s Going On?</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Noises, warning lights, when it started..."
              />
            </label>
            <button type="submit" className="btn btn-primary contact-submit">
              Send Request <Send size={18} />
            </button>
          </form>

          <aside className="contact-info reveal">
            <a href={phoneHref} className="contact-call">
              <Phone size={28} />
              <span>
                <small>Call the Shop</small>
                {site.phone}
              </span>
            </a>

            <ul className="contact-details">
              <li>
                <MapPin size={20} />
                <a href={mapsLink} target="_blank" rel="noreferrer">{fullAddress}</a>
              </li>
              <li>
                <Mail size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="contact-hours">
                <Clock size={20} />
                <dl>
                  {site.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>

            <div className="contact-map">
              <iframe
                title={`Map to ${site.name}`}
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
