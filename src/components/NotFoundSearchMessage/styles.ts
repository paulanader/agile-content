import styled from "styled-components";

export const NotFoundSearchMessageContainer = styled.div`
  span {
    color: ${(props) => props.theme["gray-400"]};
  }

  strong {
    color: ${(props) => props.theme.black};
  }
`;
