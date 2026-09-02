import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { getCategorias, getServicos } from '../services/api';

export default function Services() {
  const [categorias, setCategorias] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
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

      {/* CABEÇALHO */}
      <div className="section-head">

        <motion.span
          className="accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Treatments
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: 'easeOut',
          }}
        >
          Our services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          Choose a category to explore, or tap any treatment for full
          details, duration and pricing.
        </motion.p>

      </div>


      {/* CATEGORIAS */}
      <motion.div
        className="cat-tabs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >
        <button
          className={`cat-tab ${
            categoriaSelecionada === null ? 'on' : ''
          }`}
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
      </motion.div>


      {/* ERRO */}
      {erro && (
        <motion.p
          style={{ color: '#A14444' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {erro}
        </motion.p>
      )}


      {/* LOADING */}
      {carregando && !erro && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading treatments…
        </motion.p>
      )}


      {/* SEM RESULTADOS */}
      {!carregando && !erro && servicos.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No treatments found in this category.
        </motion.p>
      )}


      {/* SERVIÇOS */}
      {!carregando && !erro && servicos.length > 0 && (
        <div className="svc-grid">

          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <ServiceCard service={servico} />
            </motion.div>
          ))}

        </div>
      )}

    </section>
  );
} 