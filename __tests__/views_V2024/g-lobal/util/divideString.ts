import { divideString } from '../../../../views_V2024/g-lobal'
describe('divideString Function', () => {
  it('当输入为空字符串时，应返回空数组', () => {
    const result = divideString('');
    expect(result).toEqual([]);
  });

  it('使用默认分隔符 `-` 分割字符串', () => {
    const v = 'part1-part2-part3';
    const result = divideString(v);
    expect(result).toEqual(['part1', 'part2', 'part3']);
  });

  it('使用自定义分隔符 `,` 分割字符串', () => {
    const v = 'part1,part2,part3';
    const split = ',';
    const result = divideString(v, split);
    expect(result).toEqual(['part1', 'part2', 'part3']);
  });

  it('当输入字符串中没有分隔符时，应返回包含原字符串的单元素数组', () => {
    const v = 'singlepart';
    const result = divideString(v);
    expect(result).toEqual(['singlepart']);
  });

  it('处理特殊字符作为分隔符', () => {
    const v = 'part1@part2@part3';
    const split = '@';
    const result = divideString(v, split);
    expect(result).toEqual(['part1', 'part2', 'part3']);
  });
});