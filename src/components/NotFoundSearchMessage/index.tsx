import { AnimalOptions } from "../../@types/AnimalType";
import { NotFoundSearchMessageContainer } from "./styles";

interface NotFoundSearchMessageProps {
  searchValue?: string;
}
export const NotFoundSearchMessage: React.FC<NotFoundSearchMessageProps> = ({
  searchValue,
}) => {
  const animalTypeList = Object.values(AnimalOptions).join(", ");

  return (
    <NotFoundSearchMessageContainer className="d-flex flex-column gap-2">
      {searchValue !== "" && (
        <span data-testid="has-search-value-message">
          No results found for: <strong>{searchValue}</strong>
        </span>
      )}
      <span>
        Try looking for: <strong>{animalTypeList}</strong>
      </span>
    </NotFoundSearchMessageContainer>
  );
};
