import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { AnimalDetails } from "./index.tsx";
import { animalDetailsMock } from "../../Mocks/index.tsx";
import userEvent from "@testing-library/user-event";

const mockedHandleCloseModal = jest.fn();

jest.mock("react-bootstrap", () => {
  return {
    ...jest.requireActual("react-bootstrap"),
    CloseButton: () => (
      <button
        data-testid="close-button-of-the-animals-details-component"
        onClick={mockedHandleCloseModal()}
      >
        Cancelar
      </button>
    ),
  };
});
describe("AnimalDetails", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the AnimalDetails component when isModal is false", () => {
    const { getByTestId } = render(
      <AnimalDetails
        selectedAnimal={animalDetailsMock[0]}
        handleCloseModal={mockedHandleCloseModal}
      />
    );

    const animalDetailsContainer = getByTestId("animal-details-container");

    expect(animalDetailsContainer).toBeInTheDocument();
  });

  it("should show the AnimalDetails component when isModal is true and call the handleCloseModal when clicking on close modal button", () => {
    const { getByTestId } = render(
      <AnimalDetails
        selectedAnimal={animalDetailsMock[0]}
        handleCloseModal={() => mockedHandleCloseModal()}
        isModal
      />
    );

    const closeButton = getByTestId(
      "close-button-of-the-animals-details-component"
    );

    userEvent.click(closeButton);

    expect(mockedHandleCloseModal).toHaveBeenCalled();
  });
});
