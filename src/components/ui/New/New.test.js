import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { normalizeNew } from "../../../utils";
import New from "./New";

const ITEM = normalizeNew({
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
});

// A simple test to see if the components get rendered
test("render", () => {
  const component = render(<New item={ITEM} />, { wrapper: MemoryRouter });
  component.getByText(ITEM.title);
});
