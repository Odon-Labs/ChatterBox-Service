class User {
    constructor(id, username, email, password, profileImage) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.profileImage = profileImage || null;
    }
  }
  
  module.exports = User;
  