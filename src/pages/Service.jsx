import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getServicoPorId } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Service() {
  const { id } = useParams();
  const [servico, setServico] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setCarregando(true);
    setErro(null);
    setServico(null);

    getServicoPorId(id)
      .then(setServico)
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, [id]);

  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/#services">Services</Link>
        {servico ? ` / ${servico.nome}` : ''}
      </div>

      <main style={{ padding: '30px 6vw 90px', maxWidth: 900, margin: '0 auto' }}>
        {carregando && <p>Loading treatment…</p>}

        {erro && (
          <>
            <p style={{ color: '#A14444', marginBottom: 16 }}>
              {erro === 'Servico nao encontrado'
                ? "We couldn't find this treatment."
                : 'Something went wrong loading this treatment. Is the API running?'}
            </p>
            <Link to="/" className="btn-ghost">← Back to all services</Link>
          </>
        )}

        {!carregando && !erro && servico && (
          <div className="detail" style={{ padding: 0 }}>
            <div>
              <div className="detail-img">Photo placeholder</div>
            </div>

            <div>
              <span className="svc-cat-tag">{servico.categoriaNome}</span>
              <h1>{servico.nome}</h1>
              <p className="detail-lede">{servico.descricao}</p>

              <div className="option-list">
                <div className="option sel">
                  <div className="left">
                    <div className="dur">{servico.duracaoMinutos} minutes</div>
                    {servico.regiaoCorporal && (
                      <div className="focus">{servico.regiaoCorporal}</div>
                    )}
                  </div>
                  <div className="price">
                    {Number(servico.preco) > 0 ? `€${servico.preco}` : '€TBC'}
                  </div>
                </div>
              </div>

              <button className="book-btn">Book this treatment</button>
              <p className="book-note">
                You'll choose your preferred date and time on the next step.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
