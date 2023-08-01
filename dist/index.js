"use strict";
/**
* 手机号校验
* @param 手机号 - 字符串
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPhone = void 0;
function isValidPhone(phone) {
    const reg = /^[3-9]\d${9]/;
    return reg.test(phone);
}
exports.isValidPhone = isValidPhone;
