import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries'; // Define the query

const LikedProfiles = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const likedUsers = data.getUsers.filter(user => user.profile.liked);

  return (
    <div>
      <h1>Liked Profiles</h1>
      {likedUsers.map(user => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          {/* Display other profile information */}
        </div>
      ))}
    </div>
  );
};

export default LikedProfiles;