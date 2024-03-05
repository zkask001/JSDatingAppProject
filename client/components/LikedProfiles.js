import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries'; // Define the query

const LikedProfiles = ({ user }) => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const likedUsers = data.getUsers.filter(user => user.profile.liked);

  // const [liked, setLiked] = useState(user.profile.liked);

  // const [toggleLike] = useMutation(TOGGLE_LIKE, {
  //   variables: { userId: user.id },
  //   refetchQueries: [{ query: GET_USERS }],
  //   onError: (error) => {
  //     console.error('Mutation error:', error.message);
  //   },
  // });

  // const handleLikeClick = async () => {
  //   try {
  //     console.log('Toggling like...');
  //     await toggleLike();
  //     console.log('Like toggled successfully');
  //     setLiked(!liked);
  //   } catch (error) {
  //     console.error('Error toggling like:', error.message);
  //   }
  // };

  return (
    <div>
      <h1>Liked Profiles</h1>
      {likedUsers.map(user => (
        <div key={user.id}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '300px' }}>
              <h2>{user.username}</h2>
              <p>Email: {user.email}</p>
              <h3>Profile</h3>
              <p>Name: {user.profile.name}</p>
              <p>Age: {user.profile.age}</p>
              <p>Bio: {user.profile.bio}</p>
              {/* <button
                style={{ backgroundColor: user.profile.liked ? 'green' : 'white' }}
                onClick={handleLikeClick}
              >
                {user.profile.liked ? 'Unlike' : 'Like'}
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedProfiles;