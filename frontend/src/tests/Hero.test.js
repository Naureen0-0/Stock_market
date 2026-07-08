import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}), { virtual: true });


describe("Hero Component", () => {
  test("renders Hero Image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Stock_Market home");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "Assets/homeHero.png");

  });
  });
