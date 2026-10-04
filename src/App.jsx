import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import Profiles from "./pages/Profiles";
import Overseas from "./pages/Overseas";
import Contact from "./pages/Contact";
import "./App.css";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <motion.div {...pageTransition}>
              <HowItWorks />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div {...pageTransition}>
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/profiles"
          element={
            <motion.div {...pageTransition}>
              <Profiles />
            </motion.div>
          }
        />
        <Route
          path="/overseas"
          element={
            <motion.div {...pageTransition}>
              <Overseas />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;