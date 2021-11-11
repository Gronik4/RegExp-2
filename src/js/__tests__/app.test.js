import hendlerFone from '../app';

const incoming = ['8 (927) 000-00-00', '+7 (927) 000-00-00', '+86 000 000 0000', '86 000 000 0000'];
const expected = ['+79270000000', '+79270000000', '+860000000000', '860000000000'];

test('Test Fone-1', () => {
  const result = hendlerFone(incoming[0]);
  expect(result).toBe(expected[0]);
});

test('Test Fone-2', () => {
  const result = hendlerFone(incoming[1]);
  expect(result).toBe(expected[1]);
});

test('Test Fone-3', () => {
  const result = hendlerFone(incoming[2]);
  expect(result).toBe(expected[2]);
});

test('Test Fone-4', () => {
  const result = hendlerFone(incoming[3]);
  expect(result).toBe(expected[3]);
});
