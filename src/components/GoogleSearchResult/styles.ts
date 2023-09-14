import { Button } from "react-bootstrap";
import styled from "styled-components";

export const GoogleSearchResultContainer = styled.div`
  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme["gray-500"]};
    overflow-wrap: break-word;
  }
`;

export const ButtonTitle = styled(Button)`
  background-color: transparent;
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme["blue-500"]};
  padding: 0;
  text-decoration: none;
  outline: 0;
  box-shadow: none;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
    border: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props) => props.theme["blue-500"]};
    outline: 0;
    box-shadow: none;
  }
`;
