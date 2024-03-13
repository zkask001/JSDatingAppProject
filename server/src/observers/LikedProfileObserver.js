const ProfileObserver = require('./ProfileObserver');

class LikedProfileObserver extends ProfileObserver {
  update(user) {
    if (user.profile.liked) {
      console.log(`${user.username} is unliked!`);
    } else {
      console.log(`${user.username} is liked!`);
    }
  }
}

module.exports = LikedProfileObserver;