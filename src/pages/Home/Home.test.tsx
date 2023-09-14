import "@testing-library/jest-dom";
import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import Home from "./index.tsx";
import userEvent from "@testing-library/user-event";

jest.mock("../../assets/logo-google.svg", () => () => "");

const TestComponent = () => <Home />;

describe("Home", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the Home componente", () => {
    const { queryByTestId } = render(<TestComponent />);

    const wrapper = queryByTestId("wrapper-container");

    expect(wrapper).toBeInTheDocument();
  });

  it("should show the search process including show the animal info section when clicking on title link", async () => {
    const { getByTestId, queryByTestId, getAllByTestId, getByText } = render(
      <TestComponent />
    );

    // Finding search input

    const searchInput = getByTestId("search-input");

    // Changing search input value

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "bird" } });
    });

    // Finding and clicking on search button

    const searchButton = getByTestId("search-button");

    fireEvent.click(searchButton as Element);

    // Waiting the return and finding loading component

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await waitFor(() => {
      expect(queryByTestId("loader-container")).not.toBeInTheDocument();
    });

    // Clicking on link title and showing the animal info section

    const selectAnimalButton = getAllByTestId("select-animal-detail-button");

    expect(selectAnimalButton[0]).toBeInTheDocument();

    await fireEvent.click(selectAnimalButton[0] as Element);

    const animalInfo = getByTestId("animal-details-container");

    expect(animalInfo).toBeInTheDocument();

    const headerLogo = getByTestId("header-logo");

    await fireEvent.click(headerLogo as Element);

    // Cleaning the search and return to the inicial page

    const agileLogo = getByText("Agile Content");

    expect(agileLogo).toBeInTheDocument();
  });

  it("should handle Enter key press correctly", async () => {
    const { getByTestId } = render(<TestComponent />);

    const searchInput = getByTestId("search-input");

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "bird" } });
    });

    await act(async () => {
      userEvent.type(searchInput, "{enter}");
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const closeButton = getByTestId("search-input-close-button");

    expect(closeButton).toBeInTheDocument();
  });
});
