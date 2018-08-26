import {textCommaSeperatedList, getInitials, getFirstCharacterUpperCase, titlelize} from './index.js';
import {toUpper} from 'ramda';

test('Join two names', () => {
  expect(textCommaSeperatedList(['Arne', 'Gunnar'])).toBe('Arne and Gunnar');
});

test('Join two names with swedish last delimiter', () => {
  expect(textCommaSeperatedList(['Arne', 'Gunnar'], 'och')).toBe('Arne och Gunnar');
});

test('Join many names with swedish last delimiter', () => {
  expect(textCommaSeperatedList(['Arne', 'Gunnar', 'Sven'])).toBe('Arne, Gunnar and Sven');
});

test('With only on name', () => {
  expect(textCommaSeperatedList(['Arne'])).toBe('Arne');
});

test('With a transform', () => {
  expect(textCommaSeperatedList(['Arne'], 'and', toUpper)).toBe('ARNE');
});


test('Initials for name with two components', () => {
  expect(getInitials('Peter hagström')).toBe('P H')
});


test('Initials for name with one components', () => {
  expect(getInitials('Peter')).toBe('P')
});

test('Initials for name with three components', () => {
  expect(getInitials('Anders Peter hagström')).toBe('A H')
});


test('Initials for name with three components', () => {
  expect(getInitials('Anders Peter hagström')).toBe('A H')
});


test('Titlelize string', () => {
  expect(titlelize('diverse männen äter smör')).toBe('Diverse Männen Äter Smör')
});

