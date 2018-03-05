import * as chai from "chai";
import * as sinon from "sinon";
import * as mocha from "mocha";
import * as request from "supertest";
import * as path from "path";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
const expect = chai.expect;
const should = chai.should();
import { app } from "..";


describe("Post Tests", () => {
    let sandbox;
    let postsDataMock;


    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        postsDataMock = require(path.resolve(__dirname, "../../mock/data-mock/data-posts.json"));

    });
    afterEach(() => {
        sandbox.restore();
    });

    describe("GET /api/v1/posts", () => {
        it("Should get all posts", done => {
            const axiosGetStub = sandbox.stub(axios, "get").callsFake(() => {
                return new Promise((resolve, reject) => {
                    resolve({ status: 200, data: postsDataMock });
                });
            });
            request(app)
                .get("/api/v1/posts")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql(JSON.stringify(postsDataMock));
                    done();
                });
        });
        it("Should return an error when trying to get all posts", done => {
            const axiosGetStub = sandbox.stub(axios, "get").callsFake(() => {
                return new Promise((resolve, reject) => {
                    reject({ response: { status: 401, statusText: "Error" } });
                });
            });
            request(app)
                .get("/api/v1/posts")
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql("Error");
                    done();
                });
        });
    });
    describe("POST /api/v1/posts", () => {
        it("Should add a post", done => {
            const newPost = { ...postsDataMock[0] };
            delete newPost["id"];

            const axiosGetStub = sandbox.stub(axios, "post").callsFake(() => {
                return new Promise((resolve, reject) => {
                    resolve({ status: 200, data: newPost });
                });
            });

            request(app)
                .post("/api/v1/posts")
                .send(newPost)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql(JSON.stringify(newPost));
                    done();
                });
        });
        it("Should return an error when trying to add a post", done => {
            const newPost = { ...postsDataMock[0] };
            delete newPost["id"];

            const axiosGetStub = sandbox.stub(axios, "post").callsFake(() => {
                return new Promise((resolve, reject) => {
                    reject({ response: { status: 401, statusText: "Error" } });
                });
            });
            request(app)
                .post("/api/v1/posts")
                .send(newPost)
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql("Error");
                    done();
                });
        });
    });

    describe("PUT /api/v1/posts", () => {
        it("Should update a post", done => {
            const newPost = { ...postsDataMock[0] };
            const axiosGetStub = sandbox.stub(axios, "put").callsFake(() => {
                return new Promise((resolve, reject) => {
                    resolve({ status: 201, data: newPost });
                });
            });
            request(app)
                .put("/api/v1/posts/" + newPost["id"])
                .send(newPost)
                .expect(201)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql(JSON.stringify(newPost));
                    done();
                });
        });
        it("Should return an error when trying to update a post", done => {
            const newPost = { ...postsDataMock[0] };
            const axiosGetStub = sandbox.stub(axios, "put").callsFake(() => {
                return new Promise((resolve, reject) => {
                    reject({ response: { status: 401, statusText: "Error" } });
                });
            });
            request(app)
                .put("/api/v1/posts/" + newPost["id"])
                .send(newPost)
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }

                    res.text.should.be.eql("Error");
                    done();
                });
        });
    });
});