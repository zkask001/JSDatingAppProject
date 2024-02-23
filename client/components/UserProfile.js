import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <p>No user found</p>;
  }

  const { username, email, profile } = user;

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '200px' }}>
            <h2>{username}</h2>
            <p>Email: {email}</p>
            <h3>Profile</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Bio: {profile.bio}</p>
            <img src={profile.profileImage} alt="Profile" style={{ maxWidth: '100%' }} />
        </div>
  );
};

export default UserProfile;