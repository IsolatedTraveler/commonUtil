import {ajaxPost, ajaxPostXml} from '../../../g-lobal/xhr';

export function upload() {
  return ajaxPost('magic/YY41/20/10/m-crbsc', {id: '', type: 'Add'}).then((res: any) => {
    if (res.code == 1) {
      const {url, data, jmUrl, timestamp, token} = res.data;
      return ajaxPostXml(url, data).then((res: any) => {
        const regex = /<return>(.*?)<\/return>/;
        const match = res.match(regex);
        if (match && match[1]) {
          const returnNodeValue = match[1];
          return ajaxPost('magic' + jmUrl, {data: returnNodeValue, timestamp, token}).then(res => {
            if (res.code == 1) {
              console.log(res.data);
            } else {
              return Promise.reject('第三方返回数据解密失败，请重试');
            }
          });
        } else {
          return Promise.reject({message: '第三方返回数据未找到 return 节点'});
        }
      });
    } else {
      return Promise.reject(res);
    }
  });
}
