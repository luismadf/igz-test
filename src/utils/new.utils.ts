import moment from "moment";
import "moment/locale/es";
import { NewProps } from "../interfaces/interfaces";

moment.locale("es");

export const normalizeNew = (item: NewProps) => {
  return {
    ...item,
    shortDescription: item.description.slice(0, 80).concat("..."),
    image: item.image ? item.image : "/images/mock-image.jpg",
    spanishDate: moment(item.published_at).format("DD/MM/YYYY"),
    date: new Date(item.published_at),
  };
};
