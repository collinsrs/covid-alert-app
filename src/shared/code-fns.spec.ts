import {sanitizeOneTimeCode} from './code-fns';

describe('code-fns', () => {
  describe('sanitizeOneTimeCode', () => {
    it('returns code with no special characters', () => {
      expect(sanitizeOneTimeCode('!@#$%^&*()_=+8BC-1😀23 DEFG$?')).toMatch('8BC-123 DEFG');
    });
  });
});
