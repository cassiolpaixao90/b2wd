# <> Desafio Frontend - PE | Cássio Paixão </>

## Sobre o desafio:

Esse teste consiste em implementar uma aplicação client-side, que consulte uma [API](http://www.mocky.io/v2/5a5e38f3330000b0261923a5) e mostre os dados do perfil de um usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

Layout de referência para o teste:
![Layout](https://github.com/b2w-marketplace/code-challenge/blob/master/files/layout-code-challenge.jpg)


## Requisitos:

Desenvolva a página seguindo os seguintes critérios:

- Faça que sua página tenha uma ótima experiência para o usuário, independente do dispositivo que ele esteja usando;
- Você deve usar React (Redux opcionalmente) para o desenvolvimento;
- Nós adoramos teste, escreva testes para a sua aplicação;
- Crie um build do seu projeto em uma pasta chamada 'dist'.


## Tecnologias utilizadas:

- HTML5 e CSS3;
- React e Redux;
- Mocha para Teste unitário;
- Webpack;
- Express;
- NodeJS;
- ES6;
- Lint;
- Importante: No [link original da API](http://www.mocky.io/v2/5a5e38f3330000b0261923a5), o endereço da imagem está apontando para a *página* da imagem, não para a imagem em si, que tem um link diferente. Por isso, acabei utilizando esse [mock alterado](http://www.mocky.io/v2/5aadcb062f00003a00273cb7), com o link editado e apontando diretamente para a imagem correta.

## Como rodar o projeto:

- Clone ou baixe o repositório.

  - *Instalando dependências:* npm install para instalar as dependências.

  - *Rodando local:* npm start -s

  - *Rodando os teste unitários:* npm run test:watch

  - *Rodando a build:* npm run build -s  

  Após inicializar o build, o projeto abrirá uma página web na porta 3000. Acesse [localhost:3000](http://localhost:3000/) para visualizar.

