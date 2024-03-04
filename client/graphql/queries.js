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
        liked
      }
    }
  }
`;
export const TOGGLE_LIKE = gql`
  mutation ToggleLike($userId: ID!) {
    toggleLike(userId: $userId)
  }
`;