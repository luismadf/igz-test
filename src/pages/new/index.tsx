import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../../components";
import { NormalizeNewProps } from "../../interfaces/interfaces";

import "./new.css";

const New: React.FC = () => {
  const { state } = useLocation();

  //Getting the item as a prop from the router
  const { author, title, description, url, image, category, spanishDate } =
    state as NormalizeNewProps;

  return (
    <Layout>
      <img src={image || ""} alt={title} className="new-screen__image" />
      <p className="new-screen__small--text">Fecha: {spanishDate}</p>
      <p className="new-screen__small--text">Categoria: {category}</p>
      <p className="new-screen__small--text">Autor: {author}</p>
      <h2 className="new-screen__small--title">{title}</h2>
      <p className="new-screen__small--description">{description}</p>
      <a
        href={url}
        className="new-screen__small--link"
        target="_blank"
        rel="noreferrer"
      >
        Ver noticia completa
      </a>
    </Layout>
  );
};

export default New;
