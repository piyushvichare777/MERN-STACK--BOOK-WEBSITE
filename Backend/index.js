import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/const.js";
import bookrouter from "./routes/books.routes.js";
import userrouter from "./routes/user.route.js";
import cors from "cors"
dotenv.config();



const app = express();
const port = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
connectDB(MONGODB_URI);

// Defining routes
app.use("/book", bookrouter);
app.use("/user", userrouter)

// --------------------------deployment------------------------------


// --------------------------deployment------------------------------




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});