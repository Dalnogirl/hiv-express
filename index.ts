
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { usersRouter } from './src/modules/users/usersRouter';
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json())

app.use('/users',usersRouter)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});