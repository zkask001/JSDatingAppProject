import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    getUsers {
      id
      username
      email
      profile {
        name
        age
        bio
        profileImage
      }
    }
  }
`;