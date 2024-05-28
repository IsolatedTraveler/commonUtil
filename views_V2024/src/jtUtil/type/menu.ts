export interface MenuItem {
  name: string
  icon: string
  id: string
  width: string
  menuid: string
  method: (id?: string) => void
}