import { unique } from '../../../../views_V2024/main';
describe('unique 函数', () => {
  test('基本类型数组去重', () => {
    // 测试基本类型的数组去重
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(unique(input)).toEqual(expectedOutput);
  });

  test('对象数组去重', () => {
    // 测试对象数组去重
    const input = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Alice' }];
    const expectedOutput = [{ name: 'Alice' }, { name: 'Bob' }];
    expect(unique(input, false)).toEqual(expectedOutput);
  });

  test('空数组去重', () => {
    // 测试空数组去重
    const input: any[] = [];
    expect(unique(input)).toEqual(input);
  });

  test('包含重复元素的数组去重', () => {
    // 测试包含重复元素的数组去重
    const input = ['apple', 'banana', 'apple', 'orange'];
    const expectedOutput = ['apple', 'banana', 'orange'];
    expect(unique(input)).toEqual(expectedOutput);
  });
});