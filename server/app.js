const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors({ credentials: true, origin: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let maps = [
  {
    id: "5.5",
    description: "You are in a forest.",
    type: 1,
    worksite: 0,
    cityname: "",
  },
]


app.get("/map", (req, res) => {
  res.json(maps);
});

app.post("/map", (req, res) => {
  maps = []
  const map = req.body;
  maps.push(map);
  res.json(map);
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
