import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/utils/db.js";
import authRoute from "./src/routes/auth.js"
import eventRoute from "./src/routes/event.js"
import eventRSVPRoute from "./src/routes/eventRSVP.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

const allowedOrigins = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : [];
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoute);
app.use('/api/event', eventRoute);
app.use('/api/eventRSVP', eventRSVPRoute);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});