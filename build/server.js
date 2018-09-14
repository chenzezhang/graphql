"use strict";
//server.js
Object.defineProperty(exports, "__esModule", { value: true });
// const koa = require('koa');
// const app = new koa();
// const cors = require('koa-cors');
// const koaBody = require('koa-body');
const Koa = require("koa");
const app = new Koa();
exports.app = app;
const koa_cors_1 = require("koa-cors");
const koa_body_1 = require("koa-body");
app.use(koa_cors_1.default());
app
    .use(koa_body_1.default({
    multipart: true
}));
