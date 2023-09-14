import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { SearchInput } from "./index.tsx";

const mockedSearchValue = jest.fn().mockReturnValue("");
const mockedHandleSearchChange = jest.fn().mockImplementation();

const mockedHandleCleanSearch = jest
  .fn()
  .mockReturnValue(() => console.log("Calling handleCleanSearchValue"));

const TestComponent = () => (
  <SearchInput
    searchValue={mockedSearchValue()}
    handleSearchChange={mockedHandleSearchChange}
    handleCleanSearch={mockedHandleCleanSearch}
  />
);

describe("SearchInput", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the SearchInput componente when there is no search value", () => {
    const { queryByTestId } = render(<TestComponent />);

    const closeButton = queryByTestId("search-input-close-button");

    expect(closeButton).not.toBeInTheDocument();
  });

  it("should show the animal information section when clicking on close buttton", async () => {
    mockedSearchValue.mockReturnValueOnce("cat");

    const { getByTestId } = render(<TestComponent />);

    const searchInput = getByTestId("search-input");

    await fireEvent.change(searchInput, { target: { value: "bird" } });

    const closeButton = getByTestId("search-input-close-button");

    fireEvent.click(closeButton as Element);

    expect(mockedHandleCleanSearch).toHaveBeenCalled();
  });
});
