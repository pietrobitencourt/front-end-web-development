<div align="center">

# Picos do Brasil

Os 7 pontos mais altos do Brasil | Brazil's 7 highest peaks

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

[Português (BR)](#pt-br) · [English](#en)

![Prévia da seção Top 7 do site Picos do Brasil](docs/screenshots/top-7.png)

**[Ver demo / Live demo](https://pietrobitencourt.github.io/front-end-web-development/02-picos-do-brasil/)** · **[Voltar ao repositório / Back to repository](../README.md)**

</div>

---

<a id="pt-br"></a>

## Português (BR)

### Contexto

| | |
|---|---|
| **Disciplina** | Desenvolvimento Front-End para Web |
| **Instituição** | Centro Universitário do Distrito Federal (UDF) |
| **Atividade** | Prática Avaliativa 1 |

### Sobre o projeto

Site sobre os 7 pontos mais altos do Brasil, com altitude, localização e curiosidades de cada pico, galeria de fotos e mapa incorporado. O projeto parte da estrutura do [PetShop Taguatinga](../01-petshop-taguatinga) e atende aos requisitos da atividade:

- [x] Criar um novo item de menu para uma nova seção (**Top 7**)
- [x] Criar a nova seção ligada a esse item
- [x] Mudar o tema de cores de todo o site
- [x] Tema Brasil: os picos mais altos do país, do Amazonas à Serra da Mantiqueira

### Seções do site

| Seção | O que mostra |
|-------|--------------|
| **Header** | Logo e menu fixo: Sobre, Top 7, Galeria, Localização e Contato |
| **Hero** | Imagem de montanhas em tela cheia |
| **Sobre** | Introdução sobre o montanhismo e os picos brasileiros |
| **Top 7** | Os 7 picos em colunas, com altitude, estado e uma descrição de cada um |
| **Galeria** | Uma foto para cada pico, com o nome acima |
| **Localização** | Mapa do Google My Maps incorporado via `iframe` |
| **Contato** | Formulário com nome, e-mail e mensagem |

### Os 7 picos apresentados

| # | Pico | Altitude | Localização |
|---|------|----------|-------------|
| 1 | Pico da Neblina | 2.995 m | Amazonas |
| 2 | Pico 31 de Março | 2.974 m | Amazonas |
| 3 | Pico da Bandeira | 2.892 m | Espírito Santo / Minas Gerais |
| 4 | Pico do Calçado | 2.849 m | Espírito Santo / Minas Gerais |
| 5 | Pedra da Mina | 2.798 m | São Paulo / Minas Gerais |
| 6 | Pico das Agulhas Negras | 2.790 m | Rio de Janeiro |
| 7 | Pico do Cristal | 2.770 m | Minas Gerais |

Dados conforme apresentados no site.

### Destaques técnicos

- Estrutura semântica com `header`, `nav`, `main`, `section` e `footer`
- Os 7 picos organizados lado a lado com Flexbox (`flex-direction: row`)
- Header fixo com navegação por âncoras
- Efeito de zoom nas fotos da galeria (`transition` e `transform`)
- Mapa personalizado do Google My Maps incorporado com `iframe`
- Nova paleta de cores aplicada em todo o site

### Paleta de cores

| Uso | Cor |
|-----|-----|
| Header, rodapé e botão | `#263F4C` |
| Hover do menu e destaques | `#9ABBD9` |
| Fundo das seções | `#E8EDEB` |
| Borda do formulário | `#023E73` |

### Estrutura

```
02-picos-do-brasil/
├── README.md
├── index.html
├── css/
│   └── style.css
├── img/          (hero.jpg e 1.jpg a 7.jpg)
└── docs/
    └── screenshots/
        └── top-7.png
```

### Como executar

Baixe ou clone o repositório, entre na pasta `02-picos-do-brasil` e abra o `index.html` no navegador. Não precisa instalar nada. O mapa precisa de internet para carregar.

### Possíveis melhorias

- Adicionar `@media queries`: as 7 colunas ficam apertadas em telas menores
- Incluir `alt` descritivo nas imagens e `title` no mapa
- Colocar um título sobre a imagem do hero
- Tornar o formulário funcional (hoje ele é apenas visual, sem backend)

### Créditos

As imagens deste projeto foram encontradas no Pinterest e pertencem aos seus respectivos autores. São usadas somente para fins educacionais. Se você é o autor de alguma imagem e deseja crédito ou remoção, abra uma issue neste repositório.

---

<a id="en"></a>

## English

### Context

| | |
|---|---|
| **Course** | Front-End Web Development |
| **Institution** | Centro Universitário do Distrito Federal (UDF) |
| **Assignment** | Graded assignment 1 |

### About

A website about Brazil's 7 highest peaks, with altitude, location and facts for each one, a photo gallery and an embedded map. It builds on the [PetShop Taguatinga](../01-petshop-taguatinga) structure and meets the assignment requirements:

- [x] Create a new menu item for a new section (**Top 7**)
- [x] Create the new section linked to that item
- [x] Change the color theme of the whole site
- [x] Brazil theme: the country's highest peaks, from the Amazon to the Mantiqueira range

### Site sections

| Section | What it shows |
|---------|---------------|
| **Header** | Fixed bar with logo and menu: About, Top 7, Gallery, Location and Contact |
| **Hero** | Full-screen mountain image |
| **About** | Intro to mountaineering and Brazilian peaks |
| **Top 7** | The 7 peaks in columns, with altitude, state and a description of each |
| **Gallery** | One photo per peak, with its name above |
| **Location** | Google My Maps embedded via `iframe` |
| **Contact** | Form with name, e-mail and message |

### Technical highlights

- Semantic structure with `header`, `nav`, `main`, `section` and `footer`
- The 7 peaks laid out side by side with Flexbox (`flex-direction: row`)
- Fixed header with anchor navigation
- Zoom effect on gallery photos (`transition` and `transform`)
- Custom Google My Maps embedded with `iframe`
- New color palette applied across the whole site

### Getting started

Download or clone the repository, enter the `02-picos-do-brasil` folder and open `index.html` in your browser. Nothing needs to be installed. The map needs an internet connection to load.

### Possible improvements

- Add `@media queries`: the 7 columns get cramped on smaller screens
- Add descriptive `alt` text to images and a `title` to the map
- Add a title over the hero image
- Make the form functional (it is visual only for now, with no backend)

### Credits

The images in this project were found on Pinterest and belong to their respective authors. They are used for educational purposes only. If you are the author of an image and would like credit or removal, please open an issue in this repository.
