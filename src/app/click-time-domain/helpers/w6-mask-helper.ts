type MaskGroup = string | string[];
type MaskInclude = [string, number];
type DelimiterInfo = { symbol: string, entries: number };

export const revealDelimiter = (mask: string, defaultDelimiter: string = '/'): string => {
  if (!mask) return defaultDelimiter;
  const characterRegex: RegExp = /[a-zA-Z0-9|_]/g;
  // example "___mm,,,,,,,-dd---- yyyy-___"
  const removedInRawSpecSymbols: string  = mask.split('').reduce(
    (acc, symbol) => (!characterRegex.test(symbol) && acc.slice(-1) !== symbol ? acc + symbol : acc), '');
  // example "___mm,-dd- yyyy-___"
  const removedCharacters: string[] = removedInRawSpecSymbols.replace(characterRegex, '').split('');
  // example ",-- -"
  const sortedSpecSymbols: string[] = removedCharacters.sort((a, b) => (a < b ? -1 : 1));
  // example " ,---"
  const mappedSpecSymbols = sortedSpecSymbols.reduce(
    (acc, symbol) => ({ ...acc, [symbol]: (symbol in acc) ? acc[symbol] + 1 : 1 }), {});
  // example { " ": 1, ",": 1, "-": 3 }
  const delimiterInfo: DelimiterInfo = Object.entries(mappedSpecSymbols).reduce(
    (acc, [symbol, entries]: [string, number]) =>
      (acc.entries < entries ? { symbol, entries } : acc),
    { symbol: defaultDelimiter, entries: 0 });
  // example { symbol: "-", entries: 3 }
  return delimiterInfo.symbol;
};

export const validateDateMask = (mask: string): string => {
  const defaultMask = 'MM/DD/YYYY';
  const forbiddenValues = ['null', 'Null', 'undefined', 'NaN'];
  const maskToCheck = mask && !forbiddenValues.includes(mask) ? mask : defaultMask;
  const maskIncludes: MaskInclude[] = [];
  const delimiter = revealDelimiter(mask);
  const maskGroups: MaskGroup[][] = [
    ['DD', 'D'],
    ['MM', 'M'],
    ['YYYY', ['YYY', 'YY'], 'YY', ['Y', 'YY']]
  ];
  maskGroups.map(maskGroup =>
    maskGroup.some((group) => {
      const isArray = (group instanceof Array);
      const part = isArray ? group[0] : group as string;
      const index = maskToCheck.toLowerCase().indexOf(part.toLowerCase());
      if (index >= 0) {
        maskIncludes.push([isArray ? group[1] : part, index]);
        return true;
      }
    }));
  if (!maskIncludes.length) return defaultMask;
  const sortedMaskParts: MaskInclude[] = maskIncludes.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  return sortedMaskParts.map(([maskPart]) => maskPart).join(delimiter);
};

export const validateDateMaskLong = (mask: string): string => {
  const defaultMask = 'LLLL';
  const forbiddenValues = ['null', 'Null', 'undefined', 'NaN'];
  const maskToCheck = mask && !forbiddenValues.includes(mask) ? mask : defaultMask;
  const maskIncludes: MaskInclude[] = [];
  const delimiter = revealDelimiter(mask, ' ');
  const maskGroups: MaskGroup[][] = [
    ['LLLL', 'llll', 'LLL', 'lll', 'LL', 'll'],
    ['Do', 'dddd', ['DDDD', 'dddd'], ['DDD', 'ddd'], 'ddd', 'dd', 'd', 'DD', 'D'],
    ['Mo', 'MMMM', ['mmmm', 'MMMM'], ['mmm', 'MMM'], 'MMM', 'MM', ['mm', 'MM'], 'M', ['m', 'M']],
    ['YYYY', ['yyyy', 'YYYY'], ['yyy', 'YY'], ['YYY', 'YY'], ['yy', 'YY'], 'YY', ['Y', 'YY'], ['y', 'YY']]
  ];
  for (let i = 0; i < maskGroups.length; i += 1) {
    if (i === 1 && maskIncludes.length > 0) break;
    maskGroups[i].some((group) => {
      const isArray = (group instanceof Array);
      const part = isArray ? group[0] : group as string;
      const index = maskToCheck.indexOf(part);
      if (index >= 0) {
        maskIncludes.push([isArray ? group[1] : part, index]);
        return true;
      }
    });
  }
  if (!maskIncludes.length) return defaultMask;
  const sortedMaskParts: MaskInclude[] = maskIncludes.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  return sortedMaskParts.map(([maskPart]) => maskPart).join(delimiter);
};

export const validateTimeMask = (mask: string): string => {
  const defaultMask = 'hh:mm';
  const defaultDelimiter = ':';
  const forbiddenValues = ['null', 'Null', 'undefined', 'NaN'];
  const maskToCheck = mask && !forbiddenValues.includes(mask) ? mask : defaultMask;
  const maskIncludes: MaskInclude[] = [];
  const maskGroups: MaskGroup[][] = [
    ['HH', 'H', 'hh', 'h'],
    [['MM', 'mm'], ['M', 'm'], 'mm', 'm'],
    [['SSS', 'ss'], ['SS', 'ss'], ['S', 's'], 'ss', 's'],
  ];
  const ampm = maskToCheck.includes('a') ? ' a' : maskToCheck.includes('A') ? ' A' : '';
  maskGroups.map(maskGroup =>
    maskGroup.some((group) => {
      const isArray = (group instanceof Array);
      const part = isArray ? group[0] : group as string;
      const index = maskToCheck.indexOf(part);
      if (index >= 0) {
        maskIncludes.push([isArray ? group[1] : part, index]);
        return true;
      }
    }));
  if (!maskIncludes.length) return defaultMask;
  return maskIncludes.map(([maskPart]) => maskPart).join(defaultDelimiter).concat(ampm);
};

export const correctInputMask = (enteredDate: Date, mask: string, delimiter: string): string =>
  mask.split(delimiter).reduce(
    (newMaskArray, maskPart) => {
      let newMaskPart = maskPart;
      if (enteredDate && maskPart.toLowerCase() === 'm') newMaskPart = String(enteredDate.getMonth() + 1);
      if (enteredDate && maskPart.toLowerCase() === 'd') newMaskPart = String(enteredDate.getDate());
      return [...newMaskArray, '0'.repeat(newMaskPart.length)];
    },
    []).join(delimiter);

export function correctInputMaskFrom(enteredDate: Date, mask: string, delimiter: string): string {
  return correctInputMask(enteredDate, mask, delimiter);
}

export function correctInputMaskTo(enteredDate: Date, mask: string, delimiter: string): string {
  return correctInputMask(enteredDate, mask, delimiter);
}

export default {
  validateDateMask,
  validateTimeMask,
  validateDateMaskLong,
  revealDelimiter,
  correctInputMask,
  correctInputMaskTo,
  correctInputMaskFrom,
};
