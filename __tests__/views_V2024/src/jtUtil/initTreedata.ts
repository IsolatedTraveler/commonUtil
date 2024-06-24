import { initTreedata, TreeNode } from '../../../../views_V2024/main'
describe('initTreedata', () => {
  test('should transform flat data to tree and set initial state correctly', () => {
    const data: TreeNode[] = [
      { id: 1, fid: null },
      { id: 2, fid: 1 },
      { id: 3, fid: 1 },
      { id: 4, fid: 2 },
    ];
    const tree = initTreedata(data, 'id', 'fid', true);
    expect(tree).toEqual([{
      id: 1, fid: null, state: 'closed', children: [
        {
          id: 2, fid: 1, state: 'closed', children: [
            { id: 4, fid: 2, children: [] }
          ]
        },
        { id: 3, fid: 1, children: [] },
      ]
    }]);
  });
});