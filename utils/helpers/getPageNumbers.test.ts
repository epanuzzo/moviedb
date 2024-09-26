import getPageNumbers from "./getPageNumbers";

describe("getPageNumbers", () => {
  test("should return all pages when totalPages is less than or equal to maxVisiblePages", () => {
    expect(getPageNumbers(1, 5, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getPageNumbers(3, 3, 5)).toEqual([1, 2, 3]);
  });

  test("should return pages with ellipses when totalPages is greater than maxVisiblePages", () => {
    expect(getPageNumbers(5, 10, 5)).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(getPageNumbers(1, 10, 5)).toEqual([1, 2, 3, 4, "...", 10]);
    expect(getPageNumbers(10, 10, 5)).toEqual([1, "...", 7, 8, 9, 10]);
  });

  test("should handle edge cases correctly", () => {
    expect(getPageNumbers(1, 1, 5)).toEqual([1]);
    expect(getPageNumbers(1, 2, 5)).toEqual([1, 2]);
    expect(getPageNumbers(2, 2, 5)).toEqual([1, 2]);
  });

  test("should handle cases where currentPage is near the start", () => {
    expect(getPageNumbers(2, 10, 5)).toEqual([1, 2, 3, 4, "...", 10]);
    expect(getPageNumbers(3, 10, 5)).toEqual([1, 2, 3, 4, "...", 10]);
  });

  test("should handle cases where currentPage is near the end", () => {
    expect(getPageNumbers(8, 10, 5)).toEqual([1, "...", 7, 8, 9, 10]);
    expect(getPageNumbers(9, 10, 5)).toEqual([1, "...", 7, 8, 9, 10]);
  });

  test("should handle cases where currentPage is in the middle", () => {
    expect(getPageNumbers(5, 10, 5)).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(getPageNumbers(6, 10, 5)).toEqual([1, "...", 5, 6, 7, "...", 10]);
  });
});
