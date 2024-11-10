const filterByName = (results, name) => {
  let query = name.trim().toLowerCase();
  if (!query) {
    return results;
  }
  return results.filter((result) =>
    result.name.trim().toLowerCase().includes(query)
  );
};

export default filterByName;
