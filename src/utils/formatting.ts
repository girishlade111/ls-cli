export const formatBold = (text: string): string => `\x1b[1m${text}\x1b[0m`;
export const formatDim = (text: string): string => `\x1b[2m${text}\x1b[0m`;
export const formatItalic = (text: string): string => `\x1b[3m${text}\x1b[0m`;
export const formatUnderline = (text: string): string => `\x1b[4m${text}\x1b[0m`;

export const padCenter = (text: string, width: number): string => {
  const padding = Math.max(0, Math.floor((width - text.length) / 2));
  return ' '.repeat(padding) + text + ' '.repeat(padding);
};