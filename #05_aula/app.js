function pesquisar() {
	// Obtém a seção HTML onde os resultados da pesquisa serão exibidos
	let section = document.getElementById("resultados-pesquisa");

	// Obtém a seção HTML onde o usuário insere o termo de pesquisa
	let campoPesquisa = document.getElementById("campo-pesquisa").value;
	campoPesquisa = campoPesquisa.toLowerCase();

	if (!campoPesquisa) {
		section.innerHTML = "Nada foi pesquisado!";

		return;
	}

	// Inicializa uma string vazia para armazenar os resultados da pesquisa
	let resultados = "";
	let titulo = "";
	let descricao = "";
	let tags = "";

	//  Itera sobre cada elemento de dados (assumindo que 'dados' seja um array)
	//  e cria um novo elemento HTML para cada resultado
	for (let dado of dados) {
		titulo = dado.titulo.toLowerCase();
		descricao = dado.descricao.toLowerCase();
		tags = dado.tags.toLowerCase();

		if (
			titulo.includes(campoPesquisa) ||
			descricao.includes(campoPesquisa) ||
			tags.includes(campoPesquisa)
		) {
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
	}

	if (!resultados) {
		resultados = "<p>Nada encontrado!</p>";

		return;
	}

	// Atribui a string com os resultados ao conteúdo HTML da seção
	section.innerHTML = resultados;
}
