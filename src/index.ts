import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import { commentRouter } from "./comment";
import { postRouter } from "./post";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use("/comments", commentRouter);
app.use("/posts", postRouter);
app.get("/", function(req, res) {
  res.send("hello world");
});
app.listen(8080);
