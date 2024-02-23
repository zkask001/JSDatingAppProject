const users = [];

const resolvers = {
  Query: {
    getUser: (parent, { id }) => users.find(user => user.id === id),
    getMatches: (parent, { userId }) => users.find(user => user.id === userId).matches,
  },
  Mutation: {
    createUser: (parent, { username, age }) => {
      const newUser = { id: String(users.length + 1), username, age, matches: [] };
      users.push(newUser);
      return newUser;
    },
    likeUser: (parent, { userId, likedUserId }) => {
      const user = users.find(user => user.id === userId);
      const likedUser = users.find(user => user.id === likedUserId);

      if (user && likedUser) {
        user.matches.push(likedUser);
        likedUser.matches.push(user);
        return true;
      }

      return false;
    },
  },
};

module.exports = resolvers;