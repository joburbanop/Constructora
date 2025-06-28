import React, { useState } from 'react';
import logo from '../assets/LOGO.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';
import { useIdioma } from '../context/IdiomaContext';

export default function Footer() {
  const { t } = useIdioma();
  const [form, setForm] = useState({ email: '', telefono: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3500);
    setForm({ email: '', telefono: '' });
  };

  return (
    <footer className="footer">
      <div className="footer-content footer-columns">
        <div className="footer-form-col">
          <div className="footer-form-title">{t.footer.formTitle}</div>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder={t.footer.email}
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder={t.footer.telefono}
              value={form.telefono}
              onChange={handleChange}
              required
            />
            <button type="submit">{t.footer.enviar}</button>
          </form>
          {enviado && <div className="footer-success">{t.footer.exito}</div>}
        </div>
        <div className="footer-brand-col">
          <img src={logo} alt="Logo Constructora" className="footer-logo" />
          <div className="footer-links">
            <a href="#">{t.footer.privacidad}</a>
            <a href="#">{t.footer.terminos}</a>
            <a href="#">{t.footer.cookies}</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">{t.footer.copy}</div>
    </footer>
  );
} 