declare interface SortByProps {
  field: string,
  order: string
}

declare interface FetchDataProps {
  pageIndex: number,
  sortBy: Array<SortByProps>
}