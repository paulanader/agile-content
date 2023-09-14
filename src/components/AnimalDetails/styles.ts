import styled from "styled-components";

interface ImageCoverProps {
  image?: string;
}

export const ImageCover = styled.div<ImageCoverProps>`
  background-size: cover;
  background-position: center center;
  background-image: ${(props) => `url(${props.image})`};
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
`;

export const BorderCard = styled.div`
  border: 1px solid ${(props) => props.theme["gray-200"]};
`;

export const Url = styled.span`
  font-size: 0.8125rem;
  color: ${(props) => props.theme["gray-400"]};
`;

export const AnimalTitle = styled.h1`
  font-size: 1.3rem;
  margin-top: 0.3rem;
  font-weight: bold;
`;

export const AnimalDescription = styled.span`
  font-size: 0.8125rem;
  color: ${(props) => props.theme["gray-400"]};
`;
