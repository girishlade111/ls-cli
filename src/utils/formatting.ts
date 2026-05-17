export const formatBox = (text: string, width: number = 60): string => {
  const border = "─".repeat(width - 2);
  const lines = text.split("\n");
  const paddedLines = lines.map((line) => {
    const padding = Math.max(0, width - 4 - line.length);
    return `│ ${line}${" ".repeat(padding)} │`;
  });

  return [`┌${border┐}`, ...paddedLines, `└${border┘}`].join("\n");
};

export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
};
