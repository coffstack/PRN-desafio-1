import { News } from "./types";export const Mock: News[] = [
  {
    id: 1,
    topIncremental: {
      type: "simple",
      content: "Agredida e arrastada em rua",
    },
    title:
      "Mulher é espancada por grupo de mães após criança ser atingida por pedra em escola",
    subTitle:
      "Ela é uma das duas suspeitas de ter jogado pedras contra a escola de Bom Sucesso (MG). Segundo informações do boletim de ocorrência, um das crianças acabou gerida com estilações de um dos pedregulhos atirados.",
    image: require("./../assets/news/1.png"),
    category: "Sul de Minas",
    date: "5 horas",
  },
  {
    id: 2,
    topIncremental: {
      type: "simple",
      content: "A caminho de Show",
    },
    title: "Cantor gospel Regis Danese sofre acidente em Goiás",
    image: require("./../assets/news/2.png"),
    category: "Goiás",
    date: "4 horas",
    related: [
      {
        id: 1,
        title:
          "Carro em que cantor estava bateu de frente com carreta, diz esposa",
      },
    ],
  },
  {
    id: 3,
    title:
      "'Preocupado e com esperança', diz indígena de terra no centro do debate",
    image: require("./../assets/news/3.png"),
    category: "Santa Catarina",
    date: "5 horas",
    related: [
      {
        id: 2,
        title: "VÍDEO: Cacique Raioni chega ao STF e é aplaudido",
      },
      {
        id: 3,
        title:
          "Indígenas fazem ato em Brasília: 'Futuro melhor para nossos filhos'",
      },
    ],
  },
  {
    id: 4,
    title: "Brumadinho: Famílias recebem suporte e orientação após indenização",
    topIncremental: {
      type: "especial",
      content: "Especial Publicitário",
    },
    image: require("./../assets/news/4.png"),
  },
  {
    id: 5,
    title: "Botafogo é eliminado pelo Defensa y Justicia",
    subTitle:
      "Com dois gols de Nicolás Fernández, equipe argentino bate o líder do Brasileirão e aguarda LDU ou São Paulo na semifinal do torneio",
    image: require("./../assets/news/5.png"),
    date: "5 horas",
    category: "Copa sul-americana",
    topIncremental: {
      type: "soccer",
      content: {
        homeTeam: {
          abbreviation: "DYJ",
          goalsConceded: 1,
          goalsScored: 2,
          name: "Defensa y Justicia",
          symbol: require("./../assets/teams/DYJ.png"),
        },
        visitingTeam: {
          abbreviation: "BOT",
          goalsConceded: 2,
          goalsScored: 1,
          name: "Botafogo",
          symbol: require("./../assets/teams/BOT.png"),
        },
        additionalTitle: "Copa Sul-Americana",
      },
    },
  },
  {
    id: 6,
    topIncremental: {
      type: "simple",
      content: "Blog da Julia",
    },
    title:
      "Lula e Biden se esquivam de divergências e lançam manifesto pró-trabalhador",
    category: "Blog da Julia",
    date: "50 minutos",
    related: [
      {
        id: 1,
        title:
          "Lula se reúne com Zelensky hoje: 'Vou conversar com sobre o que ele quer'",
      },
    ],
  },
  {
    id: 7,
    title: "Extraordinário agora é Di Vino!",
    image: require("./../assets/news/6.jpg"),
  },
];
