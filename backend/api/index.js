import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import itemsRoutes from './routes/itemsRoute.js';

config();

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
	})
);

app.get('/', (req, res) => res.json({ name: 'asas', date: 'aasas' }));

app.use('/items', itemsRoutes);

mongoose
	.connect(process.env.MONGODBURL)
	.then(() => {
		app.listen(process.env.PORT, () =>
			console.log('Server ready on port 8000.')
		);
	})
	.catch((e) => {
		console.log(e);
	});

export default app;
