import { TreeNode, setInitialState } from '../../../../views_V2024/main'

describe('setInitialState function', () => {
  it('应正确初始化空树', () => {
    const emptyTree: TreeNode[] = [];
    setInitialState(emptyTree);
    expect(emptyTree).toEqual([]);
  });

  it('应正确初始化单层树', () => {
    const singleLayerTree: TreeNode[] = [
      {},
      {},
    ];
    setInitialState(singleLayerTree);
    expect(singleLayerTree).toEqual([
      { },
      {},
    ]);
  });

  it('应正确初始化多层树', () => {
    const multiLayerTree: TreeNode[] = [
      {
        children: [
          {},
          {
            children: [
              {},
              {},
            ],
          },
        ],
      },
    ];
    setInitialState(multiLayerTree);
    expect(multiLayerTree).toEqual([
      {
        state: 'closed',
        children: [
          {  },
          {
            state: 'closed',
            children: [
              {  },
              {  },
            ],
          },
        ],
      },
    ]);
  });
});