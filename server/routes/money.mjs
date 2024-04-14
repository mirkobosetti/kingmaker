import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = db.collection("money");
  let results = await collection.find({}).toArray();

  // set gold to 0 if it doesn't exist
  let gold = results.find((element) => element.name === "gold");
  if (!gold) {
    await collection.insertOne({ name: "gold", amount: 0 });
  }

  // set silver to 0 if it doesn't exist
  let silver = results.find((element) => element.name === "silver");
  if (!silver) {
    await collection.insertOne({ name: "silver", amount: 0 });
  }

  // set copper to 0 if it doesn't exist
  let copper = results.find((element) => element.name === "copper");
  if (!copper) {
    await collection.insertOne({ name: "copper", amount: 0 });
  }

  // set platinum to 0 if it doesn't exist
  let platinum = results.find((element) => element.name === "platinum");
  if (!platinum) {
    await collection.insertOne({ name: "platinum", amount: 0 });
  }

  res.status(200).send(results);
});

router.put("/", async (req, res) => {
  let collection = db.collection("money");

  let payload = req.body;
  
  let platinum = payload.find((element) => element.name === "platinum");
  let gold = payload.find((element) => element.name === "gold");
  let silver = payload.find((element) => element.name === "silver");
  let copper = payload.find((element) => element.name === "copper");

  await collection.updateOne({ name: "platinum" }, { $set: { amount: platinum.amount } });
  await collection.updateOne({ name: "gold" }, { $set: { amount: gold.amount } });
  await collection.updateOne({ name: "silver" }, { $set: { amount: silver.amount } });
  await collection.updateOne({ name: "copper" }, { $set: { amount: copper.amount } });

  res.status(200).send("Money updated");
});

export default router;
