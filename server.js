const express = require("express");
const mongoose = require("mongoose");
// const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://dbShaunaUser:mongoAppPass@cluster0.9d1be.mongodb.net/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
