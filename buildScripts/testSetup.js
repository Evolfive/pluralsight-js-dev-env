// Este arquivo não será transpilado, então será utilizado CommonJS e ES5

// Registro babel para transpilar antes de executar os testes
require('babel-register')();

// Desativar funcionalidades do webpack que o Mocha não conhece.
require.extensions['.css'] = function() {};
