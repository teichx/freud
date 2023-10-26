export const common = {
  name: 'Freud',
  components: {
    buttons: {
      login: 'Fazer login',
      access: 'Entrar como {name}',
      logout: 'Deslogar',
    },
  },
  languages: {
    options: 'pt-BR,en-US',
    'pt-BR': 'Português',
    'en-US': 'English (US)',
  },
  dataTable: {
    noData: 'Sem dados por aqui',
    loading: 'Carregando linhas',
    pagination: 'Página {page} de {pageCount}',
    rowsPerPage: 'Linhas por página:',
    pageHint: {
      first: 'Primeira página',
      next: 'Próxima página',
      before: 'Página anterior',
      last: 'Última página',
    },
  },
} as const;
