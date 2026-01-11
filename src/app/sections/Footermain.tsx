import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './footermain.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Logo */}
        <Link href="/" className="footer-logo">
          <Image
            src="/navbar-logo.png"
            alt="Nature Logo"
            width={100}
            height={80}
            className="logo-img"
          />
        </Link>

        {/* Social Media */}
        <div className="footer-social">
          <Link href="https://github.com/YogasWara18" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/t-kurnia-yogas-wara-604b64338/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="mailto:teukukurniayogaswara@gmail.com">
            <FaEnvelope />
          </Link>
          <Link href="https://wa.me/+6281234701212" target="_blank">
            <FaWhatsapp />
          </Link>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()}. All Rights Reserved By{" "}
          <Link href="https://www.linkedin.com/in/t-kurnia-yogas-wara-604b64338/" target="_blank">
            T. Kurnia Yogas Wara
          </Link>
        </p>
      </div>
    </footer>
  );
}