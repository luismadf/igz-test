import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Input Tests", () => {
  // A simple test to see if the components get rendered
  it("render", () => {
    const component = render(<SearchBar />);
    const input = component.getByPlaceholderText("Buscar...");
    expect(input).toBeInTheDocument();
  });

  it("Checking if you can type in the input", () => {
    const mockHandler = jest.fn();

    const component = render(<SearchBar handleOnChange={mockHandler} />);
    const input = component.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });
});
