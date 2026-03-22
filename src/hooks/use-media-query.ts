import { useEffect, useState } from "react";

type CSSUnit = "px" | "rem" | "em" | "vw" | "vh";

const useMediaQuery = (query: string): boolean => {
  const [isMounted, setIsMounted] = useState(false);
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return isMounted && matches;
};

export const useWindowMaxWidth = (
  width: number,
  unit: CSSUnit = "rem",
): boolean => {
  return useMediaQuery(`(max-width: ${width}${unit})`);
};

export const useWindowMinWidth = (
  width: number,
  unit: CSSUnit = "rem",
): boolean => {
  return useMediaQuery(`(min-width: ${width}${unit})`);
};

export default useMediaQuery;
