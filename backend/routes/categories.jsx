const router = require("express").Router();
const Category = require("../models/Category ");
// const User = require("../models/User");

// create a category

router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // update a category
// router.put("/:id", async (req, res) => {
//   try {
//     const categoryx = await Category.findById(req.params.id);
//     if (categoryx.userId === req.body.userId) {
//       await categoryx.updateOne({ $set: req.body });
//       res.status(200).json("category updated");
//     } else {
//       res.status(403).json("can only update ur category");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // delete a category
// router.delete("/:id", async (req, res) => {
//   try {
//     const categoryx = await Category.findById(req.params.id);
//     if (categoryx.userId === req.body.userId) {
//       await categoryx.deleteOne();
//       res.status(200).json("category deleted");
//     } else {
//       res.status(403).json("can only delete ur category");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // like/dislike a category
// router.put("/:id/like", async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (!category.likes.includes(req.body.userId)) {
//       await category.updateOne({ $push: { likes: req.body.userId } });
//       res.status(200).json("The category has been liked");
//     } else {
//       await category.updateOne({ $pull: { likes: req.body.userId } });
//       res.status(200).json("The category has been disliked");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // get a category
// router.get("/:id", async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Getting all

router.get("/", async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // get timeline categorys
// router.get("/timeline/:userId", async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.params.userId);
//     const userCategorys = await Category.find({ userId: currentUser._id });
//     const friendCategorys = await Promise.all(
//       currentUser.following.map((friendId) => {
//         return Category.find({ userId: friendId });
//       })
//     );
//     res.status(200).json(userCategorys.concat(...friendCategorys));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // get timeline categorys
// router.get("/profile/:username", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.params.username });
//     const categorys = await Category.find({ userId: user._id });
//     res.status(200).json(categorys);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
