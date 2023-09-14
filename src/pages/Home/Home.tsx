import { useCallback, useEffect, useMemo, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { SearchInput } from "../../components/SearchInput";
import { Col, Container, Row } from "react-bootstrap";
import { LogoGoogleImage, SearchButton } from "./styles";
import googleLogoImage from "../../assets/logo-google.svg";
import { fakeAnimalList } from "../../Faker/faker";
import { GoogleSearchResult } from "../../components/GoogleSearchResult";
import { NotFoundSearchMessage } from "../../components/NotFoundSearchMessage";
import { AnimalType } from "../../@types/AnimalType";
import { AnimalDetails } from "../../components/AnimalDetails";
import { DetailedAnimalInformationModal } from "../../components/DetailedAnimalInformationModal";
import { Loader } from "../../components/Loader";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        setIsLoading(true);

        setSearchValue(event.target.value);

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Erro durante a pesquisa:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  const onRemoveSearch = useCallback(() => {
    setIsSearching(false);
    setSearchValue("");
  }, []);

  const filteredFakeAnimalList = useMemo(() => {
    if (!searchValue) {
      setSelectedAnimal(null);
      return [];
    }

    return (
      fakeAnimalList &&
      fakeAnimalList.filter((animalInfo) => {
        if (animalInfo && animalInfo.title) {
          const matchesSearch =
            animalInfo.title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            (animalInfo.url &&
              animalInfo.url
                .toLowerCase()
                .includes(searchValue.toLowerCase())) ||
            (animalInfo.type &&
              animalInfo.type
                .toLowerCase()
                .includes(searchValue.toLowerCase()));
          setSelectedAnimal(null);
          return matchesSearch;
        }
        setSelectedAnimal(null);
        return false;
      })
    );
  }, [searchValue]);

  const handleSelectAnimal = useCallback(
    (data: AnimalType | null) => {
      setSelectedAnimal(data);

      if (screenSize < 992) {
        setShowModal(true);
      }
    },
    [screenSize]
  );

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleKeyPress = useCallback(async (event: KeyboardEvent) => {
    try {
      setIsLoading(true);

      if (event.key === "Enter") {
        setIsSearching(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error("loading error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);

      setIsLoading(false);
    };
  }, [handleKeyPress]);

  return (
    <Wrapper>
      <Header
        isSearching={isSearching}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        onRemoveSearch={onRemoveSearch}
      />
      {!isSearching && (
        <Container fluid className="h-100 mt-auto">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 gap-4 m-0">
            <LogoGoogleImage src={googleLogoImage} alt="Logo Google" />
            <SearchInput
              searchValue={searchValue}
              handleSearchChange={handleSearchChange}
              handleCleanSearch={onRemoveSearch}
            />
            <div className="d-flex justify-content-center">
              <SearchButton
                onClick={() => setIsSearching(true)}
                disabled={searchValue === ""}
                data-testid="search-button"
              >
                Buscar
              </SearchButton>
            </div>
          </div>
        </Container>
      )}
      {isSearching && (
        <>
          {isLoading && (
            <Container>
              <Loader />
            </Container>
          )}
          {!isLoading && (
            <Container className="p-4" fluid={searchValue === ""}>
              <Row>
                <Col
                  lg={8}
                  className="align-items-start d-flex flex-column gap-3"
                >
                  {Array.isArray(filteredFakeAnimalList) &&
                    filteredFakeAnimalList.length > 0 &&
                    filteredFakeAnimalList.map((animalInfo) => (
                      <GoogleSearchResult
                        key={animalInfo?.id}
                        animalInfo={animalInfo}
                        handleSelectAnimal={handleSelectAnimal}
                      />
                    ))}
                  {Array.isArray(filteredFakeAnimalList) &&
                    filteredFakeAnimalList.length === 0 && (
                      <NotFoundSearchMessage searchValue={searchValue} />
                    )}
                </Col>
                <Col lg={4} className="d-none d-lg-flex flex-column">
                  {selectedAnimal && (
                    <AnimalDetails selectedAnimal={selectedAnimal} />
                  )}
                </Col>
              </Row>
              {screenSize < 992 && (
                <DetailedAnimalInformationModal
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  selectedAnimal={selectedAnimal}
                />
              )}
            </Container>
          )}
        </>
      )}

      <Footer />
    </Wrapper>
  );
};

export default Home;
