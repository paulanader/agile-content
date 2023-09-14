import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { Header } from "./index.tsx";

const mockedHandleSearchChange = jest.fn().mockReturnValue("");
const mockedRemoveSearch = jest.fn();
const mockedIsSearching = jest.fn().mockReturnValue(false);
const mockedSearchValue = jest.fn().mockReturnValue("");

jest.mock("../../assets/logo-google.svg", () => () => "");

const TestComponent = () => (
  <Header
    isSearching={mockedIsSearching()}
    searchValue={mockedSearchValue()}
    handleSearchChange={mockedHandleSearchChange}
    onRemoveSearch={mockedRemoveSearch}
  />
);

describe("Header", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the Header componente when there is no search", () => {
    const { getByText } = render(<TestComponent />);

    const headerContainer = getByText("Agile Content");

    expect(headerContainer).toBeInTheDocument();
  });

  it("should show the Header componente when there is search", () => {
    mockedIsSearching.mockReturnValueOnce(true);
    mockedSearchValue.mockReturnValueOnce("bird");

    const { getByTestId } = render(<TestComponent />);

    const headerContainer = getByTestId("search-input-container");

    expect(headerContainer).toBeInTheDocument();
  });
});
