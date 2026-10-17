import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { asset } from "../../utils/asset";
import { swapTransition } from "../../utils/motion";
import { handleTabsKeyDown } from "../../utils/tabsKeyboard";
import { CheckIcon } from "../icons";
import styles from "./StagesPanel.module.css";

const stageIds = ["development", "ai", "deploy"];
const pipelineSteps = [
  { id: "push", tool: "GitHub Actions" },
  { id: "build", tool: "Docker" },
  { id: "infrastructure", tool: "IaC" },
  { id: "release", tool: "GCP" },
];
const tabIdFor = (stageId) => `stage-tab-${stageId}`;
const panelId = "stage-panel";

function DevelopmentVisual({ t }) {
  return (
    <div className={`${styles.visual} ${styles.screenshotVisual}`}>
      <img
        className={styles.screenshot}
        src={asset("images/movil1.webp")}
        alt={t("hero.stages.development.imageAlt")}
        width="640"
        height="360"
      />
    </div>
  );
}

function AiVisual({ t }) {
  return (
    <div className={`${styles.visual} ${styles.phoneVisual}`}>
      <div className={styles.phone}>
        <img
          src={asset("images/credencial4.webp")}
          alt={t("hero.stages.ai.imageAlt")}
          width="700"
          height="1419"
        />
      </div>
    </div>
  );
}

function DeployVisual({ t }) {
  return (
    <ol className={`${styles.visual} ${styles.pipeline}`}>
      {pipelineSteps.map((step, index) => (
        <li key={step.id} className={styles.step} style={{ animationDelay: `${0.1 + index * 0.18}s` }}>
          <CheckIcon className={styles.check} />
          <span className={styles.stepLabel}>{t(`hero.stages.deploy.steps.${step.id}`)}</span>
          <span className={styles.stepTool}>{step.tool}</span>
        </li>
      ))}
    </ol>
  );
}

const visuals = {
  development: DevelopmentVisual,
  ai: AiVisual,
  deploy: DeployVisual,
};

export default function StagesPanel() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(stageIds[0]);
  const [cycle, setCycle] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const paused = hovered || keyboardFocused;
  const autoplay = !reduceMotion;

  function select(stageId) {
    setActiveId(stageId);
    setCycle((value) => value + 1);
  }

  function advance() {
    setActiveId((current) => stageIds[(stageIds.indexOf(current) + 1) % stageIds.length]);
  }

  function handleFocus(event) {
    if (event.target.matches(":focus-visible")) setKeyboardFocused(true);
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false);
  }

  const Visual = visuals[activeId];

  return (
    <div
      className={`${styles.panel} ${paused ? styles.paused : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        role="tablist"
        aria-label={t("hero.stages.label")}
        className={styles.tabs}
        onKeyDown={(event) => handleTabsKeyDown(event, { ids: stageIds, selectedId: activeId, onSelect: select, tabIdFor })}
      >
        {stageIds.map((stageId, index) => {
          const selected = stageId === activeId;
          return (
            <button
              key={stageId}
              id={tabIdFor(stageId)}
              type="button"
              role="tab"
              className={styles.tab}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(stageId)}
            >
              <span className={styles.tabNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.tabLabel}>{t(`hero.stages.${stageId}.label`)}</span>
              {selected && autoplay && (
                <span className={styles.bar} aria-hidden="true">
                  <span key={`${stageId}-${cycle}`} className={styles.progress} onAnimationEnd={advance} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={tabIdFor(activeId)} className={styles.content}>
        <motion.div
          key={activeId}
          className={styles.stage}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={swapTransition}
        >
          <p className={styles.description}>{t(`hero.stages.${activeId}.description`)}</p>
          <Visual t={t} />
          <p className={styles.caption}>
            <span>{t(`hero.stages.${activeId}.project`)}</span>
            <span>{t(`hero.stages.${activeId}.stack`)}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
