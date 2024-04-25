import { CHECK_CODE_MAP, ID_WEIGHTS, WRONG_SFZ_FORMAT } from "../var";
import { UtilResFormat, errFormat } from "./errFormat";
import { resFormat } from "./resFormat";
type Xb = 1 | 2
interface IdCardResult {
  address: string
  csrq: string
  xb: Xb
  xb_mc: '男' | '女'
}
interface IdCardRes extends UtilResFormat {
  data: IdCardResult
}
/**
 * 计算身份证校验码
 * @param sfz 身份证号码（不包含校验位）
 * @returns 校验码字符
 */
function calculateCheckDigit(sfz: string): string {
  const sum = sfz.slice(0, -1).split('').reduce((acc, digit, index) => acc + parseInt(digit) * ID_WEIGHTS[index], 0);
  return CHECK_CODE_MAP[sum % 11];
};
/**
 * 验证并处理身份证信息
 * @param sfz 身份证号码
 * @param isCheck 是否验证校验码
 * @returns 处理结果或错误信息
 */
export function idCard(sfz: string = '', isCheck = false): IdCardRes {
  if (!/^(?:\d{15}|\d{17}[\dXx])$/.test(sfz)) {
    return errFormat(WRONG_SFZ_FORMAT)
  }
  const is18 = sfz.length === 18
  if (is18 && isCheck) {
    const expectedCheckDigit = sfz.charAt(17).toUpperCase();
    const calculatedCheckDigit = calculateCheckDigit(sfz);
    if (calculatedCheckDigit !== expectedCheckDigit) {
      return errFormat(WRONG_SFZ_FORMAT);
    }
  }
  return resFormat(extractIDInfo(sfz, is18))
}
/**
 * 从身份证号码中提取详细信息
 * @param sfz 身份证号码
 * @param is18 是否为18位身份证
 * @returns 身份证详细信息对象
 */
export function extractIDInfo(sfz: string, is18: boolean): IdCardResult {
  const xbIndex = is18 ? 16 : 14;
  const xb = (parseInt(sfz.charAt(xbIndex)) % 2 || 2) as Xb;
  return {
    address: sfz.substring(0, 6),
    csrq: is18 ? sfz.substring(6, 14) : '19' + sfz.substring(6, 12),
    xb,
    xb_mc: xb === 1 ? '男' : '女'
  };
}