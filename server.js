import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.json());

app.get("/api/responses", async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('Feedback');
    const collection = db.collection('responses');
    const responses = await collection.find().toArray();
    client.close();
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.post("/api/responses", async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('Feedback');
    const collection = db.collection('responses');
    const result = await collection.insertOne(data);
    client.close();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.get("/api/responses/:id", async (req, res) => {
  const id = req.params.id;
  const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
  console.log(capitalized)
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('Feedback');
    const collection = db.collection('responses');
    const responses = await collection.find({'department': capitalized}).toArray();
    client.close();
    if(responses) {
      res.json(responses);
    } else {
      res.status(404).json({message: 'Responses not found'});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));