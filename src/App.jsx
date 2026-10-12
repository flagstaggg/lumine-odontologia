import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Implants from "./components/Implants";
import Pricing from "./components/Pricing";
import Prevention from "./components/Prevention";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Implants />
        <Pricing />
        <Prevention />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}