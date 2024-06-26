export interface StartRule {
  [key: string]: StartRule | boolean | undefined
  def?: StartRule
}
export interface JudgeLoad {
  [key: string]: Promise<any> | null
}