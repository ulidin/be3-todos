const express = require("express");
const app = express();
const userRoute = require("./routes/usersRoute");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be3-todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const port = process.env.PORT || 3001;

app.use("/users/", userRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});