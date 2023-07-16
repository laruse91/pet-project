import { classNames } from './classNames';

describe('classNames', () => {
  test('with one param', () => {
    expect(classNames('class')).toBe('class');
  });

  test('with additional classes', () => {
    const expected = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods and additional', () => {
    const expected = 'class class1 class2 hover scroll';
    expect(classNames('class', { hover: true, scroll: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with undefined in mods', () => {
    const expected = 'class hover';
    expect(classNames('class', { hover: true, scroll: undefined })).toBe(expected);
  });
});
