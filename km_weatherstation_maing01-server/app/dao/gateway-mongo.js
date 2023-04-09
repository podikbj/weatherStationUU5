"use strict";

const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("bson");

class GatewayMongo extends UuObjectDao {
    constructor(...args) {
        super(...args);
    }

    async createSchema() {
        await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
        //await super.createIndex({ awid: 1, timestamp: 1 }, { unique: true });
    }

    async create(uuObject) {
        return await super.insertOne(uuObject);
    }

}

module.exports = GatewayMongo;