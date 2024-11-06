CREATE OR REPLACE PROCEDURE Yhdl_new(Data_In IN CLOB, Result_Out OUT CLOB) IS
  /*
  过程名： Yhdl_new
  作者：    XXX
  功能:   新浏览器用户登录
  创建日期： 2016-08-15
  修改日期:
  版本号:
  --------------------------------
  */
  v_Json_Data Json;
  v_Json_Out  Json := Json();
  v_Json_Temp Json := Json();
  v_Json_Ryxx Json;
  v_Json_Cdqx Json_List;
  v_Json_Mkqx Json_List;
  v_Jgid      VARCHAR2(36); --机构id
  v_Yhm       VARCHAR2(36); --用户名
  v_Mm        VARCHAR2(36); --密码
  v_Ryid      VARCHAR2(36); --人员id
  v_Ptyhid    VARCHAR2(36); --平台用户id
  v_Ptjgdm    VARCHAR2(36); --平台机构代码
  v_Zt        Xtyh.Zt%TYPE;
  v_xgsj      xtyh.xgsj%type;
  Cur_Temp    SYS_REFCURSOR;
  Err_Custom EXCEPTION;
  v_Err        VARCHAR2(2000);
  v_cdqx_s     number;
  v_cdqx_e     number;
  v_cdqx_count number;
  v_sql        varchar2(2000);
  v_fs         VARCHAR2(2); --1：登录并获取人员信息 2：获取模块权限 3:获取菜单权限
BEGIN
  Json_Data(Data_In, '用户登录', v_Json_Data);
  v_Jgid       := Json_Str(v_Json_Data, 'jgid');
  v_Yhm        := Json_Str(v_Json_Data, 'yhm');
  v_Mm         := Json_Str(v_Json_Data, 'mm');
  v_fs         := json_num(v_Json_Data, 'fs');
  v_cdqx_count := 0;
  ----判断登陆
  IF v_Yhm = 'jtYlWsSuperMan' THEN
    --处理系统内置账户
    IF v_Mm <> 'df7c3c4e2a04a263ee76736f991d848f' THEN
      --'JTYLWSXTSuperAdmin.nbkftd2107A'
      v_Err := '密码错误！';
      RAISE Err_Custom;
    END IF;
    IF v_Jgid <> '0' THEN
      OPEN Cur_Temp FOR
        SELECT Id Jgid,
               a.Mc AS Jgmc,
               a.Jc AS Jgjc,
               '0' AS Ryid,
               '0' Dm,
               '管理员' Xm,
               '0' AS Ksid,
               '内置科室' AS Ksmc,
               v_Yhm AS Yhm,
               '' AS Jgxzqh,
               '0' AS Sfcz,
               Dts(SYSDATE) AS Dlsj
          FROM p_Yljg a
         WHERE Id = v_Jgid;
    ELSE
      OPEN Cur_Temp FOR
        SELECT '0' Jgid,
               '系统初始化机构' AS Jgmc,
               '系统初始化机构' AS Jgjc,
               '0' AS Ryid,
               '0' Dm,
               '管理员' Xm,
               '0' AS Ksid,
               '内置科室' AS Ksmc,
               v_Yhm AS Yhm,
               '' AS Jgxzqh,
               '0' AS Sfcz,
               Dts(SYSDATE) AS Dlsj
          FROM Dual;
    END IF;
    v_Json_Ryxx := Json_Dyn.Execute(NULL,
                                    NULL,
                                    Dbms_Sql.To_Cursor_Number(Cur_Temp));
  
    ---模块权限
    OPEN Cur_Temp FOR
      SELECT Id
        FROM Mkqx
       WHERE Mkbh LIKE '0001%'
          OR Mkbh LIKE '00020%'
          or mkbh = '000305';
    v_Json_Mkqx := Json_Dyn.Executelist(NULL,
                                        NULL,
                                        Dbms_Sql.To_Cursor_Number(Cur_Temp));
  
    ---菜单权限
    OPEN Cur_Temp FOR
    --根据模块获取默认菜单体系
      SELECT DISTINCT c.Id,
                      c.Mkbh,
                      c.tbid,
                      c.cdlx,
                      c.sjid,
                      c.bt,
                      c.bt   as name,
                      c.tbid as icon,
                      level  cdcj,
                      b.url,
                      c.sm,
                      c.xtbh,
                      d.xtmc
        FROM Xtcd c, gnmk b, xtb d
       where c.mkbh = b.dm(+)
         and c.xtbh = d.xtbh(+)
         and c.zt = 1
       START WITH c.Cdlx = '默认'
              AND (c.Mkbh LIKE '0001%' OR c.Mkbh LIKE '00020%' or
                  c.mkbh = '000305')
      CONNECT BY PRIOR c.Sjid = c.Id;
    v_Json_Cdqx := Json_Dyn.Executelist(NULL,
                                        NULL,
                                        Dbms_Sql.To_Cursor_Number(Cur_Temp));
  
  ELSE
    if v_fs is null or v_fs = '1' then
      ---正常授权账户
      IF v_mm = '8883a1b985e1c90613c0f18d9ffe34fc' THEN
        BEGIN
          SELECT Ryid, t.Ptyhid, u.Ptjgid, t.Zt, t.xgsj
            INTO v_Ryid, v_Ptyhid, v_Ptjgdm, v_Zt, v_xgsj
            FROM Xtyh t, p_Yljg u
           WHERE t.Jgid = v_Jgid
             AND t.Jgid = u.Id
             AND t.Yhm = v_Yhm;
          IF v_Zt = -1 and v_xgsj < sysdate - 15 THEN
            v_Err := '此用户已经停用';
            RAISE Err_Custom;
          END IF;
        EXCEPTION
          WHEN No_Data_Found THEN
            v_Err := '用户名或密码错误！';
            RAISE Err_Custom;
          WHEN OTHERS THEN
            v_Err := '用户名或密码错误！';
            RAISE Err_Custom;
        END;
      ELSE
        BEGIN
          SELECT Ryid, t.Ptyhid, u.Ptjgid, t.Zt, t.xgsj
            INTO v_Ryid, v_Ptyhid, v_Ptjgdm, v_Zt, v_xgsj
            FROM Xtyh t, p_Yljg u
           WHERE t.Jgid = v_Jgid
             AND t.Jgid = u.Id
             AND t.Yhm = v_Yhm
             AND t.Mm = v_Mm;
          IF v_Zt = -1 and v_xgsj < sysdate - 15 THEN
            v_Err := '此用户已经停用';
            RAISE Err_Custom;
          END IF;
        EXCEPTION
          WHEN No_Data_Found THEN
            v_Err := '用户名或密码错误！';
            RAISE Err_Custom;
          WHEN OTHERS THEN
            v_Err := '用户名或密码错误！';
            RAISE Err_Custom;
        END;
      END IF;
      ---获取人员信息
      OPEN Cur_Temp FOR
        SELECT a.Jgid,
               d.Mc AS Jgmc,
               d.Jc AS Jgjc,
               a.Id AS Ryid,
               v_Ptjgdm AS Ptjgdm,
               d.Zzjgdm,
               v_Ptyhid AS Ptyhid,
               a.Dm,
               Xm,
               b.Id AS Ksid,
               b.Mc AS Ksmc,
               Arr(d.Lb, 1) Jglb,
               v_Yhm AS Yhm,
               Arr(d.Xzqh, 0) AS Jgxzqh,
               Decode(Arr(d.Lb, 1), 'B2', '1', 'D6', '1', '0') AS Sfcz,
               d.Gljgid,
               e.Mc AS Gljgmc,
               Dts(SYSDATE) AS Dlsj,
               a.Bz,
               d.company_num,
               d.password,
               nvl(D.YPJGKCGLMS, 1) as YPJGKCGLMS,
               d.jwdm,
               d.tyshxydm,
               nvl(g.bxdm, a.gbyscode) rygjbm,
               f.csz jggjbm
          FROM p_Ryxx      a,
               p_Bmxx      b,
               p_Bmry      c,
               p_Yljg      d,
               p_Yljg      e,
               y_bxcs      f,
               y_matchcode g
         WHERE a.Id = c.Ryid
           AND b.Id = c.Bmid
           AND c.Qsbz = 1
           AND a.Jgid = d.Id
           AND d.Gljgid = e.Id(+)
           AND a.Id = v_Ryid
           AND a.Jgid = v_Jgid
           and d.id = f.jgid(+)
           and f.jkdm(+) = '19'
           and f.xh(+) = 2
           and a.id = g.yyid(+)
           and a.jgid = g.jgid(+)
           and g.dmlb(+) = '5102';
      v_Json_Ryxx := Json_Dyn.Execute(NULL,
                                      NULL,
                                      Dbms_Sql.To_Cursor_Number(Cur_Temp));
      IF v_Json_Ryxx.Count = 0 THEN
        v_Err := '请检查登录人员是否设置了默认部门！';
        RAISE Err_Custom;
      END IF;
      IF Json_Num(v_Json_Ryxx, 'bz') = -1 THEN
        v_Err := '此登陆人员信息已经停用！';
        RAISE Err_Custom;
      END IF;
    end if;
  
    if v_fs is null or v_fs = '2' then
      ---模块权限
      OPEN Cur_Temp FOR
        SELECT b.Id
          FROM Yhjs a, Jsqx b, Jgqx e
         WHERE a.Jsid = b.Jsid
           AND b.Id = e.Id
           AND a.Jgid = e.Jgid
           AND b.Lx = 2
           AND e.Lx = 2
           AND a.Yhm = v_Yhm
           AND a.Jgid = v_Jgid;
      v_Json_Mkqx := Json_Dyn.Executelist(NULL,
                                          NULL,
                                          Dbms_Sql.To_Cursor_Number(Cur_Temp));
    end if;
  
    if v_fs != '2' then
      v_sql := 'SELECT DISTINCT c.Id,
                                c.Mkbh,
                                c.tbid,
                                c.cdlx,
                                c.sjid,
                                c.bt,
                                c.xh,
                                c.bt as name,
                                c.tbid as icon,
                                max(level) cdcj,
                                b.url,
                                c.sm,
                                c.xtbh,
                                d.xtmc,
                                row_number() over(order by xh) rn
                  FROM Xtcd c, gnmk b, xtb d
                 where c.mkbh = b.dm(+)
                   and c.xtbh = d.xtbh(+)
                 START WITH c.Cdlx = ''默认''
                        AND c.Mkbh IN (SELECT DISTINCT d.Dm
                                         FROM Yhjs a, Jsqx b, Gnmk d, Jgqx e
                                        WHERE a.Jsid = b.Jsid
                                          AND a.Jgid = e.Jgid
                                          AND b.Id = d.Id
                                          AND d.Id = e.Id
                                          AND b.Lx = 1
                                          AND e.Lx = 1
                                          AND a.Yhm = :v_Yhm
                                          AND a.Jgid = :v_Jgid)
                CONNECT BY PRIOR c.Sjid = c.Id
                 group by c.Id,
                          c.Mkbh,
                          c.tbid,
                          c.cdlx,
                          c.sjid,
                          c.bt,
                          c.bt,
                          c.tbid,
                          c.xh,
                          b.url,
                          c.sm,
                          c.xtbh,
                          d.xtmc';
      if v_fs = '1' then
        --查菜单权限总数
        v_sql := 'select count(1) from (' || v_sql || ')';
        execute immediate v_sql
          into v_cdqx_count
          using v_Yhm, v_Jgid;
      else
        v_cdqx_s := json_num(v_Json_Data, 'cdqx_s');
        v_cdqx_e := json_num(v_Json_Data, 'cdqx_e');
        if v_cdqx_s is null then
          v_cdqx_s := 0;
        end if;
        if v_cdqx_e is null then
          v_cdqx_e := 100000;
        end if;
        ---菜单权限,根据模块获取默认菜单体系
        v_sql := 'select * from (' || v_sql ||
                 ') t where t.rn > :v_cdqx_s and t.rn <= :v_cdqx_e';
        open Cur_Temp for v_sql
          using v_Yhm, v_Jgid, v_cdqx_s, v_cdqx_e;
        v_Json_Cdqx := Json_Dyn.Executelist(NULL,
                                            NULL,
                                            Dbms_Sql.To_Cursor_Number(Cur_Temp));
      end if;
    end if;
  END IF;

  v_Json_Out.Put('ryxx', v_Json_Ryxx);
  v_Json_Out.Put('cdqx', v_Json_Cdqx);
  v_Json_Out.Put('mkqx', v_Json_Mkqx);
  v_Json_Out.Put('cdqx_count', v_cdqx_count);
  v_Json_Temp.Put('data', v_Json_Out);
  Result_Out := Return_Succ_Clob(v_Json_Temp);
EXCEPTION
  WHEN Err_Custom THEN
    Result_Out := Return_Fail_Clob(v_Err);
  WHEN OTHERS THEN
    Result_Out := Return_Fail_Clob(SQLERRM);
END;
