import { useTranslation } from "react-i18next";
import { cvByLanguage } from "../data/links";
import { asset } from "../utils/asset";

export function useCvLink() {
  const { i18n } = useTranslation();
  const path = cvByLanguage[i18n.resolvedLanguage] ?? cvByLanguage.en;
  return {
    href: asset(path),
    download: path.split("/").at(-1),
  };
}
