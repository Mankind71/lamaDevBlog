const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account!");
  }
});

// delete user his posts
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findOneAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } catch (error) {
      return res.status(404).json("User not found!");
    }
  } else {
    return res.status(401).json("YOu can delete only your account!");
  }
});

// // get user
// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const user = userId
//       ? await User.findById(userId)
//       : await User.findOne({ username: username });
//     const { password, updatedAt, ...other } = user._doc;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// get 1 user

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(userId);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Getting all
// router.get("/all/all", async (req, res) => {
//   try {
//     const subscribers = await User.find();
//     res.json(subscribers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// REGISTER

// router.post("/register", async (req, res) => {
//   try {
//     // generate pwd
//     const salt = await bcrypt.genSalt(10);
//     const hashedPwd = await bcrypt.hash(req.body.password, salt);

//     // create user
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPwd,
//     });

//     // save user & resp
//     const user = await newUser.save();
//     res.status(200).json(user._id);
//   } catch (err) {
//     console.log(err);
//   }
// });

// login

//

module.exports = router;
