export const paginate = (items = [], page = 0, pageSize = 10) => {
  const start = page * pageSize;
  const end = start + pageSize;
  return {
    start,
    end,
    pageItems: items.slice(start, end),
  };
};

export const prevPage = (page) => Math.max(0, page - 1);

export const nextPage = (page, totalItems, pageSize) => {
  const lastPage = Math.max(0, Math.ceil(totalItems / pageSize) - 1);
  return Math.min(lastPage, page + 1);
};
