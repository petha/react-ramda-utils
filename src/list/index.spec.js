import {toggleElementInList, toggle} from './index.js';

test('Toggle element on in list', () => {
  expect(toggleElementInList(['Arne'], 'Gunnar')).toContain('Arne');
  expect(toggleElementInList(['Arne'], 'Gunnar')).toContain('Gunnar');
});


test('Toggle element off in list', () => {
  expect(toggleElementInList(['Arne', 'Gunnar'], 'Gunnar')).toContain('Arne');
  expect(toggleElementInList(['Arne', 'Gunnar'], 'Gunnar').length).toEqual(1);
});

test('Toggle element', () => {
  expect(toggle('on', 'off')('off')).toEqual('on');
});

