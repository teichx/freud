export const translations = {
  pageTitle: {
    patient: {
      list: 'Pacientes - Freud',
      create: 'Criar paciente - Freud',
      details: 'Detalhes do paciente - Freud',
      listCaseReports: 'Relatos de caso - Freud',
    },
  },
  header: {
    label: {
      dashboard: 'Dashboard',
      patient: 'Pacientes',
    },
    details: {
      default: {
        out: 'Sair',
        configuration: 'Configurações',
        appearance: 'Aparência: {appearance}',
        language: 'Idioma: {language}',
      },
      language: {
        'pt-BR': 'Português',
      },
    },
    appearance: {
      title: 'Aparência',
      text: 'Tema: {appearance}',
    },
    language: {
      title: 'Selecione seu idioma',
    },
  },
  options: {
    schooling: {
      illiterate: 'Analfabeto',
      elementarySchoolIncomplete: 'Ensino fundamental incompleto',
      elementarySchoolComplete: 'Ensino fundamental completo',
      highSchoolIncomplete: 'Ensino médio incompleto',
      highSchoolComplete: 'Ensino médio completo',
      higherEducationComplete: 'Superior completo',
      postGraduation: 'Pós-graduação',
      master: 'Mestrado',
      doctorate: 'Doutorado',
      postDoctorate: 'Pós-Doutorado',
    },
    marriageStatus: {
      single: 'Solteiro',
      married: 'Casado',
      separated: 'Separado',
      divorced: 'Divorciado',
      widowed: 'Viúvo',
    },
  },
  pages: {
    patient: {
      list: {
        filter: {
          text: 'Nome do paciente',
          status: {
            placeholder: 'Filtre pelo status',
            options: {
              archived: 'Arquivados',
              unarchive: 'Não arquivados',
            },
          },
        },
        header: {
          name: 'Nome',
          actions: 'Ações',
          id: 'Id',
          lastCaseReport: 'Último relato de caso',
          caseReportCount: 'Casos anotados',
        },
        cell: {
          'caseReportCount#zero': 'Nenhum caso anotado',
          'caseReportCount#one': '{count} caso anotado',
          'caseReportCount#two': '{count} casos anotados',
          'caseReportCount#other': '{count} casos anotados',
          archived: {
            tooltip: 'O paciente está arquivado',
          },
        },
        createLabel: 'Cadastrar paciente',
        actions: {
          button: 'Ações',
          updatePatient: 'Atualizar dados',
          createCaseReport: 'Novo relato de caso',
          seeCaseReport: 'Ver relatos de caso',
          archivePatient: 'Arquivar paciente',
          unarchivePatient: 'Desarquivar paciente',
        },
      },
      create: {
        personal: {
          title: 'Informações Pessoais',
          name: 'Nome',
          age: 'Idade',
          birth: 'Nascimento',
          gender: 'Gênero',
          profession: 'Ocupação',
          cpf: 'CPF',
          rg: 'RG',
          phoneNumber: 'Telefone',
          address: 'Endereço',
          schooling: 'Escolaridade',
          marriageStatus: 'Estado civil',
          emergency: 'Em caso de emergência',
          tooltip: {
            age: 'Este campo não pode ser preenchido porque é calculado a partir da data de nascimento',
          },
        },
        firstConsult: {
          title: 'Primeira Consulta',
          principalReason: 'Queixa Principal',
          appearanceAndBehavior: 'Aparência e comportamento',
          demandAssessment: 'Avaliação de Demanda',
        },
        complainedHistory: {
          title: 'Histórico da Queixa',
          problemInitiation: 'Início da problemática',
          frequencyAndIntensity: 'Frequência e Intensidade',
          previousTreatments: 'Tratamentos Anteriores',
          medication: 'Uso de Fármacos:',
        },
        complainedCheck: {
          cognitive: {
            title: 'Queixas Cognitivas',
            sensory: 'Integridade Sensorial',
            perception: 'Percepção',
            focus: 'Atenção e Concentração',
            memory: 'Memória',
            other: 'Outro',
          },
          emotional: {
            title: 'Queixas Afetivas/Emocionais',
            decision: 'Tomada de decisão',
            affectivity: 'Afetividade',
            anxiety: 'Ansiedade',
            fear: 'Medo',
            grief: 'Luto',
            anger: 'Raiva',
            humor: 'Humor',
            blame: 'Culpa',
            aggressiveness: 'Agressividade',
            discouragement: 'Desânimo',
            other: 'Outro',
          },
        },
        freeText: {
          title: 'Observações',
          lifestyle: 'Socialização, Lazer e Estilo de vida',
          familyHistory: 'Antecedentes Familiares',
          familyRelationship: 'Relação/Dinâmica Familiar',
          traumaticEvents: 'Eventos Traumáticos de Vida',
          affectiveExperiences: 'Experiências afetivas marcantes',
          importantFacts: 'Outras Informações Importantes',
          prognosis: 'Hipótese Diagnóstica Inicial / Prognóstico',
          treatment: 'Acompanhamento e Tratamento',
          others: 'Outras Observações',
        },
      },
      caseReport: {
        create: {
          button: 'Cadastrar relato de caso',
          title: 'Cadastrar relato de caso',
        },
        update: {
          button: 'Atualizar relato de caso',
          title: 'Atualizar relato de caso',
        },
        list: {
          resume: 'Resumo do relato',
          new: 'Novo relato de caso',
        },
        table: {
          id: 'Id',
          actions: 'Ações',
          update: 'Atualizar',
        },
        reportingDate: 'Data do atendimento',
        patientName: 'Nome do paciente',
        content: 'Relato de caso',
      },
    },
    profile: {
      title: 'Meus dados',
      unavailableResource: 'Recurso ainda não disponível',
      badge: {
        verified: {
          true: 'Verificado',
          false: 'Não verificado',
        },
      },
      myData: {
        name: 'Nome',
        email: 'E-mail',
        phone: 'Telefone',
      },
    },
  },
} as const;
