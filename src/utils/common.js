import moment from 'moment';
import 'moment/locale/ru';
import { defaultLocale } from '../constants/common';

moment.updateLocale(defaultLocale);

export const formatDate = (date) => {
  date = date.toString();

  if (!moment(date).isValid()) return 'date is not valid';

  return moment(date, 'DD.MM.YY').format('D MMM YYYY, dd');
};


export const pluralize = (count, {
  zero,
  singular,
  plural,
}) => {
  if (count === 0) {
    return zero || '';
  }

  let output = singular;

  if (count !== 1) {
    output = plural;
  }

  return `${count} ${output}`;
};
