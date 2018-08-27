const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateArticleInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.body = !isEmpty(data.body) ? data.body : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Article title field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Article description field is required";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Article body field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
