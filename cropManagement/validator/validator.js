const mongoose = require("mongoose")


const isValid = function (value) {
  if (typeof value == "undefined" || value == null) return false;
  if (typeof value == "string" && value.trim().length == 0) return false;
  return true;
};


const isValidRequest = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};


const isValidName = function (name) {
  return /^[a-zA-Z]{2,30}$/.test(name)
}

const isValidCordinate = function (value) {
  return /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/.test(value)
}


const isValidMail = function (v) {
  return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(v);
};

const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId)
}


const isValidPassword = function (password) {
  if (password.length >= 8 && password.length <= 15) {
    return true
  }
  return false
}

module.exports={isValid,isValidMail,isValidPassword,isValidRequest,isValidObjectId,isValidName,isValidCordinate}