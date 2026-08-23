import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/servico/${service.id}`}
      className="svc-card"
    >
      <div className="svc-thumb">
        Photo
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
            {service.preco && Number(service.preco) > 0
              ? `€${service.preco}`
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