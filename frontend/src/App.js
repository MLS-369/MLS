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
import Newsletters from "./components/Newsletters";
import Publications from "./components/Publications";
import Events from "./components/Events";
import Legacy from "./components/Legacy";

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
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
