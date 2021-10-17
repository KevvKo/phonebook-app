import {  renderHook } from '@testing-library/react-hooks';
import { usePhoneBook } from './usePhoneBook';

describe('usePhoneBook', () => {

    it('should return an array of contacts', async () => {

      const { result } = renderHook(
        () => usePhoneBook());

      // Test the initial state of the request
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeUndefined();
      expect(result.current.data).toBeUndefined();
      expect(result.current.getPhoneBookEntrys).toBeTruthy();

    });
});