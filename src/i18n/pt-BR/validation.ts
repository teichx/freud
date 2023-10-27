export const validation = {
  mixed: {
    required: 'Campo é obrigatório',
    invalid: 'Valor é inválido',
    oneOf: 'O valor deve estar entre [{values}]',
    notOneOf: 'O valor não pode estar entre [{values}]',
    notNull: 'Campo não pode ser nulo',
    notType: 'Tipo invalido',
    defined: 'O campo deve ser definido',
  },
  string: {
    length: 'Deve ter {length} letras',
    min: 'Deve ter mais de {min} letras',
    max: 'Deve ter até {max} letras',
    email: 'Deve ser um e-mail válido',
    url: 'Deve ser um link valido',
    uuid: 'Identificador invalido',
  },
  number: {
    min: 'Deve ser maior que {min}',
    max: 'Deve ser menor que {max}',
    lessThan: 'Deve ser menor ou igual {less}',
    moreThan: 'Deve ser maior ou igual {more}',
    positive: 'Deve ser maior que zero',
    negative: 'Deve ser menor que zero',
    integer: 'Deve ser um número inteiro',
  },
  date: {
    min: 'Deve ser após {min}',
    max: 'Deve ser antes de {max}',
  },
  boolean: {
    isValue: 'O valor deve ser verdadeiro ou falso',
  },
  object: {
    noUnknown: 'Objeto desconhecido',
  },
  array: {
    length: 'Deve ter {length} items',
    min: 'Deve ter mais que {min} items',
    max: 'Deve ter menos que {max} items',
  },
} as const;
