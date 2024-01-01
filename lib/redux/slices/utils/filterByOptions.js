const filterByOptions = (results, filters) => {
  let updatedResult = [ ...results ];
  let query = filters.reduce((accum, category) => ({
      ...accum,
      [category.id]: category.items.filter(item => item.selected).reduce((accum, item) => {
        return {
          inclusion: [...accum.inclusion, ...item.includes],
          exclusion: [...accum.exclusion, ...item.excludes]
        }
      }, {inclusion: [], exclusion: []}),
  }), {});

  for (let key in query ) {
    updatedResult = updatedResult.filter(result => {
      const { exclusion: exclusionItems, inclusion: inclusionItems } = query[key];
      const hasInclusionItem = inclusionItems && inclusionItems.length > 0;
      const hasExclusionItem = exclusionItems && exclusionItems.length > 0;

      let toAdd = !hasInclusionItem && !hasExclusionItem;
      // include the selected filters
      if(toAdd === false && hasInclusionItem){
        toAdd = inclusionItems.includes(result[key].toLowerCase())
      }
      // if it was removed based on inclusion list verify exclusion list
      if(toAdd === false && hasExclusionItem){
        toAdd = !exclusionItems.includes(result[key].toLowerCase());
      }

      return toAdd;
    })
  }
  return updatedResult;
}

export default filterByOptions;
