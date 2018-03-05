import * as express from "express";
import { PostController } from "./post.controller";
const postRouter = express.Router();
postRouter.get("/", PostController.getAll);
postRouter.post("/", PostController.save);
postRouter.put("/:postId", PostController.save);
export { postRouter };
