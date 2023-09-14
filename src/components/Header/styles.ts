import { Button } from "react-bootstrap";
import styled from "styled-components";

export const LogoSection = styled.div`
  h1 {
    font-weight: bold;
    font-size: 1rem;

    @media (min-width: 425px) {
      font-size: 1.2rem;
    }
  }
  h2 {
    font-size: 0.8rem;

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }
`;

export const HeaderContainer = styled.header`
  border-bottom: solid 1px ${(props) => props.theme["gray-200"]};
`;

export const LogoGoogleImage = styled(Button)`
  width: 100px;

  @media (min-width: 768px) {
    width: 150px;
  }
`;
