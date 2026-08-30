import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const precoMinimo =
    service.opcoes && service.opcoes.length > 0
      ? Math.min(...service.opcoes.map((o) => Number(o.preco)))
      : null;

  return (
    <Link
      to={`/servico/${service.id}`}
      className="svc-card"
    >
      <div className="svc-thumb">
        {service.imagemUrl ? (
          <img
            src={service.imagemUrl}
            alt={service.nome}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          'Photo coming soon'
        )}
      </div>

      <div className="svc-body">
        <span className="svc-cat">
          {service.categoriaNome ?? 'Treatment'}
        </span>

        <h3>{service.nome}</h3>

        <p className="desc">
          {service.descricao}
        </p>

        <div className="svc-foot">
          <span className="svc-price">
            {precoMinimo !== null
              ? `from €${precoMinimo}`
              : 'from €TBC'}
          </span>

          <span className="svc-link">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}