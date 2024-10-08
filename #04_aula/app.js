function pesquisar() {
	// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
	let section = document.getElementById("resultados-pesquisa");

	// Inicializa uma string vazia para armazenar os resultados da pesquisa
	let resultados = "";

	// Itera sobre cada elemento de dados (assumindo que 'dados' seja um array)
	// e cria um novo elemento HTML para cada resultado
	for (let dado of dados) {
		// Cria um novo elemento div com a classe 'item-resultado' para cada dado
		resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}
          <a
            href="${dado.link}"
            target="_blank"
            >Saiba mais</a
          >.
        </p>
      </div>`;
	}

	// Atribui a string com os resultados ao conteúdo HTML da seção
	section.innerHTML = resultados;
}
