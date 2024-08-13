declare module 'GMAddInput' {
  export interface TableCol {
    label: string
    name: string
    def?: string | number
    type?: 'input'
  }
  export interface TableColDate extends TableCol {
    type: 'date'
    min: string
    max: string
  }
  export interface TableColSelect extends TableCol {
    type: 'select'
    data: SelectOption[]
    id?: string
    mc?: string
  }
  export type TableColSet = TableColSelect | TableColDate | TableCol
  export interface AddInputConfig {
    elem: string
    cols: TableColSet[]
    selectIndex?: number
  }
  export let config: AddInputConfig
  export { ADD_INPUT_IDS } from './index'
}