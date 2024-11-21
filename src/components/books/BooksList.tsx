import styled from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';
import { ViewMode } from './BooksViewSwitcher';

interface IBooksListProps {
  books: Book[];
}

const BooksList: React.FC<IBooksListProps> = ({ books }) => {
  const [view, setView] = useState<ViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search]);

  return (
    <BooksListStyle view={view}>
      {books?.map((book) => (
        <BookItem key={book.id} book={book} view={view} />
      ))}
    </BooksListStyle>
  );
};

interface BooksListStyleProps {
  view: ViewMode;
}

const BooksListStyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === 'grid' ? 'repeat(4, 1fr);' : 'repeat(1, 1ft);'};
  gap: 24px;
`;

export default BooksList;
