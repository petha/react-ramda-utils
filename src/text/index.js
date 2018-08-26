import * as R from 'ramda';

export const readableList = R.curry((list, lastDelimiter='and', transform = R.identity) => R.compose(
  R.join(` ${lastDelimiter} `),
  R.filter(R.identity),
  R.juxt(
    [
      R.compose(R.join(', '), R.init),
      R.last,
    ]
  ),
  R.map(transform))(list));

export const capitalizeFirstCharacter = R.compose(
  R.toUpper,
  R.head,
);

export const capitalizeString = R.compose(
  R.join(''),
  R.juxt([capitalizeFirstCharacter, R.tail]),
);

export const titlelize = R.compose(
  R.trim,
  R.join(' '),
  R.map(capitalizeString),
  R.split(' '),
  R.replace(/_/g, ' '),
)

export const getInitials = R.curry((list, delimiter=' ') => R.compose(
  R.trim,
  R.join(delimiter),
  R.juxt([
    R.compose(R.head, R.init),
    R.last
  ]),
  R.map(capitalizeFirstCharacter),
  R.split(' '),
)(list));
