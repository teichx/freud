export const translations = {
  auth: {
    signInAgain: {
      content: {
        title: 'Sua sessão expirou!',
        paragraphs: [
          'Para garantir a máxima segurança dos dados dos nossos clientes e a integridade do sistema, solicitamos que você faça login novamente.',
          'Entendemos que isso pode parecer inconveniente, mas é uma medida essencial para proteger as informações confidenciais dos nossos pacientes e manter a segurança da plataforma.',
          'Atenciosamente,',
        ],
      },
      button: 'Entrar novamente',
    },
    signIn: {
      content: {
        title: 'Área protegida!',
        paragraphs: [
          'Para acessar todo o conteúdo e recursos disponíveis, é necessário fazer o login.',
          'Agradecemos pela sua compreensão e colaboração. Se precisar de ajuda ou tiver alguma dúvida, não hesite em entrar em contato conosco.',
        ],
      },
      button: 'Fazer login',
    },
  },
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
      listV2: {
        filter: {
          text: 'Nome do paciente',
          status: {
            placeholder: 'Filtre pelo status',
            options: {
              archived: 'Arquivados',
              active: 'Ativos',
            },
          },
        },
        header: {
          name: 'Nome',
          caseReportCount: 'Casos anotados',
          lastCaseReport: 'Último relato de caso',
          status: 'Status',
        },
        cell: {
          'caseReportCount#zero': 'Nenhum caso anotado',
          'caseReportCount#one': '{count} caso anotado',
          'caseReportCount#two': '{count} casos anotados',
          'caseReportCount#other': '{count} casos anotados',
          status: {
            active: 'Ativo',
            archived: 'Arquivado',
          },
        },
        createLabel: 'Cadastrar paciente',
      },
      form: {
        sidebar: {
          title: 'Paciente',
          description: 'Gerencie as informações sobre seu paciente.',
        },
        syncStatus: {
          history: 'Histórico',
          lastSync: 'Última sincronização',
        },
        pages: {
          principal: {
            title: 'Principal',
            name: 'Nome',
            status: {
              title: 'Status',
              active: 'Ativo',
              to_active: 'Ativar',
              archive: 'Arquivado',
              to_archive: 'Arquivar',
            },
          },
          personal: {
            title: 'Informações Pessoais',
            age: 'Idade',
            birth: 'Nascimento',
            gender: 'Gênero',
            profession: 'Ocupação',
            schooling: 'Escolaridade',
            cpf: 'CPF',
            rg: 'RG',
            marriageStatus: 'Estado civil',
            tooltip: {
              age: 'Este campo não pode ser preenchido porque é calculado a partir da data de nascimento',
            },
          },
          contact: {
            title: 'Dados de contato',
            phoneNumber: 'Telefone',
            email: 'E-mail',
            address: 'Endereço',
            emergency: 'Em caso de emergência',
          },
          firstConsult: {
            title: 'Primeira Consulta',
            fields: {
              principalReason: 'Queixa Principal',
              appearanceAndBehavior: 'Aparência e comportamento',
              demandAssessment: 'Avaliação de Demanda',
            },
          },
          complained: {
            title: 'Queixas',
            cognitive: {
              title: 'Cognitivas',
              sensory: 'Integridade Sensorial',
              perception: 'Percepção',
              focus: 'Atenção e Concentração',
              memory: 'Memória',
              other: 'Outras queixas cognitivas',
            },
            emotional: {
              title: 'Afetivas/Emocionais',
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
              other: 'Outras queixas afetivas/emocionais',
            },
            history: {
              title: 'Histórico da Queixa',
              fields: {
                problemInitiation: 'Início da problemática',
                frequencyAndIntensity: 'Frequência e Intensidade',
                previousTreatments: 'Tratamentos Anteriores',
                medication: 'Uso de Fármacos',
              },
            },
          },
          observations: {
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
          caseReport: {
            title: 'Relatos de caso',
            reportingDate: 'Data do atendimento',
            content: 'Relato de caso',
            contentPlaceholder: 'Insira aqui os detalhes do atendimento',
          },
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
