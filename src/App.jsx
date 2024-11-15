import { ThemeContextProvider } from "./contexts/ThemeContext";
import Nav from "./components/organisms/Nav";
import AbouteMe from "./components/organisms/AboutMe";
import Experience from "./components/organisms/Experience";
import Projects from "./components/organisms/Projects";
import Certifications from "./components/organisms/Certifications";
import Stack from "./components/organisms/Stack";
import Footer from "./components/organisms/Footer";
import { ScrollContextProvider } from "./contexts/ScrollContext";
import ToTopArrow from "./components/atoms/ToTopArrow";
import { useEffect } from "react";
import axios from "axios";
import "./styles/app.css";

function App() {
  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((response) => {
      const visitorIp = response.data.ip;
      const myIp = "186.22.245.51";

      if (visitorIp !== myIp) {
        const mensaje = {
          content: `Un visitante con la IP ${visitorIp} ha accedido a tu portfolio web.`,
          username: "Alerta de Acceso",
        };

        const webhookUrl =
          "https://discord.com/api/webhooks/1223315522725351434/yHQuT0etT59ZpTMEQtHUVWko9XF-TPRxXmMOznK0GBigTiUkHpzUWjCjPZjToDbYZC3B";

        axios.post(webhookUrl, mensaje);
      }
    });
  }, []);

  return (
    <ThemeContextProvider>
      <ScrollContextProvider>
        <Nav />
        <AbouteMe />
        <Experience />
        <Projects />
        <Certifications />
        <Stack />
        <Footer />
        <ToTopArrow />
      </ScrollContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
