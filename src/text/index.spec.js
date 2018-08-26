import {readableList, getInitials, capitalizeFirstCharacter, titlelize, capitalizeString} from './index.js';
import {toUpper} from 'ramda';

test('Join two names', () => {
  expect(readableList(['Arne', 'Gunnar'])).toBe('Arne and Gunnar');
});

test('Join two names with swedish last delimiter', () => {
  expect(readableList(['Arne', 'Gunnar'], 'och')).toBe('Arne och Gunnar');
});

test('Join many names with swedish last delimiter', () => {
  expect(readableList(['Arne', 'Gunnar', 'Sven'])).toBe('Arne, Gunnar and Sven');
});

test('With only on name', () => {
  expect(readableList(['Arne'])).toBe('Arne');
});

test('With a transform', () => {
  expect(readableList(['Arne'], 'and', toUpper)).toBe('ARNE');
});

test('Initials for name with two components', () => {
  expect(getInitials('Peter hagström')).toBe('P H');
});


test('Initials for name with one components', () => {
  expect(getInitials('Peter')).toBe('P');
});

test('Initials for name with three components', () => {
  expect(getInitials('Anders Peter hagström')).toBe('A H');
});

test('Titlelize string', () => {
  expect(titlelize('diverse männen äter smör')).toBe('Diverse Männen Äter Smör');
});

test('Titlelize string with underscore', () => {
  expect(titlelize('diverse_männen_äter_smör')).toBe('Diverse Männen Äter Smör');
});


test('Capitalize first character', () => {
  expect(capitalizeFirstCharacter('hejsan')).toBe('H');
});

test('Capitalize string', () => {
  expect(capitalizeString('hejsan')).toBe('Hejsan');
});
