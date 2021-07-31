import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {AuthorizationStatus} from '../const';

dayjs.extend(duration);

export const getTimeAdapter = (minutes) => `${dayjs.duration(minutes, 'm').hours()}h ${dayjs.duration(minutes, 'm').minutes()}m`;

export const formatDateComments = (date) => dayjs(date).format('MMMM DD, YYYY');

export const getRandomNumber = function (min, max) {

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
};

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
