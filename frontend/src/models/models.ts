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
  imageUrls: string[],
  city: string
}

export interface ICities {
  _id: string,
  city: string
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
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  gaps: { before: number[]; paginationGroup: number[]; after: number[] };
}
export type UsePagination = (arg0: UsePaginationProps) => (UsePaginationReturn);

export interface IAuth {
  password: string
  username: string
  email: string
}

export interface IAuthResponse {
  token: string,
  _id: string
}

export interface IFilter {
  city: string,
  bedroom: number,
  priceMin: string,
  priceMax: string
}

