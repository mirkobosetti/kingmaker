import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import cells from "./routes/cells.mjs";
import cities from "./routes/cities.mjs";
import items from "./routes/items.mjs";
import money from "./routes/money.mjs";

const PORT = process.env.PORT || 9996;
const app = express();

var allowedOrigins = ["http://localhost:8080", "http://192.168.1.10:8080", "http://mirkobosetti.drinkando.com"];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = "The CORS policy for this site does not " + "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());

// Routes
app.use("/cells", cells);
app.use("/cities", cities);
app.use("/items", items);
app.use("/money", money);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
