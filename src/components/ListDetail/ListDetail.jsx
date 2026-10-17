import { motion, useReducedMotion } from "framer-motion";
import { handleTabsKeyDown } from "../../utils/tabsKeyboard";
import { swapTransition } from "../../utils/motion";
import AutoHeight from "../AutoHeight/AutoHeight";
import styles from "./ListDetail.module.css";

export default function ListDetail({
  id,
  label,
  heading,
  items,
  selectedId,
  onSelect,
  getTabContent,
  renderPanel,
  size = "default",
  listWidth = 300,
  panelClassName = "",
}) {
  const reduceMotion = useReducedMotion();
  const tabIdFor = (itemId) => `${id}-tab-${itemId}`;
  const panelId = `${id}-panel`;
  const selected = items.find((item) => item.id === selectedId) ?? items[0];
  const ids = items.map((item) => item.id);

  if (!selected) return null;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles[size]}`} style={{ "--list-width": `${listWidth}px` }}>
        <div className={styles.list}>
          {heading && <p className={styles.heading}>{heading}</p>}
          <AutoHeight>
            <div
              role="tablist"
              aria-label={label}
              aria-orientation="vertical"
              className={styles.tabs}
              onKeyDown={(event) => handleTabsKeyDown(event, { ids, selectedId: selected.id, onSelect, tabIdFor })}
            >
              {items.map((item) => {
                const isSelected = item.id === selected.id;
                const { title, subtitle, badge, aside } = getTabContent(item);
                return (
                  <button
                    key={item.id}
                    id={tabIdFor(item.id)}
                    type="button"
                    role="tab"
                    className={styles.tab}
                    aria-selected={isSelected}
                    aria-controls={panelId}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => onSelect(item.id)}
                  >
                    <span className={styles.tabTop}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span className={styles.tabTitle}>{title}</span>
                      {badge && <span className={styles.badge}>{badge}</span>}
                      {aside && <span className={styles.aside}>{aside}</span>}
                    </span>
                    {subtitle && <span className={styles.tabSubtitle}>{subtitle}</span>}
                  </button>
                );
              })}
            </div>
          </AutoHeight>
        </div>
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabIdFor(selected.id)}
          tabIndex={0}
          className={`${styles.panel} ${panelClassName}`}
        >
          <AutoHeight>
            <motion.div
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={swapTransition}
            >
              {renderPanel(selected)}
            </motion.div>
          </AutoHeight>
        </div>
      </div>
    </div>
  );
}
