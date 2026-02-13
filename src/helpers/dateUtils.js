export const onlyDate = (isoDate) => {
  if (!isoDate) return "—";

  const d = new Date(isoDate);
  if (isNaN(d)) return "—";

  return d.toISOString().slice(0, 10);
};
