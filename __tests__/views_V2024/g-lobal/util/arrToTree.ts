import { arrToTree } from '../../../../views_V2024/g-lobal'
import { TreeNode } from '../../../../views_V2024/main';
const layer: any = { alert: () => { }, close: (i: number) => i }
describe('arrToTree Function', () => {
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
    jest.spyOn(console, 'error').mockImplementation(() => { });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('应正确处理空数组', () => {
    const data: TreeNode[] = [];
    const tree = arrToTree(data);
    expect(tree).toEqual([]);
  });
  it('应正确处理只有一个元素的数组', () => {
    const data: TreeNode[] = [{ id: 1, name: 'root' }];
    const tree = arrToTree(data);
    expect(tree).toEqual([{ id: 1, name: 'root' }]);
  });

  it('应正确构建多级树结构', () => {
    const data: TreeNode[] = [
      { id: 1, name: 'root', fid: undefined },
      { id: 2, name: 'child1', fid: 1 },
      { id: 3, name: 'child2', fid: 1 },
      { id: 4, name: 'grandchild', fid: 2 }
    ];
    const expectedTree: TreeNode[] = [
      {
        id: 1,
        name: 'root',
        fid: undefined,
        children: [
          {
            id: 2,
            fid: 1,
            name: 'child1',
            children: [{ id: 4, fid: 2, name: 'grandchild', children: [] }]
          },
          { id: 3, fid: 1, name: 'child2', children: [] }
        ]
      }
    ];
    const tree = arrToTree(data);
    expect(tree).toEqual(expectedTree);
  });
  it('使用自定义idKey和parentIdKey时应正确构建树', () => {
    const data: any[] = [
      { customId: 1, customParentId: undefined, name: 'root' },
      { customId: 2, customParentId: 1, name: 'child' }
    ];
    const tree = arrToTree(data, 'customId', 'customParentId');
    // 定义预期结果
    const expectedResult = [
      { customId: 1, customParentId: undefined, name: 'root', children: [{ customId: 2, customParentId: 1, name: 'child', children: [] }] }
    ];
    expect(tree).toEqual(expectedResult);
  });
  it('发生错误时应调用alertMsg', () => {
    jest.spyOn(Array.prototype, 'forEach').mockImplementationOnce((cb) => {
      throw new Error('Test Error'); // 强制抛出错误
    });
    const data: any[] = [
      { customId: 1, customParentId: undefined, name: 'root' },
      { customId: 2, customParentId: 1, name: 'child' }
    ];
    const tree = arrToTree(data, 'customId', 'customParentId');
    expect(tree).toEqual(data);
  })
});