import { useEffect, useState } from "react";
import { Layout, New, SearchBar } from "./components";
import { useGetNews } from "./hooks";
import { NewProps, NormalizeNewProps } from "./interfaces/interfaces";

function App() {
  const [showNews, SetShowNews] = useState() as any;

  const { news } = useGetNews();

  useEffect(() => {
    SetShowNews(news);
  }, [news]);

  const onChange = ({ target }: any) => {
    const filteredNews = news.filter(
      (item: NewProps) =>
        item.title.toLowerCase().includes(target.value.toLowerCase()) ||
        item.description.toLowerCase().includes(target.value.toLowerCase())
    );
    SetShowNews(filteredNews);
  };

  return (
    <Layout>
      <SearchBar handleOnChange={onChange} />
      {showNews ? (
        showNews.map((item: NormalizeNewProps, key: number) => (
          <New item={item} key={key} />
        ))
      ) : (
        <div className="loader">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
