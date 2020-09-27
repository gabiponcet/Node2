class BaseControlador {
  static rotas() {
    return {
      lista: '/livros',
      cadastro: '/livros/form',
      edicao: '/livros/form/:id',
      delecao: '/livros/:id'
    }
  }

  home() {
    return function (req, resp) {
      resp.marko(
        require('../views/base/home/home.marko')
      );
    };
  }
}

module.exports = BaseControlador;