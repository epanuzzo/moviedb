import { renderHook, act } from "@testing-library/react";
import useIsMobile from "./useIsMobile";

const tabletBreakpoint = 768;

describe("useIsMobile", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  afterEach(() => {
    // Clean up any event listeners added during the tests
    window.removeEventListener("resize", () => {});
  });

  it("should return false if window width is greater than tabletBreakpoint", () => {
    window.innerWidth = tabletBreakpoint + 1;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should return true if window width is less than or equal to tabletBreakpoint", () => {
    window.innerWidth = tabletBreakpoint;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("should update isMobile state on window resize", () => {
    const { result } = renderHook(() => useIsMobile());

    // Initially, window.innerWidth is 1024, which is greater than tabletBreakpoint
    expect(result.current).toBe(false);

    // Change window.innerWidth to a value less than or equal to tabletBreakpoint
    act(() => {
      window.innerWidth = tabletBreakpoint - 1;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(true);
  });
});
