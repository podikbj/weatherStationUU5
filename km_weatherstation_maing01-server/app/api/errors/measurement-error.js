"use strict";

const WeatherstationMainUseCaseError = require("./weatherstation-main-use-case-error.js");

const Create = {
    UC_CODE: `${WeatherstationMainUseCaseError.ERROR_PREFIX}measurement/create/`,

    InvalidDtoIn: class extends WeatherstationMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },

    MeasurementDaoCreateFailed: class extends WeatherstationMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}measurementCreateFailed`;
            this.message = "Create measurement by measurement Dao create failed.";
        }
    },

    UserNotAuthorized: class extends WeatherstationMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}userNotAuthorized`;
            this.message = "User is not authorized.";
        }
    },
};

module.exports = {
    Create,
    // DeleteByGatewayId,

};