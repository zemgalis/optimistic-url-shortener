import { mapLongUrl } from './mapLongUrl';

describe('utils', () => {
  describe('mapLongUrl', () => {
    it('returns key mapped for long url', () => {
      expect(mapLongUrl('https://www.example.com')).toBeTruthy();
    })
  });
})