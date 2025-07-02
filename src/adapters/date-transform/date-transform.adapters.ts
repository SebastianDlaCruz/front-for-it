export const dateTransform = (date: Date) => {
  return date.toISOString().slice(0, 10);
}