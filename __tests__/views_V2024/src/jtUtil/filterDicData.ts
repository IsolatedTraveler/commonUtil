import { filterDicData } from '../../../../views_V2024/main'

describe('filterDicData function', () => {
  it('应正确过滤出 mj 为特定值的元素', () => {
    const testData = [
      { mj: 1, other: 'data1' },
      { mj: 2, other: 'data2' },
      { mj: 1, other: 'data3' },
      { mj: 3, other: 'data4' },
    ];

    const filteredData = filterDicData(testData, 1);
    expect(filteredData).toEqual([
      { mj: 1, other: 'data1' },
      { mj: 1, other: 'data3' },
    ]);
  });

  it('应处理空数组输入', () => {
    const emptyData: any[] = [];
    const filteredData = filterDicData(emptyData, 1);
    expect(filteredData).toEqual([]);
  });

  it('应处理 mj 不存在于数组中的情况', () => {
    const testData = [
      { mj: 2, other: 'data2' },
      { mj: 3, other: 'data4' },
    ];
    const filteredData = filterDicData(testData, 1);
    expect(filteredData).toEqual([]);
  });

  it('应处理 mj 为默认值的情况', () => {
    const testData = [
      { mj: 1, other: 'data1' },
      { mj: 2, other: 'data2' },
    ];
    const filteredData = filterDicData(testData);
    expect(filteredData).toEqual([{ mj: 1, other: 'data1' }]);
  });
});