import { motion } from 'framer-motion';
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

        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
        >
          Massage Therapy · Dublin
        </motion.span>


        <motion.h1
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          Slow down.
          <em>Take Your Time.</em>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut',
          }}
        >
          One treatment room, one session at a time.
          No overlap, no rush — your appointment has
          our full, undivided attention from the moment
          you arrive.
        </motion.p>


        <motion.a
          href="#services"
          className="btn-ghost hero-cta-solo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: 'easeOut',
          }}
        >
          Browse treatments
        </motion.a>


        <motion.div
          className="hero-strip"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: 'easeOut',
          }}
        >
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
        </motion.div>

      </div>
    </header>
  );
}