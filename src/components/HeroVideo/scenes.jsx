import { useTranslation } from "react-i18next";
import { CheckIcon } from "../icons";
import styles from "./HeroVideo.module.css";

const delay = (seconds) => ({ animationDelay: `${seconds.toFixed(2)}s` });
const classes = (...names) => names.filter(Boolean).map((name) => styles[name]).join(" ");

const briefLineWidths = [92, 76, 84];
const chartBars = [34, 52, 44, 63, 57, 78, 70, 88];
const sparkBars = [40, 60, 48, 72, 55, 80, 62, 90, 70, 58, 76, 66];
const orderStatuses = ["inProgress", "pending", "delivered"];
const layerTiming = [
  { appear: 0.3, check: 0.95 },
  { appear: 0.45, check: 1.9 },
  { appear: 0.6, check: 2.6 },
];

function SmallCheck({ size = 11, strokeWidth = 3.2 }) {
  return <CheckIcon size={size} strokeWidth={strokeWidth} />;
}

export function AnalysisScene() {
  const { t } = useTranslation();
  const requirements = t("hero.video.analysis.requirements", { returnObjects: true });
  const flow = t("hero.video.analysis.flow", { returnObjects: true });

  return (
    <div className={classes("scene", "analysisScene")}>
      <div className={classes("card", "in", "briefCard")}>
        <div className={styles.briefHeader}>
          <span className={styles.briefTitle}>{t("hero.video.analysis.title")}</span>
          <span className={classes("mono", "fileName")}>brief.md</span>
        </div>
        {briefLineWidths.map((width, index) => (
          <div
            key={width}
            className={classes("skeleton", "grow")}
            style={{ width: `${width}%`, ...delay(0.25 + index * 0.15) }}
          />
        ))}
        <ul className={styles.checklist}>
          {requirements.map((item, index) => (
            <li key={item} className={styles.in} style={delay(0.8 + index * 0.35)}>
              <span className={classes("checkbox", "pop")} style={delay(1 + index * 0.35)}>
                <SmallCheck />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.flow}>
        {flow.map((step, index) => (
          <div key={step} className={styles.flowStep}>
            {index > 0 && <div className={classes("flowLine", "vgrow")} style={delay(0.9 + (index - 1) * 0.6)} />}
            <div
              className={classes("flowBox", "in", index === flow.length - 1 && "flowBoxResult")}
              style={delay(0.5 + index * 0.6)}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DevelopmentScene() {
  const { t } = useTranslation();
  const menu = t("hero.video.development.menu", { returnObjects: true });
  const kpis = t("hero.video.development.kpis", { returnObjects: true });
  const orders = t("hero.video.development.orders", { returnObjects: true });
  const layers = t("hero.video.development.layers", { returnObjects: true });

  return (
    <div className={classes("scene", "developmentScene")}>
      <div className={classes("card", "in", "dashboard")}>
        <div className={styles.dashboardHeader}>
          <span>{t("hero.video.development.title")}</span>
          <span className={styles.avatar} />
        </div>
        <div className={styles.dashboardBody}>
          <div className={styles.sidebar}>
            {menu.map((item, index) => (
              <span
                key={item}
                className={classes("menuItem", "in", index === 0 && "menuItemActive")}
                style={delay(0.35 + index * 0.08)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className={styles.dashboardContent}>
            <div className={styles.kpis}>
              {kpis.map((kpi, index) => (
                <div key={kpi.label} className={classes("kpi", "in")} style={delay(0.65 + index * 0.1)}>
                  <span className={styles.kpiLabel}>{kpi.label}</span>
                  <span className={styles.kpiValue}>{kpi.value}</span>
                </div>
              ))}
            </div>
            <div className={classes("chart", "in")} style={delay(1.15)}>
              {chartBars.map((height, index) => (
                <span
                  key={index}
                  className={classes("chartBar", "vbar", index === chartBars.length - 1 && "chartBarHighlight")}
                  style={{ height: `${height}%`, ...delay(1.3 + index * 0.07) }}
                />
              ))}
            </div>
            <div className={styles.orders}>
              {orders.map((order, index) => (
                <div key={order} className={classes("orderRow", "in")} style={delay(2.1 + index * 0.15)}>
                  <span>{order}</span>
                  <span className={classes("status", orderStatuses[index])}>
                    {t(`hero.video.development.statuses.${orderStatuses[index]}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layers}>
        {layers.map((layer, index) => (
          <div key={layer.title} className={classes("card", "in", "layer")} style={delay(layerTiming[index].appear)}>
            <span className={classes("node", "nodeOn", "layerNode")} style={delay(layerTiming[index].check)}>
              <SmallCheck />
            </span>
            <span className={styles.layerText}>
              <span className={styles.layerTitle}>{layer.title}</span>
              <span className={styles.layerTools}>{layer.tools}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AiScene() {
  const { t } = useTranslation();

  return (
    <div className={classes("scene", "aiScene")}>
      <div className={classes("card", "in", "chat")}>
        <div className={styles.chatHeader}>
          <span className={styles.accentDot} />
          {t("hero.video.ai.title")}
        </div>
        <div className={classes("question", "in")} style={delay(0.3)}>
          {t("hero.video.ai.question")}
        </div>
        <div className={classes("toolCall", "mono", "in")} style={delay(0.9)}>
          <span>tool</span>
          <span className={styles.toolName}>{t("hero.video.ai.toolCall")}</span>
          <span className={classes("toolCheck", "pop")} style={delay(1.7)}>
            <SmallCheck size={9} strokeWidth={3.4} />
          </span>
        </div>
        <div className={classes("typing", "in", "blink")} style={delay(1.3)}>
          <span className={styles.typingDot} />
          <span className={styles.typingDot} style={delay(0.15)} />
          <span className={styles.typingDot} style={delay(0.3)} />
        </div>
        <div className={classes("answer", "in")} style={delay(2.1)}>
          {t("hero.video.ai.answer")}
        </div>
        <div className={classes("sources", "in")} style={delay(2.5)}>
          <span className={classes("source", "mono")}>{t("hero.video.ai.source")}</span>
          <span className={classes("source", "mono")}>RAG</span>
        </div>
      </div>
    </div>
  );
}

export function DeployScene() {
  const { t } = useTranslation();
  const pipeline = t("hero.video.deploy.pipeline", { returnObjects: true });

  return (
    <div className={classes("scene", "deployScene")}>
      <div className={styles.pipeline}>
        <div className={styles.pipelineTrack} />
        <div className={classes("pipelineProgress", "grow")} style={delay(0.3)} />
        <div className={styles.pipelineSteps}>
          {pipeline.map((step, index) => (
            <div key={step} className={styles.pipelineStep}>
              <span className={classes("node", "nodeOn")} style={delay(0.3 + index * 0.7)}>
                <SmallCheck size={13} strokeWidth={3} />
              </span>
              <span className={styles.pipelineLabel}>{step}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes("card", "in", "production")} style={delay(2.5)}>
        <div className={styles.productionText}>
          <span className={styles.productionStatus}>
            <span className={styles.liveDot} />
            {t("hero.video.deploy.status")}
          </span>
          <span className={styles.productionDetail}>{t("hero.video.deploy.detail")}</span>
        </div>
        <div className={classes("spark")}>
          {sparkBars.map((height, index) => (
            <span key={index} style={{ height: `${height}%`, ...delay(index * 0.12) }} />
          ))}
        </div>
      </div>
    </div>
  );
}
