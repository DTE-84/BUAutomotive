import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { site, phoneHref } from '../siteConfig.js';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'navbar-solid' : ''}`}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand" onClick={close} aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href={phoneHref} className="btn btn-primary navbar-call" onClick={close}>
            <Phone size={18} /> {site.phone}
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
