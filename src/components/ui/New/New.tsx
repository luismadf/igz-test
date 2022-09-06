import React from "react";
import { useNavigate } from "react-router-dom";
import { NormalizeNewProps } from "../../../interfaces";
import "./New.css";

interface Props {
  item: NormalizeNewProps;
}

const New: React.FC<Props> = ({ item }) => {
  let navigate = useNavigate();

  const { title, shortDescription, image, category, spanishDate } = item;

  const onClick = () => {
    // Sending the state as a prop to the New screen
    navigate(`/new`, { state: { ...item } });
  };

  return (
    <div className="new" onClick={onClick}>
      <div className="new__content">
        <span className={`new__content--pill ${category}`}>{category}</span>
        <h3>{title}</h3>
        <p className="new__content--description">{shortDescription}</p>
        <p className="new__content--date">{spanishDate}</p>
      </div>
      <div className="new__image">
        {image ? <img src={image} alt={title} /> : null}
      </div>
    </div>
  );
};

export default New;
