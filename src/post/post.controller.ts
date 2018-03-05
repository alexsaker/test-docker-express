import { Post } from "./post.model";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
export class PostController {
  private static readonly JSON_PACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

  public static getAll(req, res): void {
    axios
      .get(`${PostController.JSON_PACEHOLDER_URL}/posts`)
      .then(result => {
        res.status(result.status).send(result.data);
      })
      .catch(error => {
        res.status(error.response.status).send(error.response.statusText);
      });
  }

  public static save(req, res): void {
    const post = req.body;
    if (post && post["id"]) {
      axios
        .put(`${PostController.JSON_PACEHOLDER_URL}/posts/${post["id"]}`)
        .then(result => {
          res.status(result.status).send(result.data);
        })
        .catch(error => {
          res.status(error.response.status).send(error.response.statusText);
        });
    } else {
      axios
        .post(`${PostController.JSON_PACEHOLDER_URL}/posts`, post as Post)
        .then(result => {
          res.status(result.status).send(result.data);
        })
        .catch(error => {
          res.status(error.response.status).send(error.response.statusText);
        });
    }
  }
}
