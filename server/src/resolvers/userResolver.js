//handles queries and mutations related to user management


// Mock user data (can be replaced with actual data source)
const users = [
    { id: '1', username: 'user1', email: 'user1@example.com', password: 'password1', profile: { name: 'User One', age: 25, bio: 'I love hiking!', profileImage: 'image1.jpg', liked: false } },
    { id: '2', username: 'user2', email: 'user2@example.com', password: 'password2', profile: { name: 'User Two', age: 28, bio: 'Coffee enthusiast', profileImage: 'image2.jpg' }, liked: false },
  ];
  
  const userResolvers = {
    Query: {
      getUser: (_, { id }) => users.find(user => user.id === id),
      getUsers: () => users,
    },
    Mutation: {
      registerUser: (_, { username, email, password }) => {
        const newUser = {
          id: String(users.length + 1),
          username,
          email,
          password,
          profile: { name: '', age: null, bio: '', profileImage: '' },
        };
        users.push(newUser);
        return newUser;
      },
      loginUser: (_, { email, password }) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
          throw new Error('Invalid credentials');
        }
        return user;
      },
      updateProfile: (_, { userId, profile }) => {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
          throw new Error('User not found');
        }
        users[userIndex].profile = { ...users[userIndex].profile, ...profile };
        return users[userIndex];
      },
      //temporary liked feature before user registration implemented
      toggleLike: async (_, { userId }) => {
        // Your logic to toggle the like
        const user = await User.findById(userId);
        user.profile.liked = !user.profile.liked;
        await user.save();
    
        // Return a boolean
        return true;
      },
    },
  };
  
  module.exports = userResolvers;