// Em dev local, cai no localhost:8080 por padrao.
// Em producao (Netlify), configure VITE_API_URL nas env vars do painel do Netlify
// apontando pra URL publica do backend no Render (ex: https://take-your-time-api.onrender.com/api).
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export async function getCategorias() {
    const response = await fetch(`${API_URL}/categorias`);

    if (!response.ok) {
    throw new Error('Erro ao buscar categorias');
    }
    return response.json();
}

export async function getServicos(categoriaId) {
    const url = categoriaId
    ? `${API_URL}/servicos?categoriaId=${categoriaId}`
    : `${API_URL}/servicos`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Erro ao buscar servicos')
    }

    return response.json();
}

export async function getServicoPorId(id) {
    const response = await fetch(`${API_URL}/servicos/${id}`);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Servico nao encontrado');
        }
        throw new Error('Erro ao buscar servico');
    }

    return response.json();
}