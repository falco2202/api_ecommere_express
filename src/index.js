import express from "express";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

import apiRoute from "./api/routes/index.route.js";
import db from "../src/config/db/index.js"

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
db.connect();

app.use('/api', apiRoute)

app.use('*', (req, res) => {
  res.send('Home');
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 