import { useLayoutEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { handleTabsKeyDown } from "../../utils/tabsKeyboard";
import { AiScene, AnalysisScene, DeployScene, DevelopmentScene } from "./scenes";
import styles from "./HeroVideo.module.css";

const sceneIds = ["analysis", "development", "ai", "deploy"];
const scenes = {
  analysis: AnalysisScene,
  development: DevelopmentScene,
  ai: AiScene,
  deploy: DeployScene,
};
const secondsPerScene = 4.5;
const stageMinWidth = 500;
const stageHeight = 380;
const tabIdFor = (sceneId) => `hero-video-tab-${sceneId}`;
const panelId = "hero-video-panel";

function useStageScale() {
  const stageRef = useRef(null);
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    setWidth(stage.getBoundingClientRect().width);
    const observer = new ResizeObserver(() => setWidth(stage.getBoundingClientRect().width));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  if (width === null || width >= stageMinWidth) {
    return { stageRef, scale: 1, canvasWidth: "100%" };
  }
  return { stageRef, scale: width / stageMinWidth, canvasWidth: stageMinWidth };
}

export default function HeroVideo() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { amount: 0.3 });
  const { stageRef, scale, canvasWidth } = useStageScale();
  const [activeId, setActiveId] = useState(sceneIds[0]);
  const [cycle, setCycle] = useState(0);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const autoplay = !reduceMotion;
  const paused = keyboardFocused || !inView;
  const activeIndex = sceneIds.indexOf(activeId);
  const Scene = scenes[activeId];

  function select(sceneId) {
    setActiveId(sceneId);
    setCycle((value) => value + 1);
  }

  function advance() {
    setActiveId((current) => sceneIds[(sceneIds.indexOf(current) + 1) % sceneIds.length]);
  }

  function handleFocus(event) {
    if (event.target.matches(":focus-visible")) setKeyboardFocused(true);
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false);
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.video} ${paused ? styles.paused : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        role="tablist"
        aria-label={t("hero.video.label")}
        className={styles.steps}
        onKeyDown={(event) => handleTabsKeyDown(event, { ids: sceneIds, selectedId: activeId, onSelect: select, tabIdFor })}
      >
        {sceneIds.map((sceneId, index) => {
          const selected = index === activeIndex;
          const showFullBar = index < activeIndex || (selected && !autoplay);
          return (
            <button
              key={sceneId}
              id={tabIdFor(sceneId)}
              type="button"
              role="tab"
              className={styles.step}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(sceneId)}
            >
              <span className={styles.stepHeading}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.stepLabel}>{t(`hero.video.steps.${sceneId}`)}</span>
              </span>
              <span className={styles.stepBar} aria-hidden="true">
                {selected && autoplay && (
                  <span
                    key={`${sceneId}-${cycle}`}
                    className={`${styles.stepFill} ${styles.stepFillRunning}`}
                    style={{ animationDuration: `${secondsPerScene}s` }}
                    onAnimationEnd={advance}
                  />
                )}
                {showFullBar && <span className={styles.stepFill} />}
              </span>
            </button>
          );
        })}
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={tabIdFor(activeId)} className={styles.panel}>
        <div ref={stageRef} className={styles.stage} style={{ height: stageHeight * scale }} aria-hidden="true">
          <div
            className={styles.canvas}
            style={{
              width: canvasWidth,
              height: stageHeight,
              transform: scale < 1 ? `scale(${scale})` : undefined,
            }}
          >
            <Scene key={`${activeId}-${cycle}`} />
          </div>
        </div>
        <div className={styles.captions}>
          {sceneIds.map((sceneId) => (
            <p key={sceneId} className={sceneId === activeId ? styles.caption : `${styles.caption} ${styles.captionHidden}`}>
              {t(`hero.video.captions.${sceneId}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
