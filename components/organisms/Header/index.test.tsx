import React from "react";
import renderer from "react-test-renderer";
import Header from "./index";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useIsMobile from "@/utils/hooks/useIsMobile";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/utils/hooks/useIsMobile", () => jest.fn());

describe("Header", () => {
  let mockDispatch: jest.Mock;
  let mockRouter: unknown;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    mockRouter = {
      pathname: "/current-page",
      push: jest.fn(),
      query: { id: "1" },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it("renders component", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders component with alt props", () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
