import express from 'express';

const app = express();

app.use(express.json());

app.get("/api/test", async (req, res) => {
  res.json("Test");
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));