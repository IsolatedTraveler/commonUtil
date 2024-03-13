
interface JudgeLoad {
  [key: string]: Promise<any> | null
}
export const dicUrl = '/public/data/syncLoad.json', dicUrlBySql = '/magicJq/xt01-xtjc/ty/third/s-pzxx',
  judgeLoad: JudgeLoad = {}