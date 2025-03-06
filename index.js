const express = require("express");
const jsonServer = require("json-server");
const { connectToDB } = require("./config/dbConfig");
const { userRouter } = require("./routes/user.routes");
const { todoRouter } = require("./routes/todo.routes");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/users", userRouter);
app.use("/todos", todoRouter);

// ✅ Integrate JSON Server into Express
const router = jsonServer.router("db.json"); // Connect JSON Server with db.json
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api", router); // Now JSON Server is accessible at /api

// Start Server
app.listen(PORT, () => {
  connectToDB();
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
