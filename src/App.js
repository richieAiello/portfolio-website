import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/nav-section/Nav";
import Footer from "./components/footer-section/Footer";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ScrollToTop>
          <Nav />
          <section className="hero">
            <h1 className="hero__heading">Rendering</h1>
          </section>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </StrictMode>
  );
}
