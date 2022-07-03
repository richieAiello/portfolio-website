import Hero from "../components/hero-section/Hero";
import About from "../components/about-section/About";

export default function Home(props) {
  return (
    <main className="main main--home">
      <Hero />
      <About />
    </main>
  );
}