import { validateAndFormatNumber } from "../fun"
import { PreciseDecimalParam, preciseDecimal } from "./preciseDecimal";

export function calc(firstOperand: string | number,
  secondOperand: string | number,
  operation: '+' | '-' | '*' | '/',
  param?: PreciseDecimalParam
): number | string | false {
  // 验证并格式化输入数字
  const [firstOperandInteger, firstOperandDecimals] = validateAndFormatNumber(firstOperand);
  const [secondOperandInteger, secondOperandDecimals] = validateAndFormatNumber(secondOperand);
  if (!firstOperandInteger || !secondOperandInteger) return false;
  // 确定需要扩大的小数位数
  var maxDecimals = Math.max(firstOperandDecimals.length, secondOperandDecimals.length) || 1;
  // 将操作数转换为扩大相应倍数的BigInt
  const firstOperandBigInt = BigInt(firstOperandInteger + firstOperandDecimals.padEnd(maxDecimals, '0'));
  const secondOperandBigInt = BigInt(secondOperandInteger + secondOperandDecimals.padEnd(maxDecimals, '0'));
  let resultStr: string = ''
  switch (operation) {
    case '+': resultStr = formatResult(firstOperandBigInt + secondOperandBigInt, maxDecimals); break;
    case '-': resultStr = formatResult(firstOperandBigInt - secondOperandBigInt, maxDecimals); break;
    case '*': resultStr = formatResult(firstOperandBigInt * secondOperandBigInt, maxDecimals * 2); break;
    case '/': {
      if (secondOperandBigInt === BigInt(0)) {
        console.error('除数不能为0');
        return false;
      }
      const remainderBigInt = firstOperandBigInt % secondOperandBigInt;
      const scale = BigInt(10) ** BigInt(15); // 使用当前最大小数位数作为基数
      const fractionBigInt = remainderBigInt * scale / secondOperandBigInt;
      const fractionStr = fractionBigInt.toString().slice(0, 15).padStart(15, '0'); // 保证有足够位数，不足补0
      const resultBigInt = firstOperandBigInt / secondOperandBigInt;
      resultStr = resultBigInt.toString() + '.' + fractionStr;
      break;
    }
    default:
      console.error('不支持的运算符');
      return false;
  }

  return param ? preciseDecimal(resultStr, param) : resultStr
}
function formatResult(res: bigint, maxDecimals: number): string {
  var resultStr = res.toString()
  if (maxDecimals > 0) {
    resultStr = (resultStr.slice(0, -maxDecimals) || '0') + '.' + resultStr.slice(-maxDecimals).padStart(maxDecimals, '0');
  }
  return resultStr
}