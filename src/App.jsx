import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ProjectContextProvider } from "./contexts/ProjectsContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Experience from "./components/organisms/Experience";
import WebProjects from "./components/organisms/WebProjects";
import MobileProjects from "./components/organisms/MobileProjects";
import Certifications from "./components/organisms/Certifications";
import Stack from "./components/organisms/Stack";
import Footer from "./components/organisms/Footer";
import { ScrollContextProvider } from "./contexts/ScrollContext";
import ToTopArrow from "./components/atoms/ToTopArrow";
import { useEffect } from "react";
import axios from "axios";
import "./styles/app.css";

function App() {
  /*  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((response) => {
      const visitorIp = response.data.ip;
      const myIp = "186.22.245.51";

      if (visitorIp !== myIp) {
        const mensaje = {
          content: `Un visitante con la IP ${visitorIp} ha accedido a tu portfolio web.`,
          username: "Alerta de Acceso",
        };

        axios.post(import.meta.env.VITE_DS_WEBHOOK, mensaje); 
      }
    });
  }, []) */ return (
    <ThemeContextProvider>
      <ScrollContextProvider>
        <ProjectContextProvider>
          <Nav />
          <AbouteMe />
          <Experience />
          <WebProjects />
          <MobileProjects />
          <Certifications />
          <Stack />
          <Footer />
          <ToTopArrow />
        </ProjectContextProvider>
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
