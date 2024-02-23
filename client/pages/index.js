import React from 'react';
import HelloWorld from '../components/HelloWorld';
import UserProfile from '../components/UserProfile';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries'; // Define the query

const Home = () => {
  // Use the query to fetch users
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.getUsers || []; // ensure it's an array or default to an empty array

  return (
    <div>
      <h1>Welcome to my dating app</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {users.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
      <HelloWorld />
    </div>
  );
};

export default Home;