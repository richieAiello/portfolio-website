import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/nav-section/Nav";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Details from "./routes/Details";
import Designo from "./routes/nested-routes/Designo";
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
            <Route path="details" element={<Details />}>
              <Route path="designo" element={<Designo />}/>
              <Route path="photosnap" element={null}/>
              <Route path="scoot" element={null}/>
              <Route path="dine" element={null}/>
              <Route path="creative" element={null}/>
            </Route>
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </StrictMode>
  );
}
