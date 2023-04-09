"use strict";

const WeatherstationMainUseCaseError = require("./weatherstation-main-use-case-error.js");

const Create = {
  UC_CODE: `${WeatherstationMainUseCaseError.ERROR_PREFIX}gateway/create/`,

  // InvalidDtoIn: class extends WeatherstationMainUseCaseError {
  //   constructor() {
  //     super(...arguments);
  //     this.code = `${Create.UC_CODE}invalidDtoIn`;
  //     this.message = "DtoIn is not valid.";
  //   }
  // },

  // GatewayDaoCreateFailed: class extends WeatherstationMainUseCaseError {
  //   constructor() {
  //     super(...arguments);
  //     this.code = `${Create.UC_CODE}gatewayDaoCreateFailed`;
  //     this.message = "Create gateway by gateway Dao create failed.";
  //   }
  // },

  // UserNotAuthorized: class extends WeatherstationMainUseCaseError {
  //   constructor() {
  //     super(...arguments);
  //     this.code = `${Create.UC_CODE}userNotAuthorized`;
  //     this.message = "User is not authorized.";
  //   }
  // },
};

// const Update = {
//   UC_CODE: `${WeatherstationMainUseCaseError.ERROR_PREFIX}gateway/update/`,

//   InvalidDtoIn: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Update.UC_CODE}invalidDtoIn`;
//       this.message = "DtoIn is not valid.";
//     }
//   },
//   GatewayDaoUpdateFailed: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Update.UC_CODE}gatewayDaoUpdateFailed`;
//       this.message = "Update gateway by gateway Dao update failed.";
//     }
//   },
//   GatewayDoesNotExist: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Update.UC_CODE}gatewayDoesNotExist`;
//       this.message = "Gateway does not exist.";
//     }
//   },
//   UserNotAuthorized: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Update.UC_CODE}userNotAuthorized`;
//       this.message = "User is not authorized.";
//     }
//   },
//   GatewayDaoGetFailed: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Update.UC_CODE}gatewayDaoGetFailed`;
//       this.message = "Get gateway by Dao get failed.";
//     }
//   },
// };

// const Delete = {
//   UC_CODE: `${WeatherstationMainUseCaseError.ERROR_PREFIX}gateway/delete/`,

//   InvalidDtoIn: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}invalidDtoIn`;
//       this.message = "DtoIn is not valid.";
//     }
//   },
//   GatewayDaoDeleteFailed: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}gatewayDaoDeleteFailed`;
//       this.message = "Delete gateway by gateway Dao delete failed.";
//     }
//   },
//   GatewayDoesNotExist: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}gatewayDoesNotExist`;
//       this.message = "Gateway does not exist.";
//     }
//   },
//   UserNotAuthorized: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}userNotAuthorized`;
//       this.message = "User is not authorized.";
//     }
//   },
//   GatewayGetFailed: class extends WeatherstationMainUseCaseError {
//     constructor() {
//       super(...arguments);
//       this.code = `${Delete.UC_CODE}gatewayDaoGetFailed`;
//       this.message = "Get gateway by gateway Dao get failed.";
//     }
//   },
// };


module.exports = {
    Create,
    // Update,
    // Delete,
  };