export const components = {
  buttons: {
    microphone: {
      toDisable: 'Desligar microfone',
      toEnable: 'Ativar microfone',
      helperText: {
        editOnlyNotListening:
          'O campo não pode ser editado enquanto o microfone estiver ligado',
      },
    },
    login: 'Fazer login',
    access: 'Entrar como {name}',
    logout: 'Deslogar',
    back: 'Voltar',
    cancel: 'Cancelar',
    save: 'Salvar',
  },
  toggleTheme: {
    label: 'Usar tema {appearance}',
    light: 'claro',
    dark: 'escuro',
  },
  form: {
    disabledByPristine: 'Não há alterações a serem salvas',
    disabledByHasValidationErrors: 'Há dados inválidos no formulário',
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
  select: {
    empty: {
      unfilled: 'Sem mais items',
      filled: 'Não há outros resultados para "{inputValue}"',
    },
    placeholder: {
      unique: 'Selecione uma opção',
      multiple: 'Selecione as opções',
    },
  },
  infiniteScroll: {
    endOfList: 'Sem mais items',
  },
} as const;
