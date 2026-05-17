export const formatBox = (text: string, width: number = 60): string => {
  const border = "\u2500".repeat(width - 2);
  const lines = text.split("\n");
  const paddedLines = lines.map((line) => {
    const padding = Math.max(0, width - 4 - line.length);
    return `\u2502 ${line}${" ".repeat(padding)} \u2502`;
  });

  return [`\u250c${border}\u2510`, ...paddedLines, `\u2514${border}\u2518`].join("\n");
};

export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
};
