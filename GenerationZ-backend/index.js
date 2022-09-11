import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import agroRouter from "./routers/agroRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://wearespe2020:wearespe2020@cluster0.m11b8.mongodb.net/generationz?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routers
app.use("/api/agros", agroRouter);
app.use("/api/users", userRouter);

app.get("/", (res, req) => {
  res.status(200).send("Generation is ready to go!");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log(`Server running on port: http://localhost:5000`);
});
