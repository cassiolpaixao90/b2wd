// Este arquivo é escrito em ES5, já que não é enviado pelo Babel.
// Este arquivo faz o seguinte:
// 1. Define a variável de ambiente Node
// 2. Registra babel para transpilar nosso código para teste
// 3. Desativa recursos específicos do Webpack que o Mocha não entende.
// 4. Requer jsdom para que possamos testar por meio de um DOM na memória no Node
// 5. Configura vars globais que imitam um navegador.

/* eslint-disable no-var*/

/* Esta configuração assegura a configuração do .babelrc dev (que inclui
código do módulo hot load) não se aplica a testes.
Mas também não queremos colocá-lo em produção aqui para
duas razões:
 1. Você não verá nenhum aviso de validação PropType quando
código está sendo executado no modo prod.
 2. Testes não exibirão mensagens de erro detalhadas
ao executar o código de versão de produção
 */
process.env.NODE_ENV = 'test';

// Register babel so t// Registre o babel para que ele transpile ES6 para ES5
// antes dos nossos testes serem executados.
require('babel-register')();

// Desativar recursos específicos do webpack para testes desde
// Mocha não sabe o que fazer com eles.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Configure o JSDOM e configure variáveis globais
// para simular um ambiente de navegador para testes.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
