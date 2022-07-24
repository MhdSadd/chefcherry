require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const mongoStore = require("connect-mongo");
const flash = require("connect-flash");
const connectDB = require("./config/db");

// Set static files path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// path init for static files
app.use(express.static(path.join(__dirname, "/public/")));

//Connect to Mongo DB
connectDB();

//Morgan Init
app.use(logger("dev"));

// Init Session
app.use(
  session({
    cookie: {
      maxAge: 100 * 60 * 1000,
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

// app.use(flash);

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

//Routes
const defaultRoutes = require("./routes/default.routes");
const adminRoutes = require("./routes/admin.routes");

// Routes grouping
app.use("/", defaultRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log(`Server Started at Port ${PORT}`);
});
