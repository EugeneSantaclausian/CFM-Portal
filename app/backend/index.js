const express = require("express");
const app = express();
const cors = require("cors");
//const movies = require("./routes/api");
const login = require("./middleware/loginController");

const port = process.env.PORT || 3000;
var corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? [port, "https://cfm-portal.netlify.app", "http://localhost:5000"]
      : ["https://cfm-portal.netlify.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); //add corsOptions as an argument in cors() when deploying to netlify
//app.use("/api/movies", movies);
app.use("/api/login", login);

app.listen(port, () => {
  console.log(`Listening on ${port}....`);
});
