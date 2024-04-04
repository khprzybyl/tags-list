export const formatCount = (count: number): string => {
  return count.toLocaleString();
};

export const capitalizeTagName = (name: string): string => {
  if (!name) return name;
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
