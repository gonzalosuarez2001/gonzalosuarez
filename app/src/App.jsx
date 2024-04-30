import { ThemeContextProvider } from "./contexts/ThemeContext";
import AbouteMe from "./components/organisms/AboutMe";
import Nav from "./components/organisms/Nav";
import HandleTheme from "./components/atoms/HandleTheme";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <AbouteMe />
      <HandleTheme />
    </ThemeContextProvider>
  );
}

export default App;
