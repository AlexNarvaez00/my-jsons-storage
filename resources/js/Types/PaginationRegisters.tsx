export interface NavigationRegisters<T>{
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: LinkPage[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface LinkPage {

  url?: string
  label: string
  active: boolean
}
