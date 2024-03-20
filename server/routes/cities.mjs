import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = db.collection("cities");
  let results = await collection.find({}).toArray();

  res.status(200).send(results);
});

// post
router.post("/", async (req, res) => {
  let collection = db.collection("cities");

  const newCity = {
    name: req.body.name
  };

  let result = await collection.insertOne(newCity);

  res.status(201).send(result);
});

// delete
router.delete("/:name", async (req, res) => {
  let collection = db.collection("cities");
  let result = await collection.deleteOne({ name: req.params.name });

  res.status(200).send(result);
});

export default router;
