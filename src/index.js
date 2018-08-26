import * as R from 'ramda';

export const commaSepText = R.join(', ');

export const textCommaSeperatedList = (list, lastDelimiter='and', transform = R.identity) => R.compose(
  R.join(` ${lastDelimiter} `),
  R.filter(R.identity),
  R.juxt(
    [
      R.compose(R.join(', '), R.init),
      R.last,
    ]
  ),
  R.map(transform))(list);

export const capitalizeFirstCharacter = R.compose(
  R.toUpper,
  R.head,
);

export const titlelize = R.compose(
  R.join(' '),
  R.map(
    R.compose(
      R.join(''),
      R.juxt([capitalizeFirstCharacter, R.tail]),
    ),
  ),
  R.split(' ')
)

export const getInitials = (list, delimiter=' ') => R.compose(
  R.trim,
  R.join(delimiter),
  R.juxt([
    R.compose(R.head, R.init),
    R.last
  ]),
  R.map(capitalizeFirstCharacter),
  R.split(' '),
)(list);
