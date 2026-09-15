import { InfiniteCarousel } from '../../../Common/InfiniteCarousel';
import ProfileCard from '../../DevFest/ProfileCard';

import AlissonRosa from '../../../../assets/palestrantes/Alisson_Rosa.png';
import AhirtonLopes from '../../../../assets/palestrantes/Ahirton_Lopes.jpeg';
import AnaPaulaBartels from '../../../../assets/palestrantes/Ana_Paula_Bartels.png';
import ArthurCarvalho from '../../../../assets/palestrantes/Arthur_Carvalho.jpeg';
import ArthurDrumond from '../../../../assets/palestrantes/Arthur_Drumond.jpeg';
import ArturBomtempo from '../../../../assets/palestrantes/Artur_Bomtempo.jpeg';
import CamillaMartins from '../../../../assets/palestrantes/Camilla_Martins.jpg';
import DannielMagno from '../../../../assets/palestrantes/Danniel_Magno.jpeg';
import DiegoBorgesFerreira from '../../../../assets/palestrantes/Diego_Borges_Ferreira.png';
import DouglasAugustoFerreiraAraujo from '../../../../assets/palestrantes/Douglas_Augusto_Ferreira_Araujo.png';
import ElianaLimadaFonseca from '../../../../assets/palestrantes/Eliana_Lima_da_Fonseca.png';
import FernandaCosta from '../../../../assets/palestrantes/Fernanda_Costa.jpg';
import GabrielNogueira from '../../../../assets/palestrantes/Gabriel_Nogueira.jpeg';
import GeisislaineLimaMartins from '../../../../assets/palestrantes/Geisislaine_Lima_Martins.jpeg';
import IsabelaCancado from '../../../../assets/palestrantes/Isabela_Cancado.jpeg';
import JorgeMauroGonçalves from '../../../../assets/palestrantes/Jorge_Mauro_Gonçalves.png';
import JuliaVasconcelos from '../../../../assets/palestrantes/Julia_Vasconcelos.jpg';
import JulianaConde from '../../../../assets/palestrantes/Juliana_Conde.jpg';
import LucasMenezes from '../../../../assets/palestrantes/Lucas_Menezes.png';
import LuizaNaves from '../../../../assets/palestrantes/Luiza_Naves.jpg';
import LucianaRHSincero from '../../../../assets/palestrantes/Luciana_RH_Sincero.jpeg';
import DanielaOliveira from '../../../../assets/palestrantes/Daniela_Oliveira.jpeg';
import CarolSevero from '../../../../assets/palestrantes/Carol_Severo.jpeg';
import IzaBatista from '../../../../assets/palestrantes/Iza_Batista.jpeg';
import JessicaFlores from '../../../../assets/palestrantes/Jéssica_Flores.png';
import KarolAttekita from '../../../../assets/palestrantes/Karol_Attekita.png';
import KevinUehara from '../../../../assets/palestrantes/Kevin_Uehara.png';
import MarcellaSouza from '../../../../assets/palestrantes/Marcella_Souza.jpg';
import MarianaAlmeida from '../../../../assets/palestrantes/Mariana_Almeida.jpeg';
import MozartSousa from '../../../../assets/palestrantes/Mozart_Sousa.jpeg';
import MateusPereira from '../../../../assets/palestrantes/Mateus_Pereira.jpeg';
import MimaAmie from '../../../../assets/palestrantes/Mima_Amie.jpg';
import NicoleBarra from '../../../../assets/palestrantes/Nicole_Barra.png';
import OthoGarcia from '../../../../assets/palestrantes/Otho_Garcia.jpeg';
import PedroRosemberg from '../../../../assets/palestrantes/Pedro_Rosemberg.jpeg';
import RafaelCunha from '../../../../assets/palestrantes/Rafael_Cunha.jpeg';
import RafaelRibeiroAndrade from '../../../../assets/palestrantes/Rafael_Ribeiro_Andrade.png';
import RafaelaMarcolino from '../../../../assets/palestrantes/Rafaela_Marcolino.jpg';
import ThaisFalabella from '../../../../assets/palestrantes/Thais_Falabella.png';
import ToshiOssada from '../../../../assets/palestrantes/Toshi_Ossada.png';
import VictorPugliese from '../../../../assets/palestrantes/Victor_Pugliese.jpeg';
import VictoriaBoaventura from '../../../../assets/palestrantes/Victoria_Boaventura.jpg';
import YuriFernandes from '../../../../assets/palestrantes/Yuri_Fernandes.jpeg';

import { SectionTitle } from '../../../Common/SectionTitle';

export default function Speakers2026() {

    const speakers = [
        {
            photoUrl: AlissonRosa,
            name: 'Alisson Rosa',
            role: 'Staff Engineer de Data & AI',
            description: 'Escale',
            links: { linkedin: 'https://www.linkedin.com/in/alissonrosa/' },
            talkInfo: 'Nesta palestra, Alisson vai mostrar uma nova forma de pensar a orquestração de pipelines de dados, utilizando Leoflow, Google Kubernetes Engine (GKE) e BigQuery para construir soluções mais escaláveis e com menos complexidade de infraestrutura.\nO que você vai aprender?\nComo funciona uma arquitetura de orquestração baseada em estados no ecossistema cloud-native.\n As vantagens de executar tarefas em Pods efêmeros no Kubernetes.\n Como integrar essa arquitetura ao BigQuery para coordenar transformações de dados de forma escalável.\nCom quase 10 anos de experiência em projetos de Data & AI na nuvem e 7 certificações técnicas, Alisson traz uma visão prática de engenharia para quem quer explorar o verdadeiro potencial da Google Cloud.',
            speakerInfo: 'Alisson, Staff Engineer de Data & AI e especialista em Google Cloud Platform, sobe ao palco do DevFest para compartilhar uma abordagem moderna de orquestração de pipelines utilizando Kubernetes e BigQuery.',
            talkTitle: 'Nem só de Airflow vive o Data Engineer: Orquestrando Pipelines com Leoflow no GKE e BigQuery'
        },
        {
            photoUrl: AhirtonLopes,
            name: 'Ahirton Lopes',
            role: 'Data & AI Senior Manager',
            description: 'Accenture',
            links: { linkedin: 'https://www.linkedin.com/in/ahirtonlopes/' },
            speakerInfo: 'Ahirton Lopes, Ph.D. é Data & AI Senior Manager na Accenture, Google Developer Expert (GDE) em Inteligência Artificial, Microsoft MVP em AI Foundry e professor de MBA na FIAP. Ahirton atua projetando arquiteturas de IA em escala para grandes empresas e liderando times de engenharia de software e IA.',
            talkTitle: 'Agent Foundry: Engenharia de Agentes de IA com Google ADK',
            talkInfo: 'Nesta palestra hands-on, você vai aprender como construir agentes inteligentes utilizando o Google Agent Development Kit (ADK) e entender como eles podem interagir com ferramentas, memória, sistemas externos e até outros agentes.\nO que você vai aprender?\nComo criar agentes de IA com ferramentas customizadas e memória de conversa.\n Como orquestrar múltiplos agentes especializados em diferentes padrões de execução.\n Como utilizar os protocolos MCP e A2A para conectar agentes a dados e sistemas externos.\n Uma demonstração ao vivo de um agente de clima e turismo com contexto de Belo Horizonte.\nE tem mais: você sai da palestra com um agente funcionando e acesso ao repositório completo para continuar explorando tudo em casa.',
        },
        {
            photoUrl: LucianaRHSincero,
            name: 'Luciana Azevedo',
            role: 'Consultora de RH e Influenciadora Digital',
            description: 'RH Sincero',
            links: { linkedin: 'https://www.linkedin.com/in/lucianarhsincero/', instagram: 'https://www.instagram.com/lucianarhsincero' },
            speakerInfo: 'Luciana RH Sincero, conhecida como o RH mais sincero do Brasil, sobe ao palco do DevFest BH com uma conversa que promete provocar boas reflexões e muitas risadas. Com mais de 10 anos de experiência em RH em grandes empresas nacionais e multinacionais, como Souza Cruz, Midea Carrier, ExxonMobil, Arezzo, DISYS e SouCloud, ela compartilha uma visão prática e sem filtros sobre o mundo corporativo.',
            talkTitle: 'Sobrevivência corporativa: Aprenda a Puxar Saco e conquiste a paz profissional',
            talkInfo: 'Se você já se perguntou por que algumas pessoas parecem crescer mais rápido no ambiente corporativo, essa palestra é para você. Calma... não é o que você está pensando. Nessa palestra, Luciana vai mostrar que se destacar no trabalho não tem a ver com bajulação ou falta de caráter. Tem a ver com entender as relações no ambiente corporativo, saber se comunicar, criar conexões e aprender a jogar o jogo de forma justa.',
        },
        {
            photoUrl: CarolSevero,
            name: 'Carol Severo',
            role: 'Executiva de Tecnologia',
            description: 'Core Scale Solutions Ltda.',
            links: {linkedin: 'https://www.linkedin.com/in/eucarolsevero/'},
            speakerInfo: 'Executiva de Tecnologia com mais de 18 anos de experiência em Delivery Management, Produtos, Projetos e Operações, Carol também atua ajudando profissionais a fortalecerem sua identidade e posicionamento para alcançarem o próximo nível da carreira.',
            talkTitle: 'O Código da Contratação: A inteligência por trás de um LinkedIn estratégico.',
            talkInfo: 'Nesta palestra, Carol vai mostrar como transformar o LinkedIn em uma ferramenta estratégica para construir autoridade, atrair oportunidades e comunicar o valor que você entrega.\n\nO que você vai aprender?\n Como compreender e comunicar com clareza quem você é profissionalmente, sua trajetória, competências e o valor que você construiu ao longo da carreira.\n Como direcionar sua imagem profissional para que o mercado entenda onde você gera valor, quais problemas resolve e para quais oportunidades está preparado.\n Como desenvolver merecimento e reconhecer o valor da própria trajetória para sustentar esse posicionamento na hora da entrevista.',
        },
        {
            photoUrl: IzaBatista,
            name: 'Iza Batista',
            role: 'Threat Researcher',
            description: 'Infoblox',
            links: { linkedin: 'https://www.linkedin.com/in/izadora-batista/' },
            speakerInfo: 'Profissional de cibersegurança com atuação em OSINT (Open Source Intelligence), investigação digital e inteligência de ameaças, Iza também faz parte da comunidade UaiSINT, contribuindo para fortalecer a cultura de investigação em fontes abertas no Brasil.',
            talkTitle: 'Google Dorks: Não é Hacking, é Google!',
            talkInfo: 'Nesta palestra, Iza vai mostrar, na prática, como técnicas de Google Dorks e OSINT podem transformar buscas públicas em investigações completas — sempre respeitando limites éticos e legais.\n\nO que você vai aprender?\nComo utilizar operadores avançados do Google para encontrar informações públicas.\nComo documentos, metadados e páginas indexadas podem revelar muito mais do que imaginamos.\nComo conectar informações aparentemente isoladas para construir uma investigação em fontes abertas.\nE, principalmente, como refletir sobre a quantidade de informações que deixamos disponíveis na internet sem perceber.',
        },
        {
            photoUrl: JessicaFlores,
            name: 'Jéssica Flores',
            role: 'Gerente de Projetos de Tecnologia',
            description: 'Loovi',
            links: { linkedin: 'https://www.linkedin.com/in/jessica--flores/' },
            speakerInfo: 'Gerente de Projetos de Tecnologia e mestranda em Inovação Tecnológica e Propriedade Intelectual pela UFMG, Jéssica atua na interseção entre tecnologia, negócios e pessoas, liderando projetos e times multidisciplinares. Ela também integra a 6ª edição do Programa Líder Negra e acredita na liderança, inovação e educação como ferramentas para ampliar oportunidades.',
            talkTitle: 'Da execução ao protagonismo: construindo sua carreira na tecnologia',
            talkInfo: 'Como sair da execução e assumir um papel mais protagonista na sua carreira?\nNesta mentoria, Jéssica vai compartilhar experiências e reflexões sobre como construir uma trajetória profissional com mais intenção, visibilidade e confiança.\n\nO que vamos conversar?\nAutoconhecimento e posicionamento profissional.\nComo comunicar melhor suas entregas e seu impacto.\nNetworking e construção de repertório.\nDesenvolvimento contínuo e protagonismo na carreira.',
        },
        {
            photoUrl: KarolAttekita,
            name: 'Karol Attekita',
            role: 'Senior Mobile Engineer',
            description: 'Riot Games',
            links: { linkedin: 'https://www.linkedin.com/in/bullas-attekita/' },
            speakerInfo: 'Engenheira de Software com mais de 14 anos de experiência, atualmente Engenheira iOS na Riot Games, criadora do Attekita Dev, LinkedIn Top Voice e reconhecida pela Apple por sua contribuição à comunidade de desenvolvedores, Karol impacta mais de 500 mil pessoas compartilhando conteúdo sobre tecnologia, IA e carreira.',
            talkTitle: 'O Programador Generalista e a IA Generativa',
            talkInfo: 'Nesta palestra, Karol propõe uma reflexão sobre a evolução da engenharia de software e o papel dos desenvolvedores em um mercado cada vez mais influenciado pela IA Generativa.\n\nO que você vai aprender?\nComo a IA está transformando a engenharia de software.\nO que significa ser um desenvolvedor generalista nesse novo cenário.\nComo construir um posicionamento profissional para continuar relevante ao longo da carreira.',
        },
        {
            photoUrl: MarcellaSouza,
            name: 'Marcella Souza',
            role: 'Engineering Manager',
            description: 'iFood',
            links: {linkedin: 'https://www.linkedin.com/in/marcellasouza/'},
            speakerInfo: 'Engineering Manager dos times de plataforma mobile da logística no iFood, Marcella construiu grande parte da sua carreira com Android nativo e, nos últimos anos, liderou uma das migrações mais desafiadoras da empresa utilizando Kotlin Multiplatform e Compose Multiplatform.',
            talkTitle: 'Recalculando a rota: como o app iFood para Entregadores voltou à App Store migrando do Android nativo para KMP + CMP',
            talkInfo: 'Nesta palestra, Marcella vai compartilhar os bastidores de um projeto real do iFood: o retorno do app para Entregadores ao iOS, mostrando as decisões técnicas e organizacionais que tornaram essa migração possível.\n\nO que você vai aprender?\nComo estruturar uma migração de Android nativo para Kotlin Multiplatform e Compose Multiplatform.\nOs desafios de compartilhar código entre Android e iOS sem perder velocidade de desenvolvimento.\nOs aprendizados de um projeto entregue em tempo recorde por um time de 42 desenvolvedores.\nComo uma decisão de arquitetura pode resolver um problema real de negócio.',
        },
        {
            photoUrl: DanielaOliveira,
            name: 'Daniela Oliveira',
            role: 'Fundadora e CEO',
            description: 'NeuroStack',
            links: { linkedin: 'https://www.linkedin.com/in/danielaoli' },
            speakerInfo: 'Fundadora e CEO da NeuroStack, biomédica, especialista em neurociência e gestão em saúde, Daniela conecta tecnologia, inovação e negócios para desenvolver soluções em IA na área da saúde e já impactou milhares de profissionais ao longo da sua trajetória.',
            talkTitle: 'Da Competência à Influência: Carreira e Liderança Feminina em Tecnologia',
            talkInfo: 'Como transformar competência técnica em influência e liderança? Nesta mentoria, Daniela vai compartilhar ferramentas e experiências para ajudar mulheres a crescerem na tecnologia com mais estratégia, confiança e protagonismo.',
        },
        {
            photoUrl: KevinUehara,
            name: 'Kevin Uehara',
            role: 'Software Engineer',
            description: 'iFood',
            links: {linkedin: 'https://www.linkedin.com/in/kevin-uehara/' },
            speakerInfo: 'Software Engineer no iFood, Google Developer Expert (GDE), Microsoft MVP por três vezes, organizador do FrontIn Campinas e uma das grandes referências da comunidade frontend no Brasil, Kevin traz uma palestra cheia de conceitos, prática e arquitetura.',
            talkTitle: 'Micro-frontends: Escalando Interfaces com Arquitetura Modular',
            talkInfo: 'Os Micro-frontends estão mudando a forma como grandes aplicações web são construídas. Nesta palestra, você vai descobrir como essa arquitetura permite que diferentes equipes desenvolvam e publiquem interfaces de forma independente, sem perder a integração entre os projetos. \nVocê vai aprender os conceitos por trás da arquitetura de Micro-frontends, como o Module Federation v2 permite integrar aplicações de forma dinâmica e eficiente, além dos benefícios, desafios e trade-offs dessa abordagem, com demonstrações práticas de como orquestrar múltiplos frontends em uma mesma aplicação.',
        },
        {
            photoUrl: AnaPaulaBartels,
            name: 'Ana Paula Bartels',
            role: 'Head of Success',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/anapaulabartels/' },
            speakerInfo: 'Com mais de 4 anos de experiência ajudando profissionais a conquistarem vagas internacionais em tecnologia, Ana é responsável pelo sucesso nas contratações de empresas americanas e pela experiência dos candidatos na plataforma Strider.',
           
        },
        {
            photoUrl: ArthurCarvalho,
            name: 'Arthur Carvalho',
            role: 'Software Developer',
            description: 'Hotmart',
            links: { linkedin: 'https://www.linkedin.com/in/arthurcarvalh0/' },
            talkInfo: 'Em um universo de infinitas ferramentas e frameworks, a maior falha de um projeto nem sempre é técnica — muitas vezes é não entender profundamente o problema de negócio. Nesta palestra, os palestrantes defendem uma abordagem que inverte essa lógica: primeiro modelar o domínio, depois decidir a arquitetura. A partir de um estudo de caso prático, eles vão mostrar como aplicar Domain-Driven Design (DDD) e discutir padrões arquiteturais avançados, como Event Sourcing, CQRS e SAGA, para construir sistemas resilientes, escaláveis e alinhados ao negócio.',
            speakerInfo: 'Arthur Carvalho é Dev Backend na Hotmart e estudante de Ciência da Computação na PUC Minas. Arquiteto e desenvolvedor de uma solução escalável utilizada por diversas empresas e por sua própria universidade, começou sua jornada na tecnologia aos 13 anos, com robótica.',
            talkTitle: 'Arquitetura e Modelagem de Software: O Processo de Decisão por Trás de Sistemas Resilientes'
        },
        {
            photoUrl: ArthurDrumond,
            name: 'Arthur Drumond',
            role: 'Software Engineer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/arthur-drumond-52a2812b1/' },
            talkInfo: 'Em um universo de infinitas ferramentas e frameworks, a maior falha de um projeto nem sempre é técnica — muitas vezes é não entender profundamente o problema de negócio. Nesta palestra, os palestrantes defendem uma abordagem que inverte essa lógica: primeiro modelar o domínio, depois decidir a arquitetura. A partir de um estudo de caso prático, eles vão mostrar como aplicar Domain-Driven Design (DDD) e discutir padrões arquiteturais avançados, como Event Sourcing, CQRS e SAGA, para construir sistemas resilientes, escaláveis e alinhados ao negócio.',
            speakerInfo: 'Arthur Drumond é Desenvolvedor de Software Full-Stack, com experiência em microsserviços, APIs e Cloud, e também cursa Engenharia de Software na PUC Minas',
            talkTitle: 'Arquitetura e Modelagem de Software: O Processo de Decisão por Trás de Sistemas Resilientes'
        },
        {
            photoUrl: ArturBomtempo,
            name: 'Artur Bomtempo',
            role: 'Software Developer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/artur-bomtempo/' },
            talkInfo: 'Aprenda, na prática, tudo sobre contêineres — desde os conceitos fundamentais até a criação e otimização de imagens e deploys. Uma imersão completa para quem quer dominar Docker e levar suas aplicações a outro nível!',
            talkTitle: 'Docker para Iniciantes',
            speakerInfo: 'Artur Bomtempo Colen é apaixonado por tecnologia desde os 15 anos, premiado durante sua formação no Cotemig e vencedor do programa Cotemig Startups com a QuickFood Technologies. Atualmente cursa Engenharia de Software na PUC Minas, é monitor de Programação Modular e desenvolvedor de software na dti digital.',
        },
        {
            photoUrl: CamillaMartins,
            name: 'Camilla Martins',
            role: 'Specialist Site Realiabitity Engineer',
            description: 'Storyblok',
            links: { linkedin: 'https://www.linkedin.com/in/camilla-martins-603344115/' },
            speakerInfo: 'Camilla Martins é Senior Site Reliability Engineer na Storyblok, com uma trajetória acadêmica sólida: pós-graduada em Forense Computacional, Mestre em Informática e atualmente doutoranda pela Universidade Federal do Estado do Rio de Janeiro. Ela também é Docker Community Leader premiada três vezes pela Docker Inc, Docker Captain, Google Developer Experts em Cloud. Sua experiência se estende como instrutora e curadora de conteúdo pela LinuxTips, impactando comunidades de tecnologia no Brasil e na América Latina.',
            talkTitle: 'Implement Bulletproof AgentOps',
            talkInfo: 'Nesta palestra, Camilla vai apresentar as práticas de DevOps para uma nova era, mostrando como garantir segurança, observabilidade e resiliência em ecossistemas de agentes. O foco não é apenas em um agente isolado, mas sim em todo o "Agenteverso", onde múltiplos agentes trabalham em colaboração.\nA palestra detalhará o papel do DevOps/SRE como "O Guardião", responsável por proteger a infraestrutura e garantir que o ecossistema de agentes seja escalável, seguro e resistente a ataques. O conteúdo vai mostrar como a colaboração entre diferentes perfis — desenvolvedores, arquitetos, engenheiros de dados e SREs — é fundamental para o sucesso de projetos com IA.',
        },
        {
            photoUrl: DannielMagno,
            name: 'Danniel Magno',
            role: 'Head of Artificial Intelligence',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/dannielmagno/' },
            talkTitle: 'Do Rascunho ao Robô: Como a Onfly Transforma Ideias de IA em Agentes de Produção',
        },
        {
            photoUrl: DiegoBorgesFerreira,
            name: 'Diego Borges',
            role: 'Tech Manager',
            description: 'PicPay',
            links: { linkedin: 'https://www.linkedin.com/in/eudiegoborgs/' },
            talkInfo: 'O que faz um Tech Manager? É apenas o desenvolvedor mais sênior da equipe? Nesta palestra, Diego vai compartilhar sua trajetória e os aprendizados que obteve nessa transição — os desafios, as mudanças de mentalidade e as lições que ajudam a crescer na liderança técnica.',
            speakerInfo:'Com mais de 14 anos de experiência em desenvolvimento, Diego Borges é graduado em Sistemas de Informação pela PUC Minas, apaixonado por música, programação e automação. Hoje atua como Coordenador de Engenharia de Software no PicPay, faz parte da organização do PHPMG e compartilha seus aprendizados sobre desenvolvimento e carreira em seu blog de tecnologia.',
            talkTitle: 'De Dev a Tech Manager: Coisas que Aprendi nessa Jornada',
        },
        {
            photoUrl: DouglasAugustoFerreiraAraujo,
            name: 'Douglas Augusto',
            role: 'Specialist Customer Engineer',
            description: 'Google',
            links: { linkedin: 'https://www.linkedin.com/in/douglasaugusto/' },
            speakerInfo: 'Com mais de 10 anos de experiência em tecnologia, já atuou em grandes empresas como Coca-Cola e Stellantis, passando por consultorias e fábricas de software. Hoje, é Arquiteto de Soluções no Google Cloud, ajudando instituições financeiras a migrarem de sistemas legados para arquiteturas modernas e nativas em nuvem, acelerando inovação com segurança.',
            talkTitle: 'Desenvolvimento de Agents com o ADK',
            talkInfo: 'Nesta sessão prática, Douglas vai mostrar como criar agents autônomos usando o Agent Development Kit (ADK) do Google. Você vai aprender:\n Como um agent raciocina e planeja seus passos\n Como utilizar ferramentas para executar tarefas\n Como aplicar memória para manter contexto\n\nTudo isso para construir aplicações mais inteligentes e automatizar processos complexos.',
        },
        {
            photoUrl: ElianaLimadaFonseca,
            name: 'Eliana Fonseca',
            role: 'Professora',
            description: 'UFRGS',
            links: { linkedin: 'http://www.linkedin.com/in/eliana-lima-da-fonseca-a99930228' },
            speakerInfo: 'Professora titular no Departamento de Geografia da UFRGS, pesquisadora da iniciativa MapBiomas e Google Developer Experts em Earth Engine. Sua carreira é marcada pelo trabalho em mapeamento e monitoramento ambiental no Brasil, na Cordilheira dos Andes e até no continente Antártico, utilizando imagens de satélite.',
            talkTitle: 'Earth Engine no atendimento das emergências climáticas',
            talkInfo: 'Eliana vai mostrar como o uso de imagens de satélite pode apoiar o monitoramento do ambiente em situações de emergência climática. Durante a apresentação, ela compartilhará conceitos, código e até um app para celular desenvolvido no Google Earth Engine para monitorar áreas inundadas.',
        },
        {
            photoUrl: FernandaCosta,
            name: 'Fernanda Costa',
            role: 'Engenheira de Software',
            description: 'Nubank',
            links: { linkedin: 'https://www.linkedin.com/in/fernandacosta-tech/' },
            speakerInfo: 'Fernanda Costa e Silva é Engenheira de Software no Nubank, com mestrado em Engenharia de Sistemas e Automação pela UFLA, onde pesquisou sobre Inteligência Artificial e Processamento de Linguagem Natural, e estará conosco compartilhando sua experiência e trajetória inspiradora!'
        },
        {
            photoUrl: GabrielNogueira,
            name: 'Gabriel Nogueira',
            role: 'Sotware Engineer Intern',
            description: 'WebTech',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-nogueira-vieira-resende/' },
            talkInfo: 'Aprenda, na prática, tudo sobre contêineres — desde os conceitos fundamentais até a criação e otimização de imagens e deploys. Uma imersão completa para quem quer dominar Docker e levar suas aplicações a outro nível!',
            talkTitle: 'Docker para Iniciantes',
            speakerInfo: 'Gabriel Nogueira começou sua jornada na computação aos 14 anos, no Vietnã. Hoje é estudante de Engenharia de Software na PUC Minas, estagiário da Hotmart e membro da WebTech Network, com experiência como QA na IOASYS.',
        },
        {
            photoUrl: GeisislaineLimaMartins,
            name: 'Geisislaine Lima Martins',
            role: 'Tech Manager',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/geisislaine-martins/' },
            talkTitle: 'De Aprendiz a Referência: Construindo Espaço na Tecnologia com Propósito',
        },
        {
            photoUrl: IsabelaCancado,
            name: 'Isabela Cançado',
            role: 'Agilista',
            description: 'Arcelor Mittal',
            links: { linkedin: 'https://www.linkedin.com/in/isabela-can%C3%A7ado/' },
            speakerInfo:'Conheça Isabela Lopes R. Cançado, profissional que é inspiração quando o assunto é transição de carreira e agilidade! Isabela atua na ArcelorMittal Sistemas na área de agilidade, além de ser cofundadora da comunidade AgileMinds. Ela começou sua trajetória na engenharia de produto, onde trabalhou por 12 anos na área automotiva, liderando projetos estratégicos, desenvolvimento de veículos e gestão de custos — inclusive com experiências internacionais na Itália e Argentina. Em 2017, concluiu o mestrado em Administração, com foco em estratégia organizacional, gestão do conhecimento e inteligência competitiva. Desde então, vem se dedicando a ajudar pessoas e times a alcançarem seus melhores resultados por meio de metodologias ágeis como OKR, Kanban, Lean e Design Thinking.'
        },
        {
            photoUrl: JorgeMauroGonçalves,
            name: 'Jorge Mauro',
            role: 'Software Engineer',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/jorge-m-goncalves/' },
            speakerInfo: 'Jorge Gonçalves é Cientista da Computação formado pela PUC Minas e Desenvolvedor Front-end na Localiza, onde une inteligência artificial e experiência do usuário em seus projetos. Apaixonado por tecnologia e arte, Jorge traz uma visão única sobre inovação e criação.',
            talkTitle: 'Generative UI: UIs Dinâmicas e LLMs',
            talkInfo: 'Nesta talk, Jorge vai apresentar o conceito de Generative UI, mostrar como funciona na prática e discutir como essa abordagem pode transformar a interação entre usuários e interfaces. Uma visão de futuro sobre como IA e design se conectam para criar experiências mais dinâmicas e inteligentes.',
        },
        {
            photoUrl: JuliaVasconcelos,
            name: 'Julia Vasconcelos',
            role: 'Product Designer',
            description: 'TOTVS',
            links: { linkedin: 'https://www.linkedin.com/in/juvscncls/' },
            speakerInfo:'Júlia Vasconcelos é Product Designer na TOTVS, formada pela UFPE e pós-graduada pelo CESAR School.Fundadora da BRAVAS in Tech e líder da Friends of Figma BH, Júlia tem experiência em design de produtos digitais, growth, visualização de dados e storytelling estratégico.',
            talkTitle: 'Storytelling Estratégico: Como Mostrar seu Trabalho com Intenção e Gerar Impacto',
            talkInfo: 'Nesta palestra, Júlia vai mostrar como usar técnicas de storytelling aliadas a dados para dar visibilidade às suas entregas e comunicar impacto de forma clara e intencional — uma habilidade essencial para quem quer crescer na carreira em tecnologia. ',
        },
        {
            photoUrl: JulianaConde,
            name: 'Juliana Conde',
            role: 'Especialista em Treinamento Técnico Corporativo',
            description: 'Matza',
            links: { linkedin: 'https://www.linkedin.com/in/julianaconde/' },
            speakerInfo:'Juliana Conde é Especialista em Desenvolvimento de Sistemas Web e Mobile, atua há mais de 12 anos na área de tecnologia e educação.Ela é Docker Captain, GitHub Star e líder em comunidades técnicas como GitHub e Google Developers Group, ajudando inúmeras pessoas a ingressarem no mundo da tecnologia.Ex-oficial do Exército e hoje Especialista em Treinamento Técnico Corporativo e Professora na Faculdade Serra Dourada de Lorena, Juliana traz uma bagagem impressionante — com foco atual em Inteligência Artificial e Computação em Nuvem.',
            talkTitle: 'Docker Offload: To the Cloud and Beyond',
            talkInfo:'Nessa talk, você vai descobrir como o Docker Offload está revolucionando o desenvolvimento de software — tornando a implantação de projetos mais rápida, fluida e integrada à nuvem.'
        },
        {
            photoUrl: LucasMenezes,
            name: 'Lucas Menezes',
            role: 'Desenvolvedor Front End',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/lucas-menezes-bambirra/' },
            talkTitle: 'Um Framework Vivo para a Web Moderna da Onfly',   
        },
        {
            photoUrl: LuizaNaves,
            name: 'Luiza Naves',
            role: 'Product Manager',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/luizanaves/' },
            speakerInfo: 'Luiza Naves é Engenheira de Produção pela UFMG e com MBA em Gestão de Projetos pela USP/Esalq, Luiza atua como Especialista de Produto na Localiza&Co, onde é responsável pela estratégia, desenvolvimento e sucesso de produtos digitais. Com uma trajetória que une negócios, tecnologia e experiência do cliente, ela promove soluções centradas no usuário e já atuou como engenheira de processos na Suzano, liderando projetos e experimentos industriais.',
            talkInfo: 'Na sua mentoria, Luiza vai conversar sobre carreira de produto, produto e agilidade, além de liderança e gestão de times.'
        },
        {
            photoUrl: MarianaAlmeida,
            name: 'Mariana Almeida',
            role: 'Desenvolvedora de Software',
            description: 'Origami Lab',
            links: { linkedin: 'https://www.linkedin.com/in/marialmeidam/' },
            speakerInfo: '👩Mariana Almeida é graduanda em Ciência da Computação, com 5 anos de experiência na área tech. Especialista em front-end, ela também atua em produto como Product Designer e Frontend Developer, além de liderar o projeto WebTech Network como Tech Manager. Aspirante a arquiteta de software, seu foco está em arquitetura de front-end, projetando sistemas escaláveis, modulares e de alta performance, sempre alinhando experiência do usuário e inovação tecnológica.',
            talkTitle: 'Arquitetura Frontend Moderna: Sistemas Clean, Escaláveis e Sólidos',
            talkInfo: 'Vamos explorar como estruturar aplicações frontend modernas usando Clean Code, SOLID e Clean Architecture. Também vamos abordar organização de camadas (UI, Application, Domain, Infra), boas práticas e padrões para criar sistemas limpos, escaláveis e fáceis de manter. Ah, e claro: tem parte prática para idealizar um projeto básico com arquitetura profissional.',
        },
        {
            photoUrl: MateusPereira,
            name: 'Mateus Pereira',
            role: 'Partner Solutions Architect',
            description: 'AWS',
            links: { linkedin: 'https://www.linkedin.com/in/matgpereira/' },
            speakerInfo: 'Mateus Pereira é Arquiteto de Soluções Sênior de Parceiros na AWS, com ampla experiência em desenvolvimento de software e arquitetura de aplicações em nuvem, focando em compute, storage e data protection.',
            talkTitle: 'Aprimorando Agentic AI com Servidores MCP Serverless',
            talkInfo: 'Nesta sessão, Mateus vai mostrar como os agentes de IA podem ir além dos LLMs e do RAG. Você vai conhecer o Model Context Protocol (MCP), entender como ele conecta agentes a ferramentas externas, traz contexto em tempo real e permite ações autônomas. Também veremos práticas para criar servidores MCP em ambientes serverless.',
        },
        {
            photoUrl: MimaAmie,
            name: 'Mima Amie',
            role: 'Strategic Advisor',
            description: 'BeCare',
            links: { linkedin: 'https://www.linkedin.com/in/amiemima/' },
            speakerInfo: 'Mima é fundadora e ex-Product Design Manager da BeCare, com ampla experiência em descoberta de produto, UX research e product discovery. Ao longo de sua trajetória, transformou insights em soluções estratégicas, criando produtos do conceito ao mercado. Sua atuação une design e gestão de produto com uma mentalidade voltada à inovação e ao crescimento de startups.',
            talkInfo: 'Na mentoria, Mima vai compartilhar sua experiência em Carreira em Produto, UX/UI Design, Produto e Agilidade, e Empreendedorismo — ajudando outras mulheres a darem os próximos passos com propósito e estratégia.'
        },
        {
            photoUrl: MozartSousa,
            name: 'Mozart Sousa',
            role: 'Mobile Engineering Lead',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/mozartjasousa/' },
            talkTitle: 'Dominando o Flutter: Estratégias de Qualidade para Vencer no Mercado Nacional',
        },
        {
            photoUrl: NicoleBarra,
            name: 'Nicole Barra',
            role: 'Co-founder & COO',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/nicolebarraconde/' },
            speakerInfo:'Temos o prazer de anunciar Nicole Barra, cofundadora e COO na Strider, plataforma que conecta talentos de tecnologia da América Latina com oportunidades em empresas dos EUA. Com ampla experiência em recrutamento internacional, Nicole foi responsável pela criação do departamento de RH na GovPredict (YC S15). Ela é técnica em Redes de Computadores pelo CEFET-MG e bacharel em Psicologia pela UFMG — uma combinação que traduz bem sua trajetória entre pessoas e tecnologia.',
            talkInfo:'Nesta palestra, Nicole traz uma reflexão essencial para profissionais que desejam trabalhar no exterior: como equilibrar ambições de carreira e qualidade de vida? Ela vai abordar como alinhar autoconhecimento, objetivos e equilíbrio de vida ao considerar oportunidades internacionais, mostrando como avaliar propostas, negociar de forma consciente e fazer escolhas que sustentem uma carreira global saudável e satisfatória.',
            talkTitle: 'Work-life Balance em Carreiras Globais',
        },
        {
            photoUrl: OthoGarcia,
            name: 'Otho Garcia',
            role: 'Arquiteto de Software',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/otho-garcia-da-silva-neto-165b38122/' },
            talkTitle: 'De Monolito para Micro Serviços: A transição da Onfly',
        },
        {
            photoUrl: PedroRosemberg,
            name: 'Pedro Rosemberg',
            role: 'Segurança da Informação',
            description: 'Fiemg',
            links: { linkedin: 'https://www.linkedin.com/in/pedrorosemberg/' },
            speakerInfo: 'Pedro Rosemberg é entusiasta de tecnologia, marido, pai do Matteo e da Aurora, atua na Gerência de Segurança da Informação do Sistema FIEMG e é fundador da METADAX.',
            talkTitle: 'A Mentalidade do Desenvolvedor Secure-First',
            talkInfo: 'A segurança de software vai muito além de checklists e vulnerabilidades conhecidas.\n\nA conversa é um convite para que desenvolvedores de todos os níveis adotem uma visão proativa, incorporando práticas seguras no dia a dia — desde o código até a cultura do time.',
        },
        {
            photoUrl: RafaelCunha,
            name: 'Rafael Cunha',
            role: 'Head of Data & Analytics',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/rafaelalvesdeoliveiradacunha/' },
            talkTitle: 'Data Platform Modular: Estratégias de Migração do Monolito para Microsserviços',
        },
        {
            photoUrl: RafaelRibeiroAndrade,
            name: 'Rafael Andrade',
            role: 'Lead Software Engineer',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/rafaelra/' },
            speakerInfo: 'Rafael Andrade é Founding Engineer da Strider, plataforma de contratação de desenvolvedores remotos, onde atua na criação de soluções inovadoras e na otimização de processos de seleção técnica.\nCom ampla experiência em desenvolvimento Full-stack (NodeJS, ReactJS, AWS) e atuação especializada em testes técnicos (tech vetting), Rafael tem se dedicado a criar soluções escaláveis, eficientes e também a empoderar profissionais de tecnologia por meio de boas práticas e conhecimento aplicado.',
            talkTitle: 'Testes técnicos sem mistério: o guia para se destacar',
            talkInfo: 'Nesta palestra, Rafael vai desmistificar os testes técnicos de entrevista, mostrando de forma prática o que realmente é avaliado e como os candidatos podem se preparar melhor.\n\nEntre os tópicos que ele vai abordar estão:\n» Como organizar o código de forma clara e objetiva;\n» A importância de um README bem escrito;\n» Como lidar com decisões de arquitetura e trade-offs;\n» Como equilibrar tempo e entrega para não se perder no processo.\n\nCom base em sua experiência avaliando candidatos, Rafael traz um guia prático para que desenvolvedores de todos os níveis saiam da palestra mais confiantes e preparados para o próximo desafio técnico.',
        },
        {
            photoUrl: RafaelaMarcolino,
            name: 'Rafaela Marcolino',
            role: 'Tech Lead',
            description: 'ThoughtWorks',
            links: { linkedin: 'https://www.linkedin.com/in/rafaela-marcolino/' },
            speakerInfo: 'Rafaela S. é Engenheira de Software Fullstack Sênior, com quase uma década de experiência criando e escalando aplicações web e mobile. Atualmente, é Tech Lead na ThoughtWorks, professora na XP Educação e Embaixadora Women Techmakers. Apaixonada por tecnologia e entusiasta de ferramentas de IA, Rafaela desenvolve soluções para aumentar produtividade, eficiência e qualidade de código.',

        },
        {
            photoUrl: ThaisFalabella,
            name: 'Thais Falabella',
            role: 'Head Product Design',
            description: 'iFood',
            links: { linkedin: 'https://www.linkedin.com/in/thaisfalabella/' },
            speakerInfo: 'Thaís Falabella é Head of Product Design no iFood, formada, mestre e doutoranda em Design, Inovação e Sustentabilidade pela UEMG. Professora de pós-graduação no IBMEC e na PUC, é também autora do curso Skill: UX além das telas e professora na How Bootcamps, PM3 e Gama.',
            talkTitle: 'IA no Design de Produtos Inovadores',
            talkInfo: 'O impacto da inteligência artificial no design de produtos digitais vai muito além da automação — ela está transformando a forma como criamos, testamos e evoluímos produtos. Nesta palestra, Thaís mostrará como a IA pode impulsionar a criatividade, acelerar processos e permitir experiências mais inteligentes e adaptativas.',
        },
        {
            photoUrl: ToshiOssada,
            name: 'Toshi Ossada',
            role: 'Lider Técnico',
            description: 'Famácias App',
            links: { linkedin: 'https://www.linkedin.com/in/toshiossada/' },
            speakerInfo: 'Toshi Ossada é Google Developer Experts em Flutter e Dart, além de Microsoft MVP em Developer Technologies e Web. Fundador da Flutter Brasil, ele tem sido peça-chave na consolidação e crescimento da comunidade Flutter no país, sempre compartilhando conhecimento e impulsionando a inovação com tecnologia de ponta.',
            talkInfo: 'Nesta talk imperdível, Toshi vai explorar como unir o poder do Flutter — framework que revolucionou o desenvolvimento multiplataforma — com o potencial da IA do Gemini, através da API do AI Studio.',
            talkTitle: 'Vamos Falar de Inteligência Artificial? Desenvolvendo Apps Inteligentes com Flutter e Gemini',
        },
        {
            photoUrl: VictorPugliese,
            name: 'Victor Pugliese',
            role: 'Google Developer Expert em AI',
            description: '',
            links: { linkedin: 'https://www.linkedin.com/in/victorpug-exe/', post:'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387441967300784129-HtWN' },
            speakerInfo: 'Victor é Doutorando em Ciência da Computação pela UNIFESP, com Mestrado pelo ITA, e mais de 10 anos de experiência na indústria. Além disso, já publicou 15 trabalhos científicos e foi Pesquisador Visitante no GAIPS, grupo de pesquisa do Instituto Superior Técnico da Universidade de Lisboa, contribuindo para avanços em Inteligência Artificial e Aprendizado de Máquina.',
            talkTitle: 'A Era Gemma: Desvendando a Família de Modelos Abertos do Google',
            talkInfo:'O Google apresentou ao mundo o Gemma, uma família de modelos de IA aberta que está redefinindo os limites da inovação.'
        },
        {
            photoUrl: VictoriaBoaventura,
            name: 'Victoria Boaventura',
            role: 'Tech Recruiter',
            description: 'Yellow.rec',
            links: { linkedin: 'https://www.linkedin.com/in/victoria-boaventura/' },
            speakerInfo: 'Psicóloga com pós-graduação em Liderança, Inovação e Gestão 4.0, Victória tem mais de 10 anos de experiência em Recursos Humanos, sendo os últimos 7 focados no recrutamento de profissionais de tecnologia.\nCom uma rede de mais de 106 mil conexões no LinkedIn, ela compartilha conteúdos sobre recrutamento, mercado de TI e tendências em gestão, ajudando profissionais e empresas a crescerem com propósito e inovação.',
            talkTitle: 'Tenha o LinkedIn como seu aliado para se destacar no mercado de trabalho',
            talkInfo: 'Uma palestra imperdível sobre como usar o LinkedIn de forma estratégica para construir sua marca pessoal, ampliar conexões e se destacar no mercado de trabalho.',
        },
        {
            photoUrl: YuriFernandes,
            name: 'Yuri Fernandes',
            role: 'Analista de Dados',
            description: 'Vivo Vita',
            links: { linkedin: 'https://www.linkedin.com/in/yurianalistabi/' },
            speakerInfo: 'Analista de Sistemas e atualmente Analista de Dados Sênior na Vivo, Yuri já percorreu todos os passos da carreira de analista até alcançar a senioridade. Com 5 anos de experiência, ele traz uma visão prática e real do dia a dia na área de dados.',
            talkTitle: 'Por dentro da Análise de Dados: o divertido, o difícil e o essencial',
            talkInfo: 'Nesta palestra, Yuri vai compartilhar:\n Por que escolheu a área de análise de dados\n Os pontos positivos e os desafios da profissão\n A realidade do dia a dia de um analista',
        },
    ];

    const visibleSpeakers = speakers.filter((speaker) =>
        ['Alisson Rosa', 'Ahirton Lopes', 'Luciana Azevedo', 'Carol Severo', 'Iza Batista', 'Jéssica Flores', 'Karol Attekita', 'Marcella Souza', 'Daniela Oliveira', 'Kevin Uehara'].includes(speaker.name)
    ).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

    return (
        <section className="bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-8 md:mb-12"></div>
            <InfiniteCarousel count={visibleSpeakers.length} viewCount={4}>
                {visibleSpeakers.map((card, index) => (
                    <ProfileCard
                        key={index}
                        photoUrl={card.photoUrl}
                        name={card.name}
                        role={card.role}
                        description={card.description}
                        links={card.links}
                        speakerInfo={card.speakerInfo}
                        talkTitle={card.talkTitle}
                        talkInfo={card.talkInfo}
                    />
                ))}
            </InfiniteCarousel>
        </section>
    );
}
