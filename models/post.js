var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
   name: String,
   image: String,
   body: String,
   author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            //model we will refer to
            ref: "User"
        },
        username: String
    },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Post", postSchema);