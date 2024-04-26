var result = {}

if (is_blank(jkdm)) {
  jkdm = '01'
}

var jkcs = db.jtdzfp.lower().select("""select distinct t.dz, t1.dm, t1.sdz
                                           from T_DZPJ_JKPZ t, T_DZPJ_JKCS t1
                                          where t.jlzt = '1'
                                            and t.lx = '1'
                                            and t.jgid = t1.jgid
                                            and t.dm = t1.jkdm
                                            and t.jgid = #{ jgid }
                                            and t.dm = #{ jkdm }
                                     """)
if (not_null(jkcs)) {
  for (row in jkcs) {
    var dm = row.dm;
    var value = row.sdz;
    if (is_blank(result.url)) {
      var url = (row.dz + '').trim()
      if (url.lastIndexOf('/') < url.length() - 1) {
        url = url + '/'
      }
      result.url = url;
    }
    if (dm == 'appid') { //帐号
      result.appid = value;
    } else if (dm == 'kpdbm') { //开票点编码
      result.kpdbm = value;
    } else if (dm == 'version') { //版本值
      result.version = value;
    } else if (dm == 'key') { //key值
      result.key = value;
    }
  }
}
return result