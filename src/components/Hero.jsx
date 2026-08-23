import heroRoom from '../assets/hero-room.jpeg';

export default function Hero() {
  return (
    <header
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11,31,58,0.82) 0%, rgba(20,47,82,0.8) 55%, rgba(75,42,107,0.85) 100%), url(${heroRoom})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <svg
        className="hero-swirl"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="290"
          cy="110"
          r="170"
          stroke="#8E6EA6"
          strokeWidth="0.6"
          opacity="0.35"
        />

        <circle
          cx="290"
          cy="110"
          r="120"
          stroke="#B99A5B"
          strokeWidth="0.6"
          opacity="0.4"
        />
      </svg>

      <div className="hero-inner">
        <span className="eyebrow">
          Massage Therapy · Dublin
        </span>

        <h1>
          Slow down.
          <em>Take Your Time.</em>
        </h1>

        <p>
          One treatment room, one session at a time.
          No overlap, no rush — your appointment has
          our full, undivided attention from the moment
          you arrive.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Book your session
          </button>

          <a href="#services" className="btn-ghost">
            Browse treatments
          </a>
        </div>

        <div className="hero-strip">
          <div>
            <span className="num">7 days</span>
            <div className="lbl">
              Open every day
            </div>
          </div>

          <div>
            <span className="num">1 room</span>
            <div className="lbl">
              Private & exclusive
            </div>
          </div>

          <div>
            <span className="num">15 min</span>
            <div className="lbl">
              Reset between sessions
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}