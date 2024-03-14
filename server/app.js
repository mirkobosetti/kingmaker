const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000;
app.use(cors({ credentials: true, origin: true }));

// each cell is an object with the following properties:
// id: string - unique identifier
// description: string - description of the cell (e.g. "You are in a forest.") - optional
// type: number - type of the cell (1: explored, 2:city, 3:expanded) - optional 
// worksite: number - worksite of the cell (1: farmland, 2: lumber camp, 3: mine, 4: quarry) - optional
// cityname: string - name of the city in the cell - optional
const cells = []

app.get("/cells", (req, res) => {
  res.status(200).json(cells);
});

// patch cell
// example request: /cell?id=5.5, payload: { description: 1 }
app.put("/cell", (req, res) => {
  const id = req.query.id;
  if (!id) res.status(400).json({ message: "Cell id is required" });

  const description = req.body.description;
  const type = req.body.type;
  const worksite = req.body.worksite;
  const cityname = req.body.cityname;
  
  let cell = cells.find((cell) => cell.id === id);

  if (cell) {
    cell = { ...cell, description, type, worksite, cityname };
    res.status(200).json({ message: "Cell updated" });
  } else {
    cells.push({ id, description, type, worksite, cityname });
    res.status(200).json({ message: "Cell created" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kingmaker:1RcpDR0xRcebfObJ@cluster0.mh2cigy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
