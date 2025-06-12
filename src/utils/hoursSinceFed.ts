export const hoursSinceFed = (lastFed: string): number => {
  const last = new Date(lastFed).getTime();
  const now = new Date().getTime();
  //return (now - last) / (1000 * 60 * 60);
  return (now - last) / 1000;
};
