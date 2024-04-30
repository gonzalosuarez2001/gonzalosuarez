import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import AboutMeImage from "../../assets/me.png";
import "../../styles/aboutMe.css";
import "../../styles/theme.css";

export default function AboutMe() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="about_container container-fluid d-flex justify-content-center p-0">
      <div className="col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-9 row justify-content-center">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-sm-center order-2 order-lg-1 p-0">
          <div className="d-flex flex-column align-items-center">
            <div className="col-12 col-sm-10">
              <p className={`text_${theme} about_text`}>Hi!</p>
              <p className={`text_${theme} about_text`}>
                I'm <span className={`about_span`}>Gonzalo</span>
              </p>
              <p className={`text_${theme} about_text`}>Web Developer</p>
            </div>
            <div className="col-12 col-sm-10 mt-5 d-flex justify-content-around justify-content-lg-start">
              <button className={`button_${theme} me-lg-4 col-5`}>
                Contactar
              </button>
              <button className={`button_secondary_${theme}  col-5`}>
                Descargar
              </button>
            </div>
          </div>
        </div>
        <div className="p-0 p-sm-3 col-12 col-lg-6 d-flex justify-content-center align-items-center mt-0 mt-sm-4 mt-lg-0 order-1 order-lg-1">
          <img className="about_img col-10 col-sm-8 col-lg-10" src={AboutMeImage} />
        </div>
      </div>
    </div>
  );
}
