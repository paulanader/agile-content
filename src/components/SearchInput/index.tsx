import { Button, Form } from "react-bootstrap";
import { CloseIcon, InputContainer, SearchIcon } from "./styles";

interface SearchInputProps {
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCleanSearch?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchValue,
  handleSearchChange,
  handleCleanSearch,
}) => {
  return (
    <InputContainer
      className="d-flex align-items-center ps-3 pe-2"
      data-testid="search-input-container"
    >
      <SearchIcon />
      <Form.Control
        data-testid="search-input"
        className="border-0 shadow-none p-1 px-4"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchValue !== "" && (
        <Button
          variant="link"
          className="d-flex align-items-center justify-content-end px-0"
          onClick={handleCleanSearch}
          data-testid="search-input-close-button"
        >
          <CloseIcon />
        </Button>
      )}
    </InputContainer>
  );
};
