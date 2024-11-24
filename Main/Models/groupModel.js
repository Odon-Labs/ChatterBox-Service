class Group {
    constructor(name, members, createdBy, createdAt) {
      this.name = name;
      this.members = members || [];
      this.createdBy = createdBy;
      this.createdAt = createdAt || new Date().toISOString();
    }
  }
  
  module.exports = Group;
  