export const paginate = (items = [], page = 0, pageSize = 10) => {
  const start = page * pageSize;
  const end = start + pageSize;
  return {
    start,
    end,
    pageItems: items.slice(start, end),
  };
};