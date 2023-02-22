const seperateKeyValue = (seperateData, keys) => {
  const data = keys.reduce((result, key) => {
    const x = seperateData.map((item) => item[key]);
    return {
      ...result,
      [key]: x,
    };
  }, {});
  return data;
};

console.log(
  seperateKeyValue(
    [
      { key: 1, value: "야" },
      { key: 2, value: "호" },
    ],
    ["key", "value"]
  )
);
