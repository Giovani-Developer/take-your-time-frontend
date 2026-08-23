import aboutRoom from '../assets/about-room.jpeg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div
          className="about-img"
          style={{
            backgroundImage: `url(${aboutRoom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="about-copy">
          <span className="accent">
            Our space
          </span>

          <h2
            style={{
              color: 'var(--plum-deep)',
              marginBottom: '14px',
            }}
          >
            A calm room, entirely yours
          </h2>

          <p>
            Take Your Time was built around a simple
            idea: real rest needs real privacy. Every
            treatment happens in our single, dedicated
            room — no back-to-back overlap, no shared
            waiting between clients.
          </p>

          <p>
            Warm wood floors, soft light and a handful
            of green plants set the tone the moment you
            walk in. Whatever brought you here, the next
            hour is entirely about slowing down.
          </p>
        </div>
      </div>
    </section>
  );
}