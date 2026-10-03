<div align="center">

# PetShop Taguatinga

Site institucional de uma página só | Single-page business website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

[Português (BR)](#pt-br) · [English](#en)

![Prévia do site PetShop Taguatinga](docs/screenshots/capa.png)

**[Ver demo / Live demo](https://pietrobitencourt.github.io/front-end-web-development/01-petshop-taguatinga/)** · **[Voltar ao repositório / Back to repository](../README.md)**

</div>

---

<a id="pt-br"></a>

## Português (BR)

### Contexto

| | |
|---|---|
| **Disciplina** | Desenvolvimento Front-End para Web |
| **Instituição** | Centro Universitário do Distrito Federal (UDF) |

### Sobre o projeto

Site de uma página só para o PetShop Taguatinga, com apresentação do pet shop, galeria de fotos de cães, mapa de localização e formulário de contato. É o primeiro projeto do repositório e serviu de base para a atividade [Picos do Brasil](../02-picos-do-brasil).

### Seções do site

| Seção | O que mostra |
|-------|--------------|
| **Header** | Logo e menu fixo no topo, com links por âncora: Sobre, Galeria, Mapa e Contato |
| **Hero** | Imagem de fundo em tela cheia |
| **Sobre** | Texto de apresentação do pet shop |
| **Galeria** | 6 fotos de cães, com efeito de zoom ao passar o mouse |
| **Mapa** | Mapa do Google incorporado via `iframe` |
| **Contato** | Formulário com nome, e-mail e mensagem |
| **Rodapé** | Copyright e contato do desenvolvedor |

### Destaques técnicos

- Estrutura semântica: `header`, `nav`, `main`, `section` e `footer`
- Layout com Flexbox e unidades relativas (`rem` com `font-size: 62.5%` no `html`, e `vh`)
- Header fixo (`position: fixed`) com sombra e navegação por âncoras
- Efeitos de hover com `transition` e `transform: scale()`
- Imagens com `object-fit: cover`, bordas arredondadas e `box-shadow`
- Mapa incorporado com `iframe` e formulário com `label` envolvendo cada campo

### Paleta de cores

| Uso | Cor |
|-----|-----|
| Header, rodapé e botão | `#29402C` |
| Hover do menu | `#4E6E52` |
| Fundo das seções | `#E5F5E7` |
| Destaque do texto | `#39583D` |

### Estrutura

```
01-petshop-taguatinga/
├── README.md
├── index.html
├── css/
│   └── style.css
├── img/          (hero.jpg e 1.jpg a 6.jpg)
└── docs/
    └── screenshots/
        └── capa.png
```

### Como executar

Baixe ou clone o repositório, entre na pasta `01-petshop-taguatinga` e abra o `index.html` no navegador. Não precisa instalar nada.

### Possíveis melhorias

- Adicionar `@media queries` para deixar o layout responsivo em celular
- Incluir `alt` descritivo nas imagens e `title` no mapa
- Tornar o formulário funcional (hoje ele é apenas visual, sem backend)

### Créditos

Imagens obtidas no [Pixabay](https://pixabay.com/) e usadas conforme a [Licença de Conteúdo do Pixabay](https://pixabay.com/service/license-summary/), somente para fins educacionais.

---

<a id="en"></a>

## English

### Context

| | |
|---|---|
| **Course** | Front-End Web Development |
| **Institution** | Centro Universitário do Distrito Federal (UDF) |

### About

A single-page website for PetShop Taguatinga, with an intro to the business, a dog photo gallery, a location map and a contact form. It is the first project in the repository and the base for the [Picos do Brasil](../02-picos-do-brasil) assignment.

### Site sections

| Section | What it shows |
|---------|---------------|
| **Header** | Fixed top bar with logo and anchor links: About, Gallery, Map and Contact |
| **Hero** | Full-screen background image |
| **About** | Introduction to the pet shop |
| **Gallery** | 6 dog photos with a zoom effect on hover |
| **Map** | Google Map embedded via `iframe` |
| **Contact** | Form with name, e-mail and message |
| **Footer** | Copyright and developer contact |

### Technical highlights

- Semantic structure: `header`, `nav`, `main`, `section` and `footer`
- Flexbox layout and relative units (`rem` with `font-size: 62.5%` on `html`, and `vh`)
- Fixed header (`position: fixed`) with shadow and anchor navigation
- Hover effects using `transition` and `transform: scale()`
- Images with `object-fit: cover`, rounded borders and `box-shadow`

### Getting started

Download or clone the repository, enter the `01-petshop-taguatinga` folder and open `index.html` in your browser. Nothing needs to be installed.

### Possible improvements

- Add `@media queries` for a responsive mobile layout
- Add descriptive `alt` text to images and a `title` to the map
- Make the form functional (it is visual only for now, with no backend)

### Credits

Images from [Pixabay](https://pixabay.com/), used under the [Pixabay Content License](https://pixabay.com/service/license-summary/) and for educational purposes only.
