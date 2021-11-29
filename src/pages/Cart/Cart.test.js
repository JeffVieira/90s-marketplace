import { fireEvent, render, screen, cleanup } from "../../utils/test";

import Cart from "./Cart";

const product = {
  id: "1",
  title: "Useless Git Commit Messages",
  price: 300,
  rating: 2,
  description:
    "Descricao do controle tem que ser mais de u mparagrafo para ficar bacana na UI",
  image: "https://boyter.org/static/books/CgbR1wkXEAAMjqP.jpg",
  onOffer: true,
};

describe("Cart", () => {
  it("remover a product from cart", () => {
    render(<Cart />, [product]);

    screen.getByRole("columnheader", { name: "Product" });
    screen.getByRole("columnheader", { name: "Quantity" });
    screen.getByRole("columnheader", { name: "Price" });
    screen.getByRole("columnheader", { name: "Action" });

    screen.getByRole("cell", { name: product.title });
    screen.getByRole("cell", { name: "1" });
    screen.getByRole("cell", { name: product.price });
    screen.getByRole("cell", { name: "Remove" });

    const removeProductButton = screen.getByRole("button", {
      name: /Remove/,
    });

    fireEvent.click(removeProductButton);

    expect(
      screen.getByText("There is no product on you cart")
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("columnheader", { name: "Product" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", { name: "Quantity" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", { name: "Price" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", { name: "Action" })
    ).not.toBeInTheDocument();

    cleanup();
  });

  it("renders empty cart", () => {
    render(<Cart />);

    expect(
      screen.getByText("There is no product on you cart")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /keep shopping/ })
    ).toBeInTheDocument();

    cleanup();
  });
});
