import { jkUrl, readJkkInfoReject, readJkkInfoResolve } from "../var";

export function readJkkInfoByMagic(rhcv_id: string) {
  return w.jtSync.commonQueryAsyncHttppost_callback(jkUrl, { rhcv_id }).catch((res) => {
    readJkkInfoReject(res)
    return Promise.reject()
  }).then(({ code, data, message }) => {
    if (code == 1) {
      var birthday = data.birthday || ''
      if (birthday) {
        birthday = [birthday.substring(0, birthday.length - 4), birthday.substr(-4, 2), birthday.substr(-2)]
        if (birthday[0].length == 2) {
          birthday[0] = '19' + birthday[0]
        }
        birthday = birthday.join('/')
      }
      readJkkInfoResolve({
        bsh: data.id_card_value,
        bslx: data.id_card_type_code,
        xm: data.name,
        sfzh: data.id_card_type_code == '01' ? data.id_card_value : '',
        sex: data.gender_code == '1' ? '1-男' : data.gender_code == '2' ? '2-女' : '',
        lxdh: data.mobilephone || data.contact_phone || '',
        birthday: birthday,
        jtqhdm: '',
        jtqhmc: ''
      })
    } else {
      return Promise.reject(new Error(message))
    }
  })
}