class User {
    constructor(uid, name, email, profileImage) {
      this.uid = uid;
      this.name = name;
      this.email = email;
      this.profileImage = profileImage || null;
    }
  }
  
  module.exports = User;
  