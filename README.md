# Github Search

## Descrição do projeto

O Github Search é um projeto desenvolvido para buscar perfis de usuários do Github com base no nome de usuário fornecido. Ele foi criado utilizando HTML, CSS e JavaScript puro (vanilla JS). O usuário pode digitar um nome de usuário do Github no campo de busca, e o aplicativo irá retornar informações detalhadas sobre o perfil, como nome, foto de perfil, bio, número de repositórios públicos e seguidores. Caso o usuário não seja encontrado, uma mensagem de erro é exibida.

## Funcionalidades

- Buscar usuários do Github pelo nome de usuário.
- Exibir informações do perfil do usuário, incluindo:
  - Foto do perfil
  - Nome
  - Nome de usuário
  - Bio
  - Número de repositórios públicos
  - Número de seguidores
- Exibir mensagem de erro caso o usuário não seja encontrado.

## Tecnologias Utilizadas

### HTML

A estrutura básica do projeto é construída em HTML. Utiliza-se o elemento <form> para a busca de usuários e elementos <div> para organizar as informações exibidas.

### CSS

O estilo do projeto é definido usando CSS. Através de classes e IDs, o layout é personalizado para garantir uma aparência limpa e moderna. Fontes do Google Fonts são importadas para melhorar a tipografia.

### JavaScript

O JavaScript é utilizado para adicionar interatividade ao projeto. Ele:
- Lida com o evento de submissão do formulário.
- Faz requisições assíncronas à API do Github.
- Manipula o DOM para exibir os dados do perfil ou a mensagem de erro.

### API do Github

A API pública do Github é utilizada para buscar os dados dos usuários. É feita uma chamada à URL https://api.github.com/users/{username}, onde {username} é o nome de usuário fornecido pelo usuário.

## Estrutura dos arquivos

- *index.html*: Contém a estrutura HTML do projeto.
- *style.css*: Contém os estilos CSS para o projeto.
- *script.js*: Contém o código JavaScript responsável pela lógica do projeto.

## Como utilizar

1. *Clone o repositório*
   ```bash
   git clone https://github.com/seu-usuario/github-search.git
    ```

2. *Navegue até o diretório do projeto*
   ```bash
   cd github-search
    ```

3. *Abra o arquivo  `index.html` no navegador de sua preferencia*
