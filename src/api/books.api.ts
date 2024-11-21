import { httpClient } from './http';
import { Book, BookDetail } from '../models/book.model';
import { Pagination } from '../models/pagination.model';

interface IFetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface IFetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: IFetchBooksParams) => {
  try {
    const response = await httpClient.get<IFetchBooksResponse>('/books', {
      params: params,
    });

    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalBooks: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
  return response.data;
};

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  return response.data;
};

export const unLikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);
  return response.data;
};
