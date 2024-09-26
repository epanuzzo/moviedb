import { useEffect, useState } from "react";
import { tabletBreakpoint } from "@/utils/config";

/**
 * Custom hook that determines if the current window width is considered mobile.
 *
 * This hook sets up an event listener for window resize events and updates the
 * `isMobile` state based on whether the window width is less than or equal to
 * a specified breakpoint.
 *
 * @returns {boolean} - `true` if the window width is less than or equal to the
 * mobile breakpoint, otherwise `false`.
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= tabletBreakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
