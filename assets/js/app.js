var dados = [
    {
      "id": 1,
      "titulo": "Câmara aprova nova proposta de reforma política",
      "descricao": "A medida pretende modernizar as regras eleitorais.",
      "conteudo": "A Câmara dos Deputados aprovou hoje uma proposta...",
      "categoria": "Política",
      "autor": "Marina Lopes",
      "data": "2025-03-29",
      "imagem": "assets/img/politica.png",
      "fotos": [
        { "url": "assets/img/politica1.jpg", "titulo": "Plenário durante a votação" },
        { "url": "assets/img/politica2.jpg", "titulo": "Deputados reunidos" }
      ]
    },
    {
      "id": 2,
      "titulo": "Time local vence campeonato estadual",
      "descricao": "Equipe garante título com vitória nos pênaltis.",
      "conteudo": "Após uma partida acirrada, o time local saiu campeão...",
      "categoria": "Esporte",
      "autor": "Bruno Oliveira",
      "data": "2025-03-27",
      "imagem": "assets/img/esporte.png",
      "fotos": [
        { "url": "assets/img/esporte1.jpg", "titulo": "Time comemorando o título" }
      ]
    },
    {
      "id": 3,
      "titulo": "Mostra de cinema celebra produções independentes",
      "descricao": "Festival traz filmes nacionais e debates com diretores.",
      "conteudo": "A mostra começou ontem com um documentário inédito...",
      "categoria": "Cultura",
      "autor": "Paula Rocha",
      "data": "2025-03-25",
      "imagem": "assets/img/cultura.png",
      "fotos": [
        { "url": "assets/img/cultura1.jpg", "titulo": "Cartaz do festival" }
      ]
    },
    {
      "id": 4,
      "titulo": "Tecnologia 6G avança em testes internacionais",
      "descricao": "Especialistas afirmam que a nova geração será revolucionária.",
      "conteudo": "Empresas e universidades iniciaram testes com tecnologias...",
      "categoria": "Tecnologia",
      "autor": "Carlos Mendes",
      "data": "2025-03-26",
      "imagem": "assets/img/tecnologia.png",
      "fotos": [
        { "url": "assets/img/tecnologia1.jpg", "titulo": "Antenas de teste do 6G" }
      ]
    },
    {
      "id": 5,
      "titulo": "Nova biblioteca comunitária é inaugurada com acervo de 5 mil livros",
      "descricao": "Espaço oferece leitura gratuita e atividades culturais para todas as idades.",
      "conteudo": "A cidade de Jardim Aurora ganhou nesta segunda-feira uma nova biblioteca...",
      "categoria": "Notícia completa 1",
      "autor": "Lívia Andrade",
      "data": "2025-04-10",
      "imagem": "assets/img/biblioteca.png",
      "fotos": [
        { "url": "assets/img/biblioteca1.jpg", "titulo": "Sala de leitura" }
      ]
    },
    {
      "id": 6,
      "titulo": "Cidade do interior lança projeto de energia 100% limpa",
      "descricao": "Iniciativa pioneira pode servir de exemplo para o país inteiro.",
      "conteudo": "Monte Azul vai usar apenas fontes renováveis...",
      "categoria": "Notícia completa 2",
      "autor": "Juliana Carvalho",
      "data": "2025-04-10",
      "imagem": "assets/img/cidade.png",
      "fotos": [
        { "url": "assets/img/cidade1.jpg", "titulo": "Placas solares na cidade" }
      ]
    },
    {
      "id": 7,
      "titulo": "Novo aplicativo ajuda agricultores a prever o clima com precisão",
      "descricao": "Ferramenta gratuita já é utilizada em mais de 3 mil propriedades rurais.",
      "conteudo": "O app AgroTempo utiliza IA e dados de satélite...",
      "categoria": "Notícia completa 3",
      "autor": "Roberto Nogueira",
      "data": "2025-04-10",
      "imagem": "assets/img/agricultura.png",
      "fotos": [
        { "url": "assets/img/agricultura1.jpg", "titulo": "Interface do app AgroTempo" }
      ]
    }
  ];
  

// Função para montar os cards na index.html
if (document.getElementById("secao-noticias")) {
    const secao = document.getElementById("secao-noticias");
    secao.innerHTML = "";
    
    dados.forEach(noticia => {
        const cardHTML = `
            <article class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${noticia.titulo}</h5>
                        <p class="card-text">${noticia.descricao}</p>
                        <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary mt-auto">Leia mais</a>
                    </div>
                </div>
            </article>
        `;
        secao.innerHTML += cardHTML;
    });
}