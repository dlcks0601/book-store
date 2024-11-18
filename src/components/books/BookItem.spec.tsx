import { render, screen } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/themeContext';
import { Book } from '../../models/book.model';
import { formatNumber } from '../../utils/format';

const dummyBook: Book = {
  id: 1,
  price: 20000,
  pages: 100,
  category_id: 1,
  img: 1,
  title: '어린왕자들',
  author: '김어림',
  isbn: '0',
  form: '종이책',
  summary: '어리다..',
  contents: '목차입니다.',
  detail: '많이 어리다..',
  likes: 4,
  pubDate: '2019-01-01',
};

describe('BookItem', () => {
  it('렌더 여부', () => {
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();
    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();
    expect(
      screen.getByText(`${formatNumber(dummyBook.price)}원`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
