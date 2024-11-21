import React from 'react';
import BookItem from './BookItem';
import { render, screen } from '@testing-library/react';
import { Book } from '../../models/book.model';
import { BookStoreThemeProvider } from '../../context/themeContext';
import { formatNumber } from '../../utils/format';

const dummyBook: Book = {
  id: 1,
  title: 'Dummy Test',
  img: 5,
  category_id: 1,
  summary: 'Dummy Summary',
  author: 'Dummy Author',
  price: 10000,
  likes: 1,
  form: 'paperback',
  isbn: 'Dummy isbn',
  detail: 'Dummy Detail',
  pages: 120,
  contents: 'Dummy Contents',
  pub_date: '2024-09-12,',
};

describe('BookItem 렌더링 테스트', () => {
  it('렌더링 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText(formatNumber(dummyBook.price) + '원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/300/300`
    );
  });
});
