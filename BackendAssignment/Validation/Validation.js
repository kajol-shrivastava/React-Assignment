const isValid=function(value){
    if(typeof value=="undefined"||value==null)return false
    else if(typeof value=="String"&&value.trim().length==0)return false
    else return true
}

const isValidRequest=function(value){
    return Object.keys(value).length!==0
}

const isValidMail = function (v) {
    return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(v);
  };
  
  
  const isValidMobile = function (num) {
    return /^[6789]\d{9}$/.test(num);
  };

  module.exports={isValid,isValidRequest,isValidMail,isValidMobile}