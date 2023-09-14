import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { Footer } from "./index.tsx";

describe("Footer", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the Footer componente", () => {
    const { getByTestId } = render(<Footer />);

    const footerContainer = getByTestId("footer-container");

    expect(footerContainer).toBeInTheDocument();
  });
});
