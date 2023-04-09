"use strict";

const GatewayAbl = require("../../abl/gateway-abl.js");

class GatewayController {

    create(ucEnv) {
        return GatewayAbl.create(ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    get(ucEnv) {
        return GatewayAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(),
            ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    update(ucEnv) {
        return GatewayAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(),
            ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    delete(ucEnv) {
        return GatewayAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(),
            ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    list(ucEnv) {
        return GatewayAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(),
            ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

}

module.exports = new GatewayController();