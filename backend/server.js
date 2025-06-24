import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
const PORT = 4000;
app.use(cors());

connectDB();

app.use(express.json());

app.use('/api/auth',userRoutes)

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})