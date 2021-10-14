// Hooks
import { useLazyQuery } from '@apollo/client';
// GQL
import { PHONE_BOOK_QUERY } from '../graphql/phonebook/phoneBookQuery';

export const usePhoneBook = () => {
    const [ getPhoneBookEntrys, {error, loading, data }] = useLazyQuery( PHONE_BOOK_QUERY, {
        onError: (error) => {
          console.log(error);
        }
      });

    return {
        getPhoneBookEntrys,
        data,
        error,
        loading
    };
};