import { Modal } from "react-bootstrap";
import { AnimalDetails } from "../AnimalDetails";
import { AnimalType } from "../../@types/AnimalType";

interface DetailedAnimalInformationModal {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedAnimal: AnimalType | null;
}

export const DetailedAnimalInformationModal: React.FC<
  DetailedAnimalInformationModal
> = ({ showModal, selectedAnimal, handleCloseModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
      className="d-flex flex-column align-items-center justify-content-center"
      data-testid="detailed-animal-information-modal"
    >
      <AnimalDetails
        selectedAnimal={selectedAnimal}
        isModal
        handleCloseModal={handleCloseModal}
      />
    </Modal>
  );
};
