export const progressOptions = [...Array(101).keys()].map((item) => ({
  value: item,
  label: `${item} %`,
}));
