import { useState, useEffect } from "react";
import { normalizeNew } from "../utils/new.utils";

const MOCK_DATA = [
  {
    author: "Gabriela García Calderón Orbe",
    title:
      "Pedido de periodista uigur: «Terminar con décadas de sufrimiento de mi familia»",
    description:
      '"Insto al personal de Naciones Unidas a ayudar a obtener información sobre si mis 11 familiares están vivos y, en caso afirmativo, dónde están y por qué y cómo fueron castigados".',
    url: "https://es.globalvoices.org/2022/06/03/pedido-de-periodista-uigur-terminar-con-decadas-de-sufrimiento-de-mi-familia/",
    source: "es",
    image:
      "https://globalvoices.org/wp-content/uploads/2022/05/Shohret-w4-400x300.jpg",
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-03T06:00:21+00:00",
  },
  {
    author: "Yahoo Vida e Estilo",
    title:
      'Anitta revela ter recebido propostas de desvio de verba: "Cobra e eu pego um pedaço"',
    description: "Cantora falará pela primeira vez sobre a CPI dos Sertanejos",
    url: "https://br.vida-estilo.yahoo.com/anitta-revela-ter-recebido-propostas-de-desvio-de-verba-cobra-e-eu-pego-um-pedaco-140647757.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-05T14:06:47+00:00",
  },
  {
    author: "Reuters",
    title:
      "Presidente do BC do Japão pede desculpas por dizer que as pessoas estão começando a aceitar altas de preços",
    description:
      "TÓQUIO (Reuters) - O chefe do banco central do Japão, Haruhiko Kuroda, pediu desculpas nesta terça-feira por afirmar na véspera que as famílias estavam se tornando mais receptivas aos aumentos de preços, o que provocou críticas e ressaltou a sensibilidade do público ao aumento do custo de vida. O comentário foi feito em um momento sensível para o governo do primeiro-ministro Fumio Kishida, que enfrenta críticas crescentes para enfrentar o aumento dos custos de alimentos e combustível antes da el",
    url: "https://esportes.yahoo.com/presidente-bc-jap%C3%A3o-pede-desculpas-113827068.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-07T11:38:27+00:00",
  },
  {
    author: "Reuters",
    title:
      'Comandante iraniano ameaça cidades israelenses se país cometer "qualquer erro", diz agência',
    description:
      'DUBAI (Reuters) - O Irã arrasará as cidades de Tel Aviv e Haifa caso seu inimigo Israel cometa algum erro, disse nesta terça-feira o comandante regular das forças terrestres do Exército iraniano, Kiumars Heydari, segundo a agência de notícias semi-oficial Tasnim. "Por qualquer erro cometido pelo inimigo, arrasaremos Tel Aviv e Haifa por ordem do Líder Supremo", disse Heydari.',
    url: "https://esportes.yahoo.com/comandante-iraniano-amea%C3%A7a-cidades-israelenses-122616526.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-07T12:26:16+00:00",
  },
  {
    author: "Yahoo Notícias",
    title:
      "Esposa de jornalista desaparecido faz apelo ao governo: “Temos um pouco de esperança”",
    description:
      "Dom Phillips e Bruno Pereira estão desaparecidos desde o último domingo, quando estavam na região do Vale do Javari",
    url: "https://br.noticias.yahoo.com/esposa-de-jornalista-desaparecido-faz-apelo-ao-governo-temos-um-pouco-de-esperanca-150933711.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-07T15:09:33+00:00",
  },
  {
    author: "Yahoo Esportes",
    title: "Willian recebe ameaças de corintiano e registra queixa na polícia",
    description:
      "Mais uma vez um jogador do Corinthians procurou a polícia para denunciar ameaças e insultos que ele e sua família receberam nas redes socias. O meia Willian, se dirigiu pessoalmente nesta quarta-feira (1) à sede do Departamento de Operações Policiais Estratégicas (DOPE), órgão de execução da Polícia Civil, para registrar um Boletim de Ocorrência por ameaças que recebeu na terça-feira.",
    url: "https://esportes.yahoo.com/willian-recebe-ameacas-de-corintiano-e-registra-queixa-na-policia-175819965.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-01T17:58:19+00:00",
  },
  {
    author: "Reuters",
    title:
      "Pressão política contra corte de verba em ministérios trava reajuste a servidores, dizem fontes",
    description:
      "BRASÍLIA (Reuters) - Pressões políticas contra cortes orçamentários em ministérios levaram o governo a travar o plano de reajustar salários de servidores públicos federais, informaram à Reuters três fontes com conhecimento do assunto, ressaltando que a equipe econômica agora avalia alternativas, como uma ampliação de vale alimentação, enquanto aguarda decisão final do presidente Jair Bolsonaro. Legalmente, junho é o último mês para o governo decidir, tramitar e aprovar eventual aumento de salári",
    url: "https://esportes.yahoo.com/press%C3%A3o-pol%C3%ADtica-contra-corte-verba-175707221.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-01T17:57:07+00:00",
  },
  {
    author: "Kameraone",
    title: "Homem morre atacado por jacaré na Flórida",
    description:
      'Um homem de 47 anos morreu ao ser atacado por um jacaré em Largo, Flórida (EUA), na terça-feira (31). Segundo relatos, o homem estava no lago procurando frisbees e ignorou diversas placas de "não nadar".',
    url: "https://esportes.yahoo.com/homem-morre-atacado-por-jacar%C3%A9-180000174.html?src=rss",
    source: "es",
    image: null,
    category: "general",
    language: "es",
    country: "es",
    published_at: "2022-06-01T18:00:00+00:00",
  },
];

export function useGetNews() {
  const [news, setNews] = useState([]) as any;

  useEffect(() => {
    // const getNews = async() => {
    //   const apiKey = "b51d6f60751f1d8b84ca848b91d3d659";
    //   const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=es&sources=cnn,bbc&sources=us,ca,uk,es,fr`;
    //   await fetch("http://example.com/movies.json")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // };
    // getNews();

    const normalizeNews = MOCK_DATA.map((item) => normalizeNew(item));
    const organizeByDateNews = normalizeNews.sort(
      (a: any, b: any) => b.date - a.date
    );
    setNews(organizeByDateNews);
  }, []);

  return { news };
}

export default useGetNews;
