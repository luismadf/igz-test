import React from "react";
import { useNavigate } from "react-router-dom";
import { normalizeNew } from "../../../utils";
import { NewProps } from "../../../interfaces";
import "./New.css";

interface Props {
  item: NewProps;
}

const New: React.FC<Props> = ({ item }) => {
  let navigate = useNavigate();

  const {
    author,
    title,
    shortDescription,
    url,
    image,
    category,
    spanishDate,
    timeFromNow,
  } = normalizeNew(item);

  const onClick = () => {
    navigate(`/new`, { state: { ...item } });
  };

  return (
    <div className="new" onClick={onClick}>
      <div className="new__content">
        <span className="new__content--pill">{category}</span>
        <h3>{title}</h3>
        <p className="new__content--description">{shortDescription}</p>
        <p className="new__content--date">{spanishDate}</p>
      </div>
      <div className="new__image">{image ? <img src={image} /> : null}</div>
    </div>
  );
};

export default New;
