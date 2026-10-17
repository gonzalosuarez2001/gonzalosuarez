const keyOffsets = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

function nextIndexFor(key, index, total) {
  if (key in keyOffsets) return (index + keyOffsets[key] + total) % total;
  if (key === "Home") return 0;
  if (key === "End") return total - 1;
  return null;
}

export function handleTabsKeyDown(event, { ids, selectedId, onSelect, tabIdFor }) {
  const nextIndex = nextIndexFor(event.key, ids.indexOf(selectedId), ids.length);
  if (nextIndex === null) return;
  event.preventDefault();
  const nextId = ids[nextIndex];
  onSelect(nextId);
  document.getElementById(tabIdFor(nextId))?.focus();
}
