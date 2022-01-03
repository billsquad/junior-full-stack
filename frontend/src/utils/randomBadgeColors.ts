export const badgeColors = ['yellow', 'gray', 'orange', 'pink', 'blue'];
export const generateRandomBadgeColor = (): string => randomBadgeColor();

function randomBadgeColor() {
  return badgeColors[Math.floor(Math.random() * badgeColors.length)];
}
