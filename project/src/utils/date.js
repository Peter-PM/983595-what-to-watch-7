import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const getTimeAdapter = (minutes) => `${dayjs.duration(minutes, 'm').hours()}h ${dayjs.duration(minutes, 'm').minutes()}m`;

