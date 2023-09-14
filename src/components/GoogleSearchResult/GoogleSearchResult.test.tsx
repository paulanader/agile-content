import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { GoogleSearchResult } from "./index.tsx";
import { animalDetailsMock } from "../../Mocks/index.tsx";

const mockedHandleSelectAnimal = jest
  .fn()
  .mockReturnValue(animalDetailsMock[0]);

const TestComponent = () => (
  <GoogleSearchResult
    animalInfo={animalDetailsMock[0]}
    handleSelectAnimal={mockedHandleSelectAnimal}
  />
);

describe("GoogleSearchResult", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the GoogleSearchResult", () => {
    const { getByTestId } = render(<TestComponent />);

    const container = getByTestId("google-search-result-container");

    expect(container).toBeInTheDocument();
  });

  it("should call the handleSelectAnimal function when clicking on button", () => {
    const { getByTestId } = render(<TestComponent />);

    const button = getByTestId("select-animal-detail-button");

    fireEvent.click(button);

    expect(mockedHandleSelectAnimal).toHaveBeenCalledWith(animalDetailsMock[0]);
  });
});
