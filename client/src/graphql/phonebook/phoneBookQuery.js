import { gql } from '@apollo/client';

export const PHONE_BOOK_QUERY = gql`
    {
        phoneBook {
            name
            number
        }
    }
`;