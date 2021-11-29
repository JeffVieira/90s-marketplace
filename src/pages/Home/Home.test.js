import { fireEvent, render, screen, cleanup } from "../../utils/test";

import Home from "./Home";

describe("Home", () => {
  it("add product to cart and show counter on Header link", () => {
    render(<Home />);

    screen.getByRole("menuitem", { name: "Cart" });

    const [firstProductButton] = screen.getAllByRole("button", {
      name: /Add to Cart/,
    });

    fireEvent.click(firstProductButton);

    expect(screen.getByText("Product add with sucess")).toBeInTheDocument();

    expect(
      screen.getByRole("menuitem", { name: "Cart 1" })
    ).toBeInTheDocument();

    cleanup();
  });
});
