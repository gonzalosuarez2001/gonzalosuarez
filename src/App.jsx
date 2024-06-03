import { ThemeContextProvider } from "./contexts/ThemeContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Experience from "./components/organisms/Experience";
import Projects from "./components/organisms/Projects";
import Certifications from "./components/organisms/Certifications";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <AbouteMe />
      <Experience />
      <Projects />
      <Certifications />
      <div style={{ height: "500px" }}></div>
    </ThemeContextProvider>
  );
}

export default App;
