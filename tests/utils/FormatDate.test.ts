import { longDate, shortDate } from '@utils/Date';

describe('Sum function test', () => {
  it('should sum numebers corectly', () => {
    expect(longDate('2021-08-11T19:30:00.000Z')).toBe(
      'Wednesday, August 11, 2021'
    );
  });
  it('should sum numebers corectly', () => {
    expect(shortDate('2021-08-11T19:30:00.000Z')).toBe('August 11, 2021');
  });
});
