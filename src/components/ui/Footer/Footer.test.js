import { render } from "@testing-library/react";
import Footer from "./Footer";

// A simple test to see if the components get rendered
test("render", () => {
  const component = render(<Footer />);
  component.getByText("Made with ❤️ by Luis De Freites");
});
