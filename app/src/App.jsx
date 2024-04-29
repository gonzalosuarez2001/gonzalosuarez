import { ThemeContextProvider } from "./contexts/ThemeContext";
import AbouteMe from "./components/organisms/AboutMe";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <AbouteMe />
    </ThemeContextProvider>
  );
}

export default App;
