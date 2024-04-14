import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import cells from "./routes/cells.mjs";
import cities from "./routes/cities.mjs";
import items from "./routes/items.mjs";
import money from "./routes/money.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
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
