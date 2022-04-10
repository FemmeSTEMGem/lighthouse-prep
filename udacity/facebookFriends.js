let facebookProfile = {
  name : "Shannon",
  friends : 10,
  messages : ["hello!", "how do?", "nice chat!"],
  postMessage : function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage : function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend : function() {
    facebookProfile.friends += 1;
  },
  removeFriend : function() {
    facebookProfile.friends -= 1;
  }
};

