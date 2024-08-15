declare module 'GMAddInput' {
  export interface TableCol {
    field?: string | number
    title: string
    def?: string | number
    type?: 'input'
    placeholder?: string
  }
  export interface TableColDate extends TableCol {
    type: 'date' | 'datetime'
    min?: string
    max?: string
    format?: string
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
    index?: number
  }
  export let config: AddInputConfig
  export { ADD_INPUT_IDS, id, TABLE_EVENT_ID, FIXED, STYLE } from './index'
}