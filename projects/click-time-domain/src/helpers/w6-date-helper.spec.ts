// import * as w6DateHelper from 'src/w6.click-schedule.app/w6.click-schedule.core/w6.click-scheduler.helpers/w6-date-helper';
// import * as moment from 'moment';

// describe('w6DateHelper', () => {

//   const mask = 'MM/DD/YYYY';
//   const todayDate = new Date();
//   const testDateString = todayDate.toString();
//   const firstYearDayString = '01/01/2019';
//   const lastYearDayString = '12/31/2018';
//   const firstYearDay = new Date(firstYearDayString);
//   const lastYearDay = new Date(lastYearDayString);
//   const isLastDay = date => new Date(date.getTime() + 86400000).getDate() === 1;

//   it('toUtcDate_withDateString_worksCorrect', () => {
//     const offsetInHours = todayDate.getTimezoneOffset() / 60;
//     const resultDate = w6DateHelper.toUtcDate(testDateString);

//     expect(todayDate.getHours()).toBe(resultDate.getHours() - offsetInHours);
//   });

//   it('toUtcDate_withDate_worksCorrect', () => {
//     const offsetInHours = todayDate.getTimezoneOffset() / 60;
//     const resultDate = w6DateHelper.toUtcDate(todayDate);

//     expect(todayDate.getHours()).toBe(resultDate.getHours() - offsetInHours);
//   });

//   it('toUtcDate_shouldBePrevented', () => {
//     const resultDate = w6DateHelper.toUtcDate(todayDate, true);

//     expect(todayDate.getTime()).toBe(resultDate.getTime());
//   });

//   it('toLocalDate_withDateString_worksCorrect', () => {
//     const offsetInHours = todayDate.getTimezoneOffset() / 60;
//     const resultDate = w6DateHelper.toLocalDate(testDateString);

//     expect(todayDate.getHours()).toBe(resultDate.getHours() + offsetInHours);
//   });

//   it('toLocalDate_withDate_worksCorrect', () => {
//     const offsetInHours = todayDate.getTimezoneOffset() / 60;
//     const resultDate = w6DateHelper.toLocalDate(todayDate);

//     expect(todayDate.getHours()).toBe(resultDate.getHours() + offsetInHours);
//   });

//   it('toLocalDate_shouldBePrevented', () => {
//     const resultDate = w6DateHelper.toLocalDate(todayDate, true);

//     expect(todayDate.getTime()).toBe(resultDate.getTime());
//   });

//   it('addDays_withDateString_shouldAddCorrectly', () => {
//     const resultLastYearDay = w6DateHelper.addDays(lastYearDayString, 1);
//     const resultDate = w6DateHelper.addDays(testDateString, 1);
//     const expectDay = isLastDay(todayDate) ? 1 : todayDate.getDate() + 1;

//     expect(resultLastYearDay.getDate()).toBe(1);
//     expect(resultDate.getDate()).toBe(expectDay);
//   });

//   it('addDays_withDateString_shouldSubtractCorrectly', () => {
//     const resultFirstYearDay = w6DateHelper.addDays(firstYearDayString, -1);
//     const resultDate = w6DateHelper.addDays(testDateString, -1);

//     expect(resultFirstYearDay.getDate()).toBe(31);
//     expect(resultDate.getDate()).toBe(todayDate.getDate() - 1);
//   });

//   it('addDays_withDate_shouldAddCorrectly', () => {
//     const resultLastYearDay = w6DateHelper.addDays(lastYearDay, 1);
//     const resultDate = w6DateHelper.addDays(todayDate, 1);
//     const expectDay = isLastDay(todayDate) ? 1 : todayDate.getDate() + 1;

//     expect(resultLastYearDay.getDate()).toBe(1);
//     expect(resultDate.getDate()).toBe(expectDay);
//   });

//   it('addDays_withDate_shouldSubtractCorrectly', () => {
//     const resultFirstYearDay = w6DateHelper.addDays(firstYearDay, -1);
//     const resultDate = w6DateHelper.addDays(todayDate, -1);

//     expect(resultFirstYearDay.getDate()).toBe(31);
//     expect(resultDate.getDate()).toBe(todayDate.getDate() - 1);
//   });

//   it('addDays_withZero_shouldLeaveDateAsItIs', () => {
//     const resultDate = w6DateHelper.addDays(todayDate, 0);
//     const resultDate2 = w6DateHelper.addDays(testDateString, 0);
//     const getSignature = date => date.getDate() + date.getHours() + date.getMinutes();

//     expect(resultDate.getTime()).toBe(todayDate.getTime());
//     expect(getSignature(resultDate2)).toBe(getSignature(todayDate));
//   });

//   it('format_withDateString_shouldReturnCorrrectFormat', () => {
//     const resultDateString = w6DateHelper.format(firstYearDayString, mask);
//     const formattedDateString = moment(resultDateString, mask, true);

//     expect(formattedDateString.isValid()).toBe(true);
//   });

//   it('format_withDateUndefined_shouldReturnCorrrectFormat', () => {
//     const resultDateString = w6DateHelper.format(undefined, mask);
//     expect(resultDateString).toBe('');
//   });

//   it('format_withDate_shouldReturnCorrrectFormat', () => {
//     const resultDateString = w6DateHelper.format(todayDate, mask);
//     const formattedDateString = moment(resultDateString, mask, true);

//     expect(formattedDateString.isValid()).toBe(true);
//   });

//   it('diffDays_withDateString_workCorrect', () => {
//     const resultDiference = w6DateHelper.diffDays('10/12/2019', '10/10/2019');
//     const resultNegativeDiference = w6DateHelper.diffDays('10/10/2019', '10/12/2019');

//     expect(resultDiference).toBe(2);
//     expect(resultNegativeDiference).toBe(-2);
//   });

//   it('diffDays_withDateString_workCorrect', () => {
//     const resultDiference = w6DateHelper.diffDays(firstYearDayString, lastYearDayString);
//     const resultNegativeDiference = w6DateHelper.diffDays(lastYearDayString, firstYearDayString);

//     expect(resultDiference).toBe(1);
//     expect(resultNegativeDiference).toBe(-1);
//   });

//   it('diffDays_withDates_workCorrect', () => {
//     const resultDiference = w6DateHelper.diffDays(firstYearDay, lastYearDay);
//     const resultNegativeDiference = w6DateHelper.diffDays(lastYearDay, firstYearDay);

//     expect(resultDiference).toBe(1);
//     expect(resultNegativeDiference).toBe(-1);
//   });

//   it('diffDays_notConsiderTime', () => {
//     const daySecond = 10;
//     const dayFirst = 9;
//     const resultDiference = w6DateHelper.diffDays(
//       new Date(2019, 10, daySecond, 23, 0, 0),
//       new Date(2019, 10, dayFirst, 0, 0, 0)
//     );

//     expect(resultDiference).toBe(daySecond - dayFirst);
//   });

//   it('isDateValid_withDateString_workCorrectly', () => {
//     expect(w6DateHelper.isDateValid(testDateString)).toBeTruthy();
//     expect(w6DateHelper.isDateValid('13/13/2019')).toBeFalsy();
//   });

//   it('isDateValid_withDate_workCorrectly', () => {
//     expect(w6DateHelper.isDateValid(todayDate)).toBeTruthy();
//   });

//   it('checkMaskMatching_workCorrectly', () => {
//     const resultMatching = w6DateHelper.checkMaskMatching(firstYearDayString, mask);
//     const resultMatchingNegative = w6DateHelper.checkMaskMatching(testDateString, mask);

//     expect(resultMatching).toBeTruthy();
//     expect(resultMatchingNegative).toBeFalsy();
//   });

//   it('checkRangeMatching_withDateString_worksCorrectly', () => {
//     const resultPositive = w6DateHelper.checkRangeMatching('10/10/2015', '10/10/2010', '10/10/2020');
//     const resultNegative = w6DateHelper.checkRangeMatching('10/10/2015', '10/10/2020', '10/10/2030');
//     const resultEqualRange = w6DateHelper.checkRangeMatching('10/10/2020', '10/10/2020', '10/10/2020');

//     expect(resultPositive).toBeTruthy();
//     expect(resultNegative).toBeFalsy();
//     expect(resultEqualRange).toBeFalsy();
//   });

//   it('checkRangeMatching_withDate_worksCorrectly', () => {
//     const resultPositive = w6DateHelper.checkRangeMatching(new Date(2015, 10, 10), '10/10/2010', '10/10/2020');
//     const resultNegative = w6DateHelper.checkRangeMatching(new Date(2015, 10, 10), '10/10/2020', '10/10/2030');
//     const resultEqualRange = w6DateHelper.checkRangeMatching(new Date(2015, 10, 10), '10/10/2020', '10/10/2020');

//     expect(resultPositive).toBeTruthy();
//     expect(resultNegative).toBeFalsy();
//     expect(resultEqualRange).toBeFalsy();
//   });

//   it('getTimezoneOffsetHours_returnCorrectResult', () => {
//     const offsetTimezone = w6DateHelper.getTimezoneOffsetHours();

//     expect(typeof offsetTimezone).toBe('number');
//     expect(Math.abs(offsetTimezone)).toBeLessThan(15);
//   });

//   it('removeTime_returnsDateWithoutTime', () => {
//     const resultDate = w6DateHelper.removeTime(todayDate);

//     expect(resultDate.getHours()).toEqual(0);
//     expect(resultDate.getMinutes()).toEqual(0);
//     expect(resultDate.getSeconds()).toEqual(0);
//   });

//   it('convertTowardsRelative_workCorrectly', () => {
//     const resultDiference = w6DateHelper.convertTowardsRelative(todayDate, 1);
//     const expectDay = isLastDay(todayDate) ? 1 : todayDate.getDate() + 1;

//     expect(resultDiference.getDate()).toBe(expectDay);
//     expect(resultDiference.getHours()).toBe(todayDate.getHours());
//   });

//   it('calculateDaysFromCurrent_worksCorrectly', () => {
//     const fakeCalendar: any = {
//       isRelative: true,
//       currentDate: testDateString
//     };
//     const resultDiference = w6DateHelper.calculateDaysFromCurrent(fakeCalendar);

//     expect(typeof resultDiference).toBe('number');
//     expect(resultDiference).toBe(0);
//   });

//   it('parseFormattedDate_withProperValues_returnCorrectDate', () => {
//     type TestCase = [string, string, string, Date];
//     const masks: TestCase[] = [
//       ['D/M/YY', '2/5/19', '/', new Date(2019, 4, 2)],
//       ['YY/D/M', '19/2/5', '/', new Date(2019, 4, 2)],
//       ['YY/D/MM', '19/2/05', '/', new Date(2019, 4, 2)],
//       ['M/D/YYYY', '5/2/2019', '/', new Date(2019, 4, 2)],
//       ['DD/M/YYYY', '02/12/2019', '/', new Date(2019, 11, 2)],
//       ['M/DD/YYYY', '12/02/2019', '/', new Date(2019, 11, 2)],
//       ['MM/DD/YYYY', '5/02/2019', '/', new Date(2019, 4, 2)],
//       ['MM/DD/YYYY', '05/02/2019', '/', new Date(2019, 4, 2)],
//       ['MM/DD/YYYY', '12/02/2019', '/', new Date(2019, 11, 2)],
//       ['DD/MM/YYYY', '02/12/2019', '/', new Date(2019, 11, 2)],
//       ['YYYY/DD/MM', '2019/02/12', '/', new Date(2019, 11, 2)],
//     ];

//     masks.map(([mask, dateString, delimiter, expectedDate]) => {
//       const resultDate = w6DateHelper.parseFormattedDate(dateString, mask, delimiter);

//       expect(moment(resultDate).toString()).not.toBe('Invalid date');
//       expect(resultDate.getDate()).toBe(expectedDate.getDate());
//       expect(resultDate.getMonth()).toBe(expectedDate.getMonth());
//       expect(resultDate.getFullYear()).toBe(expectedDate.getFullYear());
//     });
//   });

// });
