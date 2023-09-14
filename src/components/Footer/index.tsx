import { Container } from "react-bootstrap";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer
      className="mt-auto py-4 px-2"
      data-testid="footer-container"
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between"
      >
        <span>© Google 2021</span>
        <span>version: 0.1.0</span>
      </Container>
    </FooterContainer>
  );
};
