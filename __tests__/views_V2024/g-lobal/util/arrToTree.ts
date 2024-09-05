import {arrToTree} from '../../../../views_V2024/g-lobal';
import {TreeNode} from '../../../../views_V2024/main';

// Mocks for testing purposes
function alert(_a: string) {}
function close() {}
function error() {}

const layer: any = {alert, close};
const $: any = {messager: {alert}};
const console: any = {error};

describe('arrToTree Function', () => {
  beforeEach(() => {
    jest.spyOn(layer, 'alert').mockImplementation(alert as any);
    jest.spyOn(layer, 'close').mockImplementation(close as any);
    jest.spyOn($.messager, 'alert').mockImplementation(alert as any);
    jest.spyOn(console, 'error').mockImplementation(error as any);
    window.alert = jest.fn(alert);
    (window as any).layer = layer;
    (window as any).console = console;
  });

  afterEach(() => {
    (window as any).$ = undefined;
    (window as any).console = undefined;
    jest.clearAllMocks();
  });

  it('应正确处理空数组', () => {
    const data: TreeNode[] = [];
    const tree = arrToTree(data);
    expect(tree).toEqual([]);
  });

  it('应正确处理只有一个元素的数组', () => {
    const data: TreeNode[] = [{id: 1, name: 'root'}];
    const tree = arrToTree(data);
    expect(tree).toEqual([{id: 1, name: 'root'}]);
  });

  it('应正确构建多级树结构', () => {
    const data: TreeNode[] = [
      {id: 1, name: 'root', fid: undefined},
      {id: 2, name: 'child1', fid: 1},
      {id: 3, name: 'child2', fid: 1},
      {id: 4, name: 'grandchild', fid: 2}
    ];
    const expectedTree: TreeNode[] = [
      {
        id: 1,
        name: 'root',
        fid: undefined,
        children: [
          {
            id: 2,
            name: 'child1',
            fid: 1,
            children: [{id: 4, name: 'grandchild', fid: 2, children: []}]
          },
          {id: 3, name: 'child2', fid: 1, children: []}
        ]
      }
    ];
    const tree = arrToTree(data);
    expect(tree).toEqual(expectedTree);
  });

  it('使用自定义idKey和parentIdKey时应正确构建树', () => {
    const data: any[] = [
      {customId: 1, customParentId: undefined, name: 'root'},
      {customId: 2, customParentId: 1, name: 'child'}
    ];
    const tree = arrToTree(data, 'customId', 'customParentId');
    const expectedResult = [{customId: 1, customParentId: undefined, name: 'root', children: [{customId: 2, customParentId: 1, name: 'child', children: []}]}];
    expect(tree).toEqual(expectedResult);
  });

  it('当数据源包含无效的父键时应正确处理', () => {
    const data: TreeNode[] = [
      {id: 1, name: 'root', fid: undefined},
      {id: 2, name: 'child1', fid: 999}
    ];
    const tree = arrToTree(data);
    expect(tree).toEqual([
      {
        id: 1,
        name: 'root',
        fid: undefined,
        children: []
      },
      {
        id: 2,
        name: 'child1',
        fid: 999,
        children: []
      }
    ]);
  });

  it('当数据源包含重复的主键时应抛出错误', () => {
    const data: TreeNode[] = [
      {id: 1, name: 'root', fid: undefined},
      {id: 1, name: 'anotherRoot', fid: undefined}
    ];
    arrToTree(data);
    expect(layer.alert).toHaveBeenCalledWith('不能有两个相同的主键【1】。');
  });

  it('当数据源包含非数字型主键时应正确处理', () => {
    const data: any[] = [
      {id: '1', name: 'root', fid: undefined},
      {id: '2', name: 'child1', fid: '1'}
    ];
    const tree = arrToTree(data);
    expect(tree).toEqual([
      {
        id: '1',
        name: 'root',
        fid: undefined,
        children: [
          {
            id: '2',
            name: 'child1',
            fid: '1',
            children: []
          }
        ]
      }
    ]);
  });

  it('当数据源为空时应返回空数组', () => {
    const data: TreeNode[] = [];
    const tree = arrToTree(data);
    expect(tree).toEqual([]);
  });

  it('当数据源中存在多个根节点时应正确处理', () => {
    const data: TreeNode[] = [
      {id: 1, name: 'root1', fid: undefined},
      {id: 2, name: 'root2', fid: undefined}
    ];
    const tree = arrToTree(data);
    expect(tree).toEqual([
      {id: 1, name: 'root1', fid: undefined, children: []},
      {id: 2, name: 'root2', fid: undefined, children: []}
    ]);
  });
});
