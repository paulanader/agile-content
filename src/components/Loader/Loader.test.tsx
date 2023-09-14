import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { Loader } from "./index.tsx";

const TestComponent = () => <Loader />;

describe("Loader", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the Loader component", () => {
    const { getByTestId } = render(<TestComponent />);

    const loaderContainer = getByTestId("loader-container");

    expect(loaderContainer).toBeInTheDocument();
  });
});
