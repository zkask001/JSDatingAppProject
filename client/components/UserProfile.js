import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TOGGLE_LIKE } from '../graphql/queries';
import { GET_USERS } from '../graphql/queries';
import { useRouter } from 'next/router';

const UserProfile = ({ user }) => {
  const router = useRouter();

  if (!user) {
    return <p>No user found</p>;
  }

  const [liked, setLiked] = useState(user.profile.liked);

  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { userId: user.id },
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleLikeClick = async () => {
    try {
      // Optimistic update
      setLiked(!liked);

      console.log('Toggling like optimistically...');
      await toggleLike();
      console.log('Like toggled successfully');
    } catch (error) {
      console.error('Error toggling like:', error.message);
      // Revert local state on error
      setLiked(liked);
    }
  };

  const { username, email, profile } = user;

  const handleNavigateToLiked = () => {
    router.push('/liked-profiles');
  };

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '200px' }}>
        <h2>{username}</h2>
        <p>Email: {email}</p>
        <h3>Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Bio: {profile.bio}</p>
        <img src={profile.profileImage} alt="Profile" style={{ maxWidth: '100%' }} />
        <button
          style={{ backgroundColor: liked ? 'green' : 'white' }}
          onClick={handleLikeClick}
          disabled={false}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
