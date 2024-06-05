import { gridColumnsFormat } from "../../../../views_V2024/main";

describe('gridColumnsFormat Function', () => {
  var width:number
  it('should format columns correctly without specified width', () => {
    const input = [[['field1', 'Title 1'], ['field2']]];
    const output = gridColumnsFormat(input);
    expect(output).toEqual([
      [
        { field: 'field1', title: 'Title 1', align: 'cente', sortable: false, rowspan: 1, colspan: 1 },
        { field: 'field2', title: '', align: 'cente', sortable: false, rowspan: 1, colspan: 1 }
      ]
    ]);
  });

  it('should apply default width when specified', () => {
    const input = [[['field1', 'Title 1']]];
    const output = gridColumnsFormat(input, 100);
    expect(output).toEqual([
      [
        { field: 'field1', title: 'Title 1', align: 'cente', sortable: false, rowspan: 1, colspan: 1, width: 100 }
      ]
    ]);
    expect(output[0][0].formatter).toBeUndefined();
  });

  it('should override default width with specified column width', () => {
    width = 200
    const input = [[['field1', 'Title 1', width]]];
    const output = gridColumnsFormat(input, 100);
    expect(output[0][0].formatter).toBeTruthy();
    expect(output[0][0].formatter('longText1234567')).toEqual('<span title=longText1234567>longText1234567</span>');
    expect(output[0][0].formatter('longText')).toEqual('longText');
    delete output[0][0].formatter
    expect(output).toEqual([
      [
        { field: 'field1', title: 'Title 1', align: 'cente', sortable: false, rowspan: 1, colspan: 1, width }
      ]
    ]);
  });

  it('should merge options with column definitions', () => {
    const input = [[['field1', 'Title 1']]];
    const options = { align: 'right', sortable: true };
    const output = gridColumnsFormat(input, undefined, options);
    expect(output).toEqual([
      [
        { field: 'field1', title: 'Title 1', align: 'right', sortable: true, rowspan: 1, colspan: 1 }
      ]
    ]);
  });
});