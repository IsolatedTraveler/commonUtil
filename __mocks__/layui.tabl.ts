export const LAYUI_TABLE_HTML = `<div class="jt-abs">
    <table id="table" lay-filter="table"></table>
    <div class="layui-form layui-border-box layui-table-view" lay-filter="LAY-table-1" lay-id="table"
      style=" height:1361px;">
      <div class="layui-table-box">
        <div class="layui-table-header">
          <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <thead>
              <tr>
                <th data-field="0" data-key="1-0-0" data-unresize="true" class=" layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </th>
                <th data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"><span>序号</span></div>
                </th>
                <th data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2"><span>姓名</span></div>
                </th>
                <th data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3"><span>性别</span></div>
                </th>
                <th data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4"><span>出生日期</span></div>
                </th>
                <th data-field="cjsj" data-key="1-0-5" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5" align="center"><span>结算日期</span></div>
                </th>
                <th data-field="cjrxm" data-key="1-0-6" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6" align="center"><span>结算人</span></div>
                </th>
                <th data-field="sfzt" data-key="1-0-7" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7" align="center"><span>收费状态</span></div>
                </th>
                <th data-field="jsje" data-key="1-0-8" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8" align="center"><span>结算金额</span></div>
                </th>
                <th data-field="fyly" data-key="1-0-9" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9" align="center"><span>费用来源</span></div>
                </th>
                <th data-field="kpzt" data-key="1-0-10" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10" align="center"><span>开票状态</span></div>
                </th>
                <th data-field="pjhm" data-key="1-0-11" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11" align="center"><span>票据号码</span></div>
                </th>
                <th data-field="pjdm" data-key="1-0-12" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12" align="center"><span>票据代码</span></div>
                </th>
                <th data-field="grdw" data-key="1-0-13" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13" align="center"><span>个人单位</span></div>
                </th>
                <th data-field="jsxx" data-key="1-0-14" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14" align="center"><span>结算信息</span></div>
                </th>
                <th data-field="sbyy" data-key="1-0-15" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15" align="center"><span>失败原因</span></div>
                </th>
                <th class="layui-table-patch">
                  <div class="layui-table-cell" style="width: 0px;"></div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="layui-table-body layui-table-main" style="height: 1282.2px;">
          <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <tbody>
              <tr data-index="0">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">何波</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1993-06-21 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-16 11:19:45</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">3</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">开票失败</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="1">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">侯兵</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1967-06-25 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-16 11:19:11</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">5</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">开票失败</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="2">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">张启英</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">女</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1958-06-11 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-15 11:31:47</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">移动收费</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">4.46</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">开票中</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14"></div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="3">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">张三</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1997-05-13 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-13 16:24:06</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">程鹏</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">2</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:2</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="4">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">李四</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1997-05-13 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-13 16:04:07</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">程鹏</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="5">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">张三</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1997-05-13 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-13 16:03:15</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">程鹏</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="6">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">程鹏</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1997-05-13 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-13 15:59:33</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">程鹏</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="7">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">小明</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2011-10-18 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-13 09:25:58</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">15.15</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:15.15</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="8">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">杨超</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1977-12-12 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 14:19:30</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="9">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">杨策</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2011-10-31 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 11:32:59</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="10">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">何波</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1993-06-21 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:49:08</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">收</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">11.5</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">开票成功</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12">20240507165601378604</div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13">个人</div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:11.5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="11">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">何波</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1993-06-21 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:39:26</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:11.5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="12">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">杨策</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2011-10-31 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:37:28</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="13">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">何波</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1993-06-21 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:33:56</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:11.5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="14" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">何波</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1993-06-21 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:24:21</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">何波</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">门诊</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:11.5</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="15" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">杨策</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2011-10-31 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:03:41</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="16" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">袁湙程</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2021-07-29 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:03:20</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="17">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">袁浥晨</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">女</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2023-10-03 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:02:02</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="18" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">岳诚</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">男</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">1949-10-13 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 10:01:26</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
              <tr data-index="19" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                  <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                      name="layTableCheckbox" lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                        class="layui-icon layui-icon-ok"></i></div>
                  </div>
                </td>
                <td data-field="rn" data-key="1-0-1" class="">
                  <div class="layui-table-cell laytable-cell-1-0-1"></div>
                </td>
                <td data-field="xm" data-key="1-0-2" class="">
                  <div class="layui-table-cell laytable-cell-1-0-2">袁浥晨</div>
                </td>
                <td data-field="xb" data-key="1-0-3" class="">
                  <div class="layui-table-cell laytable-cell-1-0-3">女</div>
                </td>
                <td data-field="csrq" data-key="1-0-4" class="">
                  <div class="layui-table-cell laytable-cell-1-0-4">2023-10-03 00:00:00</div>
                </td>
                <td data-field="cjsj" data-key="1-0-5" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-5">2024-05-07 09:56:31</div>
                </td>
                <td data-field="cjrxm" data-key="1-0-6" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-6">董华恩</div>
                </td>
                <td data-field="sfzt" data-key="1-0-7" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-7">退</div>
                </td>
                <td data-field="jsje" data-key="1-0-8" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-8">0</div>
                </td>
                <td data-field="fyly" data-key="1-0-9" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-9">挂号</div>
                </td>
                <td data-field="kpzt" data-key="1-0-10" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-10">未开票</div>
                </td>
                <td data-field="pjhm" data-key="1-0-11" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-11"></div>
                </td>
                <td data-field="pjdm" data-key="1-0-12" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-12"></div>
                </td>
                <td data-field="grdw" data-key="1-0-13" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-13"></div>
                </td>
                <td data-field="jsxx" data-key="1-0-14" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-14">现金:3</div>
                </td>
                <td data-field="sbyy" data-key="1-0-15" align="center" class="">
                  <div class="layui-table-cell laytable-cell-1-0-15"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="layui-table-fixed layui-table-fixed-l">
          <div class="layui-table-header">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
              <thead>
                <tr>
                  <th data-field="0" data-key="1-0-0" data-unresize="true" class=" layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="layui-table-body" style="height: auto;">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
              <tbody>
                <tr data-index="0">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="1">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="2">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="3">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="4">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="5">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="6">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="7">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="8">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="9">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="10">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="11">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="12">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="13">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="14" class="">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="15" class="">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="16" class="">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="17">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="18" class="">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
                <tr data-index="19" class="">
                  <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox"
                        name="layTableCheckbox" lay-skin="primary">
                      <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i
                          class="layui-icon layui-icon-ok"></i></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="layui-table-page">
        <div id="layui-table-page1">
          <div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-6"><span
              class="layui-laypage-limits"><select lay-ignore="">
                <option value="10">10 条/页</option>
                <option value="20" selected="">20 条/页</option>
                <option value="50">50 条/页</option>
                <option value="100">100 条/页</option>
                <option value="200">200 条/页</option>
                <option value="500">500 条/页</option>
                <option value="1000">1000 条/页</option>
                <option value="1500">1500 条/页</option>
                <option value="3000">3000 条/页</option>
                <option value="5000">5000 条/页</option>
              </select></span><span class="layui-laypage-count">共 1223 条</span><a href="javascript:;"
              class="layui-laypage-prev layui-disabled" data-page="0"><i class="layui-icon"></i></a><span
              class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;"
              data-page="2">2</a><a href="javascript:;" data-page="3">3</a><a href="javascript:;" data-page="4">4</a><a
              href="javascript:;" data-page="5">5</a><span class="layui-laypage-spr">…</span><a href="javascript:;"
              class="layui-laypage-last" title="尾页" data-page="62">62</a><a href="javascript:;"
              class="layui-laypage-next" data-page="2"><i class="layui-icon"></i></a><span
              class="layui-laypage-skip">到第<input type="text" min="1" value="1" class="layui-input">页<button
                type="button" class="layui-laypage-btn">确定</button></span></div>
        </div>
      </div>
      <style lay-style-id="table">
        .laytable-cell-1-0-0 {
          width: 48px;
        }

        .laytable-cell-1-0-1 {
          width: 40px;
        }

        .laytable-cell-1-0-2 {
          width: 80px;
        }

        .laytable-cell-1-0-3 {
          width: 80px;
        }

        .laytable-cell-1-0-4 {
          width: 150px;
        }

        .laytable-cell-1-0-5 {
          width: 130px;
        }

        .laytable-cell-1-0-6 {
          width: 60px;
        }

        .laytable-cell-1-0-7 {
          width: 120px;
        }

        .laytable-cell-1-0-8 {
          width: 120px;
        }

        .laytable-cell-1-0-9 {
          width: 80px;
        }

        .laytable-cell-1-0-10 {
          width: 60px;
        }

        .laytable-cell-1-0-11 {
          width: 150px;
        }

        .laytable-cell-1-0-12 {
          width: 120px;
        }

        .laytable-cell-1-0-13 {
          width: 80px;
        }

        .laytable-cell-1-0-14 {
          width: 300px;
        }

        .laytable-cell-1-0-15 {
          width: 300px;
        }
      </style>
    </div>
  </div>`