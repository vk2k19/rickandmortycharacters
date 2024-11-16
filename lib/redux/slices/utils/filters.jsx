const getUpdatedFilters = (filters, payload) => {
  return filters.map((filter) => {
    if (filter.id !== payload.category) {
      return { ...filter };
    }
    return {
      ...filter,
      items: filter.items.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return {
          ...item,
        };
      }),
    };
  });
};

export default getUpdatedFilters;
