// each cell is an object with the following properties:
// id: string - unique identifier
// description: string - description of the cell (e.g. "You are in a forest.") - optional
// type: number - type of the cell (1: explored, 2:city, 3:expanded) - optional
// worksite: number - worksite of the cell (1: farmland, 2: lumber camp, 3: mine, 4: quarry) - optional
// cityname: string - name of the city in the cell - optional

import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = db.collection("cells");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// update cell with new properties
router.put("/:id", async (req, res) => {
  const query = { id: req.params.id };
  let collection = db.collection("cells");

  let exits = await collection.findOne(query);
  if (exits) {
    let result = await collection.updateOne(query, {
      $set: {
        description: req.body.description,
        type: req.body.type,
        worksite: req.body.worksite,
        cityname: req.body.cityname,
      },
    });
    res.send(result).status(200);
  } else {
    const result = await collection.insertOne(req.body);
    res.send(result).status(200);
  }
});

// delete cell
router.delete("/:id", async (req, res) => {
  const query = { id: req.params.id };
  let collection = db.collection("cells");
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

export default router;
