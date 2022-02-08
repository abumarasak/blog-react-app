const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use("/images", express.static(path.join(__dirname, "/images")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.use("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});
app.use("/api/auth/", authRoute);
app.use("/api/users/", usersRoute);
app.use("/api/posts/", postRoute);
app.use("/api/categories/", categoryRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`app is listing in port ${port}`);
});
