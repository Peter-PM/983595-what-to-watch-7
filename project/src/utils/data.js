import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const getTimeAdapter = (minutes) => `${dayjs.duration(minutes, 'm').hours()}h ${dayjs.duration(minutes, 'm').minutes()}m`;

export const getRandomNumber = function (min, max) {

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};
