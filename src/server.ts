import express, { request } from 'express';
import { CreateCourse } from './routes';

const app = express();

app.get("/", CreateCourse);

app.listen(3333, () => console.log("Server is running!"));