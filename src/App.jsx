import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Family from "./components/Family";
import Story from "./components/Story";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Family />
      <Story />
    </main>
  );
};

export default App;
