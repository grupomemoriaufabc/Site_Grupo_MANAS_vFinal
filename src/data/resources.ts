export interface Resource {
  title: string;
  description: string;
  details: string;
  icon: "flask" | "book" | "microscope" | "code" | "database" | "brain";
  url?: string;
}

export interface Meeting {
  day: string;
  time: string;
  title: string;
  description: string;
}

export const meetings: Meeting[] = [
  {
    day: "Sexta-feira",
    time: "14:30",
    title: "Reunião Semanal do Lab",
    description:
      "Encontro semanal do MANAS Lab para apresentação de progresso, discussão de artigos e planejamento de experiências.",
  },
];

export const resources: Resource[] = [
  {
    title: "BORIS | Ferramenta de análise comportamental",
    icon: "code",
    description: "Software gratuito para registro e análise sistemática de comportamentos em modelos experimentais.",
    details: `No nosso laboratório, utilizamos diferentes ferramentas para investigar e quantificar o comportamento em modelos experimentais. Uma dessas ferramentas é o BORIS (Behavioral Observation Research Interactive Software), um software gratuito e de código aberto desenvolvido para o registro e a análise sistemática de comportamentos.\n\nA partir de vídeos ou observações em tempo real, o BORIS permite criar etogramas, registrar diferentes comportamentos e quantificar parâmetros como frequência e duração. Dessa forma, a ferramenta auxilia na análise detalhada do repertório comportamental dos animais, contribuindo para uma avaliação mais objetiva e abrangente das respostas observadas nos experimentos.`,
  },
  {
    title: "Imunohistoquímica para c-Fos",
    icon: "microscope",
    description: "Técnica para identificar a expressão de proteínas específicas em cortes de tecido cerebral.",
    details: `A imunohistoquímica é utilizada para identificar a expressão de proteínas específicas em cortes de tecido. Em nosso protocolo, realizamos a recuperação antigênica, o bloqueio da peroxidase endógena e a incubação dos cortes com um anticorpo primário anti-c-Fos. Em seguida, utilizamos um anticorpo secundário e o complexo ABC para amplificação do sinal, com posterior revelação utilizando DAB, permitindo a visualização das células marcadas ao microscópio.\n\nA proteína c-Fos é um produto de um gene de resposta imediata (immediate early gene) cuja expressão aumenta rapidamente após determinados estímulos neuronais. Por apresentar baixa expressão basal e ser induzida após a ativação celular, a imunomarcação para c-Fos é amplamente utilizada como uma ferramenta para mapear e quantificar populações neuronais ativadas em diferentes regiões encéfalo. Assim, em nosso laboratório, a marcação de c-Fos é utilizada como um indicador indireto da atividade neuronal e permite investigar quais regiões cerebrais são recrutadas em resposta aos estímulos e tarefas estudadas.`,
  },
  {
    title: "Condicionamento de Medo Contextual (CMC)",
    icon: "brain",
    description: "Paradigma para investigar formação, evocação, especificidade e generalização de memórias aversivas.",
    details: `Utilizamos o condicionamento de medo contextual em ratos para investigar a formação, evocação, especificidade e generalização de memórias aversivas. Os animais são condicionados em um contexto A e posteriormente testados tanto nesse contexto quanto em um contexto B, semelhante, mas distinto, permitindo comparar a expressão de freezing entre os ambientes.\n\nNo laboratório, avaliamos tanto memórias recentes, cerca de 2 dias após o condicionamento, quanto memórias remotas, em intervalos de 14 e 28 dias.`,
  },
  {
    title: "Labirinto em Cruz Elevado (LCE)",
    icon: "flask",
    description: "Aparato para investigar comportamentos relacionados à ansiedade e à exploração em ratos.",
    details: `Utilizamos o labirinto em cruz elevado para investigar comportamentos relacionados à ansiedade e à exploração em ratos. Durante o teste, os animais exploram livremente braços abertos e fechados do aparato, e analisamos medidas como tempo e número de entradas em cada tipo de braço, além de parâmetros de atividade exploratória.\n\nEssas medidas permitem avaliar como diferentes manipulações experimentais influenciam a exploração de ambientes abertos e potencialmente aversivos.`,
  },
  {
    title: "Cirurgia Estereotáxica",
    icon: "microscope",
    description: "Implantação bilateral de cânulas-guia em regiões encefálicas específicas em ratos.",
    details: `Realizamos cirurgias estereotáxicas em ratos para implantação bilateral de cânulas-guia em regiões encefálicas específicas, como áreas corticais envolvidas no processamento de memórias aversivas. A técnica permite acessar seletivamente estruturas de interesse e realizar posteriormente manipulações farmacológicas em diferentes etapas do processamento da memória e dos testes comportamentais.`,
  },
  {
    title: "Infusão Intracraniana",
    icon: "flask",
    description: "Administração local de fármacos em regiões encefálicas via cânulas implantadas cirurgicamente.",
    details: `Por meio das cânulas implantadas na cirurgia estereotáxica, realizamos infusões locais de fármacos em regiões encefálicas específicas. Essas manipulações permitem investigar a participação de determinadas estruturas e mecanismos neuroquímicos na aquisição, consolidação ou evocação de memórias, bem como em outros comportamentos avaliados no laboratório.`,
  },
  {
    title: "Coleta de Sangue e Dosagem Hormonal por ELISA",
    icon: "database",
    description: "Quantificação de corticosterona plasmática para avaliar respostas hormonais ao estresse.",
    details: `Realizamos coleta de sangue em ratos em diferentes momentos dos protocolos experimentais para avaliar respostas hormonais associadas às experiências comportamentais. As amostras são processadas para obtenção de plasma e utilizadas para quantificação hormonal por ELISA, especialmente de corticosterona, permitindo relacionar a atividade do eixo de estresse com a formação, especificidade e generalização de memórias aversivas.`,
  },
  {
    title: "Condicionamento de Medo ao Som",
    icon: "brain",
    description: "Paradigma pavloviano para investigar mecanismos neurobiológicos da memória de medo auditiva.",
    details: `Utiliza-se este paradigma de condicionamento clássico (pavloviano) para investigar os mecanismos neurobiológicos subjacentes à memória de medo. No protocolo, um estímulo condicionado (EC) auditivo — um tom puro ou banda de ruído — é pareado repetidamente a um estímulo incondicionado (EI) aversivo, um choque elétrico leve administrado nas patas do animal, até o estabelecimento de uma associação EC-EI.\n\nApós a aquisição dessa associação, a apresentação isolada do EC, mesmo na ausência do EI, é suficiente para evocar uma resposta condicionada de defesa característica de roedores, o congelamento (freezing), quantificado como medida comportamental da força da memória de medo. Esse paradigma permite investigar as diferentes fases do processamento mnemônico (aquisição, consolidação, evocação e extinção) e constitui um modelo amplamente utilizado para o estudo de transtornos relacionados à ansiedade e ao estresse pós-traumático.`,
  },
  {
    title: "Labirinto em Cruz: Estratégias Alocêntrica e Egocêntrica",
    icon: "brain",
    description: "Paradigma para investigar tomada de decisão orientada por recompensa e formação de hábitos.",
    details: `Utiliza-se este paradigma comportamental para investigar a tomada de decisão orientada por recompensa e os processos de formação de hábitos. No labirinto em cruz, os animais são submetidos a um protocolo de treino no qual devem localizar um reforço apetitivo em um braço-alvo, sendo que cada grupo experimental é treinado a resolver a tarefa mediante uma estratégia de navegação distinta.\n\nNo treino da estratégia alocêntrica, o braço de partida é variado entre as tentativas, de modo que o animal só consegue localizar a recompensa de forma consistente ao codificar sua posição em relação a pistas espaciais extralabirínticas, processo dependente da formação de um mapa cognitivo do ambiente. Já no treino da estratégia egocêntrica, o animal adquire uma associação estímulo-resposta fixa, executando sempre o mesmo movimento de giro corporal a partir do ponto de decisão, independentemente das pistas espaciais disponíveis, processo que se torna progressivamente mais automatizado ao longo do treino, caracterizando a aprendizagem habitual.\n\nA comparação entre os dois grupos permite dissociar os processos de tomada de decisão flexível e dirigida a um objetivo (goal-directed) dos processos de resposta automática e habitual, tipicamente insensíveis à desvalorização do reforço.`,
  },
  {
    title: "Imunofluorescência",
    icon: "microscope",
    description: "Imunomarcação com fluoróforos para investigar localização e expressão de proteínas encefálicas.",
    details: `Utiliza-se esta técnica de imunomarcação para investigar a localização e o padrão de expressão de proteínas específicas no parênquima encefálico. Após os testes comportamentais, os animais são submetidos a perfusão transcardiáca e o encéfalo é coletado, fixado em paraformaldeído (PFA) e seccionado em cortes histológicos finos, os quais são incubados com um anticorpo primário direcionado ao epítopo da proteína de interesse.\n\nA ligação é revelada por um anticorpo secundário conjugado a um fluoróforo, possibilitando a visualização, por microscopia de fluorescência, da distribuição espacial dessa proteína no tecido. Essa abordagem permite complementar os dados comportamentais com evidências anatômicas e moleculares diretas, identificando, por exemplo, quais populações neuronais foram recrutadas durante uma tarefa de memória de medo ou de tomada de decisão.`,
  },
  {
    title: "Linhagens de Camundongos Transgênicos",
    icon: "database",
    description: "Acesso genético seletivo a populações neuronais específicas para investigação de circuitos.",
    details: `Emprega-se linhagens de camundongos geneticamente modificados para obter acesso genético seletivo a populações neuronais específicas, abordagem inacessível a métodos farmacológicos ou anatômicos convencionais. Utilizam-se, predominantemente, linhagens que expressam a recombinase Cre sob promotores específicos de determinados tipos celulares, combinadas ao sistema Cre-loxP mediante o uso de alelos condicionais (floxed) ou linhagens repórteres.\n\nEssa estratégia possibilita a marcação, o registro da atividade neuronal ou a manipulação circuito-específica, por meio de abordagens optogenéticas ou quimiogenéticas, preservando a integridade das demais populações celulares. A ferramenta genética permite investigar, para além da correlação, a contribuição causal de circuitos neuronais específicos para o condicionamento de medo, a tomada de decisão e a formação de hábitos.`,
  },
  {
    title: "Microscopia Confocal",
    icon: "microscope",
    description: "Imagens de alta resolução espacial de tecidos marcados por fluorescência com seccionamento óptico.",
    details: `Utiliza-se a microscopia confocal para a obtenção de imagens de alta resolução espacial de tecidos marcados por fluorescência, como secções processadas por imunofluorescência ou tecido de animais transgênicos com expressão endógena de proteínas fluorescentes.\n\nEm contraste com a microscopia de fluorescência de campo amplo, o sistema confocal emprega uma fonte de laser e uma abertura confocal (pinhole) que exclui a luz emitida fora do plano focal, possibilitando o seccionamento óptico de espécimes espessos em múltiplas profundidades. As secções ópticas seriadas podem então ser processadas digitalmente para a reconstrução tridimensional (3D) da estrutura de interesse. Essa técnica permite a quantificação precisa de populações neuronais marcadas, a análise de colocalização entre diferentes marcadores em uma mesma célula, e o exame de estruturas subcelulares, como espinhas dendríticas e sinapses, no âmbito dos circuitos estudados.`,
  },
];
