export function getCol() {
  $('#yzmx_eidt_div_xy').width(760)
  return {
    title: '说明书',
    field: 'action',
    width: 80,
    align: 'center',
    formatter: function (_v: string, row: any) {
      return row.lb == '01' || row.lb == '02' || row.lb == '03' ? `<a href="javascript:jt_third_hlyy.instruction('${row.ypid}')" class="view-xmmc-btn">查看说明书</a>` : '';
    }
  }
}