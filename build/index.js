"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
server_1.app.listen(3000, function () {
    console.log('http://%s:%s', ',启动成功');
});
