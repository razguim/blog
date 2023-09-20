import express from "express";
import ejs from "ejs"
import bodyParser from "body-parser"
import connect from "./database/connect.js"
import BlogRoute from "./routes/blog/blogRouter.js"
const app = express();
const port = 3030;
connect()

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



app.use("/blog",BlogRoute );

app.listen(port, () => {
    console.log(`Blog Admin on port http://localhost:${port}`);
  });




