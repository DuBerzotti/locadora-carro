import express, { request } from 'express';

import {categoriesRoutes} from './Routes/categories.routes';
import { specificationsRoutes } from './Routes/specification.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));