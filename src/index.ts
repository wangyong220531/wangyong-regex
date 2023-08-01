/**
 * 手机号校验
 * @param 手机号 - 字符串
 */

export function isValidPhone(phone: string): boolean {
    const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    return reg.test(phone)
}
