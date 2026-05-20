import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/layout/FloatingActions";
import HomePage from "./pages/HomePage";

// Secondary pages are code-split so the landing page stays lean.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

/** Scrolls to top on route change, or to the hashed section when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return (
    <div className="grid min-h-screen place-items-center">
      <span className="size-8 animate-spin rounded-full border-2 border-teal/30 border-t-teal" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollManager />
        <Navbar />
        <main>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActions />
      </MotionConfig>
    </BrowserRouter>
  );
}
