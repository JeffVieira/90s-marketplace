import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../components";

// mock for antDesign Table
Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

const customRender = (ui, cartContextProducts = [], options) =>
  render(
    <CartProvider defaultProducts={cartContextProducts}>
      <MemoryRouter>{ui}</MemoryRouter>
    </CartProvider>,
    { ...options }
  );

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
