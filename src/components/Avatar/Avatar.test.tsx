import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { Avatar } from "./index.tsx";

describe("Avatar", () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it("should show the Avatar componente", () => {
    const { getByTestId } = render(
      <Avatar width="3rem" height="3rem" image="" />
    );

    const avatarAontainer = getByTestId("avatar-container");

    expect(avatarAontainer).toBeInTheDocument();
  });
});
