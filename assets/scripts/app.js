document.addEventListener('DOMContentLoaded', () => {

    const API_BASE_URL = 'http://localhost:3000';

    const homeContainer = document.querySelector(".row.justify-content-center");
    const detalhesContainer = document.getElementById("detalhes-container");

    async function montarCardapioNaHome() {
        try {
            const response = await fetch(`${API_BASE_URL}/salgados`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar salgados: ${response.statusText}`);
            }
            const salgados = await response.json();

            homeContainer.innerHTML = ''; 

            salgados.forEach(salgado => {
                const caixa = document.createElement("div");
                caixa.classList.add("col-6", "col-md-3");

                caixa.innerHTML = `
                    <a href="detalhes.html?idSalgado=${salgado.id}">
                        <img src="${salgado.foto}" class="img-fluid rounded border border-danger p-2" alt="${salgado.nome}">
                    </a>
                    <h5 class="text-center mt-2">${salgado.nome}</h5>
                    <p class="text-center">${salgado.texto}</p>
                `;
                homeContainer.appendChild(caixa);
            });

        } catch (error) {
            console.error("Falha ao carregar cardápio:", error);
            homeContainer.innerHTML = "<p class='text-danger'>Não foi possível carregar o cardápio. Tente novamente mais tarde.</p>";
        }
    }

    async function verDetalhesDoSalgado() {
        try {
            const parametros = new URLSearchParams(window.location.search);
            const idQueVeio = parseInt(parametros.get("idSalgado"));

            if (!idQueVeio) {
                throw new Error("ID do salgado não fornecido.");
            }

            const response = await fetch(`${API_BASE_URL}/salgados/${idQueVeio}`);
            if (!response.ok) {
                throw new Error(`Salgado com ID ${idQueVeio} não encontrado.`);
            }
            const salgadoDetalhe = await response.json();

            detalhesContainer.innerHTML = `
                <div class="card mx-auto" style="max-width: 600px;">
                    <img src="${salgadoDetalhe.foto}" class="card-img-top" alt="${salgadoDetalhe.nome}">
                    <div class="card-body">
                        <h2 class="card-title">${salgadoDetalhe.nome}</h2>
                        <p>Tipo: ${salgadoDetalhe.tipo}</p>
                        <p><strong>Preço:</strong> ${salgadoDetalhe.preco}</p>
                        <p>${salgadoDetalhe.texto}</p>
                        <a href="index.html" class="btn btn-danger">Voltar para o Cardápio</a>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error("Falha ao carregar detalhes:", error);
            detalhesContainer.innerHTML = `<p class='text-danger text-center'>${error.message}</p> <a href="index.html" class="btn btn-danger">Voltar</a>`;
        }
    }

    if (homeContainer) {
        montarCardapioNaHome();
    }
    if (detalhesContainer) {
        verDetalhesDoSalgado();
    }
});