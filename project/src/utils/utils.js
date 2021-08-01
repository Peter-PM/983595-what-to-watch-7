import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {AuthorizationStatus} from '../const';

dayjs.extend(duration);

export const getTimeAdapter = (minutes) => `${dayjs.duration(minutes, 'm').hours()}h ${dayjs.duration(minutes, 'm').minutes()}m`;

export const  secondsToHms = (second) => {
  second = Number(second);
  const hours = Math.floor(second / 3600);
  const minutes = Math.floor(second % 3600 / 60);
  const seconds = Math.floor(second % 3600 % 60);

  return hours > 0 ? [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':') : [
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':');
};

export const formatDateComments = (date) => dayjs(date).format('MMMM DD, YYYY');

export const formatFilmRating = (rating) => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  }
  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }
  if (rating >= 5 && rating < 8) {
    return 'Good';
  }
  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
