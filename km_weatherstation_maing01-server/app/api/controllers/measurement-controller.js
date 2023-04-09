"use strict";

const MeasurementAbl = require("../../abl/measurement-abl.js");

class MeasurementController { 

    create(ucEnv) {
        return MeasurementAbl.create(ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    getByGatewayIdAndFrequency(ucEnv) {
        return MeasurementAbl.getByGatewayIdAndFrequency(ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    upsampleMeasurements(ucEnv) {
        return MeasurementAbl.upsampleMeasurements(ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }

    downsampleMeasurements(ucEnv) {
        return MeasurementAbl.downsampleMeasurements(ucEnv.getUri().getAwid(),
            ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
    }
}

module.exports = new MeasurementController();
