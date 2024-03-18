import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import cells from "./routes/cells.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// Load the /cells routes
app.use("/cells", cells);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
