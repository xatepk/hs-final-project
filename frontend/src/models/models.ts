export interface INews {
  date: string,
  _id: string,
  title: string,
  subtitle: string,
  description: string,
  image: string
}

export interface IApartments {
  _id: string,
  description: string,
  rooms: number,
  likes: string[],
  price: number,
  location: string,
  area: string,
  underground: string,
  imageUrls: string[]
}

export interface UsePaginationProps {
  contentPerPage: number,
  count: number,
}

export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  setPage: (page: number) => void;
  gaps: { before: number[]; paginationGroup: number[]; after: number[] };
}
export type UsePagination = (arg0: UsePaginationProps) => (UsePaginationReturn);
