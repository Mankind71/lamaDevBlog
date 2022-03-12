const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    categories: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
