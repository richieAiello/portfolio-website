import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/nav-section/Nav";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import ProjectDetails from "./routes/ProjectDetails";
import Designo from "./routes/nested-routes/Designo";
import Photosnap from "./routes/nested-routes/Photosnap";
import Scoot from "./routes/nested-routes/Scoot";
import Dine from "./routes/nested-routes/Dine";
import Creative from "./routes/nested-routes/Creative";
import Contact from "./routes/Contact";
import Footer from "./components/footer-section/Footer";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ScrollToTop>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="details" element={<ProjectDetails />}>
              <Route path="designo" element={<Designo />} />
              <Route path="photosnap" element={<Photosnap />} />
              <Route path="scoot" element={<Scoot />} />
              <Route path="dine" element={<Dine />} />
              <Route path="creative" element={<Creative />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </StrictMode>
  );
}
