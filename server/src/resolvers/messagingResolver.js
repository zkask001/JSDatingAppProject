//handles queries and mutations related to messaging


// Mock message data (can be replaced with actual data source)
const messages = [
    { id: '1', senderId: '1', receiverId: '2', content: 'Hi there!', timestamp: '2022-02-10T12:00:00Z' },
    { id: '2', senderId: '2', receiverId: '1', content: 'Hello!', timestamp: '2022-02-10T12:05:00Z' },
  ];
  
  const messagingResolvers = {
    Query: {
      getUserMessages: (_, { userId }) => {
        const userMessages = messages.filter(msg => msg.senderId === userId || msg.receiverId === userId);
        return userMessages;
      },
    },
    Mutation: {
      sendMessage: (_, { senderId, receiverId, content }) => {
        const newMessage = {
          id: String(messages.length + 1),
          senderId,
          receiverId,
          content,
          timestamp: new Date().toISOString(),
        };
        messages.push(newMessage);
        return newMessage;
      },
    },
  };
  
  module.exports = messagingResolvers;