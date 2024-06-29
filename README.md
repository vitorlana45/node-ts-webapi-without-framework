# Podcast Manager

### Descrição
Um app ao estilo Netflix, onde você pode centralizar diferentes episódios separados por categorias.

### Domínio 
Podcasts feitos em vídeo

### Features 
- Listar os episódios em sessões de categorias:
  - Saúde
  - BodyBuilder
  - Mentalidade
  - Tecnologia
  - 
- Filtrar episódios por nome de podcasts
  - FlowPodcast
  - Inteligencia Ltda

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/esbuild-kit/tsx)
- [tsup](https://tsup.egoist.dev/)
- [@types/node](https://www.npmjs.com/package/@types/node)

## Como Executar o Projeto

1. ## Clone o repositório: ##
   ```bash
     git clone https://github.com/seu-usuario/podcast-manager.git
  2. ## **Instale as dependências:**
     ####  usando o terminal rode o comando 
      ```bash
      npm install
3. ## Execute o projeto em modo desenvolvimento: ##
       ####  usando o terminal rode o comando
     ```bash
      npm run start:dev
4. ## Abra seu navegador e utilize as seguintes urls
    - ira trazer uma lista de podcasts cadastrados na API
      ```bash
       http://localhost:3333/api/list
    - filtrando por nome do podcasts, capaz de trazer apenas podcast que deseja
      - DEPOIS DO ``=p`` na url escreva o nome do podcast que deseja `` ex: inteligencia.ltda ou flow ``
     
    ```bash
     http://localhost:3333/api/episode?p=flow
     http://localhost:3333/api/episode?p=inteligencia Ltda

    
