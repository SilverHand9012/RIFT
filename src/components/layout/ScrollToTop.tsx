import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    // If the user navigates back/forward (POP), let the browser handle scroll restoration
    if (action === "POP") return;

    if (!hash) {
      // Direct jump to top for new pages without hashes
      window.scrollTo(0, 0);
    }
    // If there is a hash, we DO NOT scroll to top here.
    // SmoothScroll.tsx (Lenis) will handle the specific section scroll.
  }, [pathname, hash, action]);

  return null;
};

export default ScrollToTop;
