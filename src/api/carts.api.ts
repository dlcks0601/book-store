import { httpClient } from './http';

interface IAddCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: IAddCartParams) => {
  const response = await httpClient.post('/carts', params);
  return response.data;
};
