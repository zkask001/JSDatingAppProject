const users = [];

function registerUser(username, email, password) {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  return newUser;
}

function loginUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return user;
}

function createProfile(userId, profile) {
  const user = users.find(u => u.id === userId);
  if (!user) {
    throw new Error('User not found');
  }

  user.profile = { ...user.profile, ...profile };
  return user;
}

module.exports = { registerUser, loginUser, createProfile };