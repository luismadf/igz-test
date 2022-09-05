import React from "react";
import { NewProps } from "../../../interfaces";
import "./New.css";
import { normalizeNew } from "../../../utils/new.utils";

interface Props {
  item: NewProps;
}

const New: React.FC<Props> = ({ item }) => {
  const {
    author,
    title,
    shortDescription,
    url,
    image,
    category,
    date,
    timeFromNow,
  } = normalizeNew(item);

  return (
    <div className="new">
      <div className="new__content">
        <span className="new__content--pill">{category}</span>
        <h3>{title}</h3>
        <p className="new__content--description">{shortDescription}</p>
        <p className="new__content--date">{date}</p>
      </div>
      <div className="new__image">{image ? <img src={image} /> : null}</div>
    </div>
  );
};

export default New;
