//Observer interface, implemented by concrete observers

class ProfileObserver {
    update(user) {
        console.log(`Profile updated: ${user.username}`);
    }
  }
  
  module.exports = ProfileObserver;