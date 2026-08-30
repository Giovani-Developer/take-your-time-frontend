import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      // Ja estamos na home: nao ha navegacao pra fazer, so rola pro topo.
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Estamos em outra pagina (ex: /servico/3): deixa o Link navegar pra home normalmente.
      navigate('/');
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-mark" onClick={handleLogoClick}>
        <img
          src="/logo.png"
          alt="Take Your Time"
          className="nav-logo"
        />
      </Link>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#info">Visit Us</a>
      </div>
    </nav>
  );
}