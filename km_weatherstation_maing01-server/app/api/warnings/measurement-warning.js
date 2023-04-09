"use strict";

const Errors = require("../errors/measurement-error.js");

const Create = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  }
};

// const Get = {
//   createUnsupportedKeys: {
//     code: `${Errors.Get.UC_CODE}unsupportedKeys`
//   }
// };

module.exports = {
    Create,
   // Get,
};