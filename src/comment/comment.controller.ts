import { Comment } from "./comment.model";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
export class CommentController {
  private static readonly JSON_PACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

  public static getAll(req, res): Promise<Comment[] | any> {
    return axios
      .get(`${CommentController.JSON_PACEHOLDER_URL}/comments`)
      .then(result => {
        res.status(result.status).send(result.data);
      })
      .catch(error => {
        res.status(error.response.status).send(error.response.statusText);
        return Promise.reject(error);
      });
  }
}
