import {toggleElementInList, toggle, toggleElementByProp} from './index.js';

test('Toggle element on in list', () => {
  expect(toggleElementInList(['Arne'], 'Gunnar')).toContain('Arne');
  expect(toggleElementInList(['Arne'], 'Gunnar')).toContain('Gunnar');
});


test('Toggle element off in list', () => {
  expect(toggleElementInList(['Arne', 'Gunnar'], 'Gunnar')).toContain('Arne');
  expect(toggleElementInList(['Arne', 'Gunnar'], 'Gunnar').length).toEqual(1);
});

test('Toggle element off in list by prop', () => {
  const toggleById = toggleElementByProp('id');
  const result = toggleById(
    [
      {id: 1, name: "P1"},
    ],
    {id: 1}
  )

  expect(result.length).toEqual(0);

});

test('Toggle element on in list by prop', () => {
  const toggleById = toggleElementByProp('id');
  const element = {id: 1, name: 'p1'};
  const inList = {id: 2, name: 'p2'};
  const previousList = [inList];
  const result = toggleById(
    previousList,
    element
  )
  expect(result).toContain(element);
  expect(result).toContain(inList);
  expect(previousList).not.toBe(result);
  expect(result.length).toEqual(2);
});


test('Toggle element', () => {
  expect(toggle('on', 'off')('off')).toEqual('on');
});

