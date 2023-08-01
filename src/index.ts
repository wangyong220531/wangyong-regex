/**
* 手机号校验
* @param 手机号 - 字符串
*/
 
export function isValidPhone(phone: string): boolean {
    const reg = /^[3-9]\d${9]/
    return reg.test(phone)
}
