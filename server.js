import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.json());

app.get("/api/test", async (req, res) => {
  res.json("Test");
});

app.get("/api/responses", async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('Feedback');
    const collection = db.collection('responses');
    const responses = await collection.find().toArray();
    client.close();
    res.json(responses);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));