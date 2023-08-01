"use strict";
/**
* 手机号校验
* @param 手机号 - 字符串
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPhone = void 0;
function isValidPhone(phone) {
    const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    return reg.test(phone);
}
exports.isValidPhone = isValidPhone;
