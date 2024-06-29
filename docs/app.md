# nome do aplicativo
    Podcast manager

### Descrioção
Um app ao estilo netflix, aonde eu possa centralizar diferentes episódios separados por categorias


### Domínio 
Podcasts feitos em video

### Features 
 - Listar os episódios em  sessões de categorias
    - [saúde, bodyBuilder, mentalidade, humor]
  - Filtrar episódios por nome de podcasts



#### Feature:
- Listar os episódios em  sessões de categorias



## Como vou implementar

vou retornar em uma api rest (json) o
nome do podcast o nome, nome do episódio, imagem de capa, link, category

```js
[
  {
    "podcastName": "flow",
    "episodio": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30"
    "cover": "https://i.ytimg.com/vi/qOer7KEMHIo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHNsLuFv_0tHMibbBhGzWCNcN_SA",
    "link": "https://www.youtube.com/@FlowPodcast/videos",
    "category": "["saúde", "bodyBuilder"]"
  },
  {
    "podcastName": "inteligencia.ltda",
    "episodio": "DA INVENÇÃO DO COMPUTADOR À INTELIGÊNCIA ARTIFICIAL - FÁBIO AKITA #1228",
    "cover": "https://i.ytimg.com/vi/jVxzpiDJ9Qk/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJaUkw5o6uJoXCBA3WraQhzD4zHQ",
    "link": "https://m.youtube.com/watch?v=jVxzpiDJ9Qk",
    "category": "["Ti", "Programação", "nerd"]"
  }
]


```
