import express, { request } from 'express';
import {categoriesRoutes} from './Routes/categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("Server is running!"));