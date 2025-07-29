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
        
        <div className="footer-brand-col">
          <img src={logo} alt="Logo Constructora" className="footer-logo" />
         {/*
          <div className="footer-links">
            <a href="#">{t.footer.privacidad}</a>
            <a href="#">{t.footer.terminos}</a>
            <a href="#">{t.footer.cookies}</a>
          </div>
         
         */}
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100069190637924" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/casasylotes_respaldo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram"><FaInstagram /></a>
           
            <a href="https://youtube.com/@casaslotes5992?si=dGM_NtOFDym_yUOm" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">{t.footer.copy}</div>
    </footer>
  );
} 