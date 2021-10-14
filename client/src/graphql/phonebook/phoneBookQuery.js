import { gql } from '@apollo/client';

export const PHONE_BOOK_QUERY = gql`
    query PhoneBookEntrysQuery(
        $query: String!
    ) {
        PhoneBookEntrys(query: $query){
            name
            number
        }
    }
`;