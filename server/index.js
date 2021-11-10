const express = require("express");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();
app.use(morgan('combined'));
app.use(express.json({type: '*/*'}));
app.use(passport.initialize());
router(app);

// mongodb 연결
mongoose.connect('mongodb://localhost:27017/auth', {
  user: 'admin',
  pass: 'admin',
  authSource: 'admin'
}).then(() => {
  console.log('Mongodb is successfully connected');
}).catch((e) => console.error(e));

// 서버 시작
const port = process.env.PORT || 3090;
app.listen(port, () => {
  console.log(`Server Listening: ${port}`);
})