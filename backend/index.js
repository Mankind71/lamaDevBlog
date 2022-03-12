const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const helmet = require("helmet");
// const morgan = require("morgan");
const app = express();
const multer = require("multer");
// const path = require("path");
const PORT = 5000;

const userRoute = require("./routes/users");
const pinRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/categories");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// app.use("/images", express.static(path.join(__dirname, "public/images")));

// middleware
app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
