export enum SortOrder {
  asc,
  desc,
  unsorted,
}

export type SortType = keyof typeof SortOrder;
