// const express = require("express")
// const {connectToDB} = require('./config/dbConfig')
// const {userRouter} = require("./routes/user.routes")
// const {todoRouter} = require("./routes/todo.routes")
// const cors = require("cors")
// require("dotenv").config()

// const PORT = process.env.port || 5000
// const app = express()

// app.use(express.json())
// app.use(cors())
// app.use("/users", userRouter)
// app.use("/todos", todoRouter)






// app.listen(PORT, ()=>{
//     connectToDB()
//     console.log(`Server is running at http://localhost:${PORT}`)
// })










const express = require("express");
const jsonServer = require('json-server');
const { connectToDB } = require("./config/dbConfig");
const { userRouter } = require("./routes/user.routes");
const { todoRouter } = require("./routes/todo.routes");
const cors = require("cors");
require("dotenv").config();

//const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "*", // Regex for localhost on any port
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/users", userRouter);
app.use("/todos", todoRouter);

////db 
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // This points to your existing db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const PORT = process.env.PORT || 3001;

// server.listen(PORT, () => {
//     console.log(`JSON Server is running on port ${PORT}`);
// });

app.listen(PORT, () => {
  connectToDB();
  console.log(`🚀 Server is running at http://at server :${PORT}`);
});
