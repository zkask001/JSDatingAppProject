//handles queries related to profile viewing


const profileResolvers = {
    Query: {
      getUserProfile: (_, { userId }) => {
        const user = users.find(u => u.id === userId);
        if (!user) {
          throw new Error('User not found');
        }
        return user.profile;
      },
      getMatchingProfiles: (_, { userId }) => {
        const currentUser = users.find(u => u.id === userId);
        if (!currentUser) {
          throw new Error('User not found');
        }
        // can implement a matching algorithm based on user preferences
        return users.filter(u => u.id !== userId);
      },
    },
  };
  
  module.exports = profileResolvers;