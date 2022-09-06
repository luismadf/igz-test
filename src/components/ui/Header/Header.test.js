import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

// A simple test to see if the components get rendered
test("render", () => {
  const component = render(<Header />, { wrapper: MemoryRouter });
  component.getByText("INTELYGENZ");
});
