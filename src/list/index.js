import * as R from 'ramda';

export const toggleElementInList = R.curry((list, item) => R.symmetricDifference(
  list,
  [item],
));

export const toggleElementByProp = R.curry((prop, list, item) => R.symmetricDifferenceWith(
  R.eqBy(
    R.prop(prop)
  ), 
  list, 
  [item],
));

const equalsAndAlways = R.useWith(R.unapply(R.identity), [R.equals, R.always]);
export const toggle = R.compose(
  R.cond,
  R.juxt([equalsAndAlways, R.flip(equalsAndAlways), R.always([R.T, R.identity])])
);
