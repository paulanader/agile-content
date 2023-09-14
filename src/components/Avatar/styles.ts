import styled from "styled-components";

interface CoverProps {
  width: string;
  height: string;
  image: string;
}

export const Cover = styled.div<CoverProps>`
  background-size: cover;
  background-position: center center;

  border-radius: 500px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: ${(props) => `url(${props?.image})`};
`;
