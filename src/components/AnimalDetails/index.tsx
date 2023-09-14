import { CloseButton } from "react-bootstrap";
import { AnimalType } from "../../@types/AnimalType";
import {
  AnimalDescription,
  AnimalTitle,
  BorderCard,
  ImageCover,
  Url,
} from "./styles";

interface AnimalDetailProps {
  selectedAnimal?: AnimalType | null;
  isModal?: boolean;
  handleCloseModal?: () => void;
}
export const AnimalDetails: React.FC<AnimalDetailProps> = ({
  selectedAnimal,
  isModal,
  handleCloseModal,
}) => {
  return (
    <BorderCard className="p-3" data-testid="animal-details-container">
      {isModal && (
        <div className="d-flex justify-content-end mb-1">
          <CloseButton variant="link" onClick={handleCloseModal} />
        </div>
      )}
      <ImageCover image={selectedAnimal?.image} />
      <Url>{selectedAnimal?.url}</Url>
      <AnimalTitle>{selectedAnimal?.title}</AnimalTitle>
      <AnimalDescription>{selectedAnimal?.description}</AnimalDescription>
    </BorderCard>
  );
};
