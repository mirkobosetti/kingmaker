import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = db.collection("items");
  let results = await collection.find({}).toArray();

  res.status(200).send(results);
});

// post
router.post("/", async (req, res) => {
  let collection = db.collection("items");

  const newItem = {
    name: req.body.name,
    quantity: req.body.quantity,
    copperSellValue: req.body.copperSellValue,
  };

  let result = await collection.insertOne(newItem);

  res.status(201).send(result);
});

// put
router.put("/:id", async (req, res) => {
  let collection = db.collection("items");

  const updatedItem = {
    name: req.body.name,
    quantity: req.body.quantity,
    copperSellValue: req.body.copperSellValue,
  };

  let result = await collection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedItem });

  res.status(200).send(result);
});

export default router;
