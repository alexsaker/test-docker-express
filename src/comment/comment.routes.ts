import * as express from "express";
import { CommentController } from "./comment.controller";
const commentRouter = express.Router();
commentRouter.get("/", CommentController.getAll);
export { commentRouter };
