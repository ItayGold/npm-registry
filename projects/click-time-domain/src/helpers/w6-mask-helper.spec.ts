import w6MaskHelper from 'src/w6.click-schedule.app/w6.click-schedule.core/w6.click-scheduler.helpers/w6-mask-helper';

describe('W6MaskHelper', () => {

  type TestCase = [string, Date, string];

  const reporter = (expected: any, actual: any) =>
    console.log(`%c should be: ${expected} -> result: ${actual}`, `color: ${ expected === actual ? 'green' : 'red' }`);

  it('revealDelimiter_withStringMask_revealDelimiterCorrectly', () => {
    const delimiterDifference = [
      ['slash', 'm/d/yy', '/'],
      ['hyphen', 'm-d-yy', '-'],
      ['space', 'm d yy', ' '],
      ['dot', 'm.d.yy', '.'],
      ['comma', 'm,d,yy', ','],
      ['asterisk', 'm*d*yy', '*'],
      ['only one symbol', 'Mm/dDyYYY', '/'],
      ['most priority symbol', 'Mm,. *-/dDyYYY', ' '],
      ['redundant symbol', 'mm/dd/ yy', '/'],
      ['default delimiter', 'MMDDYYYY', '/'],
      ['double delimiter', 'mm /dd /yy', ' '],
      ['double delimiter sort', 'mm/ dd/ yy', ' '],
      ['double symbol', 'Mm//dD//yYYY', '/'],
      ['underscore as character', 'mm___/dd/yy', '/'],
      ['repeated in raw symbol as one', 'mm***/dd/yyy', '/'],
      ['symbol from words', 'day_of_date/month_of_date/year_of_date', '/'],
    ];
    delimiterDifference.map(([caseName, testDelimiteredMask, expectedDelimiter]) => {
      const delimiter = w6MaskHelper.revealDelimiter(testDelimiteredMask);
      expect(delimiter).toEqual(expectedDelimiter);
    });
  });

  it('correctInputMask_shouldReturnCorrectInputMask', () => {
    const testMasksDifference: TestCase[] = [
      ['D/M/YY', new Date(2019, 4, 2), '0/0/00'],
      ['D/M/YY', new Date(2019, 11, 2), '0/00/00'],
      ['D/M/YY', new Date(2019, 11, 12), '00/00/00'],
      ['YY/D/M', new Date(2019, 4, 2), '00/0/0'],
      ['YY/D/MM', new Date(2019, 4, 2), '00/0/00'],
      ['YY/D/MM', new Date(2019, 14, 2), '00/0/00'],
      ['M/D/YYYY', new Date(2019, 4, 2), '0/0/0000'],
      ['M/D/YYYY', new Date(2019, 11, 12), '00/00/0000'],
      ['DD/M/YYYY', new Date(2019, 11, 2), '00/00/0000'],
      ['MM/DD/YYYY', new Date(2019, 4, 2), '00/00/0000'],
      ['MM/DD/YYYY', new Date(2019, 11, 2), '00/00/0000'],
      ['DD/MM/YYYY', new Date(2019, 11, 2), '00/00/0000'],
      ['YYYY/DD/MM', new Date(2019, 11, 2), '0000/00/00'],
    ];
    testMasksDifference.map(([mask, date, inputMask]) => {
      const newInputMask = w6MaskHelper.correctInputMask(date, mask, '/');
      expect(newInputMask).toEqual(inputMask);
    });
  });

  it('correctInputMaskFrom_withDate_returnCorrectInputMaskFrom', () => {
    const inputMaskFrom = w6MaskHelper.correctInputMaskFrom(new Date(), 'MM/DD/YYYY', '/');
    expect(inputMaskFrom).toEqual('00/00/0000');
  });

  it('correctInputMaskTo_withDate_returnCorrectInputMaskTo', () => {
    const inputMaskFrom = w6MaskHelper.correctInputMaskTo(new Date(), 'MM/DD/YYYY', '/');
    expect(inputMaskFrom).toEqual('00/00/0000');
  });

  it('validateDateMask_workCorrectly', () => {
    const masks = [
      ['M/D/YY', 'M/D/YY'],
      ['M/DD/YY', 'M/DD/YY'],
      ['MM/DD/YY', 'MM/DD/YY'],
      ['MM/DD/YYY', 'MM/DD/YY'],
      ['MM/DD/YYYY', 'MM/DD/YYYY'],
      ['m/d/yy', 'M/D/YY'],
      ['mm/dd/yyy', 'MM/DD/YY'],
      ['mm/dd/yyyy', 'MM/DD/YYYY'],
      ['amm/d/yy', 'MM/D/YY'],
      ['mm/addd/yyyys', 'MM/DD/YYYY'],
      ['yytest/ddtest/mtest', 'YY/DD/M'],
      ['year/day/month', 'YY/D/M'],
      ['ddd/mmmm/y', 'DD/MM/YY'],
      ['null', 'MM/DD/YYYY'],
      ['undefined', 'MM/DD/YYYY'],
      [undefined, 'MM/DD/YYYY'],
    ];
    masks.map(([actualMask, expectedMask]) => {
      const maskresult = w6MaskHelper.validateDateMask(actualMask);
      expect(maskresult).toBe(expectedMask);
    });
  });

  it('validateDateMaskLong_workCorrectly', () => {
    const masks = [
      ['LLLL', 'LLLL'],
      ['LLLLd', 'LLLL'],
      ['llll', 'llll'],
      ['testlllltest', 'llll'],
      ['LLL', 'LLL'],
      ['lll', 'lll'],
      ['LLLdd', 'LLL'],
      ['LLLmm', 'LLL'],
      ['LLLyy', 'LLL'],
      ['LL', 'LL'],
      ['ll', 'll'],
      ['dddd/MMMM/YYYY', 'dddd/MMMM/YYYY'],
      ['ddd MMM YYY', 'ddd MMM YY'],
      ['dd MM YY', 'dd MM YY'],
      ['d Mo Y', 'd Mo YY'],
      ['DD M yyyy', 'DD M YYYY'],
      ['D mmmm yyy', 'D MMMM YY'],
      ['Do mmm yy', 'Do MMM YY'],
      ['DDDD mm y', 'dddd MM YY'],
      ['DDD m', 'ddd M'],
      ['ddmm', 'dd MM'],
      ['m', 'M'],
      ['Mexcess', 'M'],
      ['null', 'LLLL'],
      ['undefined', 'LLLL'],
      [undefined, 'LLLL'],
    ];
    masks.map(([actualMask, expectedMask]) => {
      const maskresult = w6MaskHelper.validateDateMaskLong(actualMask);
      expect(maskresult).toBe(expectedMask);
    });
  });

  it('validateTimeMask_workCorrectly', () => {
    const masks = [
      ['null', 'hh:mm'],
      ['undefined', 'hh:mm'],
      ['NaN', 'hh:mm'],
      ['HH:MM:SSS', 'HH:mm:ss'],
      ['H:M:SS', 'H:m:ss'],
      ['hh:mm:S', 'hh:mm:s'],
      ['h:m:ss', 'h:m:ss'],
      ['s', 's'],
      ['h m s', 'h:m:s'],
      ['hour minute seconds', 'h:m:s'],
      ['hr/mns/scds', 'h:m:s'],
      ['testhh testmm testss', 'hh:mm:ss'],
      ['s m h', 'h:m:s'],
      ['H:M:SSa', 'H:m:ss a'],
      ['H:M:SS a', 'H:m:ss a'],
      ['H:M:SS A', 'H:m:ss A'],
      ['aH:M:SS', 'H:m:ss a'],
      ['A H:M:SS', 'H:m:ss A'],
      [undefined, 'hh:mm'],
      [null, 'hh:mm'],
      [NaN, 'hh:mm'],
    ];
    masks.map(([actualMask, expectedMask]) => {
      const maskresult = w6MaskHelper.validateTimeMask(actualMask as any);
      expect(maskresult).toBe(expectedMask as any);
    });
  });

});
