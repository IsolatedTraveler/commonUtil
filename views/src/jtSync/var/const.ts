
interface JudgeLoad {
  [key: string]: Promise<any> | null
}
export const dicUrl = '/public/data/syncLoad.json', dicUrlBySql = '/magicJq/jtmis/ty/third/s-pzxx',
  judgeLoad: JudgeLoad = {}