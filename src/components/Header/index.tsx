import { Container } from "react-bootstrap";
import { HeaderContainer, LogoGoogleImage, LogoSection } from "./styles";
import { TbGridDots } from "react-icons/tb";
import { Avatar } from "../Avatar";
import googleLogoImage from "../../assets/logo-google.svg";
import { SearchInput } from "../SearchInput";

interface HeaderProps {
  isSearching: boolean;
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isSearching,
  searchValue,
  handleSearchChange,
  onRemoveSearch,
}) => {
  return (
    <HeaderContainer data-testid="header-container">
      <Container
        fluid
        className="d-flex align-items-center justify-content-between py-3 "
      >
        {!isSearching && (
          <LogoSection className="d-flex align-items-center gap-1">
            <h1>Agile Content</h1>
            <h2>Frontend test</h2>
          </LogoSection>
        )}
        {isSearching && (
          <div className="d-md-flex align-items-center gap-2">
            <LogoGoogleImage
              onClick={onRemoveSearch}
              variant="link"
              className="text-decoration-none"
              data-testid="header-logo"
            >
              <img src={googleLogoImage} alt="Logo Google" />
            </LogoGoogleImage>
            <SearchInput
              searchValue={searchValue}
              handleSearchChange={handleSearchChange}
              handleCleanSearch={onRemoveSearch}
            />
          </div>
        )}
        <div
          className={`d-sm-flex align-items-center gap-2 ${
            isSearching ? "d-none" : "d-flex"
          }`}
        >
          <TbGridDots size={25} color="#5f6368" />
          <Avatar
            width="2.5rem"
            height="2.5rem"
            image="https://github.com/paulanader.png"
          />
        </div>
      </Container>
    </HeaderContainer>
  );
};
