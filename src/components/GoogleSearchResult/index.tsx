import { AnimalType } from "../../@types/AnimalType";
import { ButtonTitle, GoogleSearchResultContainer } from "./styles";

interface GoogleSearchResultProps {
  animalInfo: AnimalType | null;
  handleSelectAnimal: (animalInfo: AnimalType | null) => void;
}

export const GoogleSearchResult: React.FC<GoogleSearchResultProps> = ({
  animalInfo,
  handleSelectAnimal,
}) => {
  return (
    <GoogleSearchResultContainer
      className="d-flex flex-column"
      data-testid="google-search-result-container"
    >
      <span>{animalInfo?.url}</span>
      <ButtonTitle
        onClick={() => handleSelectAnimal(animalInfo)}
        className="d-flex"
        variant="link"
        data-testid="select-animal-detail-button"
      >
        {animalInfo?.title}
      </ButtonTitle>
      <span>{animalInfo?.description.split(" ").slice(0, 30).join(" ")}</span>
    </GoogleSearchResultContainer>
  );
};
