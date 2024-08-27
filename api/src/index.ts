
import express, { Express, Request, Response , Application, json } from 'express';
import { connection } from './database/dbconnection';
import userRoutes from "./routes"


const app: Application = express();
const port = process.env.PORT || 8000;

connection()
app.use(express.json())
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});