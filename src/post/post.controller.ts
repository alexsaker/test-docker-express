import { Post } from "./post.model";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
export class PostController {
  private static readonly JSON_PACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

  public static getAll(req, res): Promise<Post[] | any> {
    return axios
      .get(`${PostController.JSON_PACEHOLDER_URL}/posts`)
      .then(result => {
        res.status(result.status).send(result.data);
      })
      .catch(error => {
        res.status(error.response.status).send(error.response.statusText);
        return Promise.reject(error);
      });
  }

  public static save(req, res): Promise<any> {
    const post = req.body;
    if (post && post["id"]) {
      return axios
        .put(`${PostController.JSON_PACEHOLDER_URL}/posts/${post["id"]}`)
        .then(result => {
          res.status(result.status).send(result.data);
        })
        .catch(error => {
          res.status(error.response.status).send(error.response.statusText);
          return Promise.reject(error);
        });
    } else {
      return axios
        .post(`${PostController.JSON_PACEHOLDER_URL}/posts`, post as Post)
        .then(result => {
          res.status(result.status).send(result.data);
        })
        .catch(error => {
          res.status(error.response.status).send(error.response.statusText);
          return Promise.reject(error);
        });
    }
  }
}
