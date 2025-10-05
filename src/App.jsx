import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Family from "./components/Family";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Family />
    </main>
  );
};

export default App;
