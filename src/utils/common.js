import moment from 'moment';
import 'moment/locale/ru';
import { defaultLocale, currency as currencyName, currencyToSymbolMap } from '../constants/common';

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

export const numberToPrice = (number, currency) => {
  number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (currency === currencyName.RUB) {
    return `${number}${currencyToSymbolMap[currency]}`
  }

  return `${currencyToSymbolMap[currency]}${number}`
};
