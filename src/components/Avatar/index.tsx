import { Cover } from "./styles";

interface AvatarProps {
  width: string;
  height: string;
  image: string;
}

export const Avatar: React.FC<AvatarProps> = ({ width, height, image }) => {
  return (
    <Cover
      width={width}
      height={height}
      image={image}
      data-testid="avatar-container"
    />
  );
};
