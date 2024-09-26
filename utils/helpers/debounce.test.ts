import { debounce } from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  let func: jest.Mock;

  beforeEach(() => {
    func = jest.fn();
  });

  it("should call the function after the specified delay", () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    expect(func).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(func).toBeCalled();
  });

  it("should cancel the previous call if called again before the delay", () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should pass the arguments to the debounced function", () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc("arg1", "arg2");
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("should handle multiple rapid calls correctly", () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
