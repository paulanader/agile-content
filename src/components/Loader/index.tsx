import { LoaderItem } from "./Loader";

export const Loader = () => {
  const loaders = Array.from({ length: 10 }, (_, index) => (
    <LoaderItem key={index} />
  ));

  return <div data-testid="loader-container">{loaders}</div>;
};
