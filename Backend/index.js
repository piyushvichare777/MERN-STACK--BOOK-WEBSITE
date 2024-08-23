import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/const.js";
import bookrouter from "./routes/books.routes.js";
import userrouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors({
  origin: 'https://mybookstoresapp.netlify.app/', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
connectDB(MONGODB_URI);

app.get("/", (req, res) => {
  res.send("running successfully");
});

app.use("/book", bookrouter);
app.use("/user", userrouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
