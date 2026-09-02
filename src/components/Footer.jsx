import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <Reveal>
          <div>
            <div className="footer-title">
              Take Your Time
            </div>

            <p>
              Massage Therapy
              <br />
              Address to be confirmed
              <br />
              Dublin, Ireland
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <div className="footer-title">
              Hours
            </div>

            <p>
              Open every day
              <br />
              9:00 AM – 10:30 PM
              <br />
              Single room, private sessions
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div>
            <div className="footer-title">
              Contact
            </div>

            <p>
              WhatsApp: +353 83 057 7376
              <br />
              hello@takeyourtime.ie
            </p>
          </div>
        </Reveal>

      </div>

      <Reveal delay={0.4}>
        <div className="footer-bottom">
          <span>
            © 2026 Take Your Time Massage Therapy
          </span>
        </div>
      </Reveal>
    </footer>
  );
}