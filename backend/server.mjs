import cors from 'cors';
import express from 'express';
import { processRequest } from './src/app.mjs';
const app = express();
 

const PORT = process.env.PORT || 3000


app.use(cors({
  origin: 'http://localhost:5173', // Allow specific origin
}));

app.get("/submit", async (req, res) => {
  try {
    const country = req.query.country.toLowerCase()
    const response = await processRequest(country);
    res.json(response)
  } catch (e) {
    res.status(500).json({ error: 'Error' });
  }
})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});
