const { GeneralError } = require("utils/classes");

class Error extends GeneralError {
  appliedBefore() {
    this.generateError({
      status: 400,
      msgEn: "You applied before on this job",
      msgFa: "شما برای این شغل قبلا اپلای کرده اید",
    });
  }
}

module.exports = Error;
