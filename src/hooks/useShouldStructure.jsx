import { useLocation } from "react-router-dom";

export const useShouldStructure = () => {
  const location = useLocation();
  if (["/login", "/signup"].indexOf(location.pathname) == -1) return true;
  return false;
};
