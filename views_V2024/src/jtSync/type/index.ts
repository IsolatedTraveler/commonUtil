export interface StartRule {
  [key: string]: StartRule
}
export interface JudgeLoad {
  [key: string]: Promise<any> | null
}