import ContentLoader from "react-content-loader";

export const LoaderItem = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="7rem"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="20" rx="2" ry="2" width="150" height="10" />
    <rect x="20" y="40" rx="2" ry="2" width="300" height="20" />
    <rect x="20" y="70" rx="2" ry="2" width="750" height="17" />
  </ContentLoader>
);
