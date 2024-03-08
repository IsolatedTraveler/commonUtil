export const codesArr = [
  { code: '00', msg: '不明', approve: false, extra: true },
  { code: '01', msg: 'AI审核通过', approve: true },
  { code: '02', msg: '人工审核通过', approve: true },
  { code: '03', msg: '人工审核警告通过', approve: true },
  { code: '10', msg: '待人工审核', approve: false },
  { code: '11', msg: '超时', approve: false, extra: true },
  { code: '30', msg: 'AI审核打回', approve: false },
  { code: '31', msg: '人工审核打回', approve: false },
  { code: '99', msg: '其他', approve: false, extra: true }
]