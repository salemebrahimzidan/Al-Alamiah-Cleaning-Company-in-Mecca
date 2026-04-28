import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import FloatingActions from "./FloatingActions";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import GoogleAnalytics from "./GoogleAnalytics";

export default function Layout() {
  const location = useLocation();

  /** Scroll to top on route change for predictable multi-page navigation. */
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <Outlet />
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
