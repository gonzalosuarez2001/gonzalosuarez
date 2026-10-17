export function tagKey(tag) {
  return typeof tag === "string" ? tag : tag.labelKey;
}

export function tagLabel(t, tag) {
  return typeof tag === "string" ? tag : t(tag.labelKey);
}
