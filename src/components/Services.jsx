import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { getCategorias, getServicos } from '../services/api';

export default function Services() {
  const [categorias, setCategorias] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null); // null = "All"
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Categorias sao buscadas uma unica vez.
  useEffect(() => {
    getCategorias()
      .then(setCategorias)
      .catch(() => setErro('Could not load categories.'));
  }, []);

  // Servicos sao buscados de novo sempre que a categoria selecionada muda.
  useEffect(() => {
    setCarregando(true);
    setErro(null);

    getServicos(categoriaSelecionada)
      .then(setServicos)
      .catch(() => setErro('Could not load services. Is the API running?'))
      .finally(() => setCarregando(false));
  }, [categoriaSelecionada]);

  return (
    <section id="services">
      <div className="section-head">
        <span className="accent">Treatments</span>
        <h2>Our services</h2>
        <p>
          Choose a category to explore, or tap any treatment for full
          details, duration and pricing.
        </p>
      </div>

      <div className="cat-tabs">
        <button
          className={`cat-tab ${categoriaSelecionada === null ? 'on' : ''}`}
          onClick={() => setCategoriaSelecionada(null)}
        >
          All
        </button>

        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            className={`cat-tab ${
              categoriaSelecionada === categoria.id ? 'on' : ''
            }`}
            onClick={() => setCategoriaSelecionada(categoria.id)}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      {erro && <p style={{ color: '#A14444' }}>{erro}</p>}

      {carregando && !erro && <p>Loading treatments…</p>}

      {!carregando && !erro && servicos.length === 0 && (
        <p>No treatments found in this category.</p>
      )}

      {!carregando && !erro && servicos.length > 0 && (
        <div className="svc-grid">
          {servicos.map((servico) => (
            <ServiceCard key={servico.id} service={servico} />
          ))}
        </div>
      )}
    </section>
  );
}
