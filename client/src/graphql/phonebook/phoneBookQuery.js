import { gql } from '@apollo/client';

export const PHONE_BOOK_QUERY = gql`
    {
        query phoneBookEntryss($query: String!) {
            phoneBookEntry(query: query){
                name
                number
            }
        }
    }
`;