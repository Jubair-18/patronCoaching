import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import router from './routes/users.js'
import adminRouter from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = 'mongodb+srv://miraz:PcHhSq6Eqz1VWhTN@cluster0.itu2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", router);
app.use("/admin", adminRouter);

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(4001, () => console.log(`Server Running on Port: http://localhost:4001`)))
  .catch((error) => console.log(`${error} did not connect`));

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(PORT , () => console.log(`app is running on https://localhost:${PORT}`));

