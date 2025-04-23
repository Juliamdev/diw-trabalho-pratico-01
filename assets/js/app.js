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
    "titulo": "Nova Lei Proíbe Plásticos de Uso Único em Todo o País",
    "descricao": "Medida visa reduzir o impacto ambiental causado por resíduos plásticos.",
    "conteudo": "Entrou em vigor hoje a nova lei que proíbe a fabricação e venda de plásticos descartáveis...",
    "categoria": "Meio Ambiente",
    "autor": "Larissa Monteiro",
    "destaque": true,
    "data": "2025-04-20",
    "imagem": "assets/img/plastico.jpg",
    "imagens_complementares": [
      {
        "id": 1,
        "src": "assets/img/plastico1.jpg",
        "descricao": "Campanha de conscientização sobre o uso de plástico"
      },
      {
        "id": 2,
        "src": "assets/img/plastico2.jpg",
        "descricao": "Produtos sustentáveis substituindo descartáveis"
      }
    ]
  },
  {
    "id": 6,
    "titulo": "Pesquisa Aponta Novo Tratamento para Diabetes Tipo 2",
    "descricao": "Estudo brasileiro testa tratamento inovador com bons resultados.",
    "conteudo": "Pesquisadores da UFRJ anunciaram avanços em um novo tratamento para diabetes tipo 2...",
    "categoria": "Saúde",
    "autor": "Dr. Marcos Lira",
    "destaque": false,
    "data": "2025-04-18",
    "imagem": "assets/img/diabetes.jpg",
    "imagens_complementares": [
      {
        "id": 1,
        "src": "assets/img/diabetes1.jpg",
        "descricao": "Equipe de pesquisadores em laboratório"
      }
    ]
  },
  {
    "id": 7,
    "titulo": "Cidade Histórica é Eleita Destino Revelação de 2025",
    "descricao": "Município mineiro atrai turistas com atrações culturais e gastronomia local.",
    "conteudo": "A pequena cidade de São Tomé das Letras foi eleita como o destino revelação de 2025...",
    "categoria": "Turismo",
    "autor": "Juliana Brito",
    "destaque": true,
    "data": "2025-04-15",
    "imagem": "assets/img/sao_tome.jpg",
    "imagens_complementares": [
      {
        "id": 1,
        "src": "assets/img/sao_tome1.jpg",
        "descricao": "Vista da serra ao pôr do sol"
      },
      {
        "id": 2,
        "src": "assets/img/sao_tome2.jpg",
        "descricao": "Feira de artesanato local"
      }
    ]
  }
];
  


// Função para montar os cards na index.html
if (document.getElementById("secao-noticias")) {
  const secao = document.getElementById("secao-noticias");
  secao.innerHTML = "";

  dados.forEach(noticia => {
      // Gera HTML das imagens complementares, se existirem
      let imagensExtras = "";
      if (noticia.imagens_complementares) {
          imagensExtras = `
              <div class="mt-3">
                  ${noticia.imagens_complementares.map(img => `
                      <img src="${img.src}" class="img-fluid rounded mb-2" alt="${img.descricao}">
                  `).join("")}
              </div>
          `;
      }

      const cardHTML = `
          <article class="col-md-4 mb-4">
              <div class="card h-100">
                  <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
                  <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${noticia.titulo}</h5>
                      <p class="card-text">${noticia.descricao}</p>
                      <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary mt-auto">Leia mais</a>
                      ${imagensExtras}
                  </div>
              </div>
          </article>
      `;
      secao.innerHTML += cardHTML;
  });
}