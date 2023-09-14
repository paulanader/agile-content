import { Button } from "react-bootstrap";
import styled from "styled-components";

export const LogoGoogleImage = styled.img`
  width: 150px;
  align-self: center;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const SearchButton = styled(Button)`
  background-color: ${(props) => props.theme["gray-200"]};
  border: ${(props) => props.theme["gray-200"]};
  color: ${(props) => props.theme["gray-500"]};

  &:hover {
    background-color: ${(props) => props.theme["gray-200"]};
    border: ${(props) => props.theme["gray-200"]};
    color: ${(props) => props.theme["gray-500"]};
  }

  &:disabled {
    background-color: ${(props) => props.theme["gray-200"]};
    border: ${(props) => props.theme["gray-200"]};
  }
`;
