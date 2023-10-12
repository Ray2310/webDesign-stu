import { add, subtract } from './output.js';
/**
 * 实现npm的导入
 * 1. 通过npm install 软件包名 : 实现所需要包的导入
 * 
 */
// const dayjs = require('dayjs')
// const nowDate = dayjs().format('YYYY-MM-DD hh:mm:ss')
// console.log(nowDate)

/**
 * 实现本地包的导入
 * 1. ECMAScript标准-默认导出和导入
 * 导入output.js中的add方法 和 fix 方法 实现 + 和 * 法 运算
 */

const addRes = add(12,22)
// console.log("通过调用output中的add方法得到的结果是: " + addRes)
// const fixRes = out(6,5)
// console.log("通过调用output中的fix方法得到的结果是: " + fixRes)



