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
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(0);

  useEffect(() => {
    setCarregando(true);
    setErro(null);
    setServico(null);
    setOpcaoSelecionada(0);

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
              <div className="detail-img">
                {servico.imagemUrl ? (
                  <img
                    src={servico.imagemUrl}
                    alt={servico.nome}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18 }}
                  />
                ) : (
                  'Photo coming soon'
                )}
              </div>
            </div>

            <div>
              <span className="svc-cat-tag">{servico.categoriaNome}</span>
              <h1>{servico.nome}</h1>
              <p className="detail-lede">{servico.descricao}</p>

              <div className="option-list">
                {servico.opcoes && servico.opcoes.length > 0 ? (
                  servico.opcoes.map((opcao, index) => (
                    <div
                      key={opcao.duracaoMinutos}
                      className={`option ${index === opcaoSelecionada ? 'sel' : ''}`}
                      onClick={() => setOpcaoSelecionada(index)}
                    >
                      <div className="left">
                        <div className="dur">{opcao.duracaoMinutos} minutes</div>
                      </div>
                      <div className="price">€{opcao.preco}</div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: 'var(--ink-soft)', fontSize: 13.5 }}>
                    No duration options available for this treatment yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}