import * as moment_ from 'moment';
const moment = moment_;

export function toUtcDate(date: string | Date, prevent: boolean = false): Date {
  const SECOND_MULTIPLIER = prevent ? 0 : 60000;
  const timezoneOffset: number = new Date().getTimezoneOffset() * SECOND_MULTIPLIER;
  return new Date(new Date(date).getTime() + timezoneOffset);
}

export function toLocalDate(date: string | Date, prevent: boolean = false): Date {
  const SECOND_MULTIPLIER = prevent ? 0 : 60000;
  const timezoneOffset: number = new Date().getTimezoneOffset() * SECOND_MULTIPLIER;
  return new Date(new Date(date).getTime() - timezoneOffset);
}

export function addDays(date: string | Date, days: number): Date {
  if (!days) return new Date(date);
  const result: Date = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function format(date: string | Date, mask: string): string {
  return date ? moment(new Date(date)).format(mask) : '';
}

export function diffDays(date1: string | Date, date2: string | Date): number {
  return moment(new Date(date1)).startOf('day').diff(moment(new Date(date2)).startOf('day'), 'days');
}

export function diffHours(date1: string | Date, date2: string | Date): number {
  return moment(new Date(date1)).startOf('hour').diff(moment(new Date(date2)).startOf('hour'), 'hours');
}

export function diffMinutes(date1: string | Date | any, date2: string | Date | any): number {
  return moment(new Date(date1)).startOf('minute').diff(moment(new Date(date2)).startOf('minute'), 'minutes');
}

export function isDateValid(date: string | Date): boolean {
  return moment(new Date(date)).isValid();
}

export function checkMaskMatching(date: string, mask: string): boolean {
  return date && date.length === mask.length || false;
}

export function checkRangeMatching(date: string | Date, minDate: string, maxDate: string): boolean {
  return moment(new Date(date)).isBetween(minDate, maxDate);
}

export function convertTowardsRelative(date: Date, difference: number) {
  return moment(date).add(difference, 'days').toDate();
}

export function calculateDaysFromCurrent(calendar: any): number {
  return calendar.isRelative ?
    moment().startOf('day').diff(moment(calendar.currentDate).startOf('day'), 'days') : 0;
}

export function getTimezoneOffsetHours() {
  return new Date().getTimezoneOffset() / 60;
}

export function removeTime(date: Date): Date {
  return moment(date).startOf('day').toDate();
}

export function isAllowedDate(date) {
  return !moment(date).isBefore('1899-12-30T00:00:00') && date !== '1899-12-30T00:00:00';
}

export function parseFormattedDate(dateString: string, mask: string, delimiter: string): Date {
  const arrayMask: string[] = mask.split(delimiter);
  const arrayDate: string[] = dateString.split(delimiter);

  const dIndex: number = arrayMask.findIndex(m => m.includes('D'));
  const mIndex: number = arrayMask.findIndex(m => m.includes('M'));
  const yIndex: number = arrayMask.findIndex(m => m.includes('Y'));

  const dayValue: number = +arrayDate[dIndex];
  const monthValue: number = +arrayDate[mIndex] - 1;
  const yearValue: number = +arrayDate[yIndex];

  return moment([
    yearValue + (yearValue < 1000 ? (yearValue <= 50 ? 2000 : 1900) : 0),
    monthValue,
    dayValue,
  ]).toDate();
}

export function getYesterdayDate(): Date {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
}

export default {
  format,
  addDays,
  diffDays,
  toUtcDate,
  removeTime,
  toLocalDate,
  isDateValid,
  isAllowedDate,
  checkMaskMatching,
  checkRangeMatching,
  parseFormattedDate,
  getTimezoneOffsetHours,
  diffHours,
  getYesterdayDate,
};
