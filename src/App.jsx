import { ThemeContextProvider } from "./contexts/ThemeContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Experience from "./components/organisms/Experience";
import Projects from "./components/organisms/Projects";
import Certifications from "./components/organisms/Certifications";
import Stack from "./components/organisms/Stack";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <AbouteMe />
      <Experience />
      <Projects />
      <Certifications />
      <Stack />
      <div style={{ height: "500px" }}></div>
    </ThemeContextProvider>
  );
}

export default App;
