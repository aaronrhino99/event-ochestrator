const { isWithinDnd } = require('../src/helpers');

test('blocks inside simple window', () => {
  const ts = '2025-08-30T14:30:00Z';
  expect(isWithinDnd(ts, '14:00', '15:00')).toBe(true);
});

test('crossing midnight works', () => {
  const ts = '2025-08-30T23:30:00Z';
  expect(isWithinDnd(ts, '22:00', '07:00')).toBe(true);
});
