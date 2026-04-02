import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    // If the user navigates back/forward (POP), let the browser handle scroll restoration
    if (action === "POP") return;

    if (!hash) {
      // Small timeout to ensure the scroll happens after the new page component mounts
      // and overrides any browser-stored scroll position from previous visits
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    } else {
      // If there's a hash, wait for the page to mount then scroll to the element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash, action]);

  return null;
};

export default ScrollToTop;
