"use strict";

const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
//const { Profiles, Schemas } = require("./constants");
const Warnings = require("../api/warnings/gateway-warning.js");
const Errors = require("../api/errors/gateway-error.js");
const ErrorsMain = require("../api/errors/weatherstation-main-error.js");
//const InstanceChecker = require("../component/instance-checker");

const DEFAULTS = {
    sortBy: "...",// TODO
    order: "asc",
    pageIndex: 0,
    pageSize: 20,
};
  
class GatewayAbl {
    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao("gateway");
        this.measurementDao = DaoFactory.getDao("measurement");
    }
  
    // CREATE
    async create(awid, dtoIn, session, authorizationResult) {
        let uuAppErrorMap = {};
        let validationResult = this.validator.validate("gatewayCreateDtoInType", dtoIn);
  
        //HDS 1
        uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            Warnings.Create.createUnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );
  
 
        //HDS 3
        const isAuthorities = authorizationResult.getAuthorizedProfiles().includes("Authorities");
        if (!isAuthorities) {
          // 3.1
          throw new Errors.Create.UserNotAuthorized({ uuAppErrorMap });
        }
  
        const uuObject = {
            ...dtoIn,
        };
  
        //HDS 4
        uuObject.awid = awid;
  
        //uuObject.itemList = [];
  
        let gateway;
        //HDS 5
        try {
            gateway = await this.dao.create(uuObject);
        } catch (e) {
            // 5.1
            if (e instanceof ObjectStoreError) {
                throw new Errors.Create.GatewayDaoCreateFailed({ uuAppErrorMap }, e);
            }
            throw e;
        }
  
        //HDS 6
        const dtoOut = {
            ...gateway,
            uuAppErrorMap,
        };
  
        return dtoOut;
    }

}

module.exports = new GatewayAbl();










