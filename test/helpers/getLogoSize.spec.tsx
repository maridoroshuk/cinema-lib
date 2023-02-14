import { getLogoSize } from '@/helpers/getLogoSize';
import { theme } from '@/theme/theme';

describe('getLogoSize function', () => {
  it('should return the correct logo size for small', () => {
    const expected = theme.sizes.width[125];
    const actual = getLogoSize('small');
    expect(actual).toEqual(expected);
  });

  it('should return the correct logo size for medium', () => {
    const expected = theme.sizes.width[175];
    const actual = getLogoSize('medium');
    expect(actual).toEqual(expected);
  });

  it('should return the correct logo size for large', () => {
    const expected = theme.sizes.width[255];
    const actual = getLogoSize('large');
    expect(actual).toEqual(expected);
  });
});
