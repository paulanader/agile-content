import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { NotFoundSearchMessage } from "./index.tsx";

const mockedSearchValue = jest.fn().mockReturnValue("");

const TestComponent = () => (
  <NotFoundSearchMessage searchValue={mockedSearchValue()} />
);

describe("NotFoundSearchMessage", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the NotFoundSearchMessage component when there is not searchValue", () => {
    const { queryByTestId } = render(<TestComponent />);

    const hasSearchValueMessage = queryByTestId("has-search-value-message");

    expect(hasSearchValueMessage).not.toBeInTheDocument();
  });

  it("should show the NotFoundSearchMessage component when there is  searchValue", () => {
    mockedSearchValue.mockReturnValueOnce("bird");

    const { getByTestId } = render(<TestComponent />);

    const hasSearchValueMessage = getByTestId("has-search-value-message");

    expect(hasSearchValueMessage).toBeInTheDocument();
  });
});
