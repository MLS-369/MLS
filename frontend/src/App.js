import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Ourpeople from "./components/Ourpeople";
import About from "./components/About";
import Careers from "./components/Career";
import { ThemeProvider } from "./components/ThemeContext";
import Blogs from "./components/Blogs";
import Publications from "./components/Publications";
import Events from "./components/Events";
import Legacy from "./components/Legacy";
import Team from "./components/Team";
import BlogPost from "./components/BlogPost";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that section
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If element not found, try again after a longer delay
        setTimeout(() => {
          const retryElement = document.getElementById(hash.substring(1));
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
  
  return null;
};
function App() {
  React.useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e) => e.preventDefault();
    
    // 2. Disable Screenshot Key Combinations & DevTools
    const handleKeyDown = (e) => {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
    alert("Screenshots are disabled for privacy.");
  }

  if (e.ctrlKey && (e.key === "p" || e.key === "P")) {
    e.preventDefault();
    alert("Printing is disabled.");
  }

  const isDevToolsCombo =
    e.ctrlKey &&
    e.shiftKey &&
    (e.key === "I" || e.key === "J" || e.key === "C");

  const isF12 = e.key === "F12";

  const isViewSource = e.ctrlKey && (e.key === "u" || e.key === "U");

  const isSavePage = e.ctrlKey && (e.key === "s" || e.key === "S");

  if (isDevToolsCombo || isF12 || isViewSource || isSavePage) {
    e.preventDefault();
  }
};

    // 3. Hide content when window loses focus or tab is changed
    const handlePrivacy = () => {
      if (document.visibilityState === 'hidden' || !document.hasFocus()) {
        document.body.style.filter = "blur(50px)";
        document.body.style.opacity = "0";
      } else {
        document.body.style.filter = "none";
        document.body.style.opacity = "1";
      }
    };

    // 4. Disable Copy & Dragging
    const handleCopy = (e) => {
      e.preventDefault();
      alert("Copying content is disabled for privacy.");
    };
    const handleDrag = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handlePrivacy);
    window.addEventListener("focus", handlePrivacy);
    window.addEventListener("copy", handleCopy);
    window.addEventListener("dragstart", handleDrag);
    document.addEventListener("visibilitychange", handlePrivacy);

    // Initial check
    handlePrivacy();

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handlePrivacy);
      window.removeEventListener("focus", handlePrivacy);
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("dragstart", handleDrag);
      document.removeEventListener("visibilitychange", handlePrivacy);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar /> {/* ✅ Always visible */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <PracticeAreas />
                <Testimonials />
                <Ourpeople />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
