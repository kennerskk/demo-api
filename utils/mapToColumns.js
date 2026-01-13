export const mapToColumns = (data, schema) => {
  const result = {};
  for (const key in schema) {
    if (data[key] !== undefined) {
      result[schema[key]] = data[key];
    }
  }
  return result;
};
