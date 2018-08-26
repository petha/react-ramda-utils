import * as R from 'ramda';

export const toggleElementInList = (list, item) => R.symmetricDifference(list, [item]);
const equalsAndAlways = R.useWith(R.unapply(R.identity), [R.equals, R.always]);
export const toggle = R.compose(
  R.cond,
  R.juxt([equalsAndAlways, R.flip(equalsAndAlways), R.always([R.T, R.identity])])
);
