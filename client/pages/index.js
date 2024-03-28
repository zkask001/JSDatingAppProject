import React from 'react';
import HelloWorld from '../components/HelloWorld';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries'; // Define the query

const Home = () => {
  // const { isAuthenticated, isLoading } = useAuth0();
  // Use the query to fetch users
  const { loading, error, data } = useQuery(GET_USERS);

  // if (isLoading) return <p>Loading...</p>;

  // if (!isAuthenticated) {
  //   return <Login />;
  // }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // users as an array
  const users = data.getUsers || [];

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