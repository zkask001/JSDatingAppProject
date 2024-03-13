import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TOGGLE_LIKE } from '../graphql/queries';
import { GET_USERS } from '../graphql/queries';
import { useRouter } from 'next/router';
import LikedProfileObserver from '../../server/src/observers/LikedProfileObserver';

const UserProfile = ({ user }) => {
  const router = useRouter();

  const [liked, setLiked] = useState(user.profile.liked);

  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { userId: user.id },
    refetchQueries: [{ query: GET_USERS }],
    onError: (error) => {
      console.error('Mutation error:', error.message);
    },
  });

  // LikedProfileObserver instance
  const likedProfileObserver = new LikedProfileObserver();

  const handleLikeClick = async () => {
    try {
      console.log('Toggling like...');
      await toggleLike();
      console.log('Like toggled successfully');

      // local state updated
      setLiked(!liked);

      // observer notified after a successful like toggle
      likedProfileObserver.update(user);
      
    } catch (error) {
      console.error('Error toggling like:', error.message);
    }
  };

  if (!user) {
    return <p>No user found</p>;
  }

  const { username, email, profile } = user;

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '300px' }}>
        <h2>{username}</h2>
        <p>Email: {email}</p>
        <h3>Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Bio: {profile.bio}</p>
        <button
          style={{ backgroundColor: liked ? 'lime' : 'white' }}
          onClick={handleLikeClick}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;