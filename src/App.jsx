import { ThemeContextProvider } from "./contexts/ThemeContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Experience from "./components/organisms/Experience";
import Projects from "./components/organisms/Projects";
import Certifications from "./components/organisms/Certifications";
import Stack from "./components/organisms/Stack";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <AbouteMe />
      <Experience />
      <Projects />
      <Certifications />
      <Stack />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
