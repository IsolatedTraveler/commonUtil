import { WorkBook } from "../xlsx";

export function dealSheetToArray(xlsx: WorkBook): Promise<string[][]> {
  try {
    return Promise.resolve(xlsx.SheetNames.map((sheet) => {
      return XLSX.utils.sheet_to_json(xlsx.Sheets[sheet], { raw: false, header: 1, defval: '' })
    }))
  } catch (e: any) {
    return Promise.reject({ msg: '文件信息读取失败：' + e.message });
  }
}