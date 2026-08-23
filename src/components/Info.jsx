export default function Info() {
  const items = [
    {
 
      title: 'Arrival',
      text: 'Please arrive 10 minutes early to settle in before your session.',
    },
    {
  
      title: 'Cancellations',
      text: 'Free cancellation up to 12h before your appointment via your confirmation email.',
    },
    {

      title: 'Opening hours',
      text: 'Every day, 9:00 AM – 10:30 PM.',
    },
    {

      title: 'Single room',
      text: 'We treat one client at a time — your session is never rushed or shared.',
    },
  ];

  return (
    <section className="info" id="info">
      <div className="section-head">
        <span className="accent">
          Good to know
        </span>

        <h2>Visiting the clinic</h2>

        <p>
          A few small things that help everyone enjoy
          a calmer visit.
        </p>
      </div>

      <div className="info-grid">
        {items.map((item, index) => (
          <div className="info-item" key={item.title}>
            <span className="n">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h4>{item.title}</h4>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}