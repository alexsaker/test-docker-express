import * as chai from "chai";
import * as sinon from "sinon";
import * as mocha from "mocha";
import * as request from "supertest";
import * as path from "path";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
const expect = chai.expect;
const should = chai.should();
import { app } from "..";


describe("Comment Tests", () => {
    let sandbox;
    let commentsDataMock;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        commentsDataMock = require(path.resolve(__dirname, "../../mock/data-mock/data-comments.json"));

    });
    afterEach(() => {
        sandbox.restore();
    });

    describe("GET /api/v1/comments", () => {
        it("Should get all comments", done => {
            const axiosGetStub = sandbox.stub(axios, "get").callsFake(() => {
                return new Promise((resolve, reject) => {
                    resolve({ status: 200, data: commentsDataMock });
                });
            });
            request(app)
                .get("/api/v1/comments")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    res.text.should.be.eql(JSON.stringify(commentsDataMock));
                    done();
                });
        });
        it("Should return an error when trying to get all comments", done => {

            const axiosGetStub = sandbox.stub(axios, "get").callsFake(() => {
                return new Promise((resolve, reject) => {
                    reject({ response: { status: 401, statusText: "Error" } });
                });
            });
            request(app)
                .get("/api/v1/comments")
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