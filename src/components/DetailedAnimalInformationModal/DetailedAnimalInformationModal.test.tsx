import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { DetailedAnimalInformationModal } from "./index.tsx";
import { animalDetailsMock } from "../../Mocks/index.tsx";
// import userEvent from "@testing-library/user-event";

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
describe("DetailedAnimalInformationModal", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the DetailedAnimalInformationModal", () => {
    const { getByTestId } = render(
      <DetailedAnimalInformationModal
        selectedAnimal={animalDetailsMock[0]}
        handleCloseModal={mockedHandleCloseModal}
        showModal
      />
    );

    const modalContainer = getByTestId("detailed-animal-information-modal");

    expect(modalContainer).toBeInTheDocument();
  });
});
