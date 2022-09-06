import { useState, useEffect } from "react";
import { NewProps } from "../interfaces";
import { normalizeNew } from "../utils/new.utils";

function useGetNews() {
  const [data, setData] = useState([]) as any;
  const [news, setNews] = useState() as any;

  useEffect(() => {
    const getNews = async () => {
      const apiKey = "6XgYen4XmsQP9zyw-m45PiTRy_6dAmBOwEDqYGhMMvAiCM_0";
      const url = `https://api.currentsapi.services/v1/latest-news?language=es&apiKey=${apiKey}`;
      await fetch(url)
        .then((response) => response.json())
        .then(({ news }) => {
          setData(news);
        });
    };

    getNews();
  }, []);

  useEffect(() => {
    const normalizeNews = data.map((item: NewProps) => normalizeNew(item));
    const organizeByDateNews = normalizeNews.sort(
      (a: any, b: any) => b.date - a.date
    );
    setNews(organizeByDateNews);
  }, [data]);

  return { news };
}

export default useGetNews;
