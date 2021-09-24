const { serverConfig } = require(global.constAddress);

class GeneralError {
  notFoundError() {
    this.generateError({
      status: 404,
      msgEn: "Not found",
      msgFa: "یافت نشد",
    });
  }

  badRequestError() {
    this.generateError({
      status: 400,
      msgEn: "Bad request",
      msgFa: "درخواست نامعتبر",
    });
  }

  inputIsNotValid(error) {
    this.generateError({
      status: 409,
      msgEn: "Input is not valid",
      msgFa: "ورودی معتبر نیست",
      error,
    });
  }

  duplicateUsername() {
    this.generateError({
      status: 400,
      msgEn: "Duplicate username",
      msgFa: "نام کاربری تکراری میباشد",
    });
  }

  duplicatePhoneNumber() {
    this.generateError({
      status: 400,
      msgEn: "Duplicate phone number",
      msgFa: "شماره موبایل تکراری میباشد",
    });
  }

  invalidUsernameOrpass() {
    this.generateError({
      status: 401,
      msgEn: "Wrong username or password",
      msgFa: "نام کاربری یا رمز عبور اشتباه میباشد",
    });
  }

  generateError(errObj) {
    const error = new Error(errObj.msgEn);
    error.status = errObj.status;
    error.msgEn = errObj.msgEn;
    error.msgFa = errObj.msgFa;
    if (serverConfig.NODE_ENV === "development") {
      error.detail = errObj.error;
    }
    throw error;
  }
}

module.exports = GeneralError;
