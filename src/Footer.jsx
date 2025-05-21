import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          <span>© {currentYear} Your Name. Made with</span>
          <Heart size={16} className="footer-heart" />
          <span>using React & Tailwind</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
