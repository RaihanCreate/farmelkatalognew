import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Catalog />
      <Gallery />
      <Footer />
    </div>
  );
}
