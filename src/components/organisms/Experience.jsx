import { useTranslation } from "react-i18next";
import ExperienceItem from "../atoms/ExperienceItem";
import SectionTitle from "../atoms/SectionTitle";
import "../../styles/experience.css";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="experience_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`experience.title`)} />
        <div className="experience_items_container d-flex">
          <div className="experience_timeline col-2 col-lg-1"></div>
          <div className="col-10 col-lg-11 p-0 pt-3 d-flex">
            <div>
              <ExperienceItem
                title={t(`experience.developer.title`)}
                subtitle={t(`experience.developer.subtitle`)}
                date={t(`experience.developer.date`)}
                text={t(`experience.developer.text`)}
              />
              <ExperienceItem
                title={t(`experience.analyst.title`)}
                subtitle={t(`experience.analyst.subtitle`)}
                date={t(`experience.analyst.date`)}
                text={t(`experience.analyst.text`)}
              />
              <ExperienceItem
                title={t(`experience.support.title`)}
                subtitle={t(`experience.support.subtitle`)}
                date={t(`experience.support.date`)}
                text={t(`experience.support.text`)}
                lastItem={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
