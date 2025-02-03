import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
      </div>
    </main>
  );
}

export default App;
