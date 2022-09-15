import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
