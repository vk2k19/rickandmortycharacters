const getUpdatedSorting = (sortOptions, payload) => {
  return sortOptions.map(option => {
    if( option.id === payload ) {
      return { ...option, selected: true };
    }
    return {
      ...option,
      selected: false
    }
  });
};

export default getUpdatedSorting;
